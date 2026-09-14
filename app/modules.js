/* HorseFil — training modules. All open, no unlock codes. */

const MODULES = [

/* ============ 7X ACCELERATOR ============ */
{
  id:'accelerator', title:'7X Accelerator', icon:'⚡',
  sub:'Vascular Strength Protocol — 30 days of natural vasodilation.',
  tracker:{ key:'accelerator_progress', days:30, label:'Took my shot today',
    milestones:{ 7:'Day 7 — your blood vessels are already adapting.',
                 14:'Day 14 — halfway. Nitric oxide production is ramping up.',
                 21:'Day 21 — almost there. Most men report visible difference by now.',
                 30:'Day 30 — protocol complete. Your vascular system is transformed.' } },
  shopping:{ note:'Under $25 for the full month',
    items:['8 medium beets','2 heads of garlic','1 large ginger root','1 jar cayenne pepper','4 lemons','4 green apples','1L coconut water','1 jar honey','1 bag arugula per week','1 bag walnuts','Extra virgin olive oil','Ground ginger (for week 3)','200ml bottled beet juice x7 (week 3)'] },
  sections:[
    { h:'The Science of Blood Flow', p:[
      'An erection is not a nerve event or a hormone event. It is a plumbing event. Arousal triggers a signal, that signal tells the smooth muscle lining your arteries to relax, and blood rushes into two chambers of spongy tissue faster than it can leave. Pressure builds. That pressure is the erection. Everything else — desire, testosterone, confidence — feeds into that one hydraulic moment.',
      'The molecule that carries the signal is nitric oxide. Your endothelium, the single-cell lining inside every blood vessel you own, manufactures it on demand. When nitric oxide is abundant, vessels open wide and fast. When it is scarce, they open slowly and incompletely, and the erection arrives soft, takes longer, or fades halfway through.',
      'Nitric oxide production falls off a cliff after 40. The endothelium accumulates damage from decades of blood sugar swings, oxidative stress and inflammation, and the enzyme that produces nitric oxide becomes less efficient. By 50, most men produce roughly half of what they did at 25. This is why the same man with the same desire and the same testosterone gets a visibly weaker result — the signal is fine, the pipes just do not respond to it the way they used to.',
      'Here is the part almost nobody tells you: nitric oxide has a second production route that does not depend on your endothelium at all. Dietary nitrate from certain vegetables is converted by bacteria in your mouth into nitrite, then into nitric oxide in your bloodstream. This pathway works independently of age and endothelial damage. You can feed it directly.',
      'That is what this protocol does. Four foods, taken together, on an empty stomach, every morning for thirty days. One floods the nitrate pathway. One relaxes the vessel walls. One drives circulation into the smallest peripheral vessels. One triggers immediate dilation. Together they produce more flow than any of them alone, and they stack on top of the main HorseFil protocol rather than competing with it. More flow means harder, thicker, and longer.'
    ]},
    { h:'Ingredient 1 — Raw Beet', p:[
      'Why it works: beetroot carries the highest concentration of dietary nitrate of any common food. Your body converts that nitrate into nitric oxide — the exact molecule that tells your arteries to open. This is the same pathway ED medication amplifies, approached from the opposite end: instead of slowing the breakdown of the signal, you increase how much signal exists.',
      'It must be raw. Heat destroys nitrate content. A boiled or roasted beet is a decent vegetable and a useless vasodilator. Raw, grated, or juiced raw — those are your options.',
      'Dose: one medium beet per day, or 200ml of raw beet juice.',
      'Timing: on an empty stomach. Nitrate absorption is sharply higher without food competing, and conversion peaks 60 to 90 minutes later.',
      'Warning: your urine may turn pink or red for a day or two. This happens to roughly one in seven people, it is the pigment passing through, and it is completely harmless. It is not blood.'
    ]},
    { h:'Ingredient 2 — Raw Garlic', p:[
      'Why it works: garlic contains alliin, which converts to allicin when the clove is crushed. Allicin relaxes the smooth muscle in vessel walls and has a measurable effect on blood pressure — meaning wider vessels and easier flow through them.',
      'The ten-minute rule: allicin does not exist in an intact clove. It forms only after crushing, and it takes about ten minutes to develop fully. Crush your garlic, walk away, come back. Skipping this step wastes most of the benefit.',
      'Cooking destroys it. Allicin is heat-sensitive and largely gone within a few minutes of cooking. It has to be raw.',
      'Dose: two cloves, crushed, rested ten minutes.',
      'The taste trick: crush the garlic, wait the ten minutes, then stir it into a spoonful of honey before adding it to the rest. The honey neutralises roughly eighty percent of the burn without affecting the allicin.'
    ]},
    { h:'Ingredient 3 — Fresh Ginger', p:[
      'Why it works: gingerols drive circulation specifically into the peripheral vessels — the small, distant ones furthest from the heart. That is precisely the category the penile arteries fall into. They are roughly a third the diameter of your coronary arteries, which is why they are the first to suffer when circulation declines and the first to respond when it improves.',
      'Ginger is the amplifier of this stack. On its own the effect is modest. Combined with nitrate and allicin, it pushes the improved flow further into the tissue that matters rather than leaving it in the large vessels.',
      'Dose: one teaspoon of fresh grated ginger, or a 1cm piece of root.',
      'Fresh beats powdered by a wide margin for gingerol content, though the powder is an acceptable substitute in the week 3 recipe when you are short on time.'
    ]},
    { h:'Ingredient 4 — Cayenne Pepper', p:[
      'Why it works: capsaicin triggers vasodilation almost immediately — this is why your face flushes and your skin warms within minutes of eating something genuinely spicy. That is not a side effect. That is the vessels opening, and it is the fastest-acting component in this stack.',
      'Where the other three build a foundation over weeks, cayenne delivers an acute effect the same morning. You will feel this one.',
      'Dose: start at a quarter teaspoon. After two weeks, if it is comfortable, move to half.',
      'Warning: do not start at half. Cayenne on an empty stomach is harsher than most men expect, and the point is a protocol you actually complete for thirty days — not one you abandon on day three because it was unpleasant.'
    ]},
    { h:'Recipe 1 — The Red Shot (Week 1)', p:[
      '1 medium raw beet, peeled and chopped',
      '2 cloves garlic, crushed and rested 10 minutes',
      '1cm fresh ginger',
      '1/4 teaspoon cayenne pepper',
      '200ml water',
      'Juice of half a lemon',
      'Blend everything for 45 seconds. Drink on an empty stomach, first thing. Preparation time: 3 minutes.',
      'This is the baseline formula — the purest version of the stack, with nothing added to soften it. Week 1 is where you find out how your body responds.'
    ]},
    { h:'Recipe 2 — Morning Fire (Week 2)', p:[
      '1 small raw beet',
      '1 green apple — this is what cuts the earthy taste that makes men quit in week 2',
      '2 cloves garlic, crushed and rested',
      '1cm fresh ginger',
      'A pinch of cayenne',
      '150ml coconut water',
      'Blend and drink on an empty stomach.',
      'The coconut water adds potassium, which supports the blood pressure side of the equation. The apple exists purely so you keep going.'
    ]},
    { h:'Recipe 3 — Nitro Blend (Week 3)', p:[
      '200ml pure beet juice — bottled is fine here, check it is not from concentrate with added sugar',
      '1 clove garlic, crushed and mixed into a teaspoon of honey',
      '1/2 teaspoon ground ginger',
      '1/4 teaspoon cayenne',
      'Stir everything in a glass. No blender required.',
      'This is the version for mornings where you have four minutes and no patience. It is marginally less potent than the fresh versions and vastly better than skipping the day.'
    ]},
    { h:'Recipe 4 — The Power Bowl (Week 4)', p:[
      'For men who are done with drinking their breakfast.',
      'Raw grated beet',
      'A generous handful of arugula — a second nitrate source, and a strong one',
      'A handful of walnuts',
      '1 clove raw garlic, finely chopped',
      'Dressing: extra virgin olive oil, lemon juice, grated ginger, a pinch of cayenne',
      'Eat on an empty stomach or as the first meal of the day.',
      'The arugula makes this the highest-nitrate recipe of the four. If one version becomes your permanent habit after the thirty days, make it this one.'
    ]},
    { h:'Stack Days — maximum effect', p:[
      'Three advanced combinations for the days it matters most. Use these no more than twice a week.',
      'The Date Night Stack — Recipe 1 at 90 minutes before, plus a handful of arugula and 300ml of water at 60 minutes before. The double nitrate source plus hydration produces the strongest flow response available in this module.',
      'The Double Pulse — Recipe 3 in the morning as normal, then half a portion of Recipe 1 six hours later. Nitric oxide from dietary nitrate peaks and falls within a few hours; a second dose re-peaks it in the evening rather than leaving you on the tail of the morning dose.',
      'The Warm-Up Stack — Recipe 2 in the morning, then 20 minutes of walking two hours before. Movement drives the nitrate-derived nitric oxide into working tissue instead of leaving it circulating. Of the three, this one produces the most reliable subjective difference.'
    ]},
    { h:'Signs It Is Working', p:[
      'These appear in a fairly consistent order. Watch for them rather than staring at the mirror.',
      'Warmer hands and feet, usually within the first week. Peripheral circulation is the first thing to change and the easiest to notice.',
      'More visible veins in the forearms, particularly after any physical effort. This is vasodilation you can see.',
      'Firmer morning erections, typically from week two. This is the marker that matters most — it is an unfiltered measure of vascular and hormonal function, taken while you are asleep and not trying.',
      'Better digestion and less bloating. Raw garlic and ginger both act on the gut, and improved gut function reduces the inflammatory load on your endothelium.',
      'A warm, full sensation in the pelvic area within 3 to 5 days, often before anything else. Most men report this first.',
      'Faster time to firmness during arousal. Harder to measure honestly, but it is usually the change partners notice before you do.'
    ]},
    { h:'Weekly Habits — one per week', p:[
      'Week 1 — Walk for 10 minutes after your largest meal. Post-meal glucose is when vascular damage actually accumulates, and contracting muscle pulls glucose out of the blood without needing insulin. Ten minutes flattens the curve measurably.',
      'Week 2 — Fix your bedtime, not your wake time. The endothelium repairs during deep sleep, and deep sleep concentrates in the first half of the night. A bedtime that moves by two hours nightly costs you that window even when the total hours look fine.',
      'Week 3 — Stand up every 45 minutes. Sitting compresses the perineum and restricts the pudendal artery, the main blood supply to the penis. Two minutes of standing restores it. This costs nothing and undoes most of the damage.',
      'Week 4 — Five minutes of slow breathing before bed. Four seconds in, eight seconds out. Cortisol directly opposes the vasodilation you have spent a month building, and a longer exhale than inhale is the fastest mechanical way to lower it.'
    ]},
    { h:'FAQ', p:[
      'Can I take it with the main HorseFil protocol? — Yes, they are designed to stack. Take the shot first thing in the morning, about 30 minutes before starting your daily protocol work.',
      'I cannot stand the taste of raw garlic. — Crush it, wait the ten minutes, then mix it into a spoonful of honey before adding it to the rest. The honey neutralises about eighty percent of the taste and does not affect the allicin.',
      'Can I cook the beet instead? — No. Heat destroys the nitrates, and the nitrates are the entire point. It has to be raw or raw-juiced.',
      'How soon will I notice a difference? — Most men report increased warmth and a fuller sensation in the pelvic area within 3 to 5 days. Firmer morning erections usually follow in week two.',
      'I have high blood pressure — is this safe? — These ingredients generally support healthy blood pressure rather than raising it. However, if you take blood pressure medication, nitrates prescribed for a heart condition, or ED medication, speak to your doctor before starting. Concentrated dietary nitrate lowers blood pressure and can compound those effects.',
      'Can I take it at night instead? — Morning on an empty stomach gives the best absorption by a clear margin. If mornings genuinely do not work, take it at least 2 hours after your last meal.',
      'Can I skip weekends? — Consistency is what builds the effect, and nitric oxide from dietary nitrate clears within hours rather than accumulating. One missed day does not reset anything, but a pattern of five-on two-off will produce noticeably less than thirty straight.',
      'What if I run out of beets? — Bottled pure beet juice is a legitimate substitute — use 200ml, and check the label for added sugar. Fresh is better, consistent is better still.'
    ]}
  ]
},

/* ============ ORGASMIC MASSAGE ============ */
{
  id:'massage', title:'Orgasmic Massage', icon:'🫱',
  sub:'Your Pleasure GPS — 7 learning sessions and a guided live mode.',
  intro:[
    'Most men fail here for one reason, and it is not technique. It is sequence. They treat everything before penetration as an obstacle to clear quickly rather than the part that actually produces the result, and they start at the most sensitive point instead of arriving there.',
    'Female arousal builds on a far longer ramp than male arousal, and it builds through anticipation rather than intensity. Starting at the clitoris with firm pressure is the equivalent of someone grabbing you at full force from a standing start — technically correct target, completely wrong moment.',
    'This module fixes that with a system. Learn Mode teaches the anatomy, the five touch types and the sequence, one session at a time. Live GPS Mode walks you through it step by step with timers, on a black screen built to be read in a dark room. Work through Learn Mode first — each session you complete unlocks the matching GPS session.'
  ],
  zones:[
    { z:'A', n:'Clitoris', color:'#ef4444',
      loc:'The visible glans, plus the internal body and legs extending several centimetres under the surface on either side. Most men only know about the glans — the structure is far larger than what you can see.',
      sens:'Highest. Roughly 8,000 nerve endings in the glans alone.',
      touch:'Circular or side-to-side, flat pad of the finger. Approach through the hood first.',
      pressure:3, speed:2,
      tip:'Direct contact too early is painful rather than pleasurable. Always come through the hood.' },
    { z:'B', n:'Inner Labia', color:'#f97316',
      loc:'The inner folds on either side of the opening, running from the hood down toward the perineum.',
      sens:'High, and consistently underestimated.',
      touch:'Stroking along the length, or light pulsing between two fingers.',
      pressure:2, speed:2,
      tip:'This is the bridge between the warmup and Zone A. Skipping it is why the warmup often fails.' },
    { z:'C', n:'Vaginal Entrance', color:'#eab308',
      loc:'The first third inside the opening. Nerve density is concentrated here and drops sharply deeper in.',
      sens:'High at the entrance, decreasing with depth.',
      touch:'Shallow circling at the opening with one finger, or slow shallow entry.',
      pressure:2, speed:1,
      tip:'Depth adds almost nothing here. The first third is where the nerves are.' },
    { z:'D', n:'G-Spot', color:'#22c55e',
      loc:'2 to 3cm inside on the front wall, toward the navel. The texture is slightly ridged and noticeably different from the smooth tissue around it.',
      sens:'Different in kind rather than degree — pressure rather than light touch.',
      touch:'Two fingers, pads up, come-hither motion.',
      pressure:4, speed:2,
      tip:'This is the one zone that wants firm. Light touch here does nothing.' },
    { z:'E', n:'Perineum', color:'#3b82f6',
      loc:'External, between the vaginal opening and the anus.',
      sens:'Moderate alone, significant in combination.',
      touch:'Flat, static pressure with two fingers or the base of the thumb.',
      pressure:3, speed:1,
      tip:'Almost always ignored. Add it as a third point during the final build and the difference is obvious.' }
  ],
  learn:[
    { s:1, name:'The Foundation — Understanding Her Anatomy', body:[
      'Before any technique, you need an accurate map. Most men operate from a diagram with one landmark on it, and that is the root of nearly every mistake in this module.',
      'There are five zones that matter. They are laid out in the Zone Map on this screen — open it alongside this session and read them together.',
      'Zone A is the clitoris. The critical correction here: what you can see is a fraction of the structure. The glans sits at the top, but the body and two internal legs extend several centimetres backward under the surface on either side of the opening. This is why internal stimulation on the front wall works at all — you are pressing on the internal portion of the same organ from the other side.',
      'Zone B is the inner labia. Highly sensitive, and the most commonly skipped zone in the entire sequence. It is the natural bridge between the warmup and Zone A. Men who go from thighs straight to the clitoris consistently find the response weaker, and this missing step is usually why.',
      'Zone C is the entrance, specifically the first third. Nerve density is concentrated there and falls away sharply with depth. Depth is far less useful than most men assume.',
      'Zone D is the front wall, 2 to 3cm in, toward the navel. You will feel a change in texture — slightly ridged against the smoother tissue around it. This zone is the exception to every pressure rule in this module: it wants firm, not light.',
      'Zone E is the perineum, external, below the opening. Modest on its own. Used as a third contact point during the final build, it is one of the highest-leverage additions available.',
      'Spend a session simply knowing where these are. Everything from here builds on that.'
    ]},
    { s:2, name:'The Touch Spectrum', body:[
      'Five distinct touch types. Each has a purpose and a moment. Using the wrong one at the right time is as ineffective as using the right one at the wrong time.',
      'FEATHER — almost no pressure, fingertips only, slow and slightly irregular. Pressure 1 of 5, speed 1 of 5. Purpose: to provoke and to wake the area up. Used in the warmup, and returned to briefly after climax.',
      'CIRCULAR — flat pad of the finger, steady rotation, consistent pressure. Pressure 3 of 5, speed 2 of 5. Purpose: to build. This is the workhorse of Zone A and where most of the session time is spent.',
      'PULSING — rhythmic pressure with no movement across the surface. Press, release, press, release. Pressure 3 of 5, speed 3 of 5. Purpose: to intensify a specific zone without the escalation that faster movement causes.',
      'STROKING — linear movement with progressive pressure, starting light and building through the stroke. Pressure 2 rising to 4, speed 2 of 5. Purpose: transitions between zones. Never arrive at a new zone abruptly.',
      'VIBRATING — rapid small tremor of two fingers, minimal travel. Pressure 2 of 5, speed 5 of 5. Purpose: the final approach to climax only. Used early it overwhelms rather than builds.',
      'Practical exercise: practise each of the five on the inside of your own forearm for 30 seconds. The skin there has similar sensitivity to several of her zones, and you will immediately discover that what you thought was light pressure is not light at all. Almost every man is heavier than he believes.'
    ]},
    { s:3, name:'The Warmup — First 60 Seconds', body:[
      'The single rule of the warmup: never begin at the most sensitive point. Begin far away and arrive.',
      'The sequence is inner thighs, then Zone E, then Zone B, then Zone A. Ten to fifteen seconds in each area. That is the whole first minute.',
      'Pressure starts at 1 out of 5 and rises to 2 by the time you reach Zone A. Touch type starts as feather and progresses to stroking as you move between zones.',
      'Inner thighs, 15 seconds. Both hands, feather touch, slow upward strokes. You are not aiming for arousal here — you are establishing contact and building anticipation of where your hands are heading.',
      'Zone E, 15 seconds. Flat, light pressure. No movement, or very slow circles. This zone being touched at all is unexpected for most women, and the surprise itself contributes.',
      'Zone B, 15 seconds. Stroking along the length of the inner labia. Still light. You are now adjacent to Zone A without having touched it, which is precisely the position you want.',
      'Zone A, 15 seconds. Through the hood, not direct. Feather to light circular. Pressure 2 of 5.',
      'Three things run underneath all of it: breathe slowly and audibly — your breathing rate influences hers; make eye contact at least once; and say something. Silence reads as concentration on a task rather than presence.'
    ]},
    { s:4, name:'The Build — Minutes 1 to 3', body:[
      'The warmup ends and the build begins. Zone A becomes the focus, with Zone B in support.',
      'The core pattern: circular motion on the clitoris through or just beside the hood. Speed 2 of 5. Pressure 3 of 5. Find that rhythm and hold it without variation.',
      'This is where the most common error in the entire module occurs. When something starts working, men instinctively escalate — faster, harder, or a change of technique. Escalation at this point breaks the build. Her response means what you are doing is correct, so the correct action is to keep doing exactly that.',
      'Reading her signals. Breathing is the most reliable: it shortens and quickens as arousal rises. Hips beginning to move into your hand rather than away is a clear positive. Tension appearing in the thighs and calves means the build is real. Vocalisation is the least reliable indicator — some women are loud early and some are silent until the end.',
      'When to increase speed: only when two or more of those signals intensify together and hold. When to maintain: every other time. If you are unsure, maintain. Maintaining has never cost anyone an orgasm; escalating early has cost many.',
      'Introduce pulsing here. Thirty seconds of circular, then ten seconds of pulsing in place, then back to circular. This adds variation without changing the fundamental rhythm — the variation is in the pressure pattern, not the pace.',
      'Zone B stays involved throughout. Your other hand rests there with light stroking. Two points of contact produce a noticeably stronger build than one.'
    ]},
    { s:5, name:'The Internal Game — Finding the G-Spot', body:[
      'Internal work begins around minute three, once external arousal is clearly established. Going internal before that is the second most common error in this module.',
      'Hand position: palm facing up, middle finger alone or index and middle together. Palm up is non-negotiable — the target is on the front wall, and any other orientation points you at the wrong surface.',
      'Entry: slowly, with lubrication, never forced. If there is resistance, you are early. Return to external work for another minute and try again.',
      'Locating Zone D: 2 to 3cm in, on the front wall, in the direction of the navel. You are feeling for a change in texture — slightly ridged, firmer, distinctly different from the smooth tissue surrounding it. It becomes easier to find as arousal increases, because it swells.',
      'The movement: come-hither. Curl your fingers toward yourself, as though beckoning. Slow. Pressure 4 of 5 — this zone wants firm, and light touch here genuinely does nothing.',
      'The combination that matters: Zone D internally with your first hand, Zone A externally with your second, simultaneously. Each keeps its own rhythm. Do not try to synchronise them — the rhythms are different and the independence is part of why it works.',
      'Why this produces the strongest response: you are stimulating the internal legs of the clitoris through the front wall while stimulating the glans externally. Two surfaces of the same organ at once. This is the mechanism, and it is why the combination outperforms either alone by a wide margin.',
      'Coordinating two independent motions with two hands is the hardest physical skill in this module. It takes practice. It is worth all of it.'
    ]},
    { s:6, name:'The Climax — Reading and Riding the Wave', body:[
      'Signs she is close: breathing becomes irregular rather than simply fast. Thighs tense and often begin to close. Vocalisation changes character or stops entirely. You may feel involuntary contractions around your fingers if you are internal. Her hips may go still rather than moving more.',
      'The number one rule, and it is worth more than every technique in this module combined: when she is close, change NOTHING. Not speed, not pressure, not position, not hand. Nothing.',
      'This is where most men lose it. The instinct at the moment of clear response is to give more — and more is what breaks the chain. She is responding to a specific pattern. Alter the pattern and the build resets.',
      'Steady state: lock the pattern and hold it like a machine for 30 to 60 seconds. Your arm will get tired. Do it anyway. This single discipline is the difference between almost and finished.',
      'During the orgasm: maintain contact but reduce pressure slightly. Sensitivity increases enormously at the peak and the pressure that felt perfect five seconds earlier becomes too much. Reduce, do not stop.',
      'Multiple orgasms: pause entirely for 5 to 10 seconds after the first, keeping light contact. Then resume at pressure 2 of 5 and rebuild. The second build is usually much shorter than the first. Many women can do this two or three times; some cannot at all, and pushing when the answer is no is unpleasant for both of you.',
      'Aftershocks: very light feather touch in the 30 seconds after climax can trigger a chain of smaller involuntary contractions. Feather only. Anything firmer at that moment is uncomfortable.'
    ]},
    { s:7, name:'The Complete Sequence', body:[
      'Everything assembled, minute by minute.',
      '0:00 to 1:00 — Warmup. Inner thighs, Zone E, Zone B, Zone A. Feather progressing to stroking. Pressure 1 rising to 2.',
      '1:00 to 3:00 — External build. Zone A circular at speed 2, pressure 3, with Zone B in support. Pulsing intercalated every 30 seconds. No escalation.',
      '3:00 to 5:00 — Internal introduction. Enter slowly, locate Zone D, come-hither at pressure 4. External contact continues lightly throughout the transition — never remove both hands at once.',
      '5:00 to 7:00 — The double combination. Zone D and Zone A simultaneously, independent rhythms. This is the core of the session.',
      '7:00 onward — Climax ride. Lock the pattern. Steady state. Change nothing. Reduce pressure slightly at the peak.',
      'For a 10-minute session: extend the external build to 4 minutes and the double combination to 3. Longer builds produce stronger finishes — the extra time goes into the middle, never the warmup.',
      'For 15 minutes: add a deliberate pause at minute 8. Ease pressure, not rhythm, for 10 seconds, then resume identically. One pause. Resuming identically is the entire technique.',
      'For 20 minutes: two pauses, at minutes 9 and 14, and extend the warmup to 2 minutes.',
      'Transitioning to penetration: the window is the 60 to 90 seconds immediately after the manual orgasm, while contractions are still occurring and sensitivity is high but no longer peaked. Move without breaking contact — keep one hand on her while you reposition. Breaking all contact resets arousal significantly.',
      'The best positions to enter immediately afterward are the ones that require the least repositioning: her on her back with hips elevated, or side by side. Anything that involves her getting up and turning over costs you the window.'
    ]}
  ],
  gps:[
    { s:1, name:'Warmup — external only', steps:[
      ['Inner thighs. Both hands.\nFeather touch. Stroke slowly upward.',30],
      ['Same, other direction.\nDownward from hip to knee. Barely touching.',25],
      ['The crease where thigh meets hip.\nOne finger. Trace it slowly.',25],
      ['Flat palm. Lower abdomen.\nSlow, wide circles.',20],
      ['Move to Zone E.\nTwo fingers. Light circular motion.\nPressure: 1 of 5.',20],
      ['Zone E. Hold still.\nFlat pressure. No movement.',15],
      ['Zone B. Inner labia.\nStroking along the length. Feather.',30],
      ['Zone B. Light pulsing between two fingers.\nNo movement across the surface.',20],
      ['Zone A, through the hood only.\nLight circular. Pressure 2 of 5.',25],
      ['Stop completely.\nHands resting on her thighs.\nLet her register the absence.',15],
      ['Return to Zone B.\nStroking. Lighter than before.',30]
    ]},
    { s:2, name:'External build — touch variations', steps:[
      ['Quick warmup. Inner thighs, feather.',20],
      ['Zone B. Stroking, building pressure through each stroke.',25],
      ['Zone A through the hood.\nCircular. Speed 2. Pressure 3.\nFind the rhythm.',45],
      ['Hold that exact rhythm.\nDo not change anything.',45],
      ['Switch to pulsing in place.\nNo movement across the surface.',20],
      ['Back to circular. Same rhythm as before.',45],
      ['Side-to-side instead of circular.\nCompare her response.',30],
      ['Return to whichever got the stronger response.',45],
      ['Add your other hand at Zone B.\nLight stroking. Two points of contact.',40],
      ['Both hands. Hold everything steady.',60],
      ['Ease pressure to 2 of 5. Keep the rhythm.',20],
      ['Return to pressure 3. Identical rhythm.',45]
    ]},
    { s:3, name:'Introducing internal', steps:[
      ['Warmup. Thighs to Zone B. Feather to stroking.',40],
      ['Zone A. Circular. Speed 2, pressure 3.\nBuild until her breathing changes.',60],
      ['Keep going. Do not escalate on her response.',45],
      ['Zone C. One finger at the entrance.\nShallow circling. Do not go deeper.',30],
      ['Still Zone C. Slow, shallow entry and withdrawal.\nFirst third only.',30],
      ['Two fingers. Palm up. Enter slowly.\nNo movement yet.',20],
      ['Feel for Zone D. Front wall, 2-3cm in.\nTexture is slightly ridged.',25],
      ['Found it. Slow come-hither motion.\nPressure 4 of 5. Firm.',45],
      ['Same motion. Slightly firmer.',45],
      ['Hold steady. Do not speed up.',60],
      ['Withdraw slowly. Return to Zone A externally.\nCircular, pressure 2.',40]
    ]},
    { s:4, name:'The double combination', steps:[
      ['Warmup, abbreviated. Thighs and Zone B.',30],
      ['Zone A. Circular. Speed 2, pressure 3.',45],
      ['Keep building. Wait for clear escalation.',45],
      ['Enter with two fingers, palm up.\nLocate Zone D.',25],
      ['Come-hither at Zone D. Pressure 4.\nOther hand stays off for now.',40],
      ['Now add Zone A with your other hand.\nLight circular. Pressure 2.',30],
      ['Both zones. Independent rhythms.\nDo not synchronise them.',60],
      ['Hold both. This is the core combination.',60],
      ['Increase Zone A to pressure 3.\nZone D unchanged.',45],
      ['Hold everything. Change nothing.',60],
      ['Keep going. Your arm will tire. Continue.',60],
      ['Ease Zone A slightly. Keep Zone D firm.',25]
    ]},
    { s:5, name:'Climax technique and timing', steps:[
      ['Full warmup. Thighs, Zone E, Zone B, Zone A.',45],
      ['Zone A. Circular, speed 2, pressure 3. Build.',60],
      ['Enter. Locate Zone D. Come-hither, pressure 4.',30],
      ['Both zones together. Independent rhythms.',60],
      ['Watch for: irregular breathing, thighs tensing.',45],
      ['If those signs appear — CHANGE NOTHING.\nLock the pattern exactly as it is.',60],
      ['Steady state. Like a machine.\nDo not speed up. Do not press harder.',60],
      ['Still holding. This is the hard part.',45],
      ['At the peak: reduce pressure slightly.\nKeep contact. Do not stop.',30],
      ['Pause. Light contact only.\nWait.',10],
      ['Resume at pressure 2 of 5. Rebuild slowly.',45],
      ['Feather touch only. Aftershocks.',30]
    ]},
    { s:6, name:'Complete sequence — 7 minutes', steps:[
      ['Inner thighs. Feather. Both hands.',20],
      ['Zone E. Flat pressure, light circles.',15],
      ['Zone B. Stroking along the length.',15],
      ['Zone A through the hood. Light circular.',15],
      ['Build. Zone A circular, speed 2, pressure 3.',60],
      ['Pulsing for ten seconds, then back to circular.',30],
      ['Zone B with your other hand. Two contact points.',30],
      ['Enter slowly. Locate Zone D.',25],
      ['Come-hither, pressure 4. External hand light on Zone A.',45],
      ['Double combination. Both rhythms independent.',60],
      ['Add Zone E with your thumb. Three points.',45],
      ['Hold everything. Steady state.',60],
      ['Change nothing. Ride it out.',45],
      ['Reduce pressure at the peak. Maintain contact.',20]
    ]},
    { s:7, name:'Advanced — 10+ minutes with pauses', steps:[
      ['Extended warmup. Inner thighs, unhurried.',40],
      ['Zone E, then Zone B. Feather to stroking.',40],
      ['Zone A through the hood. Pressure 2.',30],
      ['Build. Circular, speed 2, pressure 3.',60],
      ['Hold the rhythm. No escalation.',60],
      ['Pulsing variation, then back.',30],
      ['Enter. Zone D. Come-hither, pressure 4.',40],
      ['Double combination. Both hands working.',60],
      ['PAUSE — ease pressure, keep rhythm. Hold back.',10],
      ['Resume EXACTLY as before. Nothing changed.',60],
      ['Add Zone E. Three contact points.',45],
      ['Hold all three. Steady.',60],
      ['PAUSE again. Ten seconds. Same as before.',10],
      ['Resume identically. Do not improvise.',60],
      ['Steady state to the finish. Change nothing.',60],
      ['At the peak: lighter pressure, keep contact.',25],
      ['Feather only. Aftershocks.',30]
    ]}
  ],
  extras:[
    { h:'Common Mistakes', p:[
      'Going too fast, too early. Arousal is a ramp, not a switch. The first minute done properly is worth more than three minutes of intensity applied to someone who is not ready.',
      'Changing the pattern when she is close. This is the big one. Her response is feedback that the current pattern is correct — so escalating is the one action guaranteed to break it. When it is working, do exactly that, unchanged.',
      'Skipping the warmup. Men treat it as a formality to get through. It is the part that makes everything after it work, and the response difference between a proper warmup and a rushed one is enormous.',
      'Too much pressure at the start. Almost every man is heavier than he thinks. Practise the five touch types on your own forearm and you will recalibrate immediately.',
      'Treating all of this as a preliminary to penetration. It is not a warmup act. For most women it is the main event, and for the ones where it is not, it is still what makes the rest work.'
    ]},
    { h:'Communication Guide', p:[
      'Asking for feedback without breaking the mood is a skill. The rule: closed questions, not open ones. "Does this feel good?" forces her to compose an answer. "Harder or softer?" takes one word.',
      '"Harder or softer?" — the most useful question you can ask, and the easiest to answer.',
      '"Faster or the same?" — offers only two options, and one of them is the correct answer most of the time.',
      '"Here?" — while moving slightly. Almost no cognitive load.',
      '"Tell me when." — sets up the steady state. Now you know when to lock the pattern.',
      '"Do not move." — said while you are holding a pattern that is working. Keeps her still, keeps the contact consistent, and reads as confidence.',
      'What not to say: anything that requires her to evaluate your performance. "Is this okay?" and "Am I doing it right?" both move her attention from sensation to reassuring you, and that is the end of the build.'
    ]},
    { h:'After the Orgasm', p:[
      'The two minutes after matter more than most men realise, both for her experience and for what happens next.',
      'First 20 seconds: maintain light contact but stop all movement. Her sensitivity is at maximum and anything active is uncomfortable. A flat, still hand is right.',
      '20 to 60 seconds: very light feather touch can trigger aftershocks — small involuntary contractions that extend the experience. Feather only. If she pulls away, stop entirely.',
      '60 seconds onward: full body contact rather than genital contact. Hand on her stomach, chest, or hip. This is where the intimacy that she remembers actually happens, and it is the part men skip fastest.',
      'Say something. Not a question about performance — an observation. The silence after is read as either presence or absence, and which one it is depends entirely on whether you speak.',
      'For round two: the window is roughly 2 to 5 minutes out, once sensitivity drops back to normal. Rebuild from Zone B at pressure 2, not from Zone A at the pressure that worked before. The second build is faster but it still needs a build.'
    ]}
  ]
},

/* ============ FLOOD PROTOCOL ============ */
{
  id:'flood', title:'Flood Protocol', icon:'💧',
  sub:'14-Day Volume Reset — hydration, minerals and contraction training.',
  tracker:{ key:'flood_protocol_progress', days:14, label:'Day complete' },
  intro:[
    'Seminal volume is not fixed. It is the output of a production system — prostate, seminal vesicles, and the fluid balance that supplies both — and like any system, it scales down when it is not used and scales back up when it is given what it needs.',
    'Four things drive the decline. Years of erectile difficulty teach the body that the machinery is not needed, and production downregulates accordingly. Chronic dehydration removes the raw material, since the fluid is mostly water. Zinc depletion, which affects a large share of men over 40, limits the synthesis directly. And a sedentary pelvis reduces the circulation and muscular tone that the expulsive contractions depend on.',
    'Fourteen days is enough to reverse all four, because none of them require rebuilding tissue — they require restocking and reactivating. The protocol works three levers daily: a rising hydration target, a rotating set of specific micronutrients from ordinary food, and a contraction technique that trains the expulsive muscles rather than general pelvic strength. Every day is different, and every day builds on the one before.'
  ],
  shopping:{ note:'Under $50 for the full 14 days',
    groups:[
      ['Protein',['Eggs (2 dozen)','Red meat, grass-fed (500g)','Chicken breast (500g)','Salmon or sardines (400g)','Oysters or mussels, if available']],
      ['Vegetables',['Spinach (2 bags)','Broccoli (1 head)','Asparagus (1 bunch)','Tomatoes (6)','Celery (1 bunch)','Sweet potatoes (3)','Garlic (1 head)']],
      ['Fruit',['Blueberries (2 punnets)','Bananas (1 bunch)','Avocados (3)','Lemons (4)']],
      ['Nuts & seeds',['Pumpkin seeds (1 bag)','Brazil nuts (small bag)','Peanuts (1 bag)','Walnuts (1 bag)']],
      ['Other',['Oats (1 bag)','Dark chocolate 70%+ (1 bar)','Honey (1 jar)','Extra virgin olive oil','Green tea (1 box)','Coconut water (1L)']]
    ]},
  days:[
    { d:1, name:'Baseline', water:3.0,
      foods:[['2 boiled eggs','Lecithin — the compound most directly tied to fluid volume'],['A handful of pumpkin seeds','Zinc, the rate-limiting mineral in production'],['1 banana','Potassium, for the fluid balance side']],
      tech:{ name:'Kegel hold', d:'Contract the PC muscle — the one that stops urine mid-stream. Hold 5 seconds, release 5 seconds. Ten repetitions.', t:120 },
      avoid:['Alcohol','More than one coffee','Processed food'],
      note:'Your body needs water to produce seminal fluid, and most men are chronically dehydrated without ever feeling thirsty.' },
    { d:2, name:'Zinc Load', water:3.0,
      foods:[['100g red meat','Heme zinc — absorbed several times better than plant sources'],['Raw spinach','Folate, required for cell division in production'],['3 Brazil nuts','Selenium. Three, not more — the useful window is narrow']],
      tech:{ name:'Reverse Kegel', d:'The opposite motion: consciously relax and gently push outward. 5 seconds of tension, then 5 seconds of deep release. Ten repetitions.', t:120 },
      avoid:['Soy — phytoestrogens','Long hot baths — heat suppresses production'],
      note:'Zinc is the mineral most commonly depleted in men over 40, and it sits directly in the synthesis pathway.' },
    { d:3, name:'Amino Boost', water:3.5,
      foods:[['Chicken breast','L-arginine, the precursor to nitric oxide'],['Oats','A second L-arginine source, absorbed more slowly'],['A handful of peanuts','The densest L-arginine source in the list']],
      tech:{ name:'Deep belly breathing', d:'4 seconds in, 4 second hold, 4 seconds out. Two minutes. Oxygenates the pelvic region and lowers cortisol.', t:120 },
      avoid:['Tight underwear — switch to boxers','Sitting for more than an hour without standing'],
      note:'Hydration steps up today. The target rises across the protocol rather than starting at peak.' },
    { d:4, name:'Antioxidant Surge', water:3.5,
      foods:[['1 cup blueberries','Polyphenols that protect sperm and fluid from oxidative damage'],['Cooked tomato','Lycopene — more available cooked than raw, one of the few foods where heat helps'],['Broccoli','Sulforaphane, which activates your own antioxidant defences']],
      tech:{ name:'Pelvic floor stretch', d:'Deep bodyweight squat, heels down, held for 30 seconds. Rest 10. Four rounds. Decompresses a pelvic floor shortened by sitting.', t:160 },
      avoid:['Pornography — preserve dopamine sensitivity','Refined sugar'],
      note:'Oxidative damage is the main threat to what you are rebuilding. Today is defence.' },
    { d:5, name:'Lecithin Day', water:3.5,
      foods:[['2 whole eggs with the yolk','The yolk is where the lecithin is — whites alone do nothing here'],['Avocado','Fat for hormone production'],['Salmon','Omega-3 for cell membrane quality']],
      tech:{ name:'Testicular massage', d:'Gentle circular massage with the flat of the fingers, light pressure, two minutes total. Stimulates local circulation and production. Stop if there is any discomfort.', t:120 },
      avoid:['Stress — make today a low-demand day if you can','Skipping meals'],
      note:'Lecithin is the compound most directly associated with volume. Today is the highest-leverage food day of week one.' },
    { d:6, name:'Mineral Recharge', water:4.0,
      foods:[['Oysters or mussels — or red meat with pumpkin seeds','The densest zinc available in any food'],['Asparagus','Folate and vitamin E together'],['2 squares dark chocolate 70%+','Magnesium and zinc, and it makes the day tolerable']],
      tech:{ name:'Edging practice', d:'Bring arousal to roughly 80%, stop completely, breathe deeply, let it fall to 50%. Repeat three times. Trains control and increases the volume of the next ejaculation.', t:180 },
      avoid:['Ejaculating to completion — start accumulating','Alcohol'],
      note:'Peak hydration day. 4L is the highest target in the protocol — finish the bulk by early evening.' },
    { d:7, name:'Halfway Assessment', water:3.5,
      foods:[['Your best day so far, repeated','Consolidation — pick whichever foods you tolerated best'],['2 eggs','The constant across the whole protocol'],['Pumpkin seeds','Same']],
      tech:{ name:'Kegel and breathing combo', d:'Contract for 5 seconds while exhaling slowly, release for 5 while inhaling. Ten repetitions. Linking the two makes both more effective.', t:120 },
      avoid:['Alcohol — especially important entering week two','Late caffeine'],
      note:'Most men notice the first visible change between Day 5 and Day 8. If you have not yet, stay the course — the second week is where the majority of it happens.' },
    { d:8, name:'Testosterone Fuel', water:3.5,
      foods:[['Grass-fed red meat','Zinc and cholesterol, the precursor for testosterone'],['Sweet potato','Vitamin A, required for spermatogenesis'],['Raw garlic, 1 clove','Shown to support testosterone in several studies']],
      tech:{ name:'Cold exposure', d:'Cold water directed at the testicles for 30 seconds at the end of your shower. Heat suppresses production; cold does the opposite.', t:30 },
      avoid:['Soy products','Lavender in body products — a known endocrine disruptor'],
      note:'Week two shifts from restocking to driving production. The food gets denser from here.' },
    { d:9, name:'Omega Boost', water:3.5,
      foods:[['Salmon or sardines','Omega-3 for membrane fluidity'],['Walnuts','Plant omega-3, and the only nut with a meaningful amount'],['Extra virgin olive oil','Use it generously — polyphenols plus healthy fat']],
      tech:{ name:'Hip circles and Kegels', d:'Wide hip rotations, 10 in each direction, for mobility and blood flow. Follow with 10 Kegel holds of 5 seconds.', t:150 },
      avoid:['Fried food — trans fats damage sperm quality','Sitting all evening'],
      note:'Membrane quality affects both fluid consistency and motility. This is a quiet day that matters more than it looks.' },
    { d:10, name:'Volume Stack', water:4.0,
      foods:[['2 eggs','Lecithin'],['Pumpkin seeds','Zinc'],['Asparagus','Folate'],['Blueberries','Antioxidant protection for all of the above']],
      tech:{ name:'Full pelvic circuit', d:'Kegels for 1 minute, reverse Kegels for 30 seconds, deep breathing for 30 seconds. No pause between them — run it as one continuous circuit.', t:120 },
      avoid:['Prolonged heat in the area — no sauna, no hot baths','Skipping the hydration target'],
      note:'Today stacks everything that worked in the first nine days into a single day. Second peak hydration day.' },
    { d:11, name:'The Celery Secret', water:3.5,
      foods:[['Raw celery, plus 200ml celery juice','Contains androsterone, and is traditionally linked to seminal fluid volume'],['Spinach','Folate again — it is used continuously'],['3 Brazil nuts','Selenium, second dose of the protocol']],
      tech:{ name:'Testicular massage, firmer', d:'Same circular massage as Day 5, with slightly more pressure. Two minutes. Still stop at any discomfort.', t:120 },
      avoid:['Caffeine after 2pm — it costs you the deep sleep that hormone production depends on','Alcohol'],
      note:'Celery is the one item in this protocol most men have never associated with this. Include the juice if you can.' },
    { d:12, name:'Prostate Support', water:3.5,
      foods:[['Cooked tomato','Lycopene, the most studied nutrient for prostate health'],['Pumpkin seeds','Zinc concentrates in prostate tissue specifically'],['1 cup green tea','EGCG — drink it between meals, not with them']],
      tech:{ name:'Glute bridges', d:'Lie on your back, knees bent, lift the hips and hold 3 seconds at the top. Fifteen repetitions. Improves circulation through the prostate region.', t:150 },
      avoid:['Long periods sitting — stand every 30 minutes today','Processed food'],
      note:'The prostate produces a large share of seminal fluid. This day is aimed squarely at it.' },
    { d:13, name:'Pre-Finale', water:4.0,
      foods:[['2 eggs','Lecithin'],['Red meat','Zinc'],['Pumpkin seeds','More zinc'],['Leafy greens','Folate'],['Blueberries and dark chocolate','Antioxidants and magnesium']],
      tech:{ name:'Advanced edging', d:'Four cycles instead of three. Take arousal to 80%, stop, breathe down to 50%, repeat. Builds maximum tolerance.', t:240 },
      avoid:['Ejaculating — accumulate for tomorrow','Alcohol','Late night'],
      note:'Tomorrow is Day 14. Everything you have done for thirteen days has been building to it. Your body is ready.' },
    { d:14, name:'The Flood', water:3.5,
      foods:[['Fruit','Light and hydrating — nothing heavy today'],['2 eggs','The last lecithin dose'],['A handful of nuts','Minerals, easy to digest']],
      tech:{ name:'Final circuit', d:'Kegels for 1 minute, deep breathing for 1 minute, pelvic stretch for 1 minute. Three minutes, as one sequence.', t:180 },
      avoid:['Heavy meals','Alcohol','Anything processed'],
      note:'The protocol is complete. Your body has been replenished, rehydrated and reactivated. Tonight, when you finish, you will feel the difference. And she will see it.' }
  ],
  sections:[
    { h:'The Science', p:[
      'Seminal fluid is produced by three sources: the seminal vesicles contribute roughly 65 to 70 percent, the prostate around 25 to 30 percent, and the testes a small remainder. It is approximately 96 percent water. Every one of those percentages is a lever you can move.',
      'Chronic dehydration is the fastest lever and the most commonly pulled in the wrong direction. Most men operate at 2 to 3 percent below optimal hydration permanently, without ever registering thirst. Since the fluid is almost entirely water, that deficit translates directly into reduced output. This is why the hydration target in this protocol rises rather than starting high — you are refilling a reservoir that has been low for years.',
      'Zinc is the second lever. It concentrates in prostate tissue at higher levels than almost any other organ, and it is required for the synthesis of the fluid itself. Dietary zinc intake has fallen with reduced red meat and shellfish consumption and with soil depletion, leaving a large share of men over 40 in marginal status — not clinically deficient, but low enough to limit production.',
      'The third lever is disuse. After years of erectile difficulty, the body downregulates a system it is not being asked to use. Production slows, the muscles responsible for expulsion lose tone, and circulation through the region declines. The contraction technique in this protocol targets that directly: the contract-and-expel pattern trains the expulsive motion specifically, rather than the holding strength that standard Kegels build.',
      'Fourteen days works because none of this requires building new tissue. It requires refilling, restocking and reactivating — and all three respond on that timescale.'
    ]},
    { h:'Signs It Is Working', p:[
      'Clearer urine within the first 3 days. This is the hydration landing, and it is the first confirmation that the foundation is in place.',
      'A sensation of fullness or weight in the testicles, usually from day 4 or 5. This tends to arrive before any visible change and is the most reliable early indicator.',
      'More intense orgasms before volume visibly increases. The contraction training affects force before it affects quantity, and most men notice this around day 6 to 8.',
      'Visible volume change between day 5 and day 8 for the majority, and by day 10 to 12 for the rest. If you reach day 10 with no change, check your hydration honestly — it is almost always the hydration.',
      'Longer expulsion — more contractions rather than simply more fluid. This is the clearest sign the technique work has taken hold.'
    ]},
    { h:'Maintenance Mode', p:[
      'The full 14 days is a reset, not a permanent routine. Once you have done it, maintenance is far lighter.',
      'Run one week every three months. Use days 1, 3, 5, 6, 10, 12 and 14 from the protocol — those seven cover every mechanism without the redundancy built into the full version.',
      'Between resets, keep three habits: 3L of water daily, pumpkin seeds or red meat several times a week for zinc, and the contract-and-expel technique three times a week. That is the maintenance floor.',
      'If you notice volume dropping off, look at hydration first. It is responsible for the large majority of cases and it is the easiest to correct.',
      'A full 14-day repeat is worth doing once a year regardless, or before anything you particularly want to go well.'
    ]},
    { h:'FAQ', p:[
      'Day 3 and I see no difference. Is that normal? — Yes, and expected. Days 1 to 4 are rehydration and restocking; there is nothing to see yet. The first visible change is typically day 5 to 8.',
      'Can I drink alcohol during the protocol? — Avoid it for the full 14 days if you can. Alcohol is a diuretic, which works directly against the hydration foundation, and it suppresses the hormonal side as well.',
      'I skipped a day. Do I restart? — No. Resume where you left off. Nothing resets, and the accumulated effect of the days you did complete remains.',
      'Can I do this alongside the main HorseFil protocol? — Yes, they are complementary and the food lists overlap heavily. Run them together.',
      'Do I have to abstain the whole two weeks? — No. The protocol calls for accumulation on days 6 and 13 specifically. Outside those, normal frequency is fine.',
      'The hydration target feels like too much. — Finish the bulk by early evening. If you are waking at night to urinate, move the volume earlier in the day rather than reducing it.',
      'Can I repeat it immediately? — Wait at least three months. The reset works because the system was depleted; running it back to back gives you diminishing returns for the same effort.'
    ]}
  ]
},

/* ============ BONUS MODULES ============ */
{
  id:'sins', title:'The Johnny Sins Method', icon:'⏱️',
  sub:'Seven duration techniques, three positions and chemical-free control.',
  sections:[
    { h:'Why this works', p:[
      'Duration is not endurance of arousal. It is the skill of holding a narrow band — high enough to perform, low enough to stay below the ejaculatory threshold. Performers who last do not have different anatomy. They have trained the recognition of that threshold and a set of levers to step back from it.',
      'Everything here is a motor skill. It feels deliberate and clumsy for a couple of weeks, then it becomes automatic. Practise the techniques alone before you rely on them.'
    ]},
    { h:'Technique 1 — The arousal scale', p:[
      'Before anything else, learn to rate arousal 1 to 10 in real time. 7 is engaged and controllable. 8 is the last point you can comfortably step back from. 9 is the point of no return for most men.',
      'Spend one session doing nothing but naming the number to yourself. Almost every man discovers his 8 arrives earlier than he assumed, and that single realisation fixes more than any technique.',
      'The moment you cannot name the number, you are already at 9.'
    ]},
    { h:'Technique 2 — Breath as the brake', p:[
      'Arousal rises with breath rate. Shallow, fast breathing accelerates it; slow nasal breathing with a long exhale pulls it back. Four seconds in, eight out.',
      'This is the only lever that works in real time, mid-act, and is completely invisible to your partner. Everything else requires stopping.',
      'Decide in advance that at 8 you switch to the long exhale automatically, without deliberating.'
    ]},
    { h:'Technique 3 — The stop-start', p:[
      'At 8, stop moving entirely for 20 to 30 seconds while staying inside. Arousal drops to around 5. Resume.',
      'Done well this is invisible — it reads as a deliberate change of pace. Shift position or change what your hands are doing during the pause.',
      'Two or three of these across a session extends duration more than any endurance attempt.'
    ]},
    { h:'Technique 4 — The squeeze', p:[
      'Firm pressure just below the head for five seconds drops arousal sharply. It interrupts the reflex arc mechanically rather than through willpower.',
      'This is the emergency brake — it works when you have left it too late for breath alone. Learn it alone first so the pressure is calibrated: firm, never painful.',
      'Keep it in reserve. Relying on it every session means you are consistently misreading your 8.'
    ]},
    { h:'Technique 5 — Pelvic floor release', p:[
      'Most men unconsciously clench the pelvic floor as arousal rises, which accelerates everything. Deliberately relaxing it — a reverse Kegel — buys real time.',
      'This is counterintuitive, which is why it is the most underused technique on this list. Practise the release cold until you can do it without thinking.',
      'Pair it with the exhale. Long exhale plus pelvic release is the strongest combination you have.'
    ]},
    { h:'Technique 6 — Pace variation', p:[
      'Sustained identical rhythm builds arousal fastest. Deliberate variation — depth, speed, angle — resets the accumulation while keeping engagement high.',
      'It also happens to be substantially better for your partner than a metronome, so this technique pays twice.',
      'Change something every 60 to 90 seconds rather than waiting until you need to.'
    ]},
    { h:'Technique 7 — Attention redirection', p:[
      'Narrow, purely physical focus accelerates arousal. Widening attention — to her, to what your hands are doing, to the rhythm of breathing — slows it.',
      'This is not distraction. Thinking about work kills the erection. Redirecting attention to a different part of the same experience keeps it alive while lowering the intensity of input.',
      'Use this early, at 6 or 7. It is too weak a lever at 8.'
    ]},
    { h:'Position 1 — Her on top', p:[
      'The lowest-intensity position for the man: you control neither pace nor depth, and your pelvic floor stays relatively relaxed.',
      'Use it at the start to establish a long baseline, or after a stop-start to resume at lower intensity. For many men it adds ten minutes on its own.',
      'For less intensity, lie flat and stay passive. For more, meet her rhythm with your hips.'
    ]},
    { h:'Position 2 — Side by side', p:[
      'Both facing the same direction, close contact, shallow range of motion. The restricted range naturally limits intensity, and neither person carries their own weight.',
      'This is the position for when your hips or core are what is failing rather than your arousal — which is more common than most men realise.',
      'Adjust the angle of her top leg to change depth without changing pace.'
    ]},
    { h:'Position 3 — Edge of bed', p:[
      'She lies at the edge, you stand. Your legs and hips do the work rather than your core, and you control depth precisely.',
      'It also frees both hands, which matters for everything in the Orgasmic Massage module.',
      'A cushion under her hips changes the angle significantly — worth experimenting with once.'
    ]},
    { h:'The control method — no chemicals', p:[
      'Combine three things and practise them as one sequence: recognise 8 on the scale, switch to a four-eight breath, and release the pelvic floor. Fifteen seconds of that returns you to 6 without stopping.',
      'Practise the sequence alone three times a week during Phase 4 and 5 of the main protocol. Aim for the reaction to become automatic rather than considered.',
      'Nothing here requires a product, a cream or a pill. Numbing agents reduce sensation for both of you and train nothing.'
    ]}
  ]
},
{
  id:'positions', title:'7 Positions Guide', icon:'🧭',
  sub:'Seven positions with the angle each favours and how to adjust intensity.',
  sections:[
    { h:'How to use this', p:[
      'Each position below lists what it does mechanically, not just how it looks. Pick based on what you are trying to achieve — depth, angle, duration, or reduced fatigue — rather than novelty.',
      'Two or three positions used well beat seven used badly.'
    ]},
    { h:'1 — Classic, hips elevated', p:[
      'Positioning: she lies on her back with a cushion under the hips, knees bent toward the chest.',
      'Why it works: elevating the pelvis changes the angle of entry so contact is biased toward the front wall, where Zone D sits.',
      'Less intensity: lower the cushion and flatten her legs. More: draw the knees higher toward her shoulders.',
      'Rhythm: slow and shallow is more effective here than deep and fast.'
    ]},
    { h:'2 — Her on top, leaning forward', p:[
      'Positioning: she straddles and leans forward onto her hands or your chest.',
      'Why it works: the forward lean creates constant front-wall contact and lets her control depth and pace — she usually finds the angle faster than you would.',
      'Less: she sits more upright. More: she leans further forward and reduces the range of motion.',
      'Rhythm: let her set it entirely for the first few minutes.'
    ]},
    { h:'3 — Side by side, spooning', p:[
      'Positioning: both on the same side, you behind, her top knee drawn slightly forward.',
      'Why it works: shallow angle, full-body contact, both hands free. Lowest fatigue of any position for both people.',
      'Less: straighten her top leg. More: she draws the knee higher toward her chest.',
      'Rhythm: slow. This is not a position built for pace.'
    ]},
    { h:'4 — Edge of bed, standing', p:[
      'Positioning: she lies at the edge of the bed, you stand.',
      'Why it works: your legs carry the load instead of your core, so you can maintain it far longer, and depth control is precise.',
      'Less: she keeps her legs lower and wider. More: lift her ankles toward your shoulders.',
      'Rhythm: mid-pace, with deliberate pauses at depth.'
    ]},
    { h:'5 — Seated, facing', p:[
      'Positioning: you sit, she sits facing you, legs around your waist.',
      'Why it works: eye contact and full torso contact, with movement driven by small hip rocking rather than thrusting. Very low arousal escalation for the man.',
      'Less: reduce the rocking range. More: she leans back slightly, changing the angle.',
      'Rhythm: continuous small movement rather than strokes.'
    ]},
    { h:'6 — From behind, torso lowered', p:[
      'Positioning: she kneels with her chest lowered, hips high.',
      'Why it works: the deepest angle available, with strong front-wall contact on the withdrawal rather than the entry.',
      'Less: she raises her torso toward upright. More: she lowers further and arches.',
      'Rhythm: this position escalates arousal fastest for most men. Use the stop-start early.'
    ]},
    { h:'7 — Reclined, legs closed', p:[
      'Positioning: she lies on her back with legs together, you straddle outside her legs.',
      'Why it works: closed legs increase friction and contact without increasing depth — intensity for her without escalation for you.',
      'Less: she opens her legs slightly. More: she crosses her ankles.',
      'Rhythm: shallow and steady.'
    ]}
  ]
},
{
  id:'prolonged', title:'Prolonged Orgasm Method', icon:'🌊',
  sub:'Breathing, squeeze, start-stop and a five-minute daily control routine.',
  sections:[
    { h:'The 4-7-8 breath, adapted', p:[
      'Inhale through the nose for 4 seconds. Hold for 7. Exhale through the mouth for 8. Four rounds.',
      'The standard version is used for sleep. The adaptation here is to practise it at moderate arousal, so the pattern is available under the conditions where you need it. Most men can only do it calm, which is useless in the moment.',
      'Four rounds daily during Phase 4 — half at rest, half during arousal.'
    ]},
    { h:'The squeeze method, step by step', p:[
      '1. Bring arousal to roughly 8 out of 10.',
      '2. Stop all stimulation.',
      '3. Thumb on the frenulum, first two fingers on the opposite side just below the head.',
      '4. Squeeze firmly for 5 seconds. Firm, not painful.',
      '5. Release and wait 20 seconds. Arousal should fall to around 5.',
      '6. Resume. Up to three times per session.',
      'If you lose the erection entirely, you squeezed too hard or too long.'
    ]},
    { h:'The start-stop method', p:[
      'Simpler than the squeeze and better as a daily drill. Take arousal to 8, stop completely, wait until it falls to 4 or 5, resume.',
      'Three rounds per session, two to three sessions a week. The goal is not the rounds — it is learning precisely where your 8 sits, because that recognition is what transfers.',
      'Over six weeks, aim to hold at 8 for longer before stopping, rather than doing more rounds.'
    ]},
    { h:'Advanced Kegels for control', p:[
      'Long holds — contract 10 seconds, release 10, eight times. Builds the endurance that sustains pressure.',
      'Quick flicks — one contraction per second for 20 seconds, rest 20, four rounds. Trains the fast fibres responsible for rigidity spikes.',
      'Loaded holds — during arousal, hold 10 seconds without losing quality, five times. This is the version that actually transfers.',
      'Reverse Kegels — gently push out, hold 5, release. Eight times. Always last.'
    ]},
    { h:'The five-minute daily routine', p:[
      'Minute 1 — four rounds of 4-7-8 breathing.',
      'Minute 2 — eight long-hold Kegels.',
      'Minute 3 — four rounds of quick flicks.',
      'Minute 4 — eight reverse Kegels, slow.',
      'Minute 5 — diaphragmatic breathing, hand on belly, nothing else.',
      'Every day through Phases 4 and 5, then three times a week for maintenance. This is the highest-yield routine in the module list.'
    ]}
  ]
}
];
