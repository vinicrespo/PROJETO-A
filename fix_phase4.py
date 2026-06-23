import re

with open("app/index.html", "r") as f:
    content = f.read()

# 1. Sync Content to dayNumber
content = content.replace(
    "const dayOfWeek = new Date().getDay();",
    "const dayOfWeek = (dayNumber - 1) % 7;"
)

# 2. Today Tab Header Cleanup
old_header = """                <div class="app-header">
                    <div class="logo-code" style="width:100px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180" style="width:100%;height:auto;">
                          <text x="200" y="110" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="90" font-weight="600" fill="#1B7B8C" text-anchor="middle" letter-spacing="-2">SlimTide</text>
                          <path d="M 60 140 Q 110 120 160 138 Q 210 156 260 138 Q 310 120 340 135" stroke="#5ECDD6" stroke-width="5" fill="none" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div style="display: flex; gap: 16px; color: var(--text-main);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </div>
                </div>"""

new_header = """                <div class="app-header" style="justify-content: center; margin-bottom: 10px;">
                    <div class="logo-code" style="width:120px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180" style="width:100%;height:auto;">
                          <text x="200" y="110" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="90" font-weight="600" fill="#1B7B8C" text-anchor="middle" letter-spacing="-2">SlimTide</text>
                          <path d="M 60 140 Q 110 120 160 138 Q 210 156 260 138 Q 310 120 340 135" stroke="#5ECDD6" stroke-width="5" fill="none" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>"""
content = content.replace(old_header, new_header)

# 3. Coaching Tab Name Change
content = content.replace(">EC<", ">DA<")
content = content.replace("<h2>Emily Carter</h2>", "<h2>Dr. Ania</h2>")
content = content.replace("Wellness Specialist · MS, RD", "Metabolic Specialist · Chief Medical Advisor")

# 4. Profile Tab Cleanup
old_profile = """                <div class="card">
                    <h3>Notifications</h3>
                    <div class="setting-row">
                        <span style="font-weight: 600; color: var(--text-main);">Morning Reminder</span>
                        <div class="toggle on" onclick="this.classList.toggle('on')"></div>
                    </div>
                    <div class="setting-row">
                        <span style="font-weight: 600; color: var(--text-main);">Coaching Message</span>
                        <div class="toggle on" onclick="this.classList.toggle('on')"></div>
                    </div>
                    <div class="setting-row">
                        <span style="font-weight: 600; color: var(--text-main);">Window Alert</span>
                        <div class="toggle on" onclick="this.classList.toggle('on')"></div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="setting-row">
                        <span style="font-weight: 600; color: var(--text-main);">About SlimTide</span>
                        <span style="color: #CBD5E0;">›</span>
                    </div>
                    <div class="setting-row">
                        <span style="font-weight: 600; color: var(--text-main);">Privacy Policy</span>
                        <span style="color: #CBD5E0;">›</span>
                    </div>
                    <div class="setting-row">
                        <span style="font-weight: 600; color: var(--text-main);">Terms of Service</span>
                        <span style="color: #CBD5E0;">›</span>
                    </div>
                </div>
                
                <button class="btn btn-outline" style="margin-top: 16px; border-color: #E2E8F0; color: var(--text-muted);" onclick="logout()">Log Out</button>"""
content = content.replace(old_profile, "<!-- Profile settings stripped -->")

# 5. Hormonal Shot Button & Logic
content = content.replace(
    """<button class="btn" style="background-color: #8C4A76; width: 100%; box-shadow: 0 4px 14px rgba(140, 74, 118, 0.3);" onclick="generateHormoneShot()">Generate Custom Recipe</button>""",
    """<button id="btn-generate-hormone" class="btn" style="background-color: #8C4A76; width: 100%; box-shadow: 0 4px 14px rgba(140, 74, 118, 0.3);" onclick="generateHormoneShot()">Generate Custom Recipe</button>"""
)

# Update the JS function
hormone_js_old = """function generateHormoneShot() {
            const w = profile.weight || 160;"""
hormone_js_new = """function generateHormoneShot() {
            document.getElementById('btn-generate-hormone').style.display = 'none';
            const w = profile.weight || 160;"""
content = content.replace(hormone_js_old, hormone_js_new)


