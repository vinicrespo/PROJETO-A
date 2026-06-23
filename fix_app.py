import re
from datetime import datetime

with open("app/index.html", "r") as f:
    content = f.read()

# 1. Fix the date logic
date_logic_replacement = """
        function calculateDayNumber() {
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
        }
"""

content = re.sub(
    r"function calculateDayNumber\(\) \{.*?\}",
    date_logic_replacement.strip(),
    content,
    flags=re.DOTALL
)

# 2. Fix the modal UI and Expand the content

new_modals = """
        <!-- MASSIVE MODALS -->
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
                            <p style="font-size: 14px; margin-bottom: 12px;">During the Activation Phase (Days 1-30), your metabolic window is exactly 47 minutes. This precise timing ensures your GLP-1 hormones are naturally stimulated without triggering insulin resistance.</p>
                            <p style="font-size: 14px; margin-bottom: 16px;"><strong>Why 47 minutes?</strong> Clinical studies show that the L-cells in the gut require between 45 and 50 minutes of uninterrupted digestive signaling to release maximum incretin hormones. Eating outside this window interrupts the signal.</p>
                            
                            <div style="background: #F0F9F9; padding: 16px; border-radius: 12px; border-left: 4px solid var(--primary-teal);">
                                <h4 style="margin-bottom: 10px;">Your Daily Core Sequence:</h4>
                                <ul style="margin-left: 20px; font-size: 13px; font-weight: 500; color: var(--text-main); line-height: 1.6;">
                                    <li>Wake up and immediately drink 12oz of room temperature water.</li>
                                    <li>Wait exactly 15 minutes before taking the Metabolic Trigger.</li>
                                    <li>Consume your first meal within the designated Eat-Normally Map window.</li>
                                    <li>Do not consume caffeine until the window closes to prevent cortisol spikes.</li>
                                    <li>Log your daily metrics to recalibrate the algorithm.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="card pink">
                            <h3 style="margin-bottom: 12px;">Historical Coaching Archive</h3>
                            <p style="font-size: 13px; margin-bottom: 0;">Review the messages from past days to stay grounded in the process. Your mindset is 50% of the physiological result.</p>
                            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0,0,0,0.1);">
                                <p style="font-size: 13px; font-style: italic; color: var(--text-muted);">As you progress, past messages from Dr. Ania will be archived here.</p>
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
                        <h3 style="margin-bottom: 12px; font-size: 18px;">The 2-Minute Bacteria Flip</h3>
                        <p style="font-size: 14px; margin-bottom: 16px;">98.9% of women over 38 have a gut dominated by Firmicutes bacteria — a bad strain that extracts up to 200 EXTRA calories from everything you eat and stores it directly as visceral fat. This 7-day protocol flips your microbiome back to Bacteroidetes (the lean bacteria), forcing your body to stop extracting these hidden calories.</p>
                        
                        <div class="card" style="border: 2px solid var(--secondary-coral); background: white;">
                            <h3 style="color: var(--secondary-coral); text-align: center; margin-bottom: 16px;">🔥 THE RECIPE 🔥</h3>
                            <div style="background: #FFF5F3; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
                                <ul style="list-style: none; font-weight: bold; padding: 0; text-align: center; font-size: 15px; color: var(--text-main);">
                                    <li style="margin-bottom: 8px;">1 tbsp Apple Cider Vinegar (Raw/Unfiltered)</li>
                                    <li style="margin-bottom: 8px;">1 tsp Raw Honey</li>
                                    <li style="margin-bottom: 8px;">1/4 tsp Ginger Powder</li>
                                    <li>1 cup Warm Water</li>
                                </ul>
                            </div>
                            <p style="text-align: center; font-size: 13px; color: var(--text-muted); margin-bottom: 0;"><strong>Protocol:</strong> Mix well. Consume precisely 12 minutes before your largest meal of the day to block up to 40% of carbohydrate absorption via acetic acid.</p>
                        </div>

                        <div class="card">
                            <h3 style="margin-bottom: 16px;">The 7-Day Physiological Timeline</h3>
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="display: flex; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 12px; align-items: flex-start;">
                                    <div style="min-width: 24px; height: 24px; border-radius: 50%; background: #E2E8F0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-top: 2px;">1</div>
                                    <div><strong style="font-size: 14px;">The Flip Begins</strong><br><span style="font-size: 13px; color: var(--text-muted);">Firmicutes bacteria begins to starve. Mild bloating is normal as the acid neutralizes the bad flora.</span></div>
                                </div>
                                <div style="display: flex; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 12px; align-items: flex-start;">
                                    <div style="min-width: 24px; height: 24px; border-radius: 50%; background: #E2E8F0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-top: 2px;">2</div>
                                    <div><strong style="font-size: 14px;">Bacterial Die-Off</strong><br><span style="font-size: 13px; color: var(--text-muted);">Toxins release as bad bacteria dies. You may feel slightly tired. Drink extra water to flush the liver.</span></div>
                                </div>
                                <div style="display: flex; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 12px; align-items: flex-start;">
                                    <div style="min-width: 24px; height: 24px; border-radius: 50%; background: #E2E8F0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-top: 2px;">3</div>
                                    <div><strong style="font-size: 14px;">Bacteroidetes Bloom</strong><br><span style="font-size: 13px; color: var(--text-muted);">The lean bacteria begins to colonize. Digestion feels significantly lighter after meals.</span></div>
                                </div>
                                <div style="display: flex; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 12px; align-items: flex-start;">
                                    <div style="min-width: 24px; height: 24px; border-radius: 50%; background: #E2E8F0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-top: 2px;">4</div>
                                    <div><strong style="font-size: 14px;">Insulin Stabilization</strong><br><span style="font-size: 13px; color: var(--text-muted);">Afternoon cravings vanish as blood sugar lines flatten.</span></div>
                                </div>
                                <div style="display: flex; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 12px; align-items: flex-start;">
                                    <div style="min-width: 24px; height: 24px; border-radius: 50%; background: #E2E8F0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-top: 2px;">5</div>
                                    <div><strong style="font-size: 14px;">Acceleration Phase</strong><br><span style="font-size: 13px; color: var(--text-muted);">Deep visceral fat (belly fat) burning commences as the liver is freed from processing toxins.</span></div>
                                </div>
                                <div style="display: flex; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 12px; align-items: flex-start;">
                                    <div style="min-width: 24px; height: 24px; border-radius: 50%; background: #E2E8F0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-top: 2px;">6</div>
                                    <div><strong style="font-size: 14px;">Metabolic Lock-In</strong><br><span style="font-size: 13px; color: var(--text-muted);">Your basal metabolic rate rises by up to 12%. Heat generation increases.</span></div>
                                </div>
                                <div style="display: flex; gap: 12px; padding: 12px; background: var(--primary-teal); color: white; border-radius: 12px; align-items: flex-start;">
                                    <div style="min-width: 24px; height: 24px; border-radius: 50%; background: white; color: var(--primary-teal); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-top: 2px;">7</div>
                                    <div><strong style="font-size: 14px;">Complete Flip</strong><br><span style="font-size: 13px; color: rgba(255,255,255,0.9);">Your microbiome is now officially lean-dominant. Maintain the exact recipe to defend this new baseline.</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="card pink">
                            <h3 style="margin-bottom: 12px;">Goodbye Cellulite in 21 Days</h3>
                            <p style="font-size: 13px; margin-bottom: 12px;">Cellulite is not fat — it's trapped lymphatic fluid caused by structural breakdown of the fascial layer, often exacerbated by estrogen dominance.</p>
                            <p style="font-size: 13px; margin-bottom: 0;"><strong>Action Step:</strong> Dry brush your thighs in upward strokes towards the heart for exactly 3 minutes before your morning shower. Do this for 21 days straight while your body is in the morning fasting window to force lymphatic drainage.</p>
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
                        <p style="font-size: 14px; margin-bottom: 20px;">After age 40, declining estrogen levels cause the body to redistribute fat from the hips and thighs directly to the belly. This intelligent calculator determines the exact ratios of metabolic spices your specific body needs to mimic estrogenic fat-blocking pathways without synthetic hormones.</p>
                        
                        <button class="btn" style="background-color: #8C4A76; width: 100%;" onclick="generateHormoneShot()">Generate Custom Recipe</button>
                        
                        <div id="hormone-result" style="display: none; margin-top: 20px; background-color: #FDF4F9; padding: 20px; border-radius: 16px; border: 2px solid #8C4A76;">
                            <h3 style="color: #8C4A76; text-align: center; margin-bottom: 15px; font-size: 18px;">Your Clinical Ratio</h3>
                            <ul id="hormone-list" style="margin-left: 20px; font-size: 15px; font-weight: 600; color: var(--text-main); line-height: 1.8;"></ul>
                        </div>

                        <div class="card" style="margin-top: 20px;">
                            <h3 style="margin-bottom: 12px;">🌹 Desire Tonic</h3>
                            <p style="font-size: 13px; margin-bottom: 12px;">A natural libido and estrogen booster. Maca root acts as an adaptogen, directly supporting the adrenal glands which take over estrogen production during menopause.</p>
                            <div style="background: #F8FAFC; padding: 12px; border-radius: 8px; margin-bottom: 12px;">
                                <p style="font-size: 13px; margin-bottom: 0;"><strong>Recipe:</strong> 1 tsp maca powder, 1 tsp raw cacao, 1/4 tsp cinnamon, 1 cup warm almond milk, 1/2 tsp honey.</p>
                            </div>
                            <p style="font-size: 13px; margin-bottom: 0;"><strong>Protocol:</strong> Consume 15 minutes before intimacy or daily for 21 days for cumulative endocrine balance.</p>
                        </div>

                        <div class="card">
                            <h3 style="margin-bottom: 12px;">☕ Bariatric Coffee</h3>
                            <p style="font-size: 13px; margin-bottom: 12px;">Forces your body to burn fat while you sleep by suppressing the nighttime cortisol spike that typically stores abdominal fat.</p>
                            <div style="background: #F8FAFC; padding: 12px; border-radius: 8px; margin-bottom: 12px;">
                                <p style="font-size: 13px; margin-bottom: 0;"><strong>Recipe:</strong> 1 cup decaf coffee, 1 tsp MCT oil, 1/4 tsp cinnamon, 1 tsp grass-fed collagen powder.</p>
                            </div>
                            <p style="font-size: 13px; margin-bottom: 0;"><strong>Protocol:</strong> Consume 90 minutes before bed for 14 consecutive nights.</p>
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
                        <p style="font-size: 14px; margin-bottom: 20px;">Rapid weight loss often results in loose skin because generic collagen supplements are completely destroyed by stomach acid before reaching the skin matrix. The Collagen F3 ("Firmness 3") protocol bypasses the digestive tract entirely.</p>
                        
                        <div class="card" style="background: #FFFBF0; border: 1px solid #D4AF37; margin-bottom: 16px;">
                            <h3 style="color: #D4AF37; margin-bottom: 8px; font-size: 16px;">Phase 1: Activate (Days 1-10)</h3>
                            <p style="font-size: 13px; margin-bottom: 0;">Focus entirely on hydration and cellular plumpness. Drink 64oz of water daily, infused with a pinch of Celtic sea salt. The trace minerals pull water *into* the skin cells, instantly reducing the appearance of sagging.</p>
                        </div>
                        
                        <div class="card" style="background: #FFFBF0; border: 1px solid #D4AF37; margin-bottom: 16px;">
                            <h3 style="color: #D4AF37; margin-bottom: 8px; font-size: 16px;">Phase 2: Strengthen (Days 11-20)</h3>
                            <p style="font-size: 13px; margin-bottom: 0;">Add 3 minutes of deep tissue facial massage every morning using upward strokes. This drains stagnant lymph fluid and creates micro-trauma in the dermis, forcing natural elastin production.</p>
                        </div>

                        <div class="card" style="background: #FFFBF0; border: 1px solid #D4AF37; margin-bottom: 20px;">
                            <h3 style="color: #D4AF37; margin-bottom: 8px; font-size: 16px;">Phase 3: Lock (Days 21-30)</h3>
                            <p style="font-size: 13px; margin-bottom: 12px;">Introduce the Forbidden Youth Cream locally to target areas of severe sagging.</p>
                            <div style="background: white; padding: 12px; border-radius: 8px;">
                                <p style="font-size: 13px; margin-bottom: 0;"><strong>Youth Cream Recipe:</strong><br>2 tbsp pure aloe vera gel, 1 tsp vitamin E oil, 1 tsp rose hip oil, 1 tsp hydrolyzed collagen powder. Mix well. Apply before sleep.</p>
                            </div>
                        </div>

                        <div class="card" style="background: var(--secondary-coral); color: white; text-align: center; border: none;">
                            <h3 style="color: white; margin-bottom: 10px; font-size: 18px;">🎉 Join the VIP Support Group</h3>
                            <p style="color: white; margin-bottom: 15px; font-size: 14px; opacity: 0.9;">Connect with 1,000+ women going through the exact same transformation.</p>
                            <a href="#" style="display: block; background: white; color: var(--secondary-coral); padding: 16px; border-radius: 12px; font-weight: bold; text-decoration: none; font-size: 16px;">Join on Telegram →</a>
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
                        <p style="font-size: 14px; margin-bottom: 20px;">When you lose weight fast, your body interprets it as a slight physiological stressor and redirects nutrients away from hair follicles to vital organs. This leads to Telogen Effluvium (rapid shedding). This protocol halts shedding in exactly 21 days.</p>
                        
                        <div class="card" style="border-left: 4px solid #2D3748;">
                            <h3 style="margin-bottom: 12px; font-size: 18px;">The Hair Rescue Tonic</h3>
                            <div style="background: #F8FAFC; padding: 16px; border-radius: 12px; margin-bottom: 12px;">
                                <ul style="margin-left: 20px; font-weight: 600; font-size: 14px; color: var(--text-main);">
                                    <li style="margin-bottom: 8px;">1 tbsp Blackstrap Molasses</li>
                                    <li style="margin-bottom: 8px;">1 cup Warm Water</li>
                                    <li style="margin-bottom: 8px;">1/4 tsp Cinnamon</li>
                                    <li>1 tsp Lemon Juice</li>
                                </ul>
                            </div>
                            <p style="font-size: 13px; margin-bottom: 0;"><strong>Science:</strong> Consume every morning on an empty stomach. Blackstrap molasses contains highly bioavailable iron, magnesium, and B-vitamins that instantly penetrate the bloodstream and flow directly to the scalp follicles.</p>
                        </div>

                        <div class="card">
                            <h3 style="margin-bottom: 16px;">60-Day Progress Tracker</h3>
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #CBD5E0;"></div>
                                    <div style="font-size: 14px;"><strong>Day 7:</strong> Scalp irritation and dryness decreases.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #A0AEC0;"></div>
                                    <div style="font-size: 14px;"><strong>Day 14:</strong> Noticeably less hair in the shower drain.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #4A5568;"></div>
                                    <div style="font-size: 14px;"><strong>Day 21:</strong> Shedding officially halts.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #2D3748;"></div>
                                    <div style="font-size: 14px;"><strong>Day 30:</strong> Fine baby hairs visible at the temples.</div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #1A202C;"></div>
                                    <div style="font-size: 14px;"><strong>Day 60:</strong> Ponytail thickness returns to normal.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
"""

content = re.sub(
    r"<!-- MASSIVE MODALS -->.*?<!-- generic modal for others -->",
    new_modals + "\n        <!-- generic modal for others -->",
    content,
    flags=re.DOTALL
)

with open("app/index.html", "w") as f:
    f.write(content)

print("Applied UI and content fixes.")
