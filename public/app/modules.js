/* HorseFil — bonus and premium module content. */

const BONUS = [
  {
    id:'sins', title:'The Johnny Sins Method', icon:'⏱️',
    sub:'Seven duration techniques, three positions and a control method that uses no chemicals.',
    sections:[
      { h:'Why this works', p:['Duration is not endurance of arousal. It is the skill of holding a narrow band — high enough to perform, low enough to stay below the ejaculatory threshold. Performers who last do not have different anatomy. They have trained the recognition of that threshold and a set of levers to step back from it.','Everything here is a motor skill. It feels deliberate and clumsy for a couple of weeks, then it becomes automatic. Practise the techniques alone before you rely on them.'] },
      { h:'Technique 1 — The arousal scale', p:['Before anything else, learn to rate arousal 1 to 10 in real time. 7 is engaged and controllable. 8 is the last point you can comfortably step back from. 9 is the point of no return for most men.','Spend one session doing nothing but naming the number out loud to yourself. Almost every man discovers his 8 arrives earlier than he assumed, and that single realisation fixes more than any technique.','Practical tip: the moment you cannot name the number, you are already at 9.'] },
      { h:'Technique 2 — Breath as the brake', p:['Arousal rises with breath rate. Shallow, fast breathing accelerates it; slow nasal breathing with a long exhale pulls it back. Four seconds in, eight out.','This is the only lever that works in real time, mid-act, and is completely invisible to your partner. Everything else requires stopping.','Practical tip: decide in advance that at 8 you switch to the long exhale automatically, without deliberating.'] },
      { h:'Technique 3 — The stop-start', p:['At 8, stop moving entirely for 20 to 30 seconds while staying inside. Arousal drops to around 5. Resume.','Done well this is invisible — it reads as a deliberate change of pace rather than an interruption. Shift position or change what your hands are doing during the pause.','Practical tip: two or three of these across a session extends duration more than any endurance attempt.'] },
      { h:'Technique 4 — The squeeze', p:['Firm pressure just below the head for five seconds drops arousal sharply. It interrupts the reflex arc mechanically rather than through willpower.','This is the emergency brake. It works when you have left it too late for breath alone. Learn it alone first so the pressure is calibrated — it should be firm, never painful.','Practical tip: keep it in reserve. Relying on it every session means you are consistently misreading your 8.'] },
      { h:'Technique 5 — Pelvic floor release', p:['Most men unconsciously clench the pelvic floor as arousal rises, which accelerates everything. Deliberately relaxing it — a reverse Kegel — buys real time.','This is counterintuitive, which is why it is the most underused technique on this list. Practise the release cold until you can do it without thinking.','Practical tip: pair it with the exhale. Long exhale plus pelvic release is the strongest combination you have.'] },
      { h:'Technique 6 — Pace variation', p:['Sustained identical rhythm builds arousal fastest. Deliberate variation — depth, speed, angle — resets the accumulation while keeping engagement high.','It also happens to be substantially better for your partner than a metronome, so this technique costs you nothing and pays twice.','Practical tip: change something every 60 to 90 seconds rather than waiting until you need to.'] },
      { h:'Technique 7 — Attention redirection', p:['Narrow, purely physical focus accelerates arousal. Widening attention — to her, to what your hands are doing, to the rhythm of breathing — slows it.','This is not distraction. Thinking about work kills the erection. Redirecting attention to a different part of the same experience keeps it alive while lowering the intensity of input.','Practical tip: use this early, at 6 or 7. It is too weak a lever at 8.'] },
      { h:'Position 1 — Her on top', p:['The lowest-intensity position for the man, because you control neither pace nor depth and your pelvic floor stays relatively relaxed.','Use it at the start of a session to establish a long baseline, or after a stop-start to resume at lower intensity. For many men it adds ten minutes on its own.','Variation: for less intensity, lie flat and stay passive. For more, meet her rhythm with your hips.'] },
      { h:'Position 2 — Side by side', p:['Both facing the same direction, close contact, shallow range of motion. The restricted range naturally limits intensity, and neither person carries their own weight, so fatigue is minimal.','This is the position to use when your hips or core are what is failing rather than your arousal — which is more common than most men realise.','Variation: adjust the angle of her top leg to change depth and angle without changing pace.'] },
      { h:'Position 3 — Edge of bed', p:['She lies at the edge, you stand. Your legs and hips do the work rather than your core, which changes which muscles fatigue and lets you control depth precisely.','It also frees both hands, which matters for everything in the Map of Female Pleasure module.','Variation: a cushion under her hips changes the angle significantly — worth experimenting with once.'] },
      { h:'The control method — no chemicals', p:['Combine three things and practise them as one sequence: recognise 8 on the scale, switch to a four-eight breath, and release the pelvic floor. Fifteen seconds of that returns you to 6 without stopping.','Practise the sequence alone three times a week during Phase 4 and 5 of the main protocol. Aim for the reaction to become automatic rather than considered.','Nothing here requires a product, a cream or a pill. Numbing agents reduce sensation for both of you and train nothing.'] }
    ]
  },
  {
    id:'positions', title:'7 Positions Guide', icon:'🧭',
    sub:'Seven positions with the angle each one favours, and how to adjust intensity in either direction.',
    sections:[
      { h:'How to use this', p:['Each position below lists what it does mechanically, not just how it looks. Pick based on what you are trying to achieve — depth, angle, duration, or reduced fatigue — rather than novelty.','Two or three positions used well beat seven used badly.'] },
      { h:'1 — Classic, hips elevated', p:['Positioning: she lies on her back with a cushion under the hips, knees bent toward the chest.','Why it works: elevating the pelvis changes the angle of entry so contact is biased toward the front wall, which is where the most responsive tissue sits.','Less intensity: lower the cushion and flatten her legs. More: draw the knees higher toward her shoulders.','Rhythm: slow and shallow is more effective here than deep and fast.'] },
      { h:'2 — Her on top, leaning forward', p:['Positioning: she straddles and leans forward onto her hands or your chest.','Why it works: the forward lean creates constant front-wall contact and lets her control both depth and pace, which usually means she finds the angle faster than you would.','Less: she sits more upright. More: she leans further forward and reduces the range of motion.','Rhythm: let her set it entirely for the first few minutes.'] },
      { h:'3 — Side by side, spooning', p:['Positioning: both on the same side, you behind, her top knee drawn slightly forward.','Why it works: shallow angle, full-body contact, and both hands free. Lowest fatigue of any position for both people.','Less: straighten her top leg. More: she draws the knee higher toward her chest.','Rhythm: slow. This is not a position built for pace.'] },
      { h:'4 — Edge of bed, standing', p:['Positioning: she lies at the edge of the bed, you stand.','Why it works: your legs carry the load instead of your core, so you can maintain it far longer, and depth control is precise.','Less: she keeps her legs lower and wider. More: lift her ankles toward your shoulders.','Rhythm: mid-pace, with deliberate pauses at depth.'] },
      { h:'5 — Seated, facing', p:['Positioning: you sit on a chair or the bed edge, she sits facing you, legs around your waist.','Why it works: eye contact and full torso contact, with movement driven by small hip rocking rather than thrusting. Very low arousal escalation for the man.','Less: reduce the rocking range. More: she leans back slightly, changing the angle.','Rhythm: continuous small movement rather than strokes.'] },
      { h:'6 — From behind, torso lowered', p:['Positioning: she kneels with her chest lowered, hips high.','Why it works: the deepest angle available, with strong front-wall contact on the withdrawal rather than the entry.','Less: she raises her torso toward upright. More: she lowers further and arches.','Rhythm: this position escalates arousal fastest for most men. Use the stop-start early.'] },
      { h:'7 — Reclined, legs closed', p:['Positioning: she lies on her back with legs together, you straddle outside her legs.','Why it works: closed legs increase friction and contact without increasing depth — useful when you want intensity for her without escalation for you.','Less: she opens her legs slightly. More: she crosses her ankles.','Rhythm: shallow and steady.'] }
    ]
  },
  {
    id:'prolonged', title:'Prolonged Orgasm Method', icon:'🌊',
    sub:'Breathing, squeeze, start-stop and a five-minute daily routine for ejaculatory control.',
    sections:[
      { h:'The 4-7-8 breath, adapted', p:['Inhale through the nose for 4 seconds. Hold for 7. Exhale through the mouth for 8. Four rounds.','The standard version is used for sleep. The adaptation here is to practise it at moderate arousal so the pattern becomes available under conditions where you actually need it — most men can only do it calm, which is useless in the moment.','Practise four rounds daily during Phase 4, half of them at rest and half during arousal.'] },
      { h:'The squeeze method, step by step', p:['1. Bring arousal to roughly 8 out of 10.','2. Stop all stimulation.','3. Place thumb on the frenulum, first two fingers on the opposite side just below the head.','4. Squeeze firmly for 5 seconds. Firm, not painful.','5. Release and wait 20 seconds. Arousal should fall to around 5.','6. Resume. Repeat up to three times per session.','If you lose the erection entirely you squeezed too hard or too long.'] },
      { h:'The start-stop method', p:['Simpler than the squeeze and better as a daily drill. Take arousal to 8, stop completely, wait until it falls to 4 or 5, resume.','Three rounds per session, two to three sessions a week. The goal is not the rounds — it is learning precisely where your 8 sits, because that recognition is what transfers to real conditions.','Progression: over six weeks, aim to hold at 8 for longer before stopping, rather than doing more rounds.'] },
      { h:'Advanced Kegels for control', p:['Three variations, done as one five-minute block:','Long holds — contract 10 seconds, release 10, eight times. Builds the endurance that sustains pressure.','Quick flicks — one contraction per second for 20 seconds, rest 20, four rounds. Trains the fast fibres responsible for rigidity spikes.','Loaded holds — during arousal, hold 10 seconds without losing quality, five times. This is the version that actually transfers.','Reverse Kegels — gently push out, hold 5, release. Eight times. Do these last, always.'] },
      { h:'The five-minute daily routine', p:['Minute 1 — four rounds of 4-7-8 breathing.','Minute 2 — eight long-hold Kegels.','Minute 3 — four rounds of quick flicks.','Minute 4 — eight reverse Kegels, slow.','Minute 5 — diaphragmatic breathing, hand on belly, nothing else.','Five minutes, every day through Phases 4 and 5, then three times a week for maintenance. This is the single highest-yield routine in the bonus modules.'] }
    ]
  },
  {
    id:'map', title:'Map of Female Pleasure', icon:'🗺️',
    sub:'Five zones, what each responds to, and the sequence that combines them.',
    sections:[
      { h:'Before the zones', p:['Two principles matter more than any specific technique. First, arousal in most women builds on a much longer ramp than in most men — starting at the intensity you would want is the most common error. Second, consistency beats variety once something is working; changing technique at the moment it starts working is the second most common error.','Read her response rather than the map. The map tells you where to look; she tells you what is true.'] },
      { h:'Zone A — Outer, indirect', p:['Location: inner thighs, the crease where thigh meets hip, the area surrounding rather than the centre.','Touch: light, slow, unhurried. Fingertips or the flat of the hand.','Pressure: minimal. Barely contact.','Rhythm: slow and irregular — predictability here reduces response.','Working when: her breathing changes and she moves toward your hand rather than away.','Spend far longer here than feels necessary. This is the ramp, and skipping it is why the later zones underdeliver.'] },
      { h:'Zone B — The hood and surrounding tissue', p:['Location: the tissue above and around the clitoris rather than the head itself.','Touch: circular, using the flat pad of the finger, through the hood rather than directly.','Pressure: light to moderate.','Rhythm: steady. Once you find a rhythm that works, do not change it.','Working when: her hips begin to move into the contact and breathing shortens.','Direct contact with the head is too intense for most women early. Approach it through the hood.'] },
      { h:'Zone C — Direct, once ready', p:['Location: the clitoris itself, only after Zone B has produced a clear response.','Touch: small circles or side-to-side. Side-to-side is tolerated at higher intensity than direct up-down for most women.','Pressure: moderate, consistent.','Rhythm: constant. This is where changing things loses the thread.','Working when: she becomes still and quiet, or grips. Both are signs to continue exactly as you are, not to escalate.'] },
      { h:'Zone D — Front wall, internal', p:['Location: two to three centimetres inside, on the front wall, toward the navel. The texture differs from the surrounding tissue.','Touch: two fingers, pads up, a beckoning motion.','Pressure: firm — this zone responds to pressure rather than lightness, unlike the others.','Rhythm: slow and firm, or a steady come-here motion.','Working when: combined with Zone C simultaneously, this is what produces the strongest response for most women.'] },
      { h:'Zone E — Perineum and surrounding', p:['Location: the area below the opening, external.','Touch: flat pressure with two fingers or the base of the thumb.','Pressure: firm and static rather than moving.','Rhythm: sustained pressure rather than motion.','Working when: used as a third point alongside C and D during the final build. On its own it is supporting, not primary.'] },
      { h:'The sequence', p:['Start at A and stay there twice as long as you think necessary — five to ten minutes is not excessive.','Move to B, find a rhythm, hold it unchanged for at least two minutes.','Move to C only when B has produced clear escalation. Keep the rhythm constant.','Add D alongside C. This combination is the core of the whole map.','Add E as steady pressure during the final build.','The single most common error from here on is speeding up or pressing harder when she responds. Response means what you are doing is correct — so keep doing exactly that.'] },
      { h:'Edging — the pause technique', p:['When she is close, ease off slightly — reduce pressure, not rhythm — for around ten seconds, then resume exactly as before.','Two or three of these before allowing the finish substantially increases intensity for most women.','The critical detail: resume identically. Changing technique after a pause loses the build entirely, which is why this technique fails when men improvise on the return.'] }
    ]
  },
  {
    id:'community', title:'Community', icon:'👥',
    sub:'Private group for the first 500 members.',
    sections:[
      { h:'Coming soon', p:['The private community is being set up. You will receive access by email at the address you used to purchase.','Access is limited to the first 500 members of the programme.'] }
      /* INSERIR LINK DA COMUNIDADE AQUI (Discord, Telegram, etc.) quando estiver pronto */
    ]
  }
];

