// Data State
let state = {
    email: '',
    startWeight: 160,
    age: 45,
    goalWeight: 130,
    metabolism: 'moderate', // slow, moderate, fast_past
    weightHistory: [], // {date, weight}
    quizCompleted: false,
    currentScreen: 'screen-login',
    quizStep: 1
};

const bonusContent = {
    1: {
        title: "Victoria's Secret Waist Method",
        html: `
            <div class="bd-content">
                <p>The "Victoria's Secret Waist Method" is a little-known breathing and posture technique used by top models to engage the deepest abdominal muscles (the transverse abdominis), pulling the waistline inward.</p>
                <h3>The 2-Minute Daily Routine</h3>
                <div class="bd-box">
                    <ol style="padding-left: 15px; color: #fff;">
                        <li style="margin-bottom: 10px;"><strong>The Vacuum:</strong> Stand up straight. Exhale all the air from your lungs. Pull your belly button in towards your spine as hard as you can. Hold for 15 seconds. Repeat 3 times.</li>
                        <li style="margin-bottom: 10px;"><strong>The Corset Pull:</strong> While sitting, imagine a string pulling the top of your head up. Engage your core gently (about 30% effort) and maintain this posture for 1 minute while breathing normally.</li>
                    </ol>
                </div>
                <h3>Tips for Best Results</h3>
                <ul>
                    <li>Do this first thing in the morning on an empty stomach.</li>
                    <li>Consistency is key — do it daily for 45 days.</li>
                    <li>Avoid carbonated drinks to reduce bloating.</li>
                </ul>
            </div>
        `
    },
    2: {
        title: "Mediterranean Cocktail Formula",
        html: `
            <div class="bd-content">
                <p>This powerful combination of Mediterranean extracts improves circulation and strengthens vein walls, reducing the appearance of spider veins and firming the skin.</p>
                <h3>Ingredients</h3>
                <ul>
                    <li>1 cup pure pomegranate juice (no sugar added)</li>
                    <li>1/2 tsp horse chestnut extract (liquid)</li>
                    <li>Juice of half a lemon</li>
                    <li>1 pinch of cayenne pepper</li>
                </ul>
                <h3>Preparation</h3>
                <div class="bd-box">
                    <p>Mix all ingredients in a glass. Stir well. The cayenne pepper acts as an immediate vasodilator to boost absorption.</p>
                </div>
                <h3>Usage</h3>
                <p>Drink one small glass (about 4 oz) every morning after breakfast. You should start noticing firmer skin and reduced vein visibility within 3 to 4 weeks of consistent use.</p>
            </div>
        `
    },
    3: {
        title: "Korean Facial Spot Removal",
        html: `
            <div class="bd-content">
                <p>Korean women use a specific combination of natural acids and fats to break down hyperpigmentation and sun spots without harsh chemicals.</p>
                <h3>The Avocado & Rice Technique</h3>
                <div class="bd-box">
                    <ol style="padding-left: 15px; color: #fff;">
                        <li style="margin-bottom: 10px;">Mash 1/4 of a ripe avocado until smooth.</li>
                        <li style="margin-bottom: 10px;">Add 1 tsp of rice water (water left over from washing uncooked rice).</li>
                        <li style="margin-bottom: 10px;">Add 2 drops of fresh lemon juice.</li>
                        <li style="margin-bottom: 10px;">Mix into a paste.</li>
                    </ol>
                </div>
                <h3>Application</h3>
                <p>Apply directly to dark spots using a Q-tip. Leave on for exactly 60 seconds. The lactic acid from the rice water combined with avocado's vitamin E penetrates instantly. Wipe off gently with a damp, warm cloth. Do this 3 times a week at night.</p>
            </div>
        `
    },
    4: {
        title: "20 Metabolism Boosters",
        html: `
            <div class="bd-content">
                <p>Simple daily habits to increase your resting metabolic rate and burn more calories without exercising.</p>
                <h3>Top Boosters</h3>
                <ul>
                    <li><strong>The Ice Technique:</strong> Drink 16oz of ice-cold water immediately upon waking. Your body burns calories just heating it up.</li>
                    <li><strong>NEAT Movement:</strong> Tap your foot or fidget. It can burn up to 300 extra calories a day.</li>
                    <li><strong>Protein First:</strong> Eat your protein before your carbs at every meal to reduce the insulin spike by 30%.</li>
                    <li><strong>Cooler Room:</strong> Sleep in a room at 66°F (19°C) to activate brown fat.</li>
                </ul>
                <div class="bd-box">
                    <h3>Japanese Women's Daily Habits</h3>
                    <p>Stop eating when you are 80% full (Hara Hachi Bu). Drink matcha tea instead of coffee for sustained thermogenesis without the cortisol spike.</p>
                </div>
            </div>
        `
    },
    5: {
        title: "Apple Cider Vinegar Blood Sugar Guide",
        html: `
            <div class="bd-content">
                <p>Stabilizing your blood sugar is crucial for weight loss. ACV reduces glucose spikes by up to 34%.</p>
                <h3>The Base Recipe</h3>
                <div class="bd-box">
                    <p>1 Tbsp raw, unfiltered Apple Cider Vinegar (with the "mother") + 8 oz of water. Drink through a straw 15 minutes before your largest meal.</p>
                </div>
                <h3>Variations</h3>
                <ul>
                    <li><strong>The Skin Glow:</strong> Add 1 oz Aloe Vera juice.</li>
                    <li><strong>The Metabolism Kicker:</strong> Add a dash of cinnamon.</li>
                    <li><strong>The Digestion Soother:</strong> Add fresh grated ginger.</li>
                </ul>
                <p><em>Always dilute ACV and use a straw to protect your tooth enamel!</em></p>
            </div>
        `
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupEventListeners();
    
    // Check if returning user
    if (state.email) {
        if (state.quizCompleted) {
            if (state.currentScreen && state.currentScreen !== 'screen-login' && state.currentScreen !== 'screen-quiz') {
                navigateTo(state.currentScreen);
            } else {
                navigateTo('screen-home');
                updateDashboard();
            }
        } else {
            navigateTo('screen-quiz');
            // Restore quiz step
            document.querySelectorAll('.quiz-step').forEach(s => {
                s.classList.remove('active');
                s.classList.add('hidden');
            });
            const stepEl = document.getElementById('quiz-step-' + state.quizStep);
            if(stepEl) {
                stepEl.classList.remove('hidden');
                stepEl.classList.add('active');
                document.getElementById('quiz-progress-fill').style.width = (state.quizStep * 25) + '%';
            }
        }
    }
});