# 6. Deepening Upsells with FAQs
# Core Protocol
core_addition = """
                        <div class="card" style="margin-top: 16px;">
                            <h3 style="margin-bottom: 12px; font-size: 16px;">Protocol FAQ</h3>
                            <div style="margin-bottom: 12px;">
                                <strong style="font-size: 13px; color: var(--primary-teal);">What if I miss my window?</strong>
                                <p style="font-size: 12px; margin-bottom: 0;">If you eat outside the 47-minute activation window, your L-cells pause GLP-1 release for that meal. Simply resume the exact schedule the next day. Do not try to compensate by fasting.</p>
                            </div>
                            <div>
                                <strong style="font-size: 13px; color: var(--primary-teal);">Can I drink coffee?</strong>
                                <p style="font-size: 12px; margin-bottom: 0;">Only after the window closes. Caffeine during the activation sequence spikes cortisol, which completely overrides the fat-burning signal.</p>
                            </div>
                        </div>"""
content = content.replace(
    """<p style="font-size: 13px; font-style: italic; color: var(--text-muted);">As you progress, past messages from Dr. Ania will be archived here.</p>
                            </div>
                        </div>""",
    """<p style="font-size: 13px; font-style: italic; color: var(--text-muted);">As you progress, past messages from Dr. Ania will be archived here.</p>
                            </div>
                        </div>""" + core_addition
)

# Anti-Sagging
skin_addition = """
                        <div class="card" style="background: white; border-left: 4px solid #D4AF37; margin-bottom: 12px; margin-top: 20px;">
                            <h3 style="color: #D4AF37; margin-bottom: 12px; font-size: 16px;">Troubleshooting</h3>
                            <div style="margin-bottom: 12px;">
                                <strong style="font-size: 13px;">My skin feels dry on Phase 1?</strong>
                                <p style="font-size: 12px; margin-bottom: 0;">Ensure you are using Celtic sea salt, not table salt. Table salt dehydrates; Celtic salt contains the trace minerals needed to force water into the dermal matrix.</p>
                            </div>
                            <div>
                                <strong style="font-size: 13px;">What if I skip a massage?</strong>
                                <p style="font-size: 12px; margin-bottom: 0;">The fascial layer loses its structural tension quickly. If you miss a morning, do a 5-minute session before bed.</p>
                            </div>
                        </div>"""
content = content.replace(
    """<p style="font-size: 13px; margin-bottom: 0;"><strong>Recipe:</strong> 2 tbsp aloe vera gel, 1 tsp vitamin E oil, 1 tsp rose hip oil, 1 tsp hydrolyzed collagen powder. Apply before sleep.</p>
                            </div>
                        </div>""",
    """<p style="font-size: 13px; margin-bottom: 0;"><strong>Recipe:</strong> 2 tbsp aloe vera gel, 1 tsp vitamin E oil, 1 tsp rose hip oil, 1 tsp hydrolyzed collagen powder. Apply before sleep.</p>
                            </div>
                        </div>""" + skin_addition
)

# Hair Rescue
hair_addition = """
                        <div class="card" style="margin-top: 16px;">
                            <h3 style="margin-bottom: 12px; font-size: 16px;">Troubleshooting</h3>
                            <div style="margin-bottom: 12px;">
                                <strong style="font-size: 13px;">Why hasn't shedding stopped by Day 7?</strong>
                                <p style="font-size: 12px; margin-bottom: 0;">Day 7 only addresses scalp inflammation. The actual follicles require the full 21-day cycle of molasses iron-loading to physically halt the telogen phase. Keep going.</p>
                            </div>
                            <div>
                                <strong style="font-size: 13px;">Can I add other supplements?</strong>
                                <p style="font-size: 12px; margin-bottom: 0;">No. Synthetic biotin or generic hair pills compete with the bioavailable iron in the molasses for absorption. Stick strictly to the tonic.</p>
                            </div>
                        </div>"""
content = content.replace(
    """<div style="font-size: 13px;">Thickness begins to return.</div>
                                </div>
                            </div>
                        </div>""",
    """<div style="font-size: 13px;">Thickness begins to return.</div>
                                </div>
                            </div>
                        </div>""" + hair_addition
)


with open("app/index.html", "w") as f:
    f.write(content)

print("Applied phase 4 fixes.")
