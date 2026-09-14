/* HorseFil webapp — vanilla JS, localStorage only, no backend. */
(function () {
'use strict';

const KEY = 'horsefil_data';
const app = document.getElementById('app');

/* ---------------- state ---------------- */
const BLANK = {
  email:'', onboarding_completed:false, onboarding_answers:{},
  days_completed:[], weekly_checkins:[],
  orgasmic_massage_progress:[], flood_protocol_progress:[], accelerator_progress:[],
  hydration_log:{}, shopping_list_checked:[], notes:[]
};
let S = load();

function load(){
  try { return Object.assign({}, BLANK, JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch(e){ return Object.assign({}, BLANK); }
}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }

/* ---- progressão manual: o dia atual é o próximo não concluído ---- */
function currentDay(){ return Math.min(180, S.days_completed.length + 1); }
function isDone(d){ return S.days_completed.indexOf(d) !== -1; }
function allDone(){ return S.days_completed.length >= 180; }
function checkinDue(){
  const d = currentDay();
  if(d <= 7) return false;
  const wk = Math.floor((d - 1) / 7);
  return !S.weekly_checkins.some(c => c.week === wk);
}

/* ---------------- helpers ---------------- */
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function $(s, r){ return (r||document).querySelector(s); }
function $$(s, r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); }
function on(sel, fn, root){ $$(sel, root).forEach(e => e.addEventListener('click', fn)); }
function buzz(ms){ try { if(navigator.vibrate) navigator.vibrate(ms || 160); } catch(e){} }

/* Logo: trocar o arquivo em /app/logo.webp (png como fallback). */
const LOGO_SRC = '/app/logo.webp';
const FB    = "if(this.src.indexOf('.webp')>-1){this.src='/app/logo.png';return}this.onerror=null;this.outerHTML='<div class=\\'logo-ph\\'>LOGO</div>'";
const FB_SM = "if(this.src.indexOf('.webp')>-1){this.src='/app/logo.png';return}this.onerror=null;this.outerHTML='<div class=\\'logo-ph sm\\'>LOGO</div>'";
const LOGO    = '<img class="logo" src="' + LOGO_SRC + '" alt="HorseFil" onerror="' + FB + '">';
const LOGO_SM = '<img class="logo sm" src="' + LOGO_SRC + '" alt="HorseFil" onerror="' + FB_SM + '">';

let route = 'login', param = null, timers = [];
function clearTimers(){ timers.forEach(t => clearInterval(t)); timers = []; }
function go(r, p){ route = r; param = (p == null ? null : p); render(); }

function render(){
  clearTimers();
  (SCREENS[route] || SCREENS.dashboard)();
  const sc = $('.scroll'); if(sc) sc.scrollTop = 0;
}

const SCREENS = {};

/* ================= LOGIN ================= */
SCREENS.login = function(){
  app.innerHTML =
    '<div class="center-screen">' + LOGO +
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
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){ $('#err').style.display = 'block'; return; }
    S.email = v; save(); go('loading');
  }
  $('#goBtn').addEventListener('click', submit);
  input.addEventListener('keydown', e => { if(e.key === 'Enter'){ input.blur(); submit(); } });
  input.addEventListener('input', () => { $('#err').style.display = 'none'; });
};

SCREENS.loading = function(){
  const back = S.onboarding_completed;
  const msgs = back ? ['Welcome back...']
    : ['Verifying your purchase...','Loading your protocol...','Setting up your dashboard...','Almost ready...'];

  app.innerHTML =
    '<div class="center-screen">' + LOGO +
      '<div class="spinner" style="margin-top:26px"></div>' +
      '<p class="muted small" id="msg" style="margin-top:18px;min-height:22px">' + esc(msgs[0]) + '</p>' +
    '</div>';

  let i = 0;
  if(msgs.length > 1) timers.push(setInterval(() => {
    i = (i + 1) % msgs.length;
    const m = $('#msg'); if(m) m.textContent = msgs[i];
  }, 1500));
  setTimeout(() => { clearTimers(); go(S.onboarding_completed ? 'dashboard' : 'onboarding'); }, back ? 3000 : 6000);
};

/* ================= ONBOARDING ================= */
const QUESTIONS = [
  { k:'age',    q:'How old are you?', o:['Under 40','40-49','50-59','60-69','70+'] },
  { k:'years',  q:'How long have you been experiencing erectile difficulties?', o:['Less than 1 year','1-3 years','3-5 years','5-10 years','More than 10 years'] },
  { k:'health', q:'Do you have any of these health conditions?', multi:true, o:['High blood pressure','Diabetes','Heart condition','Prostate issues','None of the above'] },
  { k:'tried',  q:'Have you used any of these before?', multi:true, o:['Viagra / Cialis','Testosterone replacement (TRT)','Penile pump','Other supplements','None'] },
  { k:'rating', q:'On a scale of 1-5, how would you rate your current erectile function?', scale:true,
    o:['No erection at all','Partial, can\'t maintain','Works sometimes','Works but not like before','Works but I want improvement'] }
];
let qi = 0, answers = {};