/* ---- Premium modules ----
   UNLOCK CODES — trocar aqui quando definir os códigos finais. */
const PREMIUM_CODES = {
  accelerator: 'ACCELERATOR7X',
  massage:     'MASSAGE2025',
  flood:       'FLOOD14'
};

const PREMIUM = [
  {
    id:'accelerator', title:'7X Accelerator', icon:'⚡',
    sub:'A four-ingredient morning recipe that works the vasodilation pathway directly. 30-day tracker.',
    trackerDays:30, trackerKey:'accelerator_progress',
    sections:[
      { h:'The problem this addresses', p:['The vessels that fill an erection are among the smallest in the body — roughly a third the diameter of the coronary arteries. When circulation declines, they are affected first and most, which is why erectile difficulty often precedes cardiac symptoms by several years.','The main protocol rebuilds those vessels over months. This module works on the daily signal instead: how much nitric oxide is available on any given morning. It stacks with the protocol rather than replacing any part of it.'] },
      { h:'The four ingredients', p:['Beetroot — the highest dietary nitrate density available. Nitrate converts to nitrite to nitric oxide, the exact molecule that signals vessel dilation.','Raw garlic — allicin supports endothelial function and has a measurable effect on blood pressure. It only forms when garlic is crushed and rested for ten minutes before use.','Ginger — gingerols improve peripheral circulation specifically, which is the circulation that matters here.','Cayenne — capsaicin drives vasodilation and increases the sensation of warmth in the extremities within minutes.'] },
      { h:'The base recipe', p:['1 medium raw beetroot, peeled and chopped','1 clove raw garlic, crushed and rested 10 minutes','A thumb of fresh ginger','A pinch of cayenne — genuinely a pinch','Juice of half a lemon','200ml cold water','Blend everything for 45 seconds. Strain if you prefer it thinner. Drink it in one go.'] },
      { h:'When to take it', p:['On an empty stomach, in the morning, roughly 30 minutes before the main protocol work of the day.','Nitrate conversion takes 60 to 90 minutes to peak. If you are timing it around an encounter rather than the daily protocol, take it 90 minutes before.','Do not take it at night. It is mildly stimulating for most men and it works against the sleep priority of the main protocol.'] },
      { h:'Four weekly variations', p:['Week 1 — the base recipe as written.','Week 2 — replace the lemon with a green apple and add a handful of spinach. Sweeter, and stacks a second nitrate source.','Week 3 — replace the water with 150ml pomegranate juice and drop the apple. Adds polyphenols that protect the nitric oxide from degradation.','Week 4 — add 100g watermelon including some white rind. The rind is where citrulline concentrates, which supports the same pathway from a different direction.','Rotating stops it becoming unpleasant, which is the main reason men abandon it in week two.'] },
      { h:'Shopping list', p:['Beetroot — 7 per week','Garlic — 1 bulb per week','Fresh ginger — 1 large root per week','Cayenne pepper — 1 jar lasts the full 30 days','Lemons — 4 per week','Green apples, pomegranate juice, spinach, watermelon — per the weekly variation'] },
      { h:'FAQ', p:['My urine is pink or red. — Normal and harmless. It is the beetroot pigment, it happens to roughly one in seven people, and it means nothing about your health.','It tastes terrible. — Use the Week 2 variation with apple from the start. Cold, blended fast, and drunk quickly is far more tolerable than sipped warm.','Can I use bottled beet juice? — Yes, but check it is pure juice and not from concentrate with added sugar. Fresh is better; consistent is better still.','Do I take it on rest days? — Yes. This is a daily thing for the 30 days.','Important — if you take blood pressure medication, nitrates prescribed for a heart condition, or ED medication, speak to your doctor before starting this. Concentrated dietary nitrate lowers blood pressure and can compound those effects.'] }
    ]
  },
  {
    id:'massage', title:'Orgasmic Massage', icon:'🫱',
    sub:'Seven learning sessions, a guided live mode with timers, and a quick-reference zone map.',
    trackerDays:7, trackerKey:'orgasmic_massage_progress',
    sections:[
      { h:'How this module works', p:['There are three parts. Learn mode teaches one session at a time, in text. Live mode walks you through the same session step by step with timers, in a screen designed to be readable in a dark room. The zone map is a quick reference you can check in seconds.','Complete a session in Learn mode to unlock it in Live mode. There are seven, and they build — Session 1 is foundational contact, Session 7 combines everything.'] },
      { h:'Session 1 — Contact and ramp', p:['The whole session is Zone A: inner thighs, hip crease, the surrounding area. Nothing else.','The point is calibration — learning how light "light" actually is, and building tolerance for spending real time before escalating. Most men have never spent eight uninterrupted minutes here.','If she becomes impatient, that is the ramp working, not a failure.'] },
      { h:'Session 2 — Finding the rhythm', p:['Zones A into B. The skill is finding a rhythm at Zone B and then not changing it.','Men reflexively escalate when something works. This session trains the opposite instinct: when it works, hold it exactly.'] },
      { h:'Session 3 — Pressure calibration', p:['Zone B with deliberate pressure variation — light, moderate, firm — held for a minute each so you can read the difference in her response.','Most of the useful information about what she responds to is in pressure rather than in technique.'] },
      { h:'Session 4 — Direct contact', p:['Moving from B to C, only after B has produced clear escalation.','Side-to-side motion is tolerated at higher intensity than direct up-down for most women. This session tests both.'] },
      { h:'Session 5 — Internal, front wall', p:['Zone D. Two fingers, pads up, firm pressure, slow beckoning motion.','This zone is the exception to the lightness rule — it responds to firmness. Session 5 is about learning how firm.'] },
      { h:'Session 6 — Combining C and D', p:['The core combination of the whole module: Zone C and Zone D simultaneously, each at its own rhythm.','Coordinating two different motions is the hardest mechanical skill here. It takes practice, and it is worth it.'] },
      { h:'Session 7 — The full sequence with edging', p:['A through E in sequence, with two deliberate pauses near the end.','Ease off pressure — not rhythm — for around ten seconds, then resume identically. Resuming identically is the entire technique; improvising on the return is what makes it fail.'] }
    ],
    gps:[
      { s:1, name:'Contact and ramp', steps:[
        ['Both hands flat on her thighs. No movement. Just contact.',45],
        ['Slow strokes along the inner thigh, fingertips only. Barely touching.',90],
        ['Switch to the other thigh. Same pressure, same speed.',90],
        ['Trace the crease where thigh meets hip. Slow, irregular.',75],
        ['Flat palm, slow circles on the lower abdomen.',60],
        ['Return to the inner thighs. Lighter than before.',90],
        ['Stop completely. Hands resting. Let her register the absence.',20],
        ['Resume light strokes, moving gradually closer to centre.',120],
        ['Hold contact without movement. End of session.',30]
      ]},
      { s:2, name:'Finding the rhythm', steps:[
        ['Zone A, flat palm, slow strokes. Re-establish contact.',60],
        ['Fingertips along the hip crease, both sides.',60],
        ['Approach Zone B. Flat pad of one finger, through the hood.',45],
        ['Slow circles. Find a speed. Note what it is.',90],
        ['Hold that exact speed. Do not change it.',120],
        ['Keep holding. Resist the urge to escalate.',120],
        ['Lighten slightly for ten seconds, then return to the same rhythm.',60],
        ['Hold the original rhythm to finish.',90]
      ]},
      { s:3, name:'Pressure calibration', steps:[
        ['Zone A warm-up, light strokes.',60],
        ['Zone B, light pressure. Steady circles.',60],
        ['Increase to moderate pressure. Same speed.',60],
        ['Increase to firm. Same speed. Watch her response.',45],
        ['Return to light. Note the contrast.',45],
        ['Settle on whichever produced the strongest response.',120],
        ['Hold it, unchanged.',120]
      ]},
      { s:4, name:'Direct contact', steps:[
        ['Zone A, brief re-establishment.',45],
        ['Zone B through the hood. Steady rhythm.',90],
        ['Wait for clear escalation before continuing.',60],
        ['Move to Zone C. Side-to-side motion, moderate pressure.',75],
        ['Switch to small circles. Compare the response.',75],
        ['Return to whichever worked better. Hold it.',120],
        ['Hold. No changes.',120]
      ]},
      { s:5, name:'Internal, front wall', steps:[
        ['Zone A and B, abbreviated warm-up.',90],
        ['Two fingers, pads up, enter slowly. No motion yet.',30],
        ['Locate the front wall, two to three centimetres in. Texture differs.',45],
        ['Slow beckoning motion. Firm pressure.',90],
        ['Increase firmness slightly. Hold the same rhythm.',90],
        ['Steady, unchanged.',120],
        ['Add flat pressure with the other hand on the lower abdomen.',90]
      ]},
      { s:6, name:'Combining C and D', steps:[
        ['Warm-up through A and B.',90],
        ['Establish Zone D with two fingers, firm, slow.',90],
        ['Add Zone C with the other hand. Light, steady circles.',60],
        ['Coordinate: keep both rhythms independent and constant.',120],
        ['Hold both. This is the core combination.',150],
        ['Keep going. Do not escalate on her response.',120],
        ['Maintain to finish.',90]
      ]},
      { s:7, name:'Full sequence with edging', steps:[
        ['Zone A. Full ramp, unhurried.',120],
        ['Zone B. Find the rhythm and hold it.',120],
        ['Zone C when escalation is clear.',90],
        ['Add Zone D. Both hands working, constant.',120],
        ['Add flat pressure at Zone E.',60],
        ['She is close — ease pressure, keep rhythm. Hold back.',10],
        ['Resume exactly as before. Identical.',90],
        ['Ease off again. Same ten seconds.',10],
        ['Resume identically. Do not change anything.',120],
        ['Continue to finish. No escalation, no improvising.',120]
      ]}
    ],
    zones:[
      { z:'A', n:'Outer, indirect', d:'Inner thighs, hip crease, surrounding area.', touch:'Fingertips or flat palm', pressure:'Minimal', rhythm:'Slow, irregular' },
      { z:'B', n:'Hood and surround', d:'The tissue above and around the clitoris, not the head.', touch:'Flat pad of one finger, circular', pressure:'Light to moderate', rhythm:'Steady, unchanging' },
      { z:'C', n:'Direct', d:'The clitoris itself, once B has produced clear escalation.', touch:'Small circles or side-to-side', pressure:'Moderate, consistent', rhythm:'Constant — never change once working' },
      { z:'D', n:'Front wall, internal', d:'Two to three centimetres in, toward the navel. Texture differs.', touch:'Two fingers, pads up, beckoning', pressure:'Firm — the exception to the rule', rhythm:'Slow and firm' },
      { z:'E', n:'Perineum', d:'External, below the opening.', touch:'Flat, two fingers or base of thumb', pressure:'Firm, static', rhythm:'Sustained pressure, no motion' }
    ]
  },
  {
    id:'flood', title:'Flood Protocol', icon:'💧',
    sub:'Fourteen days to restore seminal volume. Hydration tracker, daily foods and a 2-minute technique.',
    trackerDays:14, trackerKey:'flood_protocol_progress',
    sections:[
      { h:'What this addresses', p:['During years of erectile difficulty, the systems producing seminal fluid downregulate — prostate output slows, seminal vesicle production drops, and zinc reserves deplete. The body stops investing in a function it is not using.','When erectile function returns, that side does not automatically catch up. This protocol restarts it deliberately over fourteen days.'] },
      { h:'The three daily levers', p:['Hydration — seminal fluid is mostly water. The daily target here is higher than the main protocol, and the tracker below counts it in glasses.','Micronutrients — zinc, selenium, lecithin and L-arginine, all from ordinary food. Zinc for production, selenium for motility, lecithin for volume, arginine for the vascular side.','Contraction — a specific Kegel variant that trains the ejaculatory contraction itself rather than general pelvic strength. Two minutes daily.'] },
      { h:'The daily technique', p:['This is not a standard Kegel. Contract as though stopping mid-stream, hold for 2 seconds, then release with a deliberate outward push — the same motion as a reverse Kegel but sharper.','Twenty repetitions, roughly 2 minutes. The contract-and-expel pattern is what trains expulsive force rather than holding strength.','Do it once daily for all fourteen days. It does not need to be at any particular time.'] },
      { h:'Week 1 shopping list', p:['Oysters or tinned smoked oysters','Beef','Eggs','Pumpkin seeds','Brazil nuts','Sunflower seeds','Spinach','Watermelon','Celery','Bananas','Dark chocolate 85%','Sea salt'] },
      { h:'Week 2 shopping list', p:['Shellfish or sardines','Lamb or turkey','Eggs','Sunflower seeds','Walnuts','Asparagus','Pomegranate','Cucumber','Garlic','Yoghurt','Honey','Lemons'] },
      { h:'FAQ', p:['Day 3 and I see no difference. Is that normal? — Yes. The first visible change is typically between days 5 and 8. Days 1 to 4 are mostly rehydration and restocking the nutrients; there is nothing to see yet.','Can I do this at the same time as the main protocol? — Yes, it is designed to run alongside it. The foods overlap heavily.','Do I need to abstain? — Not for the full fourteen days. A 48-hour gap before you want to see the result is enough.','Is the hydration target too high? — Finish the bulk by early evening. If you are waking at night to urinate, move it earlier rather than reducing it.'] }
    ],
    days:[
      { d:1,  water:3.0, foods:['Oysters or tinned oysters','Eggs','Pumpkin seeds','Watermelon'], avoid:['Alcohol','Caffeine after 2pm'], tech:'20 contract-and-expel repetitions. Learn the motion today — slowly.' },
      { d:2,  water:3.2, foods:['Beef','Spinach','Brazil nuts (2)','Celery'], avoid:['Processed food','Sugar'], tech:'20 repetitions. Focus on a sharp release rather than a long hold.' },
      { d:3,  water:3.2, foods:['Eggs','Sunflower seeds','Banana','Dark chocolate 85%'], avoid:['Alcohol','Excess salt'], tech:'20 repetitions plus 10 slow ones at the end.' },
      { d:4,  water:3.4, foods:['Shellfish','Asparagus','Walnuts','Pomegranate'], avoid:['Fried food','Late eating'], tech:'25 repetitions. The motion should feel automatic by now.' },
      { d:5,  water:3.4, foods:['Lamb or turkey','Kale','Pumpkin seeds','Cucumber'], avoid:['Alcohol','Nicotine'], tech:'25 repetitions. Add a 3-second pause between each.' },
      { d:6,  water:3.5, foods:['Sardines','Eggs','Sesame seeds','Watermelon'], avoid:['Sugar','Seed oils'], tech:'25 repetitions, faster tempo.' },
      { d:7,  water:3.5, foods:['Oysters','Garlic','Brazil nuts (2)','Orange'], avoid:['Alcohol','Heavy dinner'], tech:'Week 1 close: 30 repetitions.' },
      { d:8,  water:3.5, foods:['Beef','Broccoli','Sunflower seeds','Pomegranate'], avoid:['Processed meat','Late caffeine'], tech:'30 repetitions. Sharp expulsion on each.' },
      { d:9,  water:3.6, foods:['Eggs','Spinach','Walnuts','Honey'], avoid:['Alcohol','Refined carbs'], tech:'30 repetitions plus 10 reverse Kegels after.' },
      { d:10, water:3.6, foods:['Shellfish','Asparagus','Pumpkin seeds','Watermelon'], avoid:['Sugar','Sitting all day'], tech:'30 repetitions, two sets of 15 with a short rest.' },
      { d:11, water:3.6, foods:['Turkey','Cabbage','Sesame seeds','Cucumber'], avoid:['Alcohol','Energy drinks'], tech:'30 repetitions. Hold the final one for 5 seconds.' },
      { d:12, water:3.8, foods:['Oysters','Eggs','Brazil nuts (2)','Cherries'], avoid:['Fried food','Late screens'], tech:'35 repetitions.' },
      { d:13, water:3.8, foods:['Beef','Kale','Sunflower seeds','Pomegranate'], avoid:['Alcohol','Heavy meals'], tech:'35 repetitions. Quality over speed today.' },
      { d:14, water:4.0, foods:['Shellfish','Garlic','Walnuts','Watermelon'], avoid:['Alcohol','Anything processed'], tech:'Final day: 40 repetitions, unhurried. Then keep this as a 3x weekly habit.' }
    ]
  }
];
