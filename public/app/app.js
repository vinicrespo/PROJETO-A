/* HorseFil webapp — vanilla JS, localStorage only, no backend. */
(function () {
'use strict';

const KEY = 'horsefil_data';
const app = document.getElementById('app');

/* ---------------- state ---------------- */
const BLANK = {
  email:'', onboarding_completed:false, onboarding_answers:{},
  day_started_date:null, days_completed:[], weekly_checkins:[],
  unlocked_modules:[], orgasmic_massage_progress:[],
  flood_protocol_progress:[], accelerator_progress:[],
  hydration_log:{}, shopping_list_checked:[], notes:[]
};
let S = load();

function load(){
  try { return Object.assign({}, BLANK, JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch(e){ return Object.assign({}, BLANK); }
}
function save(){
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){}
}

/* ---------------- day maths ---------------- */
function today0(){ const d = new Date(); d.setHours(0,0,0,0); return d; }
function currentDay(){
  if(!S.day_started_date) return 1;
  const start = new Date(S.day_started_date); start.setHours(0,0,0,0);
  const diff = Math.floor((today0() - start) / 86400000);
  return Math.min(180, Math.max(1, diff + 1));
}
function isDone(d){ return S.days_completed.indexOf(d) !== -1; }
function isMissed(d){ return d < currentDay() && !isDone(d); }
function streak(){
  let n = 0, d = currentDay();
  if(!isDone(d)) d--;
  while(d >= 1 && isDone(d)){ n++; d--; }
  return n;
}
function checkinDue(){
  const d = currentDay();
  if(d < 7) return false;
  const wk = Math.floor(d / 7);
  return !S.weekly_checkins.some(c => c.week === wk);
}

/* ---------------- helpers ---------------- */
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function $(sel, root){ return (root||document).querySelector(sel); }
function $$(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
function on(sel, fn, root){ $$(sel, root).forEach(e => e.addEventListener('click', fn)); }
const LOGO = '<!-- INSERIR LOGO AQUI --><div class="logo">LOGO</div>';
const LOGO_SM = '<!-- INSERIR LOGO AQUI --><div class="logo sm">LOGO</div>';

let route = 'login', param = null, timers = [];
function clearTimers(){ timers.forEach(t => clearInterval(t)); timers = []; }
function go(r, p){ route = r; param = p == null ? null : p; window.scrollTo(0,0); render(); }
window.addEventListener('beforeunload', clearTimers);

/* ---------------- boot ---------------- */
function render(){
  clearTimers();
  const fn = SCREENS[route] || SCREENS.dashboard;
  app.innerHTML = '';
  fn();
}

/* ================= SCREENS ================= */
const SCREENS = {};

/* ---- 1. login ---- */
SCREENS.login = function(){
  app.innerHTML =
    '<div class="center-screen">' +
      LOGO +
      '<h1 style="margin-top:22px">Welcome to HorseFil</h1>' +
      '<p class="muted small" style="margin-top:8px;max-width:340px">Enter the email you used to purchase</p>' +
      '<div style="width:100%;max-width:340px;margin-top:22px;display:flex;flex-direction:column;gap:12px">' +
        '<input class="input" id="em" type="email" inputmode="email" autocomplete="email" placeholder="your@email.com" value="' + esc(S.email) + '">' +
        '<p id="err" class="tiny" style="color:var(--red);display:none;text-align:left">Enter a valid email address.</p>' +
        '<button class="btn" id="goBtn">Access My Protocol</button>' +
      '</div>' +
      '<p class="tiny dim" style="margin-top:20px;max-width:320px">Your data stays on this device. We don\'t store anything on our servers.</p>' +
    '</div>';

  const input = $('#em');
  function submit(){
    const v = input.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){ $('#err').style.display='block'; return; }
    S.email = v; save();
    go('loading');
  }
  $('#goBtn').addEventListener('click', submit);
  input.addEventListener('keydown', e => { if(e.key === 'Enter') submit(); });
  input.addEventListener('input', () => { $('#err').style.display='none'; });
};

/* ---- loading ---- */
SCREENS.loading = function(){
  const returning = S.onboarding_completed;
  const msgs = returning
    ? ['Welcome back...']
    : ['Verifying your purchase...','Loading your protocol...','Setting up your dashboard...','Almost ready...'];
  const total = returning ? 3000 : 6000;

  app.innerHTML =
    '<div class="center-screen">' + LOGO +
      '<div class="spinner" style="margin-top:26px"></div>' +
      '<p class="muted small" id="msg" style="margin-top:18px;min-height:22px">' + esc(msgs[0]) + '</p>' +
    '</div>';

  let i = 0;
  if(msgs.length > 1){
    timers.push(setInterval(() => {
      i = (i + 1) % msgs.length;
      const m = $('#msg'); if(m) m.textContent = msgs[i];
    }, 1500));
  }
  setTimeout(() => {
    clearTimers();
    go(S.onboarding_completed ? 'dashboard' : 'onboarding');
  }, total);
};

/* ---- 2. onboarding ---- */
const QUESTIONS = [
  { k:'age',   q:'How old are you?', multi:false,
    o:['Under 40','40-49','50-59','60-69','70+'] },
  { k:'years', q:'How long have you been experiencing erectile difficulties?', multi:false,
    o:['Less than 1 year','1-3 years','3-5 years','5-10 years','More than 10 years'] },
  { k:'health',q:'Do you have any of these health conditions?', multi:true,
    o:['High blood pressure','Diabetes','Heart condition','Prostate issues','None of the above'] },
  { k:'tried', q:'Have you used any of these before?', multi:true,
    o:['Viagra / Cialis','Testosterone replacement (TRT)','Penile pump','Other supplements','None'] },
  { k:'rating',q:'On a scale of 1-5, how would you rate your current erectile function?', scale:true,
    o:['No erection at all','Partial, can\'t maintain','Works sometimes','Works but not like before','Works but I want improvement'] }
];

let qi = 0, answers = {};

SCREENS.onboarding = function(){
  const Q = QUESTIONS[qi];
  const cur = answers[Q.k];

  let body = '';
  if(Q.scale){
    body = '<div class="scale">' + Q.o.map((_,i) =>
        '<button data-v="' + (i+1) + '"' + (cur === i+1 ? ' class="sel"' : '') + '>' + (i+1) + '</button>').join('') + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:6px;margin-top:14px">' +
        Q.o.map((t,i) => '<p class="tiny dim"><b style="color:var(--fg2)">' + (i+1) + '</b> — ' + esc(t) + '</p>').join('') + '</div>';
  } else {
    body = '<div class="grid1">' + Q.o.map(t => {
      const sel = Q.multi ? (cur||[]).indexOf(t) !== -1 : cur === t;
      return '<button class="opt' + (sel ? ' sel' : '') + '" data-v="' + esc(t) + '">' + esc(t) + '</button>';
    }).join('') + '</div>';
  }

  const ready = Q.multi ? (cur||[]).length > 0 : cur != null;

  app.innerHTML =
    '<div class="page slide" style="min-height:100vh;justify-content:flex-start;padding-top:26px;max-width:520px">' +
      '<div style="display:flex;align-items:center;justify-content:space-between">' +
        '<span class="tiny dim">Question ' + (qi+1) + ' of 5</span>' +
        (qi > 0 ? '<button class="tiny dim" id="back">← Back</button>' : '<span></span>') +
      '</div>' +
      '<div class="bar"><i style="width:' + ((qi+1)/5*100) + '%"></i></div>' +
      '<h1 style="margin-top:14px">' + esc(Q.q) + '</h1>' +
      (Q.multi ? '<p class="tiny dim" style="margin-top:-6px">Select all that apply</p>' : '') +
      '<div style="margin-top:8px">' + body + '</div>' +
      '<button class="btn" id="next" style="margin-top:14px"' + (ready ? '' : ' disabled') + '>' +
        (qi === 4 ? 'Build my protocol' : 'Continue') + '</button>' +
    '</div>';

  on('.opt, .scale button', function(){
    const v = this.dataset.v;
    if(Q.scale){ answers[Q.k] = parseInt(v,10); }
    else if(Q.multi){
      const arr = answers[Q.k] || [];
      const ix = arr.indexOf(v);
      if(ix === -1) arr.push(v); else arr.splice(ix,1);
      answers[Q.k] = arr;
    } else { answers[Q.k] = v; }
    SCREENS.onboarding();
  });
  const b = $('#back'); if(b) b.addEventListener('click', () => { qi--; SCREENS.onboarding(); });
  $('#next').addEventListener('click', () => {
    if($('#next').disabled) return;
    if(qi < 4){ qi++; SCREENS.onboarding(); }
    else { go('building'); }
  });
};

/* ---- building ---- */
SCREENS.building = function(){
  app.innerHTML =
    '<div class="center-screen">' + LOGO +
      '<h2 style="margin-top:24px">Building your protocol...</h2>' +
      '<div style="width:100%;max-width:330px;margin-top:20px">' +
        '<div class="bar"><i id="pb" style="width:0%"></i></div>' +
        '<p class="muted small" id="pm" style="margin-top:12px">Analyzing your profile...</p>' +
      '</div>' +
      '<div id="done" style="width:100%;max-width:330px;margin-top:22px;display:none">' +
        '<button class="btn fade" id="start">Start Day 1</button>' +
      '</div>' +
    '</div>';

  const steps = ['Analyzing your profile...','Calibrating your 180-day protocol...','Personalizing daily instructions...','Your protocol is ready.'];
  let p = 0;
  const t = setInterval(() => {
    p += 1;
    const pb = $('#pb'); if(!pb){ clearInterval(t); return; }
    pb.style.width = p + '%';
    $('#pm').textContent = steps[Math.min(3, Math.floor(p / 25))];
    if(p >= 100){
      clearInterval(t);
      $('#done').style.display = 'block';
    }
  }, 50);
  timers.push(t);

  $('#start').addEventListener('click', () => {
    S.onboarding_answers = answers;
    S.onboarding_completed = true;
    S.day_started_date = new Date().toISOString();
    save();
    go('dashboard');
  });
};

/* ---------------- chrome ---------------- */
const NAV = [
  { k:'dashboard', l:'Dashboard' }, { k:'protocol', l:'My Protocol' },
  { k:'bonus', l:'Bonus Modules' }, { k:'premium', l:'Premium Modules' },
  { k:'tracker', l:'Progress Tracker' }, { k:'recipes', l:'Recipes & Shopping' },
  { k:'knowledge', l:'Knowledge Base' }, { k:'faq', l:'FAQ / Is This Normal?' },
  { k:'settings', l:'Settings' }
];
const TABS = [
  { k:'dashboard', l:'Home',     p:'M3 11l9-8 9 8M5 10v10h14V10' },
  { k:'protocol',  l:'Protocol', p:'M9 3h6v4H9zM6 7h12v14H6zM9 12h6M9 16h4' },
  { k:'bonus',     l:'Modules',  p:'M12 3l2.6 5.6 6.4.8-4.7 4.3 1.3 6.3L12 17l-5.6 3 1.3-6.3L3 9.4l6.4-.8z' },
  { k:'settings',  l:'Profile',  p:'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0' }
];

function shell(title, inner, opts){
  opts = opts || {};
  const sideBtns = NAV.map(n =>
    '<button data-go="' + n.k + '"' + (route === n.k ? ' class="on"' : '') + '>' + n.l + '</button>').join('');

  app.innerHTML =
    '<div class="shell">' +
      '<aside class="side">' +
        '<div class="brand">' + LOGO_SM + '<b style="font-size:14px">HorseFil</b></div>' +
        sideBtns +
        '<div class="sep"></div>' +
        '<button data-logout>Log Out</button>' +
      '</aside>' +
      '<div class="main">' +
        '<div class="topbar">' +
          (opts.back
            ? '<button class="iconbtn" data-go="' + opts.back + '">←</button>'
            : '<div style="display:flex;align-items:center;gap:9px">' + LOGO_SM + '</div>') +
          '<span class="t">' + esc(title) + '</span>' +
          '<button class="iconbtn menu" data-drawer>☰</button>' +
        '</div>' +
        '<div class="page fade">' + inner + '</div>' +
      '</div>' +
    '</div>' +
    '<nav class="bnav">' + TABS.map(t =>
      '<button data-go="' + t.k + '"' + (route === t.k ? ' class="on"' : '') + '>' +
        '<svg viewBox="0 0 24 24"><path d="' + t.p + '"/></svg>' + t.l + '</button>').join('') + '</nav>';

  on('[data-go]', function(){ go(this.dataset.go); });
  on('[data-drawer]', openDrawer);
  on('[data-logout]', logout);
}

function openDrawer(){
  const d = document.createElement('div');
  d.innerHTML =
    '<div class="scrim" data-close></div>' +
    '<div class="drawer">' +
      '<div style="display:flex;align-items:center;gap:9px;padding:4px 8px 14px">' + LOGO_SM + '<b style="font-size:14px">HorseFil</b></div>' +
      NAV.map(n => '<button data-go="' + n.k + '">' + n.l + '</button>').join('') +
      '<div class="sep"></div>' +
      '<button data-logout style="color:var(--red)">Log Out</button>' +
    '</div>';
  document.body.appendChild(d);
  on('[data-close]', () => d.remove(), d);
  on('[data-go]', function(){ d.remove(); go(this.dataset.go); }, d);
  on('[data-logout]', () => { d.remove(); logout(); }, d);
}

function logout(){
  if(!confirm('Log out and clear this device? Your progress will be erased.')) return;
  try { localStorage.removeItem(KEY); } catch(e){}
  S = Object.assign({}, BLANK);
  qi = 0; answers = {};
  go('login');
}

/* ---- 3. dashboard ---- */
SCREENS.dashboard = function(){
  if(!S.onboarding_completed){ go('login'); return; }
  const d = currentDay(), done = isDone(d), pct = Math.round(S.days_completed.length / 180 * 100);
  const wk = Math.ceil(d / 7), wkStart = (wk - 1) * 7 + 1;

  const dots = [];
  for(let i = 0; i < 7; i++){
    const n = wkStart + i;
    if(n > 180){ dots.push('<div class="dot" style="opacity:.25"></div>'); continue; }
    let cls = 'dot';
    if(isDone(n)) cls += ' done';
    else if(n === d) cls += ' now';
    else if(isMissed(n)) cls += ' miss';
    dots.push('<div class="' + cls + '">' + (isDone(n) ? '✓' : n) + '</div>');
  }

  const art = ARTICLES[(wk - 1) % ARTICLES.length];
  const ph = phaseOf(d);

  const premCards = PREMIUM.map(m => {
    const open = S.unlocked_modules.indexOf(m.id) !== -1;
    return '<button class="quick' + (open ? '' : ' lock') + '" data-prem="' + m.id + '"' +
      (open ? ' style="border-color:rgba(34,197,94,.35);background:rgba(34,197,94,.06)"' : '') + '>' +
      '<span class="ic">' + (open ? m.icon : '🔒') + '</span>' +
      '<span class="lb">' + esc(m.title) + '</span>' +
      '<span class="tiny dim">' + (open ? 'Open module' : 'Unlock this module') + '</span></button>';
  }).join('');

  shell('Dashboard',
    '<div class="card raise" style="border-color:rgba(34,197,94,.35)">' +
      '<p class="tiny dim">' + esc(ph.name.toUpperCase()) + ' — ' + esc(ph.tag) + '</p>' +
      '<h1 style="margin-top:4px;font-size:30px">Day ' + d + ' <span class="dim" style="font-size:17px;font-weight:600">of 180</span></h1>' +
      '<div class="bar" style="margin-top:14px"><i style="width:' + pct + '%"></i></div>' +
      '<p class="tiny dim" style="margin-top:7px">' + S.days_completed.length + '/180 completed — ' + pct + '%</p>' +
      (done
        ? '<button class="btn" disabled style="margin-top:14px">✅ Completed</button>' +
          '<p class="tiny dim" style="margin-top:8px;text-align:center">Come back tomorrow for Day ' + Math.min(180, d+1) + '</p>'
        : '<button class="btn" data-go="' + (checkinDue() ? 'checkin' : 'protocol') + '" style="margin-top:14px">Start Today\'s Protocol →</button>') +
    '</div>' +

    '<div class="card">' +
      '<div class="week">' + dots.join('') + '</div>' +
      '<p class="tiny dim" style="margin-top:11px">Week ' + wk + ' of 26</p>' +
    '</div>' +

    '<div class="grid2">' +
      '<button class="quick" data-go="bonus"><span class="ic">⭐</span><span class="lb">Bonus Modules</span></button>' +
      '<button class="quick" data-go="tracker"><span class="ic">📈</span><span class="lb">My Progress</span></button>' +
      '<button class="quick" data-go="recipes"><span class="ic">🧾</span><span class="lb">Recipes & Shopping</span></button>' +
      '<button class="quick" data-go="knowledge"><span class="ic">📖</span><span class="lb">Knowledge Base</span></button>' +
    '</div>' +

    '<h3 style="margin-top:6px">Premium Modules</h3>' +
    '<div class="grid2">' + premCards + '</div>' +

    '<h3 style="margin-top:6px">This Week\'s Read</h3>' +
    '<button class="card" style="text-align:left;width:100%" data-art="' + (wk - 1) % ARTICLES.length + '">' +
      '<span class="badge new">New</span>' +
      '<h3 style="margin-top:8px">' + esc(art.t) + '</h3>' +
      '<p class="small muted" style="margin-top:6px">' + esc(art.lead) + '</p>' +
      '<p class="small" style="color:var(--green);margin-top:8px;font-weight:700">Read more →</p>' +
    '</button>'
  );

  on('[data-prem]', function(){ openPremium(this.dataset.prem); });
  on('[data-art]', function(){ go('article', parseInt(this.dataset.art,10)); });
};

/* ---- 4. protocol day ---- */
SCREENS.protocol = function(){
  if(!S.onboarding_completed){ go('login'); return; }
  if(checkinDue()){ go('checkin'); return; }

  const d = currentDay(), c = dayContent(d), done = isDone(d);

  shell('Day ' + d,
    '<p class="tiny dim">' + esc(c.phase.name.toUpperCase()) + ' — ' + esc(c.phase.tag) + ' · Week ' + c.week + '</p>' +
    '<h1>Day ' + d + '</h1>' +

    acc('What to do today',
      '<h3 style="color:var(--fg);margin-bottom:8px">' + esc(c.instruction.t) + '</h3><p>' + esc(c.instruction.d) + '</p>' +
      (c.instruction.timer ? timerBlock(c.instruction.timer, c.instruction.timerLabel) : ''), true) +

    acc('What to eat today',
      '<ul class="list">' + c.foods.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul>') +

    acc('What to avoid today',
      '<ul class="list no">' + c.avoid.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul>') +

    acc('Today\'s tip', '<p>' + esc(c.tip) + '</p>') +

    (done
      ? '<button class="btn" disabled style="margin-top:16px">✅ Day ' + d + ' complete</button>'
      : '<button class="btn" id="mark" style="margin-top:16px">Mark Day ' + d + ' as Complete ✓</button>')
  , { back:'dashboard' });

  bindAcc();
  bindTimer();
  const m = $('#mark');
  if(m) m.addEventListener('click', () => {
    if(!isDone(d)){ S.days_completed.push(d); save(); }
    confetti();
    setTimeout(() => go('dashboard'), 900);
  });
};

function acc(title, body, open){
  return '<div class="acc' + (open ? ' open' : '') + '">' +
    '<button class="hd">' + esc(title) + '<span class="chev">▾</span></button>' +
    '<div class="bd"' + (open ? '' : ' style="display:none"') + '>' + body + '</div></div>';
}
function bindAcc(){
  on('.acc > .hd', function(){
    const a = this.parentNode, b = a.querySelector('.bd');
    const open = a.classList.toggle('open');
    b.style.display = open ? '' : 'none';
  });
}
function timerBlock(sec, label){
  return '<div class="timer" style="margin-top:14px" data-timer="' + sec + '">' +
    '<p class="tiny dim">' + esc(label || 'Timer') + '</p>' +
    '<p class="num" data-disp>' + fmt(sec) + '</p>' +
    '<button class="btn ghost" data-start style="max-width:200px">Start Timer</button></div>';
}
function fmt(s){ const m = Math.floor(s/60), r = s%60; return m + ':' + (r<10?'0':'') + r; }
function bindTimer(){
  $$('[data-timer]').forEach(box => {
    const total = parseInt(box.dataset.timer,10);
    const disp = box.querySelector('[data-disp]'), btn = box.querySelector('[data-start]');
    let left = total, t = null;
    btn.addEventListener('click', () => {
      if(t){ clearInterval(t); t = null; btn.textContent = 'Resume'; return; }
      if(left <= 0){ left = total; disp.textContent = fmt(left); }
      btn.textContent = 'Pause';
      t = setInterval(() => {
        left--; disp.textContent = fmt(Math.max(0,left));
        if(left <= 0){ clearInterval(t); t = null; btn.textContent = 'Done ✓'; buzz(); }
      }, 1000);
      timers.push(t);
    });
  });
}
function buzz(){ try { if(navigator.vibrate) navigator.vibrate(180); } catch(e){} }
function confetti(){
  const c = document.createElement('div'); c.className = 'confetti';
  const cols = ['#22c55e','#facc15','#3b82f6','#f5f5f5'];
  let h = '';
  for(let i=0;i<60;i++){
    h += '<i style="left:' + Math.random()*100 + '%;top:-20px;background:' + cols[i%4] +
         ';animation-delay:' + (Math.random()*.4).toFixed(2) + 's"></i>';
  }
  c.innerHTML = h; document.body.appendChild(c);
  setTimeout(() => c.remove(), 2000);
}

/* ---- 5. weekly check-in ---- */
let ci = {};
SCREENS.checkin = function(){
  const d = currentDay(), wk = Math.floor(d / 7);

  shell('Weekly Check-in',
    '<p class="tiny dim">Week ' + wk + ' · Day ' + d + '</p>' +
    '<h1>Weekly check-in</h1>' +
    '<p class="muted small">Four questions. This is what builds your progress chart.</p>' +

    q('morning','How are your morning erections this week?',['None','Weak','Moderate','Strong','Very strong']) +
    q('activity','How many times did you have sexual activity this week?',['0','1-2','3-4','5+']) +
    '<div class="card"><h3>Rate your overall confidence this week</h3>' +
      '<div class="scale" style="margin-top:12px">' +
        ['😞','😕','😐','🙂','😃'].map((e,i) =>
          '<button data-k="confidence" data-v="' + (i+1) + '"' + (ci.confidence === i+1 ? ' class="sel"' : '') + '>' + e + '</button>').join('') +
      '</div></div>' +
    '<div class="card"><h3>Any notes for yourself?</h3>' +
      '<textarea class="input" id="note" rows="3" style="margin-top:10px;min-height:84px;resize:vertical" placeholder="Optional">' + esc(ci.note || '') + '</textarea></div>' +

    '<button class="btn" id="send"' + (ci.morning && ci.activity && ci.confidence ? '' : ' disabled') + '>See my results</button>'
  , { back:'dashboard' });

  on('.opt, .scale button', function(){
    const k = this.dataset.k;
    ci[k] = k === 'confidence' ? parseInt(this.dataset.v,10) : this.dataset.v;
    const n = $('#note'); if(n) ci.note = n.value;
    SCREENS.checkin();
  });
  $('#send').addEventListener('click', () => {
    if($('#send').disabled) return;
    const n = $('#note'); ci.note = n ? n.value : '';
    ci.week = wk; ci.day = d; ci.date = new Date().toISOString();
    ci.score = score(ci);
    S.weekly_checkins.push(ci);
    if(ci.note) S.notes.push({ week:wk, text:ci.note });
    save();
    go('checkinResult', ci.score);
  });

  function q(k, title, opts){
    return '<div class="card"><h3>' + esc(title) + '</h3><div class="grid1" style="margin-top:12px">' +
      opts.map(o => '<button class="opt' + (ci[k] === o ? ' sel' : '') + '" data-k="' + k + '" data-v="' + esc(o) + '">' + esc(o) + '</button>').join('') +
      '</div></div>';
  }
};
function score(c){
  const m = ['None','Weak','Moderate','Strong','Very strong'].indexOf(c.morning) + 1;
  const a = ['0','1-2','3-4','5+'].indexOf(c.activity) + 1;
  return Math.round(((m/5)*0.5 + (a/4)*0.2 + (c.confidence/5)*0.3) * 100);
}
function avgAt(week){ return Math.min(88, 28 + week * 2.4); }

SCREENS.checkinResult = function(){
  const sc = param || 0, d = currentDay(), wk = Math.floor(d/7), av = Math.round(avgAt(wk));
  const diff = sc - av;
  const verdict = diff >= 8 ? 'ahead of' : diff <= -8 ? 'behind' : 'right around';
  const msg = diff >= 8
    ? 'You are responding faster than most men at this stage. Whatever you are doing with sleep and consistency, keep it exactly as it is.'
    : diff <= -8
      ? 'You are behind the curve at this point, and the two things that explain it most often are alcohol and sleep. Look at those before anything else — the protocol itself is not the variable.'
      : 'You are tracking where you should be. Progress at this stage is gradual and mostly invisible day to day, which is exactly why this chart exists.';

  shell('Your Results',
    '<h1>Your results vs. average at Day ' + d + '</h1>' +
    '<div class="card">' +
      '<div style="display:flex;gap:16px;align-items:flex-end;justify-content:center;height:150px;padding:10px 0">' +
        bar('You', sc, 'var(--green)') + bar('Average', av, '#4a4a4a') +
      '</div>' +
      '<p class="small muted" style="text-align:center;margin-top:10px">You are <b style="color:var(--fg)">' + verdict + '</b> the average for Week ' + wk + '.</p>' +
    '</div>' +
    '<div class="card raise"><p class="small">' + esc(msg) + '</p></div>' +
    '<button class="btn" data-go="protocol">Continue to Day ' + d + '</button>'
  , { back:'dashboard' });

  function bar(label, v, col){
    return '<div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:76px">' +
      '<b style="font-size:15px">' + v + '</b>' +
      '<div style="width:100%;height:' + Math.max(8, v) + 'px;background:' + col + ';border-radius:6px 6px 0 0"></div>' +
      '<span class="tiny dim">' + label + '</span></div>';
  }
};

/* ---- 6. tracker ---- */
SCREENS.tracker = function(){
  const cks = S.weekly_checkins;
  const best = cks.reduce((a,c) => (!a || c.score > a.score) ? c : a, null);

  let chart = '<p class="small dim">Your first check-in unlocks this chart. It arrives at Day 7.</p>';
  if(cks.length){
    const W = 320, H = 150, pad = 10;
    const maxW = 26;
    const x = w => pad + (w - 1) / (maxW - 1) * (W - pad*2);
    const y = s => H - pad - (s/100) * (H - pad*2);
    const you = cks.map(c => x(c.week) + ',' + y(c.score)).join(' ');
    let av = [];
    for(let w=1; w<=maxW; w++) av.push(x(w) + ',' + y(avgAt(w)));
    chart =
      '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' +
        [0,25,50,75,100].map(p => '<line class="grid" x1="' + pad + '" x2="' + (W-pad) + '" y1="' + y(p) + '" y2="' + y(p) + '"/>').join('') +
        '<polyline class="avg" points="' + av.join(' ') + '"/>' +
        '<polyline class="you" points="' + you + '"/>' +
        cks.map(c => '<circle cx="' + x(c.week) + '" cy="' + y(c.score) + '" r="3.5" fill="var(--green)"/>').join('') +
      '</svg>' +
      '<div style="display:flex;gap:16px;margin-top:8px">' +
        '<span class="tiny"><b style="color:var(--green)">—</b> You</span>' +
        '<span class="tiny dim">- - Volunteer average</span></div>';
  }

  shell('Progress Tracker',
    '<h1>Progress</h1>' +
    '<div class="card">' + chart + '</div>' +
    '<div class="grid2">' +
      stat('Days completed', S.days_completed.length + '/180') +
      stat('Current streak', streak() + ' days') +
      stat('Best week', best ? 'Week ' + best.week : '—') +
      stat('Check-ins', String(S.weekly_checkins.length)) +
    '</div>' +
    '<h3 style="margin-top:6px">Check-in history</h3>' +
    (cks.length
      ? cks.slice().reverse().map(c =>
          acc('Week ' + c.week + ' — score ' + c.score,
            '<p><b style="color:var(--fg2)">Morning erections:</b> ' + esc(c.morning) + '</p>' +
            '<p><b style="color:var(--fg2)">Activity:</b> ' + esc(c.activity) + '</p>' +
            '<p><b style="color:var(--fg2)">Confidence:</b> ' + c.confidence + '/5</p>' +
            (c.note ? '<p><b style="color:var(--fg2)">Notes:</b> ' + esc(c.note) + '</p>' : ''))).join('')
      : '<p class="small dim">No check-ins yet.</p>')
  , { back:'dashboard' });
  bindAcc();

  function stat(l, v){
    return '<div class="card"><p class="tiny dim">' + l + '</p><p style="font-size:21px;font-weight:800;margin-top:3px">' + v + '</p></div>';
  }
};

/* ---- 7. bonus modules ---- */
SCREENS.bonus = function(){
  shell('Bonus Modules',
    '<h1>Bonus Modules</h1>' +
    '<p class="muted small">Included with your programme.</p>' +
    '<div class="grid1">' + BONUS.map((m,i) =>
      '<button class="card" style="text-align:left" data-m="' + i + '">' +
        '<div style="display:flex;gap:12px;align-items:flex-start">' +
          '<span style="font-size:22px">' + m.icon + '</span>' +
          '<div><h3>' + esc(m.title) + '</h3>' +
          '<p class="small muted" style="margin-top:4px">' + esc(m.sub) + '</p></div></div>' +
      '</button>').join('') + '</div>'
  , { back:'dashboard' });
  on('[data-m]', function(){ go('bonusDetail', parseInt(this.dataset.m,10)); });
};

SCREENS.bonusDetail = function(){
  const m = BONUS[param] || BONUS[0];
  shell(m.title,
    '<h1>' + esc(m.title) + '</h1>' +
    '<p class="muted small">' + esc(m.sub) + '</p>' +
    m.sections.map((s,i) => acc(s.h, s.p.map(p => '<p>' + esc(p) + '</p>').join(''), i === 0)).join('')
  , { back:'bonus' });
  bindAcc();
};

/* ---- 8. premium modules ---- */
SCREENS.premium = function(){
  shell('Premium Modules',
    '<h1>Premium Modules</h1>' +
    '<p class="muted small">Unlock with the code sent to your email.</p>' +
    '<div class="grid1">' + PREMIUM.map(m => {
      const open = S.unlocked_modules.indexOf(m.id) !== -1;
      return '<button class="card' + (open ? '' : ' lock') + '" style="text-align:left" data-prem="' + m.id + '">' +
        '<div style="display:flex;gap:12px;align-items:flex-start">' +
          '<span style="font-size:22px">' + (open ? m.icon : '🔒') + '</span>' +
          '<div style="flex:1"><h3>' + esc(m.title) + ' ' +
            (open ? '' : '<span class="badge locked">Locked</span>') + '</h3>' +
            '<p class="small muted" style="margin-top:4px">' + esc(m.sub) + '</p>' +
            (open ? '' : '<p class="small" style="color:var(--yellow);margin-top:6px;font-weight:700">🔒 Unlock this module</p>') +
          '</div></div></button>';
    }).join('') + '</div>'
  , { back:'dashboard' });
  on('[data-prem]', function(){ openPremium(this.dataset.prem); });
};

function openPremium(id){
  if(S.unlocked_modules.indexOf(id) !== -1){ go('premiumDetail', id); return; }
  unlockModal(id);
}

function unlockModal(id){
  const m = PREMIUM.filter(x => x.id === id)[0];
  const d = document.createElement('div');
  d.className = 'modal';
  d.innerHTML =
    '<div class="box">' +
      '<h2>' + esc(m.title) + '</h2>' +
      '<p class="small muted">Enter the unlock code from your email.</p>' +
      '<input class="input" id="code" placeholder="Unlock code" autocapitalize="characters" autocomplete="off">' +
      '<p class="tiny" id="cerr" style="color:var(--red);display:none">Invalid code. Check your email for the correct unlock code.</p>' +
      '<button class="btn" id="act">Activate</button>' +
      '<button class="btn ghost" data-close>Cancel</button>' +
    '</div>';
  document.body.appendChild(d);
  const input = d.querySelector('#code');
  input.focus();
  function submit(){
    const v = input.value.trim().toUpperCase();
    if(v && v === PREMIUM_CODES[id]){
      S.unlocked_modules.push(id); save();
      d.remove(); go('premiumDetail', id);
    } else {
      d.querySelector('#cerr').style.display = 'block';
    }
  }
  d.querySelector('#act').addEventListener('click', submit);
  input.addEventListener('keydown', e => { if(e.key === 'Enter') submit(); });
  on('[data-close]', () => d.remove(), d);
}

SCREENS.premiumDetail = function(){
  const m = PREMIUM.filter(x => x.id === param)[0] || PREMIUM[0];
  if(S.unlocked_modules.indexOf(m.id) === -1){ go('premium'); return; }

  let extra = '';
  if(m.id === 'accelerator') extra = trackerGrid(m, 'accelerator_progress', 30, 'Day');
  if(m.id === 'flood')       extra = floodBlock();
  if(m.id === 'massage')     extra = massageBlock();

  shell(m.title,
    '<h1>' + esc(m.title) + '</h1>' +
    '<p class="muted small">' + esc(m.sub) + '</p>' +
    extra +
    m.sections.map((s,i) => acc(s.h, s.p.map(p => '<p>' + esc(p) + '</p>').join(''), i === 0 && !extra)).join('')
  , { back:'premium' });

  bindAcc();
  on('[data-tick]', function(){
    const key = this.dataset.key, n = parseInt(this.dataset.tick,10);
    const arr = S[key] || (S[key] = []);
    const ix = arr.indexOf(n);
    if(ix === -1) arr.push(n); else arr.splice(ix,1);
    save(); SCREENS.premiumDetail();
  });
  on('[data-glass]', function(){
    const day = this.dataset.day, v = parseInt(this.dataset.glass,10);
    S.hydration_log[day] = (S.hydration_log[day] === v) ? v - 1 : v;
    save(); SCREENS.premiumDetail();
  });
  on('[data-gps]', function(){ startGPS(parseInt(this.dataset.gps,10)); });
  on('[data-learn]', function(){
    const n = parseInt(this.dataset.learn,10);
    const arr = S.orgasmic_massage_progress;
    if(arr.indexOf(n) === -1){ arr.push(n); save(); }
    SCREENS.premiumDetail();
  });

  function trackerGrid(mod, key, n, label){
    const arr = S[key] || [];
    let cells = '';
    for(let i=1;i<=n;i++){
      cells += '<button class="dot' + (arr.indexOf(i) !== -1 ? ' done' : '') + '" data-tick="' + i + '" data-key="' + key + '">' +
        (arr.indexOf(i) !== -1 ? '✓' : i) + '</button>';
    }
    return '<div class="card"><div style="display:flex;justify-content:space-between;align-items:baseline">' +
      '<h3>' + n + '-day tracker</h3><span class="tiny dim">' + arr.length + '/' + n + '</span></div>' +
      '<div class="week" style="grid-template-columns:repeat(7,1fr);margin-top:12px">' + cells + '</div></div>';
  }

  function floodBlock(){
    const doneArr = S.flood_protocol_progress;
    const day = Math.min(14, doneArr.length + 1);
    const info = m.days[day - 1];
    const glasses = S.hydration_log['flood' + day] || 0;
    const target = Math.round(info.water * 4);
    let cups = '';
    for(let i=1;i<=target;i++){
      cups += '<button data-glass="' + i + '" data-day="flood' + day + '" style="width:26px;height:34px;border-radius:4px 4px 8px 8px;border:1.5px solid ' +
        (i <= glasses ? 'var(--blue)' : 'var(--line)') + ';background:' + (i <= glasses ? 'rgba(59,130,246,.35)' : 'transparent') + '"></button>';
    }
    return trackerGrid(m, 'flood_protocol_progress', 14, 'Day') +
      '<div class="card raise"><p class="tiny dim">FLOOD PROTOCOL</p><h2 style="margin-top:3px">Day ' + day + ' of 14</h2>' +
        '<p class="tiny dim" style="margin-top:14px">HYDRATION — ' + info.water + 'L (' + target + ' glasses)</p>' +
        '<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:8px">' + cups + '</div>' +
        '<p class="tiny dim" style="margin-top:14px">EAT</p><ul class="list" style="margin-top:6px">' + info.foods.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul>' +
        '<p class="tiny dim" style="margin-top:14px">AVOID</p><ul class="list no" style="margin-top:6px">' + info.avoid.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul>' +
        '<p class="tiny dim" style="margin-top:14px">TECHNIQUE</p><p class="small muted" style="margin-top:4px">' + esc(info.tech) + '</p>' +
        timerBlock(120, 'Contract and expel — 2 min') +
      '</div>';
  }

  function massageBlock(){
    const learned = S.orgasmic_massage_progress;
    return '<div class="card"><h3>Learn mode</h3><p class="small muted" style="margin-top:4px">Complete a session here to unlock it in Live mode.</p>' +
      '<div class="grid1" style="margin-top:12px">' + m.gps.map(g => {
        const ok = learned.indexOf(g.s) !== -1;
        return '<div style="display:flex;gap:10px;align-items:center">' +
          '<button class="opt' + (ok ? ' sel' : '') + '" data-learn="' + g.s + '" style="flex:1">' +
            'Session ' + g.s + ' — ' + esc(g.name) + (ok ? ' ✓' : '') + '</button>' +
          '<button class="btn" data-gps="' + g.s + '" style="width:auto;padding:0 14px;min-height:44px"' + (ok ? '' : ' disabled') + '>Live</button>' +
        '</div>';
      }).join('') + '</div></div>' +
      '<div class="card"><h3>Zone map</h3>' + m.zones.map(z =>
        acc('Zone ' + z.z + ' — ' + z.n,
          '<p>' + esc(z.d) + '</p><p><b style="color:var(--fg2)">Touch:</b> ' + esc(z.touch) + '</p>' +
          '<p><b style="color:var(--fg2)">Pressure:</b> ' + esc(z.pressure) + '</p>' +
          '<p><b style="color:var(--fg2)">Rhythm:</b> ' + esc(z.rhythm) + '</p>')).join('') + '</div>';
  }
};

/* ---- live GPS ---- */
function startGPS(sessionNo){
  const mod = PREMIUM.filter(x => x.id === 'massage')[0];
  const ses = mod.gps.filter(g => g.s === sessionNo)[0];
  let i = 0, left = ses.steps[0][1], t = null, paused = false;

  const d = document.createElement('div');
  d.className = 'gps';
  document.body.appendChild(d);

  function draw(){
    d.innerHTML =
      '<p class="meta">Session ' + ses.s + " · Step " + (i+1) + ' of ' + ses.steps.length + '</p>' +
      '<p class="step">' + esc(ses.steps[i][0]) + '</p>' +
      '<p class="num">' + fmt(Math.max(0,left)) + '</p>' +
      '<div class="row">' +
        '<button data-p>' + (paused ? 'Resume' : 'Pause') + '</button>' +
        '<button data-r>Repeat this step</button>' +
        '<button data-n>Skip →</button>' +
        '<button data-x style="border-color:#5a2020;color:#e88">Exit</button>' +
      '</div>';
    on('[data-p]', () => { paused = !paused; draw(); }, d);
    on('[data-r]', () => { left = ses.steps[i][1]; paused = false; draw(); }, d);
    on('[data-n]', next, d);
    on('[data-x]', stop, d);
  }
  function next(){
    if(i < ses.steps.length - 1){ i++; left = ses.steps[i][1]; buzz(); draw(); }
    else { buzz(); stop(); }
  }
  function stop(){ clearInterval(t); d.remove(); }

  draw();
  t = setInterval(() => {
    if(paused) return;
    left--;
    if(left <= 0){ next(); return; }
    const n = d.querySelector('.num'); if(n) n.textContent = fmt(left);
  }, 1000);
  timers.push(t);
}

/* ---- 9. recipes & shopping ---- */
SCREENS.recipes = function(){
  const ph = phaseOf(currentDay()).n;
  const list = SHOPPING[ph] || [];

  shell('Recipes & Shopping',
    '<h1>Recipes & Shopping</h1>' +
    '<div class="card"><div style="display:flex;justify-content:space-between;align-items:baseline">' +
      '<h3>This week\'s shopping list</h3><span class="tiny dim">Phase ' + ph + '</span></div>' +
      '<div class="grid1" style="margin-top:12px;gap:8px">' + list.map(item => {
        const on_ = S.shopping_list_checked.indexOf(item) !== -1;
        return '<button class="opt' + (on_ ? ' sel' : '') + '" data-shop="' + esc(item) + '" style="min-height:44px;padding:10px 14px;font-weight:600">' +
          (on_ ? '☑︎ ' : '☐ ') + esc(item) + '</button>';
      }).join('') + '</div></div>' +

    PHASES.map(p =>
      acc('Phase ' + p.n + ' — ' + p.name + ' recipes',
        RECIPES.filter(r => r.phase === p.n).map(r =>
          '<div style="padding:12px 0;border-top:1px solid var(--line)">' +
            '<h3 style="color:var(--fg)">' + esc(r.name) + ' <span class="tiny dim">· ' + esc(r.time) + '</span></h3>' +
            '<p class="small" style="margin-top:6px;color:var(--fg3)"><i>' + esc(r.why) + '</i></p>' +
            '<ul class="list" style="margin-top:8px">' + r.ingredients.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
            '<ol style="margin-top:8px;padding-left:18px;font-size:13.5px;color:var(--fg2)">' + r.steps.map(x => '<li style="margin-top:4px">' + esc(x) + '</li>').join('') + '</ol>' +
          '</div>').join(''), p.n === ph)).join('')
  , { back:'dashboard' });

  bindAcc();
  on('[data-shop]', function(){
    const v = this.dataset.shop, ix = S.shopping_list_checked.indexOf(v);
    if(ix === -1) S.shopping_list_checked.push(v); else S.shopping_list_checked.splice(ix,1);
    save(); SCREENS.recipes();
  });
};

/* ---- 10. knowledge base ---- */
SCREENS.knowledge = function(){
  const wk = Math.ceil(currentDay() / 7);
  shell('Knowledge Base',
    '<h1>Knowledge Base</h1>' +
    '<p class="muted small">One read per week of the protocol.</p>' +
    '<div class="grid1">' + ARTICLES.map((a,i) => {
      const isNew = a.w === wk, locked = a.w > wk;
      return '<button class="card' + (locked ? ' lock' : '') + '" style="text-align:left" data-art="' + i + '"' + (locked ? ' disabled' : '') + '>' +
        '<div style="display:flex;justify-content:space-between;gap:10px;align-items:baseline">' +
          '<span class="tiny dim">Week ' + a.w + '</span>' +
          (isNew ? '<span class="badge new">New</span>' : locked ? '<span class="badge locked">Week ' + a.w + '</span>' : '') +
        '</div>' +
        '<h3 style="margin-top:6px">' + esc(a.t) + '</h3>' +
        '<p class="small muted" style="margin-top:5px">' + esc(a.lead) + '</p></button>';
    }).join('') + '</div>'
  , { back:'dashboard' });
  on('[data-art]', function(){ go('article', parseInt(this.dataset.art,10)); });
};

SCREENS.article = function(){
  const a = ARTICLES[param] || ARTICLES[0];
  shell('Article',
    '<p class="tiny dim">WEEK ' + a.w + ' · 3 MIN READ</p>' +
    '<h1>' + esc(a.t) + '</h1>' +
    '<p class="muted" style="font-size:16px">' + esc(a.lead) + '</p>' +
    '<div style="display:flex;flex-direction:column;gap:14px;margin-top:6px">' +
      a.body.map(p => '<p style="color:var(--fg2)">' + esc(p) + '</p>').join('') + '</div>'
  , { back:'knowledge' });
};

/* ---- 11. FAQ ---- */
SCREENS.faq = function(){
  const ph = phaseOf(currentDay()).n;
  shell('FAQ',
    '<h1>Is this normal?</h1>' +
    '<p class="muted small">Organised by phase. Your current phase is open.</p>' +
    Object.keys(FAQ).map((group, gi) =>
      '<div style="margin-top:8px"><h3 style="margin-bottom:10px">' + esc(group) + '</h3>' +
        FAQ[group].map(qa => acc(qa[0], '<p>' + esc(qa[1]) + '</p>')).join('') + '</div>').join('')
  , { back:'dashboard' });
  bindAcc();
};

/* ---- 12. settings ---- */
SCREENS.settings = function(){
  shell('Settings',
    '<h1>Settings</h1>' +
    '<div class="card"><h3>Email</h3>' +
      '<input class="input" id="em2" value="' + esc(S.email) + '" style="margin-top:10px">' +
      '<button class="btn ghost" id="saveEm" style="margin-top:10px">Save email</button></div>' +

    '<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px">' +
      '<div><h3>Daily reminders</h3><p class="tiny dim" style="margin-top:2px">Coming soon</p></div>' +
      '<button id="tog" class="iconbtn" style="width:50px;height:30px;border-radius:99px;background:var(--line);position:relative">' +
        '<span id="knob" style="position:absolute;left:3px;width:24px;height:24px;border-radius:50%;background:var(--fg3);transition:var(--t)"></span>' +
      '</button></div></div>' +

    '<div class="card"><h3>Your data</h3>' +
      '<p class="small muted" style="margin-top:6px">Everything is stored in this browser on this device. Nothing is sent anywhere. Clearing your browser data will erase your progress.</p>' +
      '<button class="btn danger" id="reset" style="margin-top:12px">Reset all data</button></div>' +

    '<div class="card"><h3>Support</h3>' +
      '<p class="small muted" style="margin-top:6px">' +
        '<!-- INSERIR EMAIL DE SUPORTE REAL AQUI -->' +
        '<a href="mailto:support@horsefil.com">support@horsefil.com</a></p>' +
      '<p class="tiny dim" style="margin-top:10px">HorseFil app · version 1.0.0</p></div>' +

    '<button class="btn ghost" data-logout>Log Out</button>'
  , { back:'dashboard' });

  $('#saveEm').addEventListener('click', () => {
    S.email = $('#em2').value.trim(); save();
    $('#saveEm').textContent = 'Saved ✓';
    setTimeout(() => { const b = $('#saveEm'); if(b) b.textContent = 'Save email'; }, 1400);
  });
  let tg = false;
  $('#tog').addEventListener('click', function(){
    tg = !tg;
    this.style.background = tg ? 'var(--green)' : 'var(--line)';
    const k = $('#knob');
    k.style.left = tg ? '23px' : '3px';
    k.style.background = tg ? '#052e13' : 'var(--fg3)';
  });
  $('#reset').addEventListener('click', () => {
    if(!confirm('Are you sure? This erases your progress, check-ins and unlocked modules on this device.')) return;
    try { localStorage.removeItem(KEY); } catch(e){}
    S = Object.assign({}, BLANK); qi = 0; answers = {};
    go('login');
  });
};

/* ---------------- start ---------------- */
if(S.email && S.onboarding_completed) go('loading');
else go('login');

})();