function loadState() {
    const saved = localStorage.getItem('gelatide_state_v2');
    if (saved) {
        try {
            state = JSON.parse(saved);
            if (!state.currentDay) state.currentDay = 1;
        } catch (e) {
            console.error('Error parsing state');
        }
    }
}

function saveState() {
    localStorage.setItem('gelatide_state_v2', JSON.stringify(state));
}

// Navigation
function navigateTo(screenId) {
    if(screenId !== 'screen-login' && screenId !== 'screen-quiz') {
        state.currentScreen = screenId;
        saveState();
    }
    document.querySelectorAll('.screen:not(#loading-overlay)').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('hidden');
        // Small delay to allow display:block to apply before animating opacity
        setTimeout(() => target.classList.add('active'), 50);
    }

    // Toggle Nav Bar
    const nav = document.getElementById('bottom-nav');
    if (target && target.classList.contains('with-nav')) {
        nav.classList.remove('hidden');
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        const navItem = document.querySelector('.nav-item[data-target="' + screenId + '"]');
        if (navItem) navItem.classList.add('active');
    } else {
        nav.classList.add('hidden');
    }

    // specific screen updates
    if (screenId === 'screen-home') updateDashboard();
    if (screenId === 'screen-protocol') updateProtocol();
    if (screenId === 'screen-progress') updateProgressScreen();
    if (screenId === 'screen-profile') updateProfileScreen();
}

function showLoading(messages, duration, callback) {
    const overlay = document.getElementById('loading-overlay');
    const textEl = document.getElementById('loading-text');
    
    overlay.classList.remove('hidden');
    
    let msgIndex = 0;
    textEl.innerText = messages[0];
    
    const intervalTime = duration / messages.length;
    
    const msgInterval = setInterval(() => {
        msgIndex++;
        if (msgIndex < messages.length) {
            textEl.innerText = messages[msgIndex];
        }
    }, intervalTime);

    setTimeout(() => {
        clearInterval(msgInterval);
        overlay.classList.add('hidden');
        if (callback) callback();
    }, duration);
}