SCREENS.onboarding = function(){
  const Q = QUESTIONS[qi], cur = answers[Q.k];
  let body;
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
    '<div class="full"><div class="page slide" style="max-width:520px;padding-top:24px">' +
      '<div style="display:flex;align-items:center;justify-content:space-between">' +
        '<span class="tiny dim">Question ' + (qi+1) + ' of 5</span>' +
        (qi > 0 ? '<button class="tiny dim" id="back" style="min-height:44px">← Back</button>' : '<span></span>') +
      '</div>' +
      '<div class="bar"><i style="width:' + ((qi+1)/5*100) + '%"></i></div>' +
      '<h1 style="margin-top:10px">' + esc(Q.q) + '</h1>' +
      (Q.multi ? '<p class="tiny dim" style="margin-top:-6px">Select all that apply</p>' : '') +
      body +
      '<button class="btn" id="next" style="margin-top:10px"' + (ready ? '' : ' disabled') + '>' +
        (qi === 4 ? 'Build my protocol' : 'Continue') + '</button>' +
    '</div></div>';

  on('.opt, .scale button', function(){
    const v = this.dataset.v;
    if(Q.scale) answers[Q.k] = parseInt(v,10);
    else if(Q.multi){
      const a = answers[Q.k] || [], ix = a.indexOf(v);
      if(ix === -1) a.push(v); else a.splice(ix,1);
      answers[Q.k] = a;
    } else answers[Q.k] = v;
    SCREENS.onboarding();
  });
  const b = $('#back'); if(b) b.addEventListener('click', () => { qi--; SCREENS.onboarding(); });
  $('#next').addEventListener('click', function(){
    if(this.disabled) return;
    if(qi < 4){ qi++; SCREENS.onboarding(); } else go('building');
  });
};

SCREENS.building = function(){
  app.innerHTML =
    '<div class="center-screen">' + LOGO +
      '<h2 style="margin-top:24px">Building your protocol...</h2>' +
      '<div style="width:100%;max-width:330px;margin-top:20px">' +
        '<div class="bar"><i id="pb" style="width:0%"></i></div>' +
        '<p class="muted small" id="pm" style="margin-top:12px">Analyzing your profile...</p>' +
      '</div>' +
      '<div id="done" style="width:100%;max-width:330px;margin-top:22px;display:none">' +
        '<button class="btn fade" id="start">Start Day 1</button></div>' +
    '</div>';

  const steps = ['Analyzing your profile...','Calibrating your 180-day protocol...','Personalizing daily instructions...','Your protocol is ready.'];
  let p = 0;
  const t = setInterval(() => {
    p++;
    const pb = $('#pb'); if(!pb){ clearInterval(t); return; }
    pb.style.width = p + '%';
    $('#pm').textContent = steps[Math.min(3, Math.floor(p/25))];
    if(p >= 100){ clearInterval(t); $('#done').style.display = 'block'; }
  }, 50);
  timers.push(t);

  $('#start').addEventListener('click', () => {
    S.onboarding_answers = answers;
    S.onboarding_completed = true;
    save(); go('dashboard');
  });
};

/* ================= CHROME ================= */
const NAV = [
  { k:'dashboard', l:'Dashboard' }, { k:'protocol', l:'My Protocol' },
  { k:'modules',   l:'Modules' },   { k:'tracker',  l:'Progress Tracker' },
  { k:'recipes',   l:'Recipes & Shopping' }, { k:'knowledge', l:'Knowledge Base' },
  { k:'faq',       l:'FAQ / Is This Normal?' }
];
const TABS = [
  { k:'dashboard', l:'Home',     p:'M3 11l9-8 9 8M5 10v10h14V10' },
  { k:'protocol',  l:'Protocol', p:'M9 3h6v4H9zM6 7h12v14H6zM9 12h6M9 16h4' },
  { k:'modules',   l:'Modules',  p:'M12 3l2.6 5.6 6.4.8-4.7 4.3 1.3 6.3L12 17l-5.6 3 1.3-6.3L3 9.4l6.4-.8z' },
  { k:'tracker',   l:'Progress', p:'M4 20V10M10 20V4M16 20v-7M22 20H2' }
];

function shell(title, inner, opts){
  opts = opts || {};
  app.innerHTML =
    '<div class="shell">' +
      '<aside class="side">' +
        '<div class="brand">' + LOGO_SM + '</div>' +
        NAV.map(n => '<button data-go="' + n.k + '"' + (route === n.k ? ' class="on"' : '') + '>' + n.l + '</button>').join('') +
      '</aside>' +
      '<div class="main">' +
        '<div class="topbar">' +
          (opts.back
            ? '<button class="iconbtn" data-back="' + opts.back + '">←</button>'
            : '<div style="display:flex;align-items:center;width:44px">' + LOGO_SM + '</div>') +
          '<span class="t">' + esc(title) + '</span>' +
          '<button class="iconbtn menu" data-drawer>☰</button>' +
        '</div>' +
        '<div class="scroll"><div class="page fade">' + inner + '</div></div>' +
        '<nav class="bnav">' + TABS.map(t =>
          '<button data-go="' + t.k + '"' + (route === t.k ? ' class="on"' : '') + '>' +
            '<svg viewBox="0 0 24 24"><path d="' + t.p + '"/></svg>' + t.l + '</button>').join('') + '</nav>' +
      '</div>' +
    '</div>';

  on('[data-go]', function(){ go(this.dataset.go); });
  on('[data-back]', function(){
    const b = this.dataset.back;
    if(b.indexOf(':') > -1){ const parts = b.split(':'); go(parts[0], parts[1]); }
    else go(b);
  });
  on('[data-drawer]', openDrawer);
}

function openDrawer(){
  const d = document.createElement('div');
  d.innerHTML =
    '<div class="scrim" data-close></div>' +
    '<div class="drawer">' +
      '<div style="padding:4px 8px 14px">' + LOGO_SM + '</div>' +
      NAV.map(n => '<button data-go="' + n.k + '">' + n.l + '</button>').join('') +
    '</div>';
  document.body.appendChild(d);
  on('[data-close]', () => d.remove(), d);
  on('[data-go]', function(){ d.remove(); go(this.dataset.go); }, d);
}

