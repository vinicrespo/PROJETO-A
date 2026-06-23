import re

with open("app/index.html", "r") as f:
    content = f.read()

# 1. Update JS logic for progressive caching
js_replacement = """
        // INIT
        window.onload = () => {
            const savedProfile = localStorage.getItem('slimtide_profile');
            const partialProfile = localStorage.getItem('slimtide_profile_partial');
            const qStep = localStorage.getItem('slimtide_q_step');
            
            if (savedProfile) {
                profile = JSON.parse(savedProfile);
                startDate = new Date(localStorage.getItem('slimtide_startDate'));
                calculateDayNumber();
                
                // Show splash then go direct to main
                setTimeout(() => {
                    initMainApp();
                    goToScreen('screen-main');
                }, 2000);
            } else if (partialProfile && qStep) {
                profile = JSON.parse(partialProfile);
                setTimeout(() => {
                    goToScreen('screen-profile');
                    document.querySelectorAll('.q-step').forEach(q => q.classList.remove('active'));
                    const nextEl = document.getElementById('q' + qStep);
                    if (nextEl) {
                        nextEl.classList.add('active');
                        document.getElementById('q-progress').style.width = (parseInt(qStep)/9)*100 + '%';
                    }
                }, 2000);
            } else {
                // Show splash then login
                setTimeout(() => {
                    goToScreen('screen-login');
                }, 2000);
            }
        };

        // NAVIGATION
        function goToScreen(id) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            
            if (id === 'screen-loading') {
                // Save email
                const emailInput = document.querySelector('#screen-login input[type="email"]');
                if(emailInput && emailInput.value) {
                    localStorage.setItem('slimtide_email', emailInput.value);
                }
                
                const msgs = ["Verifying your access...", "Loading your personalized protocol...", "Calibrating your metabolic profile...", "Almost there..."];
                let i = 0;
                const el = document.getElementById('loading-msg');
                const int = setInterval(() => {
                    i++;
                    if (i < msgs.length) el.innerText = msgs[i];
                    else {
                        clearInterval(int);
                        goToScreen('screen-welcome');
                    }
                }, 1000);
            }
        }

        function switchTab(tabId, el) {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            el.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.getElementById('tab-' + tabId).classList.add('active');
        }

        // QUESTIONNAIRE
        function nextQ(num) {
            // Save data
            if (num === 2) profile.name = document.getElementById('inp-name').value || 'Beautiful';
            if (num === 3) profile.age = document.getElementById('inp-age').value || 40;
            if (num === 4) profile.height = document.getElementById('inp-height').value || "5'5";
            if (num === 5) profile.weight = document.getElementById('inp-weight').value || 160;
            
            localStorage.setItem('slimtide_profile_partial', JSON.stringify(profile));
            localStorage.setItem('slimtide_q_step', num);
            
            document.querySelectorAll('.q-step').forEach(q => q.classList.remove('active'));
            const nextEl = document.getElementById('q' + num);
            if (nextEl) {
                nextEl.classList.add('active');
                document.getElementById('q-progress').style.width = (num/9)*100 + '%';
            } else {
                // Done
                profile.status = profile.status || "I'm in perimenopause";
                profile.energy = profile.energy || "Up and down";
                profile.cravings = profile.cravings || "Manageable but present";
                profile.goal = profile.goal || "Lose 20-40 lbs";
                profile.speed = profile.speed || "Steady and lasting";
                
                startDate = new Date();
                dayNumber = 1;
                localStorage.setItem('slimtide_profile', JSON.stringify(profile));
                localStorage.setItem('slimtide_startDate', startDate.toISOString());
                localStorage.removeItem('slimtide_profile_partial');
                localStorage.removeItem('slimtide_q_step');
                
                document.getElementById('complete-title').innerText = `Perfect, ${profile.name}! ✨`;
                goToScreen('screen-profile-complete');
            }
        }

        function selectOption(qNum, val) {
            if (qNum === 5) profile.status = val;
            if (qNum === 6) profile.energy = val;
            if (qNum === 7) profile.cravings = val;
            if (qNum === 8) profile.goal = val;
            if (qNum === 9) profile.speed = val;
            
            localStorage.setItem('slimtide_profile_partial', JSON.stringify(profile));
            
            const btns = document.getElementById('q'+qNum).querySelectorAll('.option-btn');
            btns.forEach(b => b.classList.remove('selected'));
            event.target.classList.add('selected');
            
            setTimeout(() => nextQ(qNum + 1), 300);
        }
"""