// Event Listeners
function setupEventListeners() {
    // Login
    const btnLogin = document.getElementById('btn-login');
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        if (btnLogin.disabled) return;
        
        const email = document.getElementById('login-email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email || !emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        btnLogin.disabled = true;
        btnLogin.style.opacity = '0.7';
        
        state.email = email;
        showLoading([
            "Verifying access...",
            "Verifying purchase...",
            "Preparing your personalized protocol..."
        ], 3000, () => {
            btnLogin.disabled = false;
            btnLogin.style.opacity = '1';
            navigateTo('screen-quiz');
        });
    });

    // Quiz inputs
    const currentInput = document.getElementById('input-current-weight');
    currentInput.addEventListener('input', (e) => {
        document.getElementById('val-current-weight').innerText = e.target.value;
        state.startWeight = parseInt(e.target.value);
    });

    const ageInput = document.getElementById('input-age');
    ageInput.addEventListener('input', (e) => {
        document.getElementById('val-age').innerText = e.target.value;
        state.age = parseInt(e.target.value);
    });

    const goalInput = document.getElementById('input-goal-weight');
    goalInput.addEventListener('input', (e) => {
        document.getElementById('val-goal-weight').innerText = e.target.value;
        state.goalWeight = parseInt(e.target.value);
    });

    // Metabolism selection
    document.querySelectorAll('.radio-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            state.metabolism = card.dataset.value;
        });
    });

    // Quiz steps navigation
    document.querySelectorAll('.btn-next-step').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (btn.disabled) return;
            btn.disabled = true;
            
            const next = parseInt(e.target.dataset.next);
            state.quizStep = next;
            saveState();

            document.querySelectorAll('.quiz-step').forEach(s => {
                s.classList.remove('active');
                s.classList.add('hidden');
            });
            const nextStep = document.getElementById('quiz-step-' + next);
            nextStep.classList.remove('hidden');
            setTimeout(() => {
                nextStep.classList.add('active');
                btn.disabled = false;
            }, 50);
            
            document.getElementById('quiz-progress-fill').style.width = (next * 25) + '%';
        });
    });

    // Finish Quiz
    const btnFinish = document.querySelector('.btn-finish-quiz');
    btnFinish.addEventListener('click', (e) => {
        e.preventDefault();
        if (btnFinish.disabled) return;
        btnFinish.disabled = true;
        btnFinish.style.opacity = '0.7';
        
        state.weightHistory = []; // Reset history on new protocol
        state.quizCompleted = true;
        
        // Save initial weight to history
        const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        state.weightHistory.push({ date: today, weight: state.startWeight });
        
        saveState();

        document.getElementById('quiz-progress-fill').style.width = '100%';

        showLoading([
            "Calculating your personalized GLP-1 protocol...",
            "Adjusting concentrations for your body...",
            "Your protocol is ready"
        ], 4000, () => {
            btnFinish.disabled = false;
            btnFinish.style.opacity = '1';
            navigateTo('screen-home');
        });
    });

    // Next Day Button
    document.getElementById('btn-next-day').addEventListener('click', () => {
        state.currentDay = (state.currentDay || 1) + 1;
        saveState();
        updateProtocol();
        updateDashboard();
        
        // Show brief visual feedback
        const btn = document.getElementById('btn-next-day');
        const origText = btn.innerText;
        btn.innerText = "Day Complete! ✓";
        btn.style.backgroundColor = "#4caf50";
        setTimeout(() => {
            btn.innerText = origText;
            btn.style.backgroundColor = "";
            navigateTo('screen-home');
            document.querySelector('.scrollable').scrollTop = 0;
        }, 1500);
    });

    // Bottom Nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            navigateTo(item.dataset.target);
        });
    });
}

// Dashboard Update
function updateDashboard() {
    const name = state.email.split('@')[0];
    document.getElementById('user-first-name').innerText = name.charAt(0).toUpperCase() + name.slice(1);
    
    const currentW = state.weightHistory.length > 0 ? state.weightHistory[state.weightHistory.length-1].weight : state.startWeight;
    
    document.getElementById('dash-current').innerText = currentW + ' lbs';
    document.getElementById('dash-goal').innerText = state.goalWeight + ' lbs';
    
    const toLose = currentW - state.goalWeight;
    document.getElementById('dash-to-lose').innerText = toLose > 0 ? toLose : 0;
    document.getElementById('dash-day-tracker').innerText = state.currentDay || 1;
    
    const totalDiff = state.startWeight - state.goalWeight;
    const progress = totalDiff > 0 ? ((state.startWeight - currentW) / totalDiff) * 100 : 0;
    document.querySelector('.weight-progress-fill-mini').style.width = Math.max(0, Math.min(100, progress)) + '%';
}

