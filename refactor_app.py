import re

with open("app/index.html", "r") as f:
    content = f.read()

# 1. Update Today Tab HTML to include Day Navigation
old_today_header = """                <div>
                    <h2 id="greeting">Good Morning, Anna ☀️</h2>
                    <p id="day-phase-text" style="font-weight: 600;">Day 1 · Phase 1: Activation</p>
                </div>"""

new_today_header = """                <div>
                    <h2 id="greeting">Good Morning, Anna ☀️</h2>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; margin-bottom: 20px; background: white; padding: 12px 16px; border-radius: 16px; box-shadow: var(--shadow);">
                        <button onclick="changeDay(-1)" style="background: none; border: none; color: var(--text-muted); font-weight: 800; font-size: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;">‹</button>
                        <div id="day-phase-text" style="font-weight: 700; color: var(--primary-teal); font-size: 15px; text-align: center;">Day 1<br><span style="font-size: 12px; color: var(--text-muted); font-weight: 600;">Phase 1: Activation</span></div>
                        <button onclick="changeDay(1)" style="background: none; border: none; color: var(--secondary-coral); font-weight: 800; font-size: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;">›</button>
                    </div>
                </div>"""

content = content.replace(old_today_header, new_today_header)


# 2. Update JS Logic
js_to_replace = """        function calculateDayNumber() {
            const now = new Date();
            // Start of today
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            // Start of start date
            const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            
            const diffTime = today - start;
            dayNumber = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
            
            if (dayNumber < 1) dayNumber = 1;
            if (dayNumber > 90) dayNumber = 90;
            
            if (dayNumber <= 30) phase = 'Activation';
            else if (dayNumber <= 60) phase = 'Acceleration';
            else phase = 'Lock-In';
        }"""

new_js = """        function calculateDayNumber() {
            const savedDay = localStorage.getItem('slimtide_manual_day');
            if (savedDay) {
                dayNumber = parseInt(savedDay);
            } else {
                dayNumber = 1;
            }
            
            if (dayNumber <= 30) phase = 'Activation';
            else if (dayNumber <= 60) phase = 'Acceleration';
            else phase = 'Lock-In';
        }

        function changeDay(delta) {
            dayNumber += delta;
            if (dayNumber < 1) dayNumber = 1;
            if (dayNumber > 90) dayNumber = 90;
            localStorage.setItem('slimtide_manual_day', dayNumber);
            initMainApp();
            
            // Scroll to top smoothly
            document.getElementById('screen-main').scrollTo({ top: 0, behavior: 'smooth' });
        }"""

content = content.replace(js_to_replace, new_js)

# Fix initMainApp Profile display
profile_display_old = "document.getElementById('day-phase-text').innerText = `Day ${dayNumber} · Phase: ${phase}`;"
profile_display_new = "document.getElementById('day-phase-text').innerHTML = `Day ${dayNumber}<br><span style=\"font-size: 12px; color: var(--text-muted); font-weight: 600;\">Phase: ${phase}</span>`;"
content = content.replace(profile_display_old, profile_display_new)