/* ================= DASHBOARD ================= */
SCREENS.dashboard = function(){
  if(!S.onboarding_completed){ go('login'); return; }
  const d = currentDay(), pct = Math.round(S.days_completed.length / 180 * 100);
  const wk = Math.ceil(d / 7), wkStart = (wk - 1) * 7 + 1;

  let dots = '';
  for(let i = 0; i < 7; i++){
    const n = wkStart + i;
    if(n > 180){ dots += '<div class="dot" style="opacity:.2"></div>'; continue; }
    const cls = isDone(n) ? 'dot done' : (n === d ? 'dot now' : 'dot');
    dots += '<div class="' + cls + '">' + (isDone(n) ? '✓' : n) + '</div>';
  }

  const art = ARTICLES[(wk - 1) % ARTICLES.length];
  const ph = phaseOf(d);

  shell('Dashboard',
    '<div class="card raise" style="border-color:rgba(34,197,94,.35)">' +
      '<p class="tiny dim">' + esc(ph.name.toUpperCase()) + ' — ' + esc(ph.tag) + '</p>' +
      '<h1 style="margin-top:4px;font-size:29px">Day ' + d + ' <span class="dim" style="font-size:17px;font-weight:600">of 180</span></h1>' +
      '<div class="bar" style="margin-top:14px"><i style="width:' + pct + '%"></i></div>' +
      '<p class="tiny dim" style="margin-top:7px">' + S.days_completed.length + '/180 completed — ' + pct + '%</p>' +
      (allDone()
        ? '<button class="btn" disabled style="margin-top:14px">✅ All 180 days complete</button>'
        : '<button class="btn" data-go="' + (checkinDue() ? 'checkin' : 'protocol') + '" style="margin-top:14px">Start Day ' + d + ' →</button>') +
    '</div>' +

    '<div class="card"><div class="week">' + dots + '</div>' +
      '<p class="tiny dim" style="margin-top:11px">Week ' + wk + ' of 26</p></div>' +

    '<div class="grid2">' +
      '<button class="quick" data-go="modules"><span class="ic">⭐</span><span class="lb">Modules</span></button>' +
      '<button class="quick" data-go="tracker"><span class="ic">📈</span><span class="lb">My Progress</span></button>' +
      '<button class="quick" data-go="recipes"><span class="ic">🧾</span><span class="lb">Recipes & Shopping</span></button>' +
      '<button class="quick" data-go="knowledge"><span class="ic">📖</span><span class="lb">Knowledge Base</span></button>' +
    '</div>' +

    '<h3 style="margin-top:4px">Training Modules</h3>' +
    '<div class="grid2">' + MODULES.slice(0,4).map(m =>
      '<button class="quick" data-mod="' + m.id + '"><span class="ic">' + m.icon + '</span>' +
      '<span class="lb">' + esc(m.title) + '</span></button>').join('') + '</div>' +

    '<h3 style="margin-top:4px">This Week\'s Read</h3>' +
    '<button class="card" style="text-align:left;width:100%" data-art="' + ((wk-1) % ARTICLES.length) + '">' +
      '<span class="badge new">New</span>' +
      '<h3 style="margin-top:8px">' + esc(art.t) + '</h3>' +
      '<p class="small muted" style="margin-top:6px">' + esc(art.lead) + '</p>' +
      '<p class="small" style="color:var(--green);margin-top:8px;font-weight:700">Read more →</p>' +
    '</button>'
  );
  on('[data-mod]', function(){ go('module', this.dataset.mod); });
  on('[data-art]', function(){ go('article', parseInt(this.dataset.art,10)); });
};