// Protocol Update
function updateProtocol() {
    const w = state.startWeight;
    let multiplier = 1;
    if (w >= 161 && w <= 220) multiplier = 1.25;
    else if (w >= 221) multiplier = 1.5;

    document.getElementById('prot-weight').innerText = w + ' lbs';
    document.getElementById('prot-goal').innerText = state.goalWeight + ' lbs';
    
    let metaText = "Moderate";
    if (state.metabolism === 'slow') metaText = "Slow";
    if (state.metabolism === 'fast_past') metaText = "Used to be fast";
    document.getElementById('prot-metabolism').innerText = metaText;

    let timingNum = state.metabolism === 'slow' ? 45 : 30;
    
    const day = state.currentDay || 1;
    document.getElementById('prot-day-display').innerText = 'Day ' + day;

    let dailyGelatin = 1 * multiplier;
    let dailyGreenTea = Math.round(250 * multiplier);
    let dailyGingerol = 0.5 * multiplier;
    let dailyTurmeric = 0.25 * multiplier;
    
    const descGingerol = document.getElementById('desc-gingerol');
    const descTurmeric = document.getElementById('desc-turmeric');
    
    // Day variations
    if (day % 2 === 0) {
        dailyGingerol += 0.25;
        descGingerol.innerText = "Increased gingerol today to stimulate thermogenesis during your rest cycle.";
    } else {
        descGingerol.innerText = "Base dose of gingerol to maintain steady metabolic burn and soothe the digestive tract.";
    }

    if (day % 3 === 0) {
        dailyTurmeric += 0.25;
        descTurmeric.innerText = "Extra turmeric added today for a deep cellular inflammation flush.";
    } else {
        descTurmeric.innerText = "Standard turmeric dose to keep cortisol levels low and prevent inflammation buildup.";
    }

    if (day % 5 === 0) {
        dailyGreenTea += 50;
        timingNum += 5;
    }

    document.getElementById('prot-timing').innerText = timingNum + ' min before bed';
    document.getElementById('prot-timing-step').innerText = timingNum + ' min';

    document.getElementById('dose-gelatin').innerText = dailyGelatin + ' Tbsp';
    document.getElementById('dose-greentea').innerText = dailyGreenTea + 'mg';
    document.getElementById('dose-gingerol').innerText = dailyGingerol + ' tsp';
    document.getElementById('dose-turmeric').innerText = dailyTurmeric + ' tsp';

    // Personalization text
    let insightText = `Welcome to Day ${day}! `;
    if (state.age > 50) insightText += "At your age, cellular turnover is naturally slower, so we've calibrated this exact formula to maximize absorption. ";
    else insightText += "Your metabolic rate is optimized for this exact dosage. ";
    
    if (w > 200) insightText += "Because your starting weight is above 200 lbs, your body needs extra initial support to break down visceral fat effectively. ";
    
    if (state.metabolism === 'slow') insightText += "We added an extra 15 minutes to your timing to give your slowed receptors the exact window they need to absorb the gelatin matrix.";
    else if (state.metabolism === 'fast_past') insightText += "This formula specifically targets the metabolic changes that occur after 35, reactivating your previously fast metabolism.";
    else insightText += "This baseline timing matches your moderate metabolism perfectly for overnight fat burning.";
    
    document.getElementById('prot-insight').innerText = insightText;
    
    const descGelatin = document.getElementById('desc-gelatin');
    if (multiplier > 1) descGelatin.innerText = "With your increased dosage, it rapidly activates GLP-1 through glycine and alanine. Glycine increases GLP-1 by up to 182% and is crucial for your weight bracket.";
    else descGelatin.innerText = "Activates GLP-1 through glycine and alanine — your metabolic master keys. Glycine increases GLP-1 by up to 182%. Alanine raises GIP by 144%.";

    const descGreen = document.getElementById('desc-greentea');
    if (state.age > 40) descGreen.innerText = "Amplifies GLP-1 production. For women over 40, it acts as a precise GPS for your body — targeting stubborn belly fat and stabilizing insulin levels.";
    else descGreen.innerText = "Amplifies GLP-1 production and acts as a GPS for your body — targeting belly fat first. Stabilizes insulin and prevents fat storage.";
}

function togglePhases() {
    const content = document.getElementById('phases-content');
    const arrow = document.getElementById('phases-arrow');
    if (content.style.display === 'none') {
        content.style.display = 'flex';
        arrow.innerText = '▲';
    } else {
        content.style.display = 'none';
        arrow.innerText = '▼';
    }
}