# 3. Streamlined Modals
new_modals = """        <!-- MASSIVE MODALS -->
        <div id="modal-core" class="modal-overlay">
            <div class="modal-content" style="padding: 0; overflow: hidden; background: transparent;">
                <div style="background-color: var(--bg-color); max-height: 85vh; display: flex; flex-direction: column; border-radius: 24px; overflow: hidden;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; font-size: 20px;">SlimTide Core Protocol</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-core')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto;">
                        <div class="card">
                            <h3 style="color: var(--primary-teal); margin-bottom: 12px;">The 47-Minute Window</h3>
                            <p style="font-size: 14px; margin-bottom: 16px;">This precise timing ensures your GLP-1 hormones are naturally stimulated without triggering insulin resistance.</p>
                            
                            <div style="background: #F0F9F9; padding: 16px; border-radius: 12px; border-left: 4px solid var(--primary-teal);">
                                <h4 style="margin-bottom: 10px;">Daily Rules:</h4>
                                <ul style="margin-left: 20px; font-size: 13px; font-weight: 500; color: var(--text-main); line-height: 1.6;">
                                    <li>Drink 12oz of water upon waking.</li>
                                    <li>Wait 15 minutes before taking the trigger.</li>
                                    <li>Eat within the Eat-Normally window.</li>
                                    <li>No caffeine until the window closes.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-accel" class="modal-overlay">
            <div class="modal-content" style="padding: 0; overflow: hidden; background: transparent;">
                <div style="background-color: var(--bg-color); max-height: 85vh; display: flex; flex-direction: column; border-radius: 24px; overflow: hidden;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; font-size: 20px; color: var(--secondary-coral);">7X Accelerator</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-accel')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto;">
                        <p style="font-size: 14px; margin-bottom: 16px;">Flips your gut microbiome to "lean bacteria" to stop extracting hidden calories from your food.</p>
                        
                        <div class="card" style="border: 2px solid var(--secondary-coral); background: white;">
                            <h3 style="color: var(--secondary-coral); text-align: center; margin-bottom: 12px;">🔥 THE RECIPE 🔥</h3>
                            <div style="background: #FFF5F3; padding: 16px; border-radius: 12px; margin-bottom: 12px;">
                                <ul style="list-style: none; font-weight: bold; padding: 0; text-align: center; font-size: 14px; color: var(--text-main);">
                                    <li style="margin-bottom: 8px;">1 tbsp Apple Cider Vinegar</li>
                                    <li style="margin-bottom: 8px;">1 tsp Raw Honey</li>
                                    <li style="margin-bottom: 8px;">1/4 tsp Ginger Powder</li>
                                    <li>1 cup Warm Water</li>
                                </ul>
                            </div>
                            <p style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 0;">Consume 12 minutes before your largest meal.</p>
                        </div>

                        <div class="card">
                            <h3 style="margin-bottom: 16px;">The 7-Day Timeline</h3>
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="display: flex; gap: 12px; align-items: center; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <div style="font-size: 14px; font-weight: bold; color: var(--primary-teal);">1</div>
                                    <div style="font-size: 13px;"><strong>The Flip:</strong> Bad bacteria begins to starve.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <div style="font-size: 14px; font-weight: bold; color: var(--primary-teal);">3</div>
                                    <div style="font-size: 13px;"><strong>Die-Off:</strong> Digestion feels significantly lighter.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center; padding: 10px; background: #F8FAFC; border-radius: 8px;">
                                    <div style="font-size: 14px; font-weight: bold; color: var(--primary-teal);">5</div>
                                    <div style="font-size: 13px;"><strong>Acceleration:</strong> Visceral fat burning commences.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center; padding: 10px; background: var(--primary-teal); color: white; border-radius: 8px;">
                                    <div style="font-size: 14px; font-weight: bold; color: white;">7</div>
                                    <div style="font-size: 13px;"><strong>Lock-In:</strong> Microbiome is lean-dominant.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-hormone" class="modal-overlay">
            <div class="modal-content" style="padding: 0; overflow: hidden; background: transparent;">
                <div style="background-color: var(--bg-color); max-height: 85vh; display: flex; flex-direction: column; border-radius: 24px; overflow: hidden;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; font-size: 20px; color: #8C4A76;">Hormonal Shot</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-hormone')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto;">
                        <p style="font-size: 13px; margin-bottom: 20px;">Blocks estrogen-related belly fat accumulation using custom metabolic spice ratios.</p>
                        
                        <button class="btn" style="background-color: #8C4A76; width: 100%; box-shadow: 0 4px 14px rgba(140, 74, 118, 0.3);" onclick="generateHormoneShot()">Generate Custom Recipe</button>
                        
                        <div id="hormone-result" style="display: none; margin-top: 20px; background-color: white; padding: 20px; border-radius: 16px; border: 2px solid #8C4A76; box-shadow: 0 4px 20px rgba(140, 74, 118, 0.1);">
                            <h3 style="color: #8C4A76; text-align: center; margin-bottom: 16px; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">Your Clinical Ratio</h3>
                            <ul id="hormone-list" style="margin-left: 20px; font-size: 15px; font-weight: 600; color: var(--text-main); line-height: 2.0; list-style-type: '✓ ';"></ul>
                            <p style="text-align: center; font-size: 12px; color: var(--text-muted); margin-top: 16px; margin-bottom: 0;">Consume daily based on your weight and age profile.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-skin" class="modal-overlay">
            <div class="modal-content" style="padding: 0; overflow: hidden; background: transparent;">
                <div style="background-color: var(--bg-color); max-height: 85vh; display: flex; flex-direction: column; border-radius: 24px; overflow: hidden;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; font-size: 20px; color: #D4AF37;">Anti-Sagging Method</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-skin')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto;">
                        <p style="font-size: 13px; margin-bottom: 20px;">The Collagen F3 protocol tightens skin externally, bypassing stomach acid destruction.</p>
                        
                        <div class="card" style="background: white; border-left: 4px solid #D4AF37; margin-bottom: 12px;">
                            <h3 style="color: #D4AF37; margin-bottom: 4px; font-size: 15px;">1. Hydrate (Days 1-10)</h3>
                            <p style="font-size: 13px; margin-bottom: 0;">Drink 64oz of water daily with a pinch of Celtic sea salt to pull water into skin cells.</p>
                        </div>
                        
                        <div class="card" style="background: white; border-left: 4px solid #D4AF37; margin-bottom: 12px;">
                            <h3 style="color: #D4AF37; margin-bottom: 4px; font-size: 15px;">2. Massage (Days 11-20)</h3>
                            <p style="font-size: 13px; margin-bottom: 0;">3 minutes of upward facial massage every morning to drain lymph fluid.</p>
                        </div>

                        <div class="card" style="background: white; border-left: 4px solid #D4AF37; margin-bottom: 12px;">
                            <h3 style="color: #D4AF37; margin-bottom: 4px; font-size: 15px;">3. The Youth Cream</h3>
                            <div style="background: #FFFBF0; padding: 12px; border-radius: 8px; margin-top: 8px;">
                                <p style="font-size: 13px; margin-bottom: 0;"><strong>Recipe:</strong> 2 tbsp aloe vera gel, 1 tsp vitamin E oil, 1 tsp rose hip oil, 1 tsp hydrolyzed collagen powder. Apply before sleep.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-hair" class="modal-overlay">
            <div class="modal-content" style="padding: 0; overflow: hidden; background: transparent;">
                <div style="background-color: var(--bg-color); max-height: 85vh; display: flex; flex-direction: column; border-radius: 24px; overflow: hidden;">
                    <div style="background-color: white; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <h2 style="margin: 0; font-size: 20px; color: #2D3748;">Hair Rescue Protocol</h2>
                        <div class="modal-close" style="position: static; cursor: pointer; font-size: 28px;" onclick="closeModal('modal-hair')">×</div>
                    </div>
                    <div style="padding: 20px; overflow-y: auto;">
                        <p style="font-size: 13px; margin-bottom: 16px;">Halts rapid shedding (Telogen Effluvium) during weight loss.</p>
                        
                        <div class="card" style="border: 2px solid #2D3748; background: white;">
                            <h3 style="margin-bottom: 12px; font-size: 16px; text-align: center; color: #2D3748;">The Hair Rescue Tonic</h3>
                            <div style="background: #F8FAFC; padding: 12px; border-radius: 8px; margin-bottom: 12px;">
                                <ul style="margin-left: 20px; font-weight: 600; font-size: 13px; color: var(--text-main);">
                                    <li style="margin-bottom: 4px;">1 tbsp Blackstrap Molasses</li>
                                    <li style="margin-bottom: 4px;">1 cup Warm Water</li>
                                    <li>1/4 tsp Cinnamon</li>
                                </ul>
                            </div>
                            <p style="font-size: 12px; text-align: center; color: var(--text-muted); margin-bottom: 0;">Consume every morning on an empty stomach.</p>
                        </div>

                        <div class="card">
                            <h3 style="margin-bottom: 12px; font-size: 15px;">Progress Tracker</h3>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="font-weight: bold; font-size: 13px; color: #4A5568;">Day 7:</div>
                                    <div style="font-size: 13px;">Scalp irritation decreases.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="font-weight: bold; font-size: 13px; color: #4A5568;">Day 21:</div>
                                    <div style="font-size: 13px;">Shedding officially halts.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="font-weight: bold; font-size: 13px; color: #4A5568;">Day 60:</div>
                                    <div style="font-size: 13px;">Thickness begins to return.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>"""

content = re.sub(
    r"<!-- MASSIVE MODALS -->.*?<!-- generic modal for others -->",
    new_modals + "\n        <!-- generic modal for others -->",
    content,
    flags=re.DOTALL
)

with open("app/index.html", "w") as f:
    f.write(content)

print("Applied UI and logic fixes.")