# Find the block from "// INIT" to "function finishSetup()"
content = re.sub(
    r"// INIT.*?function finishSetup\(\) {",
    js_replacement + "\n        function finishSetup() {",
    content,
    flags=re.DOTALL
)

# 2. Add Massive HTML Modals Content
massive_modals_html = """
        <!-- MASSIVE MODALS -->
        <div id="modal-core" class="modal-overlay">
            <div class="modal-content" style="max-width: 100%; height: 100vh; max-height: 100vh; border-radius: 0; padding: 0;">
                <div style="background-color: var(--bg-color); height: 100%; display: flex; flex-direction: column;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0;">Core Protocol</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-core')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto; padding-bottom: 50px;">
                        <div class="card">
                            <h3 style="color: var(--primary-teal);">The 47-Minute Window</h3>
                            <p>During the Activation Phase (Days 1-30), your metabolic window is exactly 47 minutes. This precise timing ensures your GLP-1 hormones are naturally stimulated without triggering insulin resistance.</p>
                            <p><strong>Why 47 minutes?</strong> Clinical studies show that the L-cells in the gut require between 45 and 50 minutes of uninterrupted digestive signaling to release maximum incretin hormones. Eating outside this window interrupts the signal.</p>
                            <h4 style="margin-top: 15px;">Your Daily Checklist:</h4>
                            <ul style="margin-left: 20px; color: var(--text-muted); line-height: 1.6; margin-bottom: 15px;">
                                <li>Wake up and immediately drink 12oz of water.</li>
                                <li>Wait exactly 15 minutes before taking the Metabolic Trigger.</li>
                                <li>Do not consume caffeine until the window closes.</li>
                                <li>Log your check-in in the Insights tab.</li>
                            </ul>
                        </div>
                        <div class="card pink">
                            <h3>Historical Coaching Archive</h3>
                            <p>Review the messages from past days to stay grounded in the process.</p>
                            <div id="coaching-archive-list" style="margin-top: 15px;">
                                <!-- Will be filled by JS or user can just see static message -->
                                <p style="font-size: 13px; font-style: italic;">As you progress, your past messages from Dr. Ania will appear here.</p>
                            </div>
                        </div>
                        <div class="card">
                            <h3 style="color: var(--secondary-coral);">Critical Mistakes Library</h3>
                            <p>Review all mistakes to ensure you are not sabotaging your results.</p>
                            <div style="max-height: 200px; overflow-y: auto; border: 1px solid #eee; padding: 10px; border-radius: 8px; font-size: 13px;">
                                <ol style="margin-left: 15px; padding-right: 10px;">
                                    <li>Drinking coffee before 9:30 AM blocks GLP-1 absorption</li>
                                    <li>Yogurt with hidden sugar spikes insulin and shuts off fat burning</li>
                                    <li>Skipping the 47-min metabolic window resets your body to storage mode</li>
                                    <li>Eating fruit on an empty stomach raises blood sugar before your window opens</li>
                                    <li>Standing for less than 5 min after breakfast slows gastric emptying</li>
                                    <li>Cold water before noon constricts gut blood flow</li>
                                    <li>Late-night screens delay melatonin and disrupt morning GLP-1</li>
                                    <li>Artificial sweeteners feed the bad bacteria you're trying to eliminate</li>
                                    <li>Eating dinner after 8pm extends storage mode by 4 hours</li>
                                    <li>Skipping protein at breakfast collapses afternoon satiety</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-accel" class="modal-overlay">
            <div class="modal-content" style="max-width: 100%; height: 100vh; max-height: 100vh; border-radius: 0; padding: 0;">
                <div style="background-color: var(--bg-color); height: 100%; display: flex; flex-direction: column;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; color: var(--secondary-coral);">7X Accelerator</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-accel')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto; padding-bottom: 50px;">
                        <h3 style="margin-bottom: 15px; font-size: 22px;">The 2-Minute Bacteria Flip</h3>
                        <p>98.9% of women over 38 have a gut dominated by Firmicutes bacteria — a bad strain that extracts up to 200 EXTRA calories from everything you eat and stores it directly as visceral fat. This 7-day protocol flips your microbiome back to Bacteroidetes (the lean bacteria).</p>
                        
                        <div class="card" style="border: 2px solid var(--secondary-coral);">
                            <h3 style="color: var(--secondary-coral); text-align: center;">🔥 THE RECIPE 🔥</h3>
                            <ul style="list-style: none; margin: 15px 0; font-weight: bold; padding: 0; text-align: center;">
                                <li>1 tbsp Apple Cider Vinegar (Raw/Unfiltered)</li>
                                <li>1 tsp Raw Honey</li>
                                <li>1/4 tsp Ginger Powder</li>
                                <li>1 cup Warm Water</li>
                            </ul>
                            <p style="text-align: center; font-size: 13px; color: var(--text-muted);">Mix well. Consume precisely 12 minutes before your largest meal of the day.</p>
                        </div>

                        <div class="card">
                            <h3>The 7-Day Protocol Tracker</h3>
                            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <input type="checkbox" style="width: 20px; height: 20px;">
                                    <div><strong>Day 1: The Flip Begins</strong><br><span style="font-size: 12px; color: var(--text-muted);">Mild gas is normal as bad bacteria dies off.</span></div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <input type="checkbox" style="width: 20px; height: 20px;">
                                    <div><strong>Day 2: Bacterial Die-Off</strong><br><span style="font-size: 12px; color: var(--text-muted);">You may feel slightly tired. This is detox.</span></div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <input type="checkbox" style="width: 20px; height: 20px;">
                                    <div><strong>Day 3: Good Bacteria Settling</strong><br><span style="font-size: 12px; color: var(--text-muted);">Digestion starts feeling significantly lighter.</span></div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <input type="checkbox" style="width: 20px; height: 20px;">
                                    <div><strong>Day 4: Halfway</strong><br><span style="font-size: 12px; color: var(--text-muted);">Monitor your morning puffiness.</span></div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <input type="checkbox" style="width: 20px; height: 20px;">
                                    <div><strong>Day 5: Acceleration Phase</strong><br><span style="font-size: 12px; color: var(--text-muted);">Deep visceral fat burning commences.</span></div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <input type="checkbox" style="width: 20px; height: 20px;">
                                    <div><strong>Day 6: Lock-In Begins</strong><br><span style="font-size: 12px; color: var(--text-muted);">Maintain the exact recipe measurements.</span></div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <input type="checkbox" style="width: 20px; height: 20px;">
                                    <div><strong>Day 7: Completion</strong><br><span style="font-size: 12px; color: var(--text-muted);">Your microbiome is now officially lean-dominant.</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="card pink">
                            <h3>Goodbye Cellulite in 21 Days</h3>
                            <p>Cellulite is not fat — it's trapped lymphatic fluid caused by structural breakdown. To fix it, you need to stimulate the fascial layer while your body is in the metabolic window.</p>
                            <p><strong>Action Step:</strong> Dry brush your thighs in upward strokes for exactly 3 minutes before your morning shower. Do this for 21 days straight.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-hormone" class="modal-overlay">
            <div class="modal-content" style="max-width: 100%; height: 100vh; max-height: 100vh; border-radius: 0; padding: 0;">
                <div style="background-color: var(--bg-color); height: 100%; display: flex; flex-direction: column;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; color: #8C4A76;">Hormonal Shot</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-hormone')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto; padding-bottom: 50px;">
                        <p>This calculator determines the exact ratios of metabolic spices your body needs based on your current mass and age-related estrogen levels.</p>
                        <button class="btn" style="background-color: #8C4A76; margin-top: 10px;" onclick="generateHormoneShot()">Generate My Recipe</button>
                        
                        <div id="hormone-result" style="display: none; margin-top: 20px; background-color: #FDF4F9; padding: 20px; border-radius: 12px; border: 1px solid #8C4A76;">
                            <h3 style="color: #8C4A76; text-align: center; margin-bottom: 15px;">Your Custom Recipe</h3>
                            <ul id="hormone-list" style="margin-left: 20px; font-size: 16px; font-weight: 600; color: var(--text-main); line-height: 1.8;"></ul>
                        </div>

                        <div class="card" style="margin-top: 20px;">
                            <h3>🌹 Desire Tonic</h3>
                            <p>A natural libido and estrogen booster.</p>
                            <p><strong>Recipe:</strong> 1 tsp maca powder, 1 tsp raw cacao, 1/4 tsp cinnamon, 1 cup warm almond milk, 1/2 tsp honey.</p>
                            <p><strong>Protocol:</strong> Consume 15 minutes before intimacy or daily for 21 days for cumulative estrogen balance.</p>
                        </div>

                        <div class="card">
                            <h3>☕ Bariatric Coffee</h3>
                            <p>Forces your body to burn fat while you sleep.</p>
                            <p><strong>Recipe:</strong> 1 cup decaf coffee, 1 tsp MCT oil, 1/4 tsp cinnamon, 1 tsp grass-fed collagen powder.</p>
                            <p><strong>Protocol:</strong> Consume 90 minutes before bed for 14 consecutive nights.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-skin" class="modal-overlay">
            <div class="modal-content" style="max-width: 100%; height: 100vh; max-height: 100vh; border-radius: 0; padding: 0;">
                <div style="background-color: var(--bg-color); height: 100%; display: flex; flex-direction: column;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; color: #D4AF37;">Anti-Sagging Method</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-skin')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto; padding-bottom: 50px;">
                        <p>Rapid weight loss often results in loose skin because generic collagen supplements are completely destroyed by stomach acid before reaching the skin matrix. The Collagen F3 ("Firmness 3") protocol bypasses this.</p>
                        
                        <div class="card" style="background: #FFFBF0; border: 1px solid #D4AF37;">
                            <h3 style="color: #D4AF37;">Phase 1: Activate (Days 1-10)</h3>
                            <p>Focus entirely on hydration and cellular plumpness. Drink 64oz of water daily, infused with a pinch of Celtic sea salt for trace minerals.</p>
                        </div>
                        
                        <div class="card" style="background: #FFFBF0; border: 1px solid #D4AF37;">
                            <h3 style="color: #D4AF37;">Phase 2: Strengthen (Days 11-20)</h3>
                            <p>Add 3 minutes of deep tissue facial massage every morning using upward strokes to drain lymph and stimulate elastin.</p>
                        </div>

                        <div class="card" style="background: #FFFBF0; border: 1px solid #D4AF37;">
                            <h3 style="color: #D4AF37;">Phase 3: Lock (Days 21-30)</h3>
                            <p>Introduce the Forbidden Youth Cream locally to target areas of severe sagging.</p>
                            <p><strong>Youth Cream Recipe:</strong><br>2 tbsp aloe vera gel, 1 tsp vitamin E oil, 1 tsp rose hip oil, 1 tsp hydrolyzed collagen powder. Mix well, massage upward.</p>
                        </div>

                        <div class="card" style="background: var(--secondary-coral); color: white; text-align: center;">
                            <h3 style="color: white; margin-bottom: 10px;">🎉 Join the VIP Women's Support Group</h3>
                            <p style="color: white; margin-bottom: 15px;">Connect with 1,000+ women going through the same transformation</p>
                            <a href="#" style="display: block; background: white; color: var(--secondary-coral); padding: 12px; border-radius: 8px; font-weight: bold; text-decoration: none;">Join on Telegram →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-hair" class="modal-overlay">
            <div class="modal-content" style="max-width: 100%; height: 100vh; max-height: 100vh; border-radius: 0; padding: 0;">
                <div style="background-color: var(--bg-color); height: 100%; display: flex; flex-direction: column;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; color: #2D3748;">Hair Rescue Protocol</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-hair')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto; padding-bottom: 50px;">
                        <p>When you lose weight fast, your body redirects nutrients away from hair follicles, leading to Telogen Effluvium (rapid shedding). This protocol halts shedding in 21 days.</p>
                        
                        <div class="card" style="border-left: 4px solid #2D3748;">
                            <h3>The Hair Rescue Tonic</h3>
                            <ul style="margin-left: 20px; margin-top: 10px; margin-bottom: 15px;">
                                <li>1 tbsp Blackstrap Molasses</li>
                                <li>1 cup Warm Water</li>
                                <li>1/4 tsp Cinnamon</li>
                                <li>1 tsp Lemon Juice (Optional)</li>
                            </ul>
                            <p><strong>Directions:</strong> Consume every morning on an empty stomach. The molasses provides highly bioavailable iron and B-vitamins that immediately flow to the scalp.</p>
                        </div>

                        <div class="card">
                            <h3>60-Day Progress Tracker</h3>
                            <div style="margin-top: 15px; font-size: 14px;">
                                <p><strong>Day 7:</strong> Scalp irritation decreases.</p>
                                <p><strong>Day 14:</strong> Noticeably less hair in the shower drain.</p>
                                <p><strong>Day 21:</strong> Shedding officially halts. Follicles enter repair phase.</p>
                                <p><strong>Day 30:</strong> Fine baby hairs (regrowth) visible at the temples.</p>
                                <p><strong>Day 60:</strong> Ponytail thickness begins to return to normal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- generic modal for others -->
"""

# Replace the old modals block with the new massive modals block
content = re.sub(
    r"<!-- MODALS -->.*?<!-- generic modal for others -->",
    massive_modals_html,
    content,
    flags=re.DOTALL
)

with open("app/index.html", "w") as f:
    f.write(content)

print("Updates applied successfully.")