// Bonuses
function openBonus(id) {
    const data = bonusContent[id];
    if(data) {
        document.getElementById('b-detail-title').innerText = data.title;
        document.getElementById('b-detail-content').innerHTML = data.html;
        navigateTo('screen-bonus-detail');
    }
}

function closeBonus() {
    navigateTo('screen-bonuses');
}

// Progress
function updateProgressScreen() {
    document.getElementById('pt-start-val').innerText = state.startWeight;
    document.getElementById('pt-goal-val').innerText = state.goalWeight;

    const currentW = state.weightHistory.length > 0 ? state.weightHistory[state.weightHistory.length-1].weight : state.startWeight;
    const totalDiff = state.startWeight - state.goalWeight;
    const lost = state.startWeight - currentW;
    
    let progressPct = totalDiff > 0 ? (lost / totalDiff) * 100 : 0;
    progressPct = Math.max(0, Math.min(100, progressPct));
    
    setTimeout(() => {
        document.getElementById('pt-main-bar').style.width = progressPct + '%';
    }, 100);

    // Motivation
    let msg = "You're just getting started — your GLP-1 is activating!";
    if (lost >= 5 && lost < 15) msg = "Amazing — your metabolism is waking up!";
    else if (lost >= 15 && lost < 30) msg = "You're transforming — keep going!";
    else if (lost >= 30) msg = "Incredible results — you're a Gelatide success story!";
    
    document.getElementById('motivation-msg').innerText = msg;

    // History List
    const list = document.getElementById('history-items');
    list.innerHTML = '';
    [...state.weightHistory].reverse().forEach(item => {
        list.innerHTML += '<div class="history-item"><span class="h-date">' + item.date + '</span> <span class="h-weight">' + item.weight + ' lbs</span></div>';
    });

    renderChart();
}

let chartInstance = null;
function renderChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    const labels = state.weightHistory.map(h => h.date);
    const data = state.weightHistory.map(h => h.weight);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Weight (lbs)',
                data: data,
                borderColor: '#E8A0B4',
                backgroundColor: 'rgba(232, 160, 180, 0.2)',
                borderWidth: 3,
                tension: 0.3,
                fill: true,
                pointBackgroundColor: '#1A1A1A',
                pointBorderColor: '#E8A0B4',
                pointBorderWidth: 2,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    grid: { color: '#2A2A2A' },
                    ticks: { color: '#A0A0A0' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#A0A0A0' }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function openLogModal() {
    document.getElementById('input-log-weight').value = '';
    document.getElementById('log-modal').classList.remove('hidden');
    setTimeout(() => document.getElementById('log-modal').classList.add('active'), 10);
}

function closeLogModal() {
    document.getElementById('log-modal').classList.remove('active');
    setTimeout(() => document.getElementById('log-modal').classList.add('hidden'), 300);
}

function saveLogWeight() {
    const val = parseInt(document.getElementById('input-log-weight').value);
    if (isNaN(val)) return;
    
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    // Check if today already exists
    const existingIndex = state.weightHistory.findIndex(h => h.date === today);
    if (existingIndex > -1) {
        state.weightHistory[existingIndex].weight = val;
    } else {
        state.weightHistory.push({ date: today, weight: val });
    }
    
    saveState();
    closeLogModal();
    updateProgressScreen();
}

// Profile
function updateProfileScreen() {
    document.getElementById('prof-email').innerText = state.email;
    document.getElementById('prof-start').innerText = state.startWeight + ' lbs';
    document.getElementById('prof-goal').innerText = state.goalWeight + ' lbs';
    document.getElementById('prof-age').innerText = state.age;
    
    let metaText = "Moderate";
    if (state.metabolism === 'slow') metaText = "Slow";
    if (state.metabolism === 'fast_past') metaText = "Used to be fast";
    document.getElementById('prof-meta').innerText = metaText;
}

function resetQuiz() {
    // Keep email, reset other things
    document.getElementById('quiz-step-1').classList.add('active');
    document.getElementById('quiz-step-1').classList.remove('hidden');
    
    for(let i=2; i<=4; i++) {
        document.getElementById('quiz-step-' + i).classList.remove('active');
        document.getElementById('quiz-step-' + i).classList.add('hidden');
    }
    document.getElementById('quiz-progress-fill').style.width = '25%';
    
    navigateTo('screen-quiz');
}