/* ================= DAILY PROTOCOL ================= */
SCREENS.protocol = function(){
  if(!S.onboarding_completed){ go('login'); return; }
  if(checkinDue()){ go('checkin'); return; }
  if(allDone()){ go('dashboard'); return; }

  const d = currentDay(), c = dayContent(d);

  shell('Day ' + d,
    '<p class="tiny dim">' + esc(c.phase.name.toUpperCase()) + ' — ' + esc(c.phase.tag) + ' · Week ' + c.week + '</p>' +
    '<h1>Day ' + d + '</h1>' +
    acc('What to do today',
      '<h3 style="color:var(--fg);margin-bottom:8px">' + esc(c.instruction.t) + '</h3><p>' + esc(c.instruction.d) + '</p>' +
      (c.instruction.timer ? timerBlock(c.instruction.timer, c.instruction.timerLabel) : ''), true) +
    acc('What to eat today', '<ul class="list">' + c.foods.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul>') +
    acc('What to avoid today', '<ul class="list no">' + c.avoid.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul>') +
    acc('Today\'s tip', '<p>' + esc(c.tip) + '</p>') +
    '<button class="btn" id="mark" style="margin-top:14px">Mark Day ' + d + ' as Complete ✓</button>'
  , { back:'dashboard' });

  bindAcc(); bindTimer();
  $('#mark').addEventListener('click', () => {
    if(!isDone(d)){ S.days_completed.push(d); save(); }
    buzz(); confetti();
    setTimeout(() => go('dashboard'), 850);
  });
};

function acc(title, body, open){
  return '<div class="acc' + (open ? ' open' : '') + '">' +
    '<button class="hd">' + esc(title) + '<span class="chev">▾</span></button>' +
    '<div class="bd"' + (open ? '' : ' style="display:none"') + '>' + body + '</div></div>';
}
function bindAcc(){
  on('.acc > .hd', function(){
    const a = this.parentNode;
    a.querySelector('.bd').style.display = a.classList.toggle('open') ? '' : 'none';
  });
}

/* ---- timers: baseados em timestamp, sobrevivem ao app em background ---- */
function fmt(s){ const m = Math.floor(s/60), r = s%60; return m + ':' + (r<10?'0':'') + r; }
function timerBlock(sec, label){
  return '<div class="timer" style="margin-top:14px" data-timer="' + sec + '">' +
    '<p class="tiny dim">' + esc(label || 'Timer') + '</p>' +
    '<p class="num" data-disp>' + fmt(sec) + '</p>' +
    '<button class="btn ghost" data-start style="max-width:210px">Start Timer</button></div>';
}
function bindTimer(){
  $$('[data-timer]').forEach(box => {
    const total = parseInt(box.dataset.timer,10);
    const disp = box.querySelector('[data-disp]'), btn = box.querySelector('[data-start]');
    let endAt = 0, remaining = total, t = null;

    function tick(){
      const left = Math.max(0, Math.round((endAt - Date.now())/1000));
      disp.textContent = fmt(left);
      if(left <= 0){ clearInterval(t); t = null; remaining = total; btn.textContent = 'Done ✓'; buzz(300); }
    }
    btn.addEventListener('click', () => {
      if(t){
        remaining = Math.max(0, Math.round((endAt - Date.now())/1000));
        clearInterval(t); t = null; btn.textContent = 'Resume'; return;
      }
      if(remaining <= 0) remaining = total;
      endAt = Date.now() + remaining * 1000;
      btn.textContent = 'Pause';
      tick(); t = setInterval(tick, 250); timers.push(t);
    });
  });
}
function confetti(){
  const c = document.createElement('div'); c.className = 'confetti';
  const cols = ['#22c55e','#facc15','#3b82f6','#f5f5f5'];
  let h = '';
  for(let i=0;i<55;i++) h += '<i style="left:' + Math.random()*100 + '%;top:-20px;background:' + cols[i%4] +
    ';animation-delay:' + (Math.random()*.4).toFixed(2) + 's"></i>';
  c.innerHTML = h; document.body.appendChild(c);
  setTimeout(() => c.remove(), 1900);
}

/* ================= WEEKLY CHECK-IN ================= */
let ci = {};
SCREENS.checkin = function(){
  const d = currentDay(), wk = Math.floor((d-1)/7);
  shell('Weekly Check-in',
    '<p class="tiny dim">Week ' + wk + ' · Day ' + d + '</p>' +
    '<h1>Weekly check-in</h1>' +
    '<p class="muted small">Four questions. This is what builds your progress chart.</p>' +
    q('morning','How are your morning erections this week?',['None','Weak','Moderate','Strong','Very strong']) +
    q('activity','How many times did you have sexual activity this week?',['0','1-2','3-4','5+']) +
    '<div class="card"><h3>Rate your overall confidence this week</h3><div class="scale" style="margin-top:12px">' +
      ['😞','😕','😐','🙂','😃'].map((e,i) =>
        '<button data-k="confidence" data-v="' + (i+1) + '"' + (ci.confidence === i+1 ? ' class="sel"' : '') + '>' + e + '</button>').join('') +
    '</div></div>' +
    '<div class="card"><h3>Any notes for yourself?</h3>' +
      '<textarea class="input" id="note" rows="3" style="margin-top:10px;min-height:84px;resize:vertical" placeholder="Optional">' + esc(ci.note || '') + '</textarea></div>' +
    '<button class="btn" id="send"' + (ci.morning && ci.activity && ci.confidence ? '' : ' disabled') + '>See my results</button>'
  , { back:'dashboard' });

  on('.opt, .scale button', function(){
    const k = this.dataset.k;
    ci[k] = (k === 'confidence') ? parseInt(this.dataset.v,10) : this.dataset.v;
    const n = $('#note'); if(n) ci.note = n.value;
    SCREENS.checkin();
  });
  $('#send').addEventListener('click', function(){
    if(this.disabled) return;
    const n = $('#note'); ci.note = n ? n.value : '';
    ci.week = wk; ci.day = d; ci.date = new Date().toISOString(); ci.score = score(ci);
    S.weekly_checkins.push(ci);
    if(ci.note) S.notes.push({ week:wk, text:ci.note });
    save();
    const sc = ci.score; ci = {};
    go('checkinResult', sc);
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
function avgAt(w){ return Math.min(88, 28 + w * 2.4); }

SCREENS.checkinResult = function(){
  const sc = param || 0, d = currentDay(), wk = Math.max(1, Math.floor((d-1)/7)), av = Math.round(avgAt(wk));
  const diff = sc - av;
  const verdict = diff >= 8 ? 'ahead of' : diff <= -8 ? 'behind' : 'right around';
  const msg = diff >= 8
    ? 'You are responding faster than most men at this stage. Whatever you are doing with sleep and consistency, keep it exactly as it is.'
    : diff <= -8
      ? 'You are behind the curve at this point, and the two things that explain it most often are alcohol and sleep. Look at those before anything else.'
      : 'You are tracking where you should be. Progress at this stage is gradual and mostly invisible day to day, which is exactly why this chart exists.';

  shell('Your Results',
    '<h1>Your results vs. average at Day ' + d + '</h1>' +
    '<div class="card"><div style="display:flex;gap:16px;align-items:flex-end;justify-content:center;height:150px;padding:10px 0">' +
      bar('You', sc, 'var(--green)') + bar('Average', av, '#4a4a4a') + '</div>' +
      '<p class="small muted" style="text-align:center;margin-top:10px">You are <b style="color:var(--fg)">' + verdict + '</b> the average for Week ' + wk + '.</p></div>' +
    '<div class="card raise"><p class="small">' + esc(msg) + '</p></div>' +
    '<button class="btn" data-go="protocol">Continue to Day ' + d + '</button>'
  , { back:'dashboard' });

  function bar(l, v, col){
    return '<div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:76px">' +
      '<b style="font-size:15px">' + v + '</b>' +
      '<div style="width:100%;height:' + Math.max(8,v) + 'px;background:' + col + ';border-radius:6px 6px 0 0"></div>' +
      '<span class="tiny dim">' + l + '</span></div>';
  }
};

/* ================= TRACKER ================= */
SCREENS.tracker = function(){
  const cks = S.weekly_checkins;
  const best = cks.reduce((a,c) => (!a || c.score > a.score) ? c : a, null);
  let chart = '<p class="small dim">Your first check-in unlocks this chart. It arrives after Day 7.</p>';

  if(cks.length){
    const W = 320, H = 150, pad = 10, maxW = 26;
    const x = w => pad + (w-1)/(maxW-1) * (W - pad*2);
    const y = s => H - pad - (s/100) * (H - pad*2);
    const you = cks.map(c => x(c.week) + ',' + y(c.score)).join(' ');
    const av = []; for(let w=1; w<=maxW; w++) av.push(x(w) + ',' + y(avgAt(w)));
    chart = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' +
      [0,25,50,75,100].map(p => '<line class="grid" x1="' + pad + '" x2="' + (W-pad) + '" y1="' + y(p) + '" y2="' + y(p) + '"/>').join('') +
      '<polyline class="avg" points="' + av.join(' ') + '"/>' +
      '<polyline class="you" points="' + you + '"/>' +
      cks.map(c => '<circle cx="' + x(c.week) + '" cy="' + y(c.score) + '" r="3.5" fill="#22c55e"/>').join('') +
      '</svg>' +
      '<div style="display:flex;gap:16px;margin-top:8px"><span class="tiny"><b style="color:var(--green)">—</b> You</span>' +
      '<span class="tiny dim">- - Volunteer average</span></div>';
  }

  shell('Progress',
    '<h1>Progress</h1>' +
    '<div class="card">' + chart + '</div>' +
    '<div class="grid2">' +
      stat('Days completed', S.days_completed.length + '/180') +
      stat('Accelerator', S.accelerator_progress.length + '/30') +
      stat('Flood Protocol', S.flood_protocol_progress.length + '/14') +
      stat('Check-ins', String(cks.length)) +
    '</div>' +
    '<h3 style="margin-top:4px">Check-in history</h3>' +
    (cks.length ? cks.slice().reverse().map(c =>
      acc('Week ' + c.week + ' — score ' + c.score,
        '<p><b style="color:var(--fg2)">Morning erections:</b> ' + esc(c.morning) + '</p>' +
        '<p><b style="color:var(--fg2)">Activity:</b> ' + esc(c.activity) + '</p>' +
        '<p><b style="color:var(--fg2)">Confidence:</b> ' + c.confidence + '/5</p>' +
        (c.note ? '<p><b style="color:var(--fg2)">Notes:</b> ' + esc(c.note) + '</p>' : ''))).join('')
      : '<p class="small dim">No check-ins yet.</p>')
  , { back:'dashboard' });
  bindAcc();

  function stat(l, v){
    return '<div class="card"><p class="tiny dim">' + l + '</p><p style="font-size:20px;font-weight:800;margin-top:3px">' + v + '</p></div>';
  }
};

/* ================= MODULES ================= */
SCREENS.modules = function(){
  shell('Modules',
    '<h1>Training Modules</h1>' +
    '<p class="muted small">All included with your programme.</p>' +
    '<div class="grid1">' + MODULES.map(m =>
      '<button class="card" style="text-align:left" data-mod="' + m.id + '">' +
        '<div style="display:flex;gap:12px;align-items:flex-start">' +
          '<span style="font-size:22px">' + m.icon + '</span>' +
          '<div style="flex:1"><h3>' + esc(m.title) + '</h3>' +
          '<p class="small muted" style="margin-top:4px">' + esc(m.sub) + '</p>' +
          (m.tracker ? '<p class="tiny" style="color:var(--green);margin-top:6px;font-weight:700">' +
            (S[m.tracker.key]||[]).length + '/' + m.tracker.days + ' days</p>' : '') +
        '</div></div></button>').join('') + '</div>'
  , { back:'dashboard' });
  on('[data-mod]', function(){ go('module', this.dataset.mod); });
};

SCREENS.module = function(){
  const m = MODULES.filter(x => x.id === param)[0] || MODULES[0];
  let head = '';
  if(m.intro) head = m.intro.map(p => '<p class="muted" style="font-size:15px">' + esc(p) + '</p>').join('');

  let blocks = '';
  if(m.id === 'massage') blocks = massageBlock(m);
  if(m.tracker && m.id !== 'massage') blocks += trackerBlock(m);
  if(m.id === 'flood')  blocks += floodDay(m);
  if(m.shopping)        blocks += shoppingBlock(m);

  const secs = (m.sections || []).map((s,i) =>
    acc(s.h, s.p.map(p => '<p>' + esc(p) + '</p>').join(''), i === 0 && !blocks && !head)).join('');
  const extras = (m.extras || []).map(s => acc(s.h, s.p.map(p => '<p>' + esc(p) + '</p>').join(''))).join('');

  shell(m.title,
    '<h1>' + esc(m.title) + '</h1>' +
    '<p class="muted small">' + esc(m.sub) + '</p>' +
    head + blocks + secs + extras
  , { back:'modules' });

  bindAcc(); bindTimer();

  on('[data-tick]', function(){
    const key = this.dataset.key, n = parseInt(this.dataset.tick,10);
    const arr = S[key] || (S[key] = []);
    const ix = arr.indexOf(n);
    if(ix === -1){ arr.push(n); buzz(); } else arr.splice(ix,1);
    save(); SCREENS.module();
  });
  on('[data-glass]', function(){
    const day = this.dataset.day, v = parseInt(this.dataset.glass,10);
    S.hydration_log[day] = (S.hydration_log[day] === v) ? v - 1 : v;
    save(); SCREENS.module();
  });
  on('[data-shop]', function(){
    const v = this.dataset.shop, ix = S.shopping_list_checked.indexOf(v);
    if(ix === -1) S.shopping_list_checked.push(v); else S.shopping_list_checked.splice(ix,1);
    save(); SCREENS.module();
  });
  on('[data-learn]', function(){ go('learn', parseInt(this.dataset.learn,10)); });
  on('[data-gps]',   function(){ startGPS(parseInt(this.dataset.gps,10)); });
  on('[data-zone]',  function(){
    const bd = this.nextElementSibling;
    bd.style.display = (bd.style.display === 'none') ? '' : 'none';
  });
};

function trackerBlock(m){
  const arr = S[m.tracker.key] || [], n = m.tracker.days;
  let cells = '';
  for(let i=1;i<=n;i++)
    cells += '<button class="dot' + (arr.indexOf(i) !== -1 ? ' done' : '') + '" data-tick="' + i + '" data-key="' + m.tracker.key + '">' +
      (arr.indexOf(i) !== -1 ? '✓' : i) + '</button>';
  let msg = '';
  if(m.tracker.milestones){
    const keys = Object.keys(m.tracker.milestones).map(Number).sort((a,b)=>a-b);
    const hit = keys.filter(k => arr.length >= k).pop();
    if(hit) msg = '<p class="small" style="color:var(--green);margin-top:12px;font-weight:600">' + esc(m.tracker.milestones[hit]) + '</p>';
  }
  return '<div class="card"><div style="display:flex;justify-content:space-between;align-items:baseline">' +
    '<h3>' + n + '-day tracker</h3><span class="tiny dim">' + arr.length + '/' + n + '</span></div>' +
    '<p class="tiny dim" style="margin-top:2px">' + esc(m.tracker.label) + '</p>' +
    '<div class="bar" style="margin:12px 0"><i style="width:' + Math.round(arr.length/n*100) + '%"></i></div>' +
    '<div class="week">' + cells + '</div>' + msg + '</div>';
}

function shoppingBlock(m){
  const groups = m.shopping.groups || [['Shopping list', m.shopping.items]];
  return '<div class="card"><div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px">' +
    '<h3>Shopping list</h3><span class="tiny" style="color:var(--green);font-weight:700;text-align:right">' + esc(m.shopping.note) + '</span></div>' +
    groups.map(g =>
      '<p class="tiny dim" style="margin-top:14px;letter-spacing:1.2px">' + esc(g[0].toUpperCase()) + '</p>' +
      '<div class="grid1" style="margin-top:8px;gap:7px">' + g[1].map(item => {
        const ok = S.shopping_list_checked.indexOf(item) !== -1;
        return '<button class="opt' + (ok ? ' sel' : '') + '" data-shop="' + esc(item) + '" style="min-height:46px;padding:10px 13px;font-weight:600;font-size:14px">' +
          (ok ? '☑︎ ' : '☐ ') + esc(item) + '</button>';
      }).join('') + '</div>').join('') + '</div>';
}

function floodDay(m){
  const done = S.flood_protocol_progress;
  const day = Math.min(14, done.length + 1);
  const info = m.days[day-1];
  const target = Math.round(info.water * 4);
  const glasses = S.hydration_log['flood' + day] || 0;
  let cups = '';
  for(let i=1;i<=target;i++)
    cups += '<button data-glass="' + i + '" data-day="flood' + day + '" style="width:28px;height:36px;border-radius:4px 4px 9px 9px;border:1.5px solid ' +
      (i <= glasses ? '#3b82f6' : 'var(--line)') + ';background:' + (i <= glasses ? 'rgba(59,130,246,.35)' : 'transparent') + '"></button>';

  return '<div class="card raise">' +
    '<p class="tiny dim">DAY ' + day + ' OF 14</p><h2 style="margin-top:3px">' + esc(info.name) + '</h2>' +
    '<p class="small muted" style="margin-top:8px">' + esc(info.note) + '</p>' +
    '<p class="tiny dim" style="margin-top:16px;letter-spacing:1.2px">HYDRATION — ' + info.water + 'L · ' + glasses + '/' + target + ' glasses</p>' +
    '<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:8px">' + cups + '</div>' +
    '<p class="tiny dim" style="margin-top:16px;letter-spacing:1.2px">TODAY\'S FOODS</p>' +
    '<ul class="list" style="margin-top:8px">' + info.foods.map(f =>
      '<li><span><b style="color:var(--fg)">' + esc(f[0]) + '</b><br><span class="tiny dim">' + esc(f[1]) + '</span></span></li>').join('') + '</ul>' +
    '<p class="tiny dim" style="margin-top:16px;letter-spacing:1.2px">TODAY\'S TECHNIQUE</p>' +
    '<h3 style="margin-top:6px">' + esc(info.tech.name) + '</h3>' +
    '<p class="small muted" style="margin-top:4px">' + esc(info.tech.d) + '</p>' +
    timerBlock(info.tech.t, info.tech.name) +
    '<p class="tiny dim" style="margin-top:16px;letter-spacing:1.2px">AVOID TODAY</p>' +
    '<ul class="list no" style="margin-top:8px">' + info.avoid.map(a => '<li>' + esc(a) + '</li>').join('') + '</ul>' +
    (done.length >= 14
      ? '<p class="small" style="color:var(--green);margin-top:16px;font-weight:700">Protocol complete. For maintenance, repeat every 3 months.</p>'
      : '<button class="btn" data-tick="' + day + '" data-key="flood_protocol_progress" style="margin-top:16px">' +
        (day === 14 ? 'Complete Flood Protocol ✅' : 'Mark Day ' + day + ' complete ✓') + '</button>') +
    '</div>';
}

function massageBlock(m){
  const learned = S.orgasmic_massage_progress;
  const pos = [[110,58],[74,132],[110,150],[110,120],[110,226]];
  const zmap =
    '<svg class="zmap" viewBox="0 0 220 260" role="img" aria-label="Zone map">' +
      '<rect width="220" height="260" rx="14" fill="#0f1218"/>' +
      '<ellipse cx="110" cy="130" rx="62" ry="106" fill="none" stroke="#242a33" stroke-width="1.5"/>' +
      '<ellipse cx="110" cy="140" rx="34" ry="78" fill="none" stroke="#2c333d" stroke-width="1.5"/>' +
      m.zones.map((z,i) =>
        '<circle cx="' + pos[i][0] + '" cy="' + pos[i][1] + '" r="15" fill="' + z.color + '" opacity=".22"/>' +
        '<circle cx="' + pos[i][0] + '" cy="' + pos[i][1] + '" r="15" fill="none" stroke="' + z.color + '" stroke-width="1.6"/>' +
        '<text x="' + pos[i][0] + '" y="' + (pos[i][1]+5) + '" text-anchor="middle" font-size="14" font-weight="800" fill="' + z.color + '">' + z.z + '</text>').join('') +
      '<text x="110" y="248" text-anchor="middle" font-size="9" letter-spacing="2" fill="#4a5260">ZONE MAP</text>' +
    '</svg>';

  function meter(v){
    let h = '<span class="meter" style="display:inline-flex;margin-left:6px;vertical-align:middle">';
    for(let i=1;i<=5;i++) h += '<i class="' + (i<=v ? 'on' : '') + '"></i>';
    return h + '</span>';
  }

  return '<div class="card"><h3>Learn Mode</h3>' +
    '<p class="small muted" style="margin-top:4px">Complete a session to unlock it in Live GPS Mode.</p>' +
    '<div class="grid1" style="margin-top:12px">' + m.learn.map(l => {
      const ok = learned.indexOf(l.s) !== -1;
      return '<div style="display:flex;gap:9px;align-items:stretch">' +
        '<button class="opt' + (ok ? ' sel' : '') + '" data-learn="' + l.s + '" style="flex:1;font-size:13.5px">' +
          '<b>Session ' + l.s + '</b> — ' + esc(l.name) + (ok ? ' ✓' : '') + '</button>' +
        '<button class="btn sec" data-gps="' + l.s + '" style="width:auto;padding:0 15px;min-height:52px;font-size:13px"' +
          (ok ? '' : ' disabled') + '>GPS</button></div>';
    }).join('') + '</div></div>' +

    '<div class="card"><h3>Zone Map</h3>' +
      '<p class="small muted" style="margin-top:4px">Tap a zone for the quick reference.</p>' +
      '<div style="margin:14px 0">' + zmap + '</div>' +
      '<div class="grid1">' + m.zones.map((z,i) =>
        '<div><button class="zrow" data-zone="' + i + '">' +
          '<span class="zb" style="background:' + z.color + '">' + z.z + '</span>' +
          '<span style="flex:1"><b style="font-size:14px">' + esc(z.n) + '</b></span>' +
          '<span class="tiny dim">▾</span></button>' +
        '<div style="display:none;padding:12px 13px;font-size:13.5px;color:var(--fg2)">' +
          '<p>' + esc(z.loc) + '</p>' +
          '<p style="margin-top:8px"><b style="color:var(--fg2)">Sensitivity:</b> ' + esc(z.sens) + '</p>' +
          '<p style="margin-top:6px"><b style="color:var(--fg2)">Touch:</b> ' + esc(z.touch) + '</p>' +
          '<div style="display:flex;gap:18px;margin-top:10px;flex-wrap:wrap">' +
            '<span class="tiny dim">Pressure ' + meter(z.pressure) + '</span>' +
            '<span class="tiny dim">Speed ' + meter(z.speed) + '</span></div>' +
          '<p style="margin-top:10px;color:var(--green)">' + esc(z.tip) + '</p>' +
        '</div></div>').join('') + '</div></div>';
}

SCREENS.learn = function(){
  const m = MODULES.filter(x => x.id === 'massage')[0];
  const l = m.learn.filter(x => x.s === param)[0];
  const done = S.orgasmic_massage_progress.indexOf(l.s) !== -1;

  shell('Session ' + l.s,
    '<p class="tiny dim">LEARN MODE · SESSION ' + l.s + ' OF 7</p>' +
    '<h1>' + esc(l.name) + '</h1>' +
    '<div style="display:flex;flex-direction:column;gap:13px">' +
      l.body.map(p => '<p style="color:var(--fg2);font-size:15px">' + esc(p) + '</p>').join('') + '</div>' +
    (done
      ? '<button class="btn sec" data-gps="' + l.s + '" style="margin-top:16px">Start Session ' + l.s + ' in Live GPS →</button>'
      : '<button class="btn" id="cs" style="margin-top:16px">Complete Session ' + l.s + ' ✓</button>')
  , { back:'module:massage' });

  const b = $('#cs');
  if(b) b.addEventListener('click', () => {
    if(S.orgasmic_massage_progress.indexOf(l.s) === -1){ S.orgasmic_massage_progress.push(l.s); save(); }
    buzz(); go('module','massage');
  });
  on('[data-gps]', function(){ startGPS(parseInt(this.dataset.gps,10)); });
};

/* ---- live GPS ---- */
function startGPS(n){
  const m = MODULES.filter(x => x.id === 'massage')[0];
  const ses = m.gps.filter(g => g.s === n)[0];
  let i = 0, running = false, endAt = 0, remaining = ses.steps[0][1], t = null;

  const d = document.createElement('div');
  d.className = 'gps';
  document.body.appendChild(d);

  function left(){ return running ? Math.max(0, Math.round((endAt - Date.now())/1000)) : remaining; }
  function draw(){
    d.innerHTML =
      '<button class="x" data-x>✕</button>' +
      '<p class="meta">Session ' + ses.s + ' · Step ' + (i+1) + ' of ' + ses.steps.length + '</p>' +
      '<div class="prog"><i style="width:' + ((i+1)/ses.steps.length*100) + '%"></i></div>' +
      '<p class="step">' + esc(ses.steps[i][0]) + '</p>' +
      '<p class="num" data-n>' + fmt(left()) + '</p>' +
      '<div class="row">' +
        (running ? '<button data-p>Pause</button>' : '<button class="go" data-p>▶ Start</button>') +
        '<button data-r>Repeat</button>' +
        (i > 0 ? '<button data-b>← Back</button>' : '') +
        (i < ses.steps.length-1 ? '<button data-s>Skip →</button>' : '<button data-x>Finish</button>') +
      '</div>';
    on('[data-p]', toggle, d); on('[data-r]', repeat, d);
    on('[data-b]', back, d);   on('[data-s]', next, d); on('[data-x]', stop, d);
  }
  function tick(){
    const l = left();
    const el = d.querySelector('[data-n]'); if(el) el.textContent = fmt(l);
    if(l <= 0){ buzz(250); next(); }
  }
  function toggle(){
    if(running){ remaining = left(); running = false; clearInterval(t); t = null; }
    else { endAt = Date.now() + remaining*1000; running = true; t = setInterval(tick, 250); timers.push(t); }
    draw();
  }
  function goTo(ix){
    clearInterval(t); t = null;
    i = ix; remaining = ses.steps[i][1];
    if(running){ endAt = Date.now() + remaining*1000; t = setInterval(tick, 250); timers.push(t); }
    draw();
  }
  function next(){ if(i < ses.steps.length-1) goTo(i+1); else { buzz(300); stop(); } }
  function back(){ if(i > 0) goTo(i-1); }
  function repeat(){ goTo(i); }
  function stop(){ clearInterval(t); t = null; d.remove(); }

  draw();
}

/* ================= RECIPES ================= */
SCREENS.recipes = function(){
  const ph = phaseOf(currentDay()).n;
  const list = SHOPPING[ph] || [];
  shell('Recipes & Shopping',
    '<h1>Recipes & Shopping</h1>' +
    '<div class="card"><div style="display:flex;justify-content:space-between;align-items:baseline">' +
      '<h3>This week\'s shopping list</h3><span class="tiny dim">Phase ' + ph + '</span></div>' +
      '<div class="grid1" style="margin-top:12px;gap:7px">' + list.map(item => {
        const ok = S.shopping_list_checked.indexOf(item) !== -1;
        return '<button class="opt' + (ok ? ' sel' : '') + '" data-shop="' + esc(item) + '" style="min-height:46px;padding:10px 13px;font-weight:600;font-size:14px">' +
          (ok ? '☑︎ ' : '☐ ') + esc(item) + '</button>';
      }).join('') + '</div></div>' +
    PHASES.map(p => acc('Phase ' + p.n + ' — ' + p.name + ' recipes',
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

/* ================= KNOWLEDGE ================= */
SCREENS.knowledge = function(){
  const wk = Math.ceil(currentDay()/7);
  shell('Knowledge Base',
    '<h1>Knowledge Base</h1><p class="muted small">One read per week of the protocol.</p>' +
    '<div class="grid1">' + ARTICLES.map((a,i) =>
      '<button class="card" style="text-align:left" data-art="' + i + '">' +
        '<div style="display:flex;justify-content:space-between;gap:10px;align-items:baseline">' +
          '<span class="tiny dim">Week ' + a.w + '</span>' +
          (a.w === wk ? '<span class="badge new">New</span>' : '') + '</div>' +
        '<h3 style="margin-top:6px">' + esc(a.t) + '</h3>' +
        '<p class="small muted" style="margin-top:5px">' + esc(a.lead) + '</p></button>').join('') + '</div>'
  , { back:'dashboard' });
  on('[data-art]', function(){ go('article', parseInt(this.dataset.art,10)); });
};

SCREENS.article = function(){
  const a = ARTICLES[param] || ARTICLES[0];
  shell('Article',
    '<p class="tiny dim">WEEK ' + a.w + ' · 3 MIN READ</p>' +
    '<h1>' + esc(a.t) + '</h1>' +
    '<p class="muted" style="font-size:16px">' + esc(a.lead) + '</p>' +
    '<div style="display:flex;flex-direction:column;gap:14px;margin-top:4px">' +
      a.body.map(p => '<p style="color:var(--fg2)">' + esc(p) + '</p>').join('') + '</div>'
  , { back:'knowledge' });
};

/* ================= FAQ ================= */
SCREENS.faq = function(){
  shell('FAQ',
    '<h1>Is this normal?</h1><p class="muted small">Organised by phase.</p>' +
    Object.keys(FAQ).map(group =>
      '<div style="margin-top:6px"><h3 style="margin-bottom:9px">' + esc(group) + '</h3>' +
        FAQ[group].map(qa => acc(qa[0], '<p>' + esc(qa[1]) + '</p>')).join('') + '</div>').join('')
  , { back:'dashboard' });
  bindAcc();
};

/* ================= start ================= */
go(S.email && S.onboarding_completed ? 'loading' : 'login');

})();
