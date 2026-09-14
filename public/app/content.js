/* HorseFil — protocol content.
   Each phase carries pools of instructions, foods, avoid-lists and tips.
   A day picks one of each with different strides, so no two days in a phase
   share a combination and no component ever repeats on consecutive days. */

const PHASES = [
  { n:1, name:'Foundation', tag:'Dissolve',   from:1,   to:30,  blurb:'Clearing the way: inflammation, hydration, sleep and the first techniques.' },
  { n:2, name:'Rebuild',    tag:'Regenerate', from:31,  to:60,  blurb:'Feeding tissue repair: collagen nutrients, progressive pelvic work, cold exposure.' },
  { n:3, name:'Protect',    tag:'Shield',     from:61,  to:90,  blurb:'Defending the gains: oxidation, stress control, vascular conditioning.' },
  { n:4, name:'Reactivate', tag:'Power Up',   from:91,  to:120, blurb:'Hormonal optimisation, sleep architecture, ejaculatory control.' },
  { n:5, name:'Amplify',    tag:'Maximize',   from:121, to:150, blurb:'Duration, intensity and performance under real conditions.' },
  { n:6, name:'Maintain',   tag:'Lock In',    from:151, to:180, blurb:'Turning the protocol into a lifestyle you keep for good.' }
];

/* ---------------- PHASE 1 — Foundation ---------------- */
const P1 = {
  instructions:[
    { t:'Set your water baseline', d:'Drink 500ml of plain water within 20 minutes of waking, before coffee. Dehydrated blood is thicker and moves worse through the small vessels that fill an erection. Do this every morning from here on — it is the single habit the rest of the protocol sits on.' },
    { t:'Fix your bedtime, not your wake time', d:'Pick a lights-out time tonight and hold it within 30 minutes for the rest of the week. Most testosterone is released during deep sleep in the first half of the night. A drifting bedtime costs you that window even if total hours look fine.' },
    { t:'Cut the three inflammatory staples', d:'For today, remove seed oils, refined sugar and processed meat. You are not doing this forever — you are giving your vascular lining a few days without the load it has been carrying, so the later phases have something to build on.' },
    { t:'Box breathing, 2 minutes', d:'Sit upright. Inhale 4 seconds, hold 4, exhale 4, hold 4. Repeat for 2 minutes. This drops circulating cortisol, and cortisol is the hormone that most directly opposes an erection.', timer:120, timerLabel:'Box breathing' },
    { t:'Walk 10 minutes after your largest meal', d:'Not a workout — a walk. Moving right after eating blunts the blood sugar spike that damages the endothelium over time. Ten minutes is enough to measurably flatten the curve.' },
    { t:'First Kegel set — find the muscle', d:'Stop your urine stream mid-flow once, just to identify the muscle. Then, away from the bathroom, contract it for 3 seconds and release for 3. Ten repetitions. Do not hold your breath and do not clench your glutes.', timer:60, timerLabel:'Kegel set' },
    { t:'Perineal massage, 2 minutes', d:'Using two fingers, apply light circular pressure to the soft area between the scrotum and anus. This is where the crura of the penis anchor and where circulation is most often stagnant in men who sit all day.', timer:120, timerLabel:'Perineal massage' },
    { t:'Pelvic stretch — the couch stretch', d:'Kneel with one shin against a wall or couch, other foot forward, and push your hips gently forward. Hold 60 seconds per side. Tight hip flexors from sitting compress the vessels feeding the pelvis.', timer:120, timerLabel:'Hip flexor stretch' },
    { t:'Reverse Kegels', d:'The opposite of a Kegel: gently push out as if starting to urinate, without actually doing so. Hold 5 seconds, release 5. Eight repetitions. Most men are over-contracted, not weak — this releases that.', timer:90, timerLabel:'Reverse Kegels' },
    { t:'Screens off 60 minutes before bed', d:'Blue light at night suppresses melatonin, and melatonin timing controls the depth of the first sleep cycle — the one that carries your testosterone pulse. If you must use a screen, drop the brightness to minimum.' },
    { t:'Kegel ladder', d:'Contract for 2 seconds, release 2. Then 4 and 4. Then 6 and 6. Then back down. Three full ladders. Building endurance in this muscle is what later gives you control, not just hardness.', timer:150, timerLabel:'Kegel ladder' },
    { t:'Morning sunlight, 10 minutes', d:'Get outside within an hour of waking, no sunglasses. This anchors your circadian rhythm, which anchors the hormonal cascade that produces morning erections. Cloudy days still work.' },
    { t:'Diaphragmatic breathing before sleep', d:'Lying down, one hand on chest, one on belly. Breathe so only the belly hand moves. Five minutes. Shallow chest breathing keeps the nervous system in a low-grade fight-or-flight state all day.', timer:180, timerLabel:'Belly breathing' },
    { t:'Stand every 45 minutes', d:'Set a reminder. Sitting for hours compresses the perineum and restricts the pudendal artery — the main blood supply to the penis. Standing for 2 minutes restores it. Do this all day.' },
    { t:'Combined set: breath plus contraction', d:'Inhale for 4 seconds while relaxing completely. Exhale for 6 seconds while holding a gentle Kegel. Ten rounds. Linking breath to pelvic control is the foundation of everything in Phase 4 and 5.', timer:150, timerLabel:'Breath and contraction' }
  ],
  foods:[
    ['Beets or beet juice','Spinach','Walnuts','Extra virgin olive oil','Water — 3L across the day'],
    ['Wild salmon','Blueberries','Garlic (raw, crushed, rested 10 min)','Pumpkin seeds','Green tea'],
    ['Arugula','Avocado','Brazil nuts (2, no more)','Sardines','Dark chocolate 85%'],
    ['Pomegranate','Eggs with the yolk','Broccoli','Chia seeds','Ginger tea'],
    ['Watermelon','Oysters or mussels','Kale','Almonds','Turmeric with black pepper'],
    ['Cherries','Grass-fed beef','Swiss chard','Sunflower seeds','Lemon water'],
    ['Oranges','Mackerel','Onion (raw in salad)','Flaxseed','Cinnamon'],
    ['Strawberries','Chicken thigh','Celery','Pistachios','Peppermint tea'],
    ['Grapes with skin','Lentils','Bell peppers','Sesame seeds','Cold water']
  ],
  avoid:[
    ['Soda and energy drinks','Deep-fried food','Anything after 9pm'],
    ['Refined sugar','Alcohol','Late caffeine (after 2pm)'],
    ['Processed meat','Seed oils (canola, soybean, corn)','Excess salt'],
    ['White bread and pastry','Beer','Scrolling in bed'],
    ['Margarine','Sweetened yoghurt','Skipping breakfast then binging'],
    ['Fast food','Energy bars','Sitting for 3+ hours straight'],
    ['Artificial sweeteners','Heavy dinners','Nicotine in any form']
  ],
  tips:[
    'Morning erections are not about sex. They are a pressure test your body runs while you sleep. Track them mentally from today — they are your earliest honest feedback.',
    'Almost every man doing Kegels is doing them too hard. The muscle should contract, not spasm. If your abs or glutes tighten, you are recruiting the wrong thing.',
    'Nitrate-rich vegetables like beets and arugula convert to nitric oxide — the exact molecule Viagra amplifies. You are working the same pathway from the other end.',
    'Do not chase soreness. Pelvic floor work responds to frequency, not intensity. Ten good repetitions daily beats fifty sloppy ones twice a week.',
    'The fastest change most men notice in week one is not hardness. It is waking up before the alarm, with more energy. That is the sleep habit landing.',
    'Crushing garlic and letting it sit 10 minutes before eating allows allicin to form. Cooking it immediately destroys most of the benefit.',
    'If you drink, put it in one sitting rather than spreading it across the week. The recovery cost is lower than repeated small hits.',
    'Sitting is the most underrated cause of erectile decline in men who are otherwise healthy. The fix costs nothing and you can do it at your desk.',
    'Your endothelium — the single-cell lining of every blood vessel — replaces itself roughly every 30 days. Phase 1 is exactly one full turnover.',
    'Cold hands and feet in the evening usually mean poor peripheral circulation. The same small vessels are involved in an erection. Watch whether this changes.',
    'Two Brazil nuts give you a full day of selenium. Five give you too much. More is not better with this one.',
    'If you miss a day, do not double up. The protocol works on consistency, not accumulation. Just resume.',
    'Dehydration of only 2% measurably reduces blood volume. Most men walk around at 2-3% without noticing.'
  ]
};

/* ---------------- PHASE 2 — Rebuild ---------------- */
const P2 = {
  instructions:[
    { t:'Vitamin C loading for collagen', d:'Get vitamin C from three separate food sources today, spread across the day rather than in one hit. Collagen synthesis in the tunica albuginea — the sheath that holds pressure in an erection — cannot proceed without it, and the body does not store it.' },
    { t:'Cold exposure, 30 seconds', d:'At the end of your shower, turn the water cold and direct it over the groin and lower abdomen for 30 seconds. Breathe slowly through it. This triggers vasoconstriction followed by strong rebound dilation.', timer:30, timerLabel:'Cold exposure' },
    { t:'Progressive Kegel — 10 second holds', d:'Contract and hold for 10 seconds, release for 10. Eight repetitions. If you cannot hold a clean 10 seconds yet, hold what you can and build. The hold is where the endurance comes from.', timer:160, timerLabel:'10s holds' },
    { t:'Zinc-forward day', d:'Build today around zinc: oysters, beef, pumpkin seeds, lentils. Zinc is a direct precursor in testosterone synthesis, and it is the mineral most commonly depleted in men over 40.' },
    { t:'Pelvic bridge holds', d:'Lying on your back, knees bent, lift your hips and hold for 20 seconds while keeping a light Kegel. Six repetitions. This trains the pelvic floor under load rather than in isolation.', timer:180, timerLabel:'Bridge holds' },
    { t:'Lysine and proline sources', d:'Eat at least two of: eggs, fish, chicken, hard cheese, pumpkin seeds. These carry the two amino acids collagen is literally built from. Vitamin C without them has nothing to assemble.' },
    { t:'Cold exposure, 45 seconds', d:'Extend yesterday to 45 seconds. Keep the breathing slow and nasal — if you are gasping, the stress response is outrunning the benefit. Step out before that point.', timer:45, timerLabel:'Cold exposure' },
    { t:'Quick-flick Kegels', d:'Rapid contractions, one per second, for 20 seconds. Rest 20. Four rounds. This trains the fast-twitch fibres, which are what produce the rigidity spike rather than the sustained hold.', timer:160, timerLabel:'Quick flicks' },
    { t:'Magnesium before bed', d:'Include a magnesium-rich food at dinner — pumpkin seeds, dark chocolate, spinach, almonds. Magnesium raises free testosterone by reducing how much binds to SHBG, and it deepens slow-wave sleep.' },
    { t:'Standing pelvic activation', d:'Standing, feet hip-width. Contract the pelvic floor while slowly rising onto your toes, hold 5 seconds at the top, lower. Twelve repetitions. Integrates the pelvic floor with posture.', timer:150, timerLabel:'Standing activation' },
    { t:'Nitrate stacking', d:'Beets, arugula and spinach in the same day. Nitric oxide production is dose-dependent and short-lived — stacking sources across the day keeps levels elevated rather than spiking once.' },
    { t:'Cold exposure, 60 seconds', d:'One full minute now. By the end of this phase this will feel routine, and that adaptation itself is the point — you are training vascular responsiveness, not toughness.', timer:60, timerLabel:'Cold exposure' },
    { t:'Deep squat hold', d:'Sit into a deep bodyweight squat, heels down, and hold for 60 seconds. Twice. This opens the hips and decompresses the pelvic floor, which chronic sitting keeps shortened.', timer:150, timerLabel:'Squat hold' },
    { t:'Protein timing', d:'Front-load protein: get at least 40g before noon. Tissue repair runs on available amino acids, and most men eat almost none until dinner, leaving the whole morning with nothing to build from.' },
    { t:'Combined circuit', d:'Two minutes: 20 seconds quick flicks, 20 seconds rest, 20 second hold, 20 seconds rest, repeat. This mixed loading is how the pelvic floor is actually used during sex.', timer:120, timerLabel:'Mixed circuit' }
  ],
  foods:[
    ['Bell peppers (more C than oranges)','Beef','Pumpkin seeds','Bone broth','Kiwi'],
    ['Oysters','Broccoli','Eggs','Almonds','Camu camu or acerola'],
    ['Sardines with bones','Brussels sprouts','Hard cheese','Cashews','Strawberries'],
    ['Lamb','Spinach','Greek yoghurt','Walnuts','Guava'],
    ['Chicken with skin','Kale','Lentils','Sesame seeds','Papaya'],
    ['Mackerel','Cabbage','Cottage cheese','Sunflower seeds','Blackcurrant'],
    ['Liver (once this week)','Arugula','Eggs','Pistachios','Orange with pith'],
    ['Shellfish','Cauliflower','Whey or milk','Pecans','Pineapple'],
    ['Turkey','Beet greens','Ricotta','Macadamia','Mango']
  ],
  avoid:[
    ['Alcohol — it blocks collagen synthesis directly','Smoking','Very hot baths right after cold exposure'],
    ['Refined carbs','High-dose caffeine on an empty stomach','Training to failure daily'],
    ['Sugar — it glycates collagen and stiffens it','Trans fats','Sleeping under 6 hours'],
    ['Processed soy in bulk','Alcohol','Long fasts during this phase'],
    ['Seed oils','Sweetened drinks','Skipping the cold exposure because it is unpleasant'],
    ['Excess omega-6','Late-night eating','Overtraining the pelvic floor'],
    ['Low-fat everything — you need fat for hormones','Energy drinks','Chronic under-eating']
  ],
  tips:[
    'Collagen is not one thing you eat — it is something you build. Vitamin C is the enzyme cofactor, lysine and proline are the bricks. Missing either half stalls the process.',
    'Cold exposure works through rebound. The dilation after you step out is stronger than the constriction during. That rebound is the training stimulus.',
    'If you only notice one change this phase, it will probably be firmness holding longer rather than arriving faster. That is the tunica responding.',
    'Do not add supplements here. Every nutrient in this phase is available from food, and food delivers the cofactors that isolated pills do not.',
    'Pelvic floor endurance is the difference between getting hard and staying hard. Phase 1 built the contraction. This phase builds the hold.',
    'The tunica albuginea is what traps blood under pressure. When it loses elasticity, blood leaks out — this is venous leak, and it is the most common cause of erections that start well and fade.',
    'Two Brazil nuts and a handful of pumpkin seeds covers selenium and zinc for the day. That is the whole mineral strategy, no bottles required.',
    'Cold exposure on the groin specifically, not just the shoulders. The vessels you want to train are the ones you are targeting.',
    'A deep squat hold does more for pelvic circulation than most gym work, and it costs a minute.',
    'If the cold makes you tense and gasp, you are past the useful dose. Slow nasal breathing through it is the skill.',
    'Zinc absorption drops sharply when taken with calcium. Separate your dairy from your zinc-heavy meal.',
    'Alcohol is the single biggest blocker in this phase specifically — it directly suppresses collagen synthesis for roughly 24 hours.',
    'You will not feel collagen rebuilding. Judge this phase by week four, not by today.'
  ]
};

/* ---------------- PHASE 3 — Protect ---------------- */
const P3 = {
  instructions:[
    { t:'Strip the processed food', d:'Today, eat nothing with more than five ingredients on the label. Ultra-processed food drives the oxidative load that degrades the endothelial lining faster than your body rebuilds it. This is subtraction, not addition.' },
    { t:'Anti-inflammatory juice', d:'Blend beet, ginger, lemon and a green apple. Drink it in the morning on an empty stomach. Nitrates plus gingerols plus polyphenols in one hit, absorbed fast because there is nothing competing.' },
    { t:'Five minutes of zone 2 cardio', d:'Brisk walk, bike or stairs — hard enough that talking is slightly effortful, easy enough that you could keep going. Five minutes. Zone 2 is where capillary density improves, and capillaries are the whole game.', timer:300, timerLabel:'Zone 2' },
    { t:'Physiological sigh for acute stress', d:'Two short inhales through the nose, then one long slow exhale through the mouth. Five rounds whenever you notice tension today. This is the fastest known way to drop sympathetic activation.', timer:60, timerLabel:'Physiological sigh' },
    { t:'Polyphenol load', d:'Build the day around deeply coloured plants: berries, red cabbage, dark chocolate, green tea, olive oil. Polyphenols directly protect nitric oxide from being destroyed by free radicals before it can act.' },
    { t:'Ten minutes of zone 2', d:'Double the duration. Keep the intensity honest — most men go too hard and turn it into a stress event, which raises cortisol and defeats the purpose.', timer:600, timerLabel:'Zone 2' },
    { t:'Evening wind-down block', d:'One hour before bed: lights dim, no screens, no work. Chronic evening cortisol is the mechanism behind stress-related erectile difficulty, and it is entirely behavioural.' },
    { t:'Sulforaphane day', d:'Eat cruciferous vegetables — broccoli, sprouts, cabbage — lightly steamed, not boiled. Sulforaphane activates the body\'s own antioxidant defence system rather than just donating antioxidants.' },
    { t:'Contrast shower', d:'Three cycles: 40 seconds warm, 20 seconds cold. Finish cold. This trains the vessels to constrict and dilate on demand — which is exactly what an erection requires.', timer:180, timerLabel:'Contrast shower' },
    { t:'Walk after every meal', d:'Ten minutes after each of your three meals today. Post-meal glucose is when vascular damage actually happens. Three short walks beat one long one for this specific purpose.' },
    { t:'Green tea protocol', d:'Two cups today, away from meals so it does not block iron absorption. EGCG in green tea protects the endothelium and mildly improves nitric oxide availability.' },
    { t:'Extended exhale breathing', d:'Inhale 4 seconds, exhale 8 seconds. Five minutes. A longer exhale than inhale is what actually triggers the parasympathetic shift — and erections are a parasympathetic function.', timer:300, timerLabel:'Extended exhale' },
    { t:'Fifteen minutes of zone 2', d:'Build to fifteen. If you have been consistent, this should feel easier than the five-minute session did two weeks ago. That change is measurable proof of vascular adaptation.', timer:900, timerLabel:'Zone 2' },
    { t:'Omega-3 focus', d:'Fatty fish today, or walnuts and flax if not. Omega-3s change the composition of cell membranes themselves, making the endothelium more flexible and responsive.' },
    { t:'Full stress audit', d:'Write down the three things that spiked your stress this week. Not to solve them today — to see them. Cortisol from unnamed background stress is the most common invisible blocker at this stage.' }
  ],
  foods:[
    ['Blueberries','Broccoli sprouts','Extra virgin olive oil','Green tea','Wild salmon'],
    ['Red cabbage','Pomegranate','Walnuts','Dark chocolate 85%','Sardines'],
    ['Blackberries','Brussels sprouts','Avocado','Matcha','Mackerel'],
    ['Cherries','Kale','Flaxseed','Turmeric with pepper','Anchovies'],
    ['Raspberries','Cauliflower','Almonds','Rooibos','Herring'],
    ['Plums','Watercress','Pumpkin seeds','Ginger tea','Trout'],
    ['Beets','Bok choy','Hemp seeds','Hibiscus tea','Oysters'],
    ['Purple grapes','Collard greens','Chia','Peppermint tea','Cod'],
    ['Cranberries','Arugula','Macadamia','Chamomile','Shrimp']
  ],
  avoid:[
    ['Anything with a barcode and more than 5 ingredients','Vegetable oils','Doomscrolling before bed'],
    ['Refined sugar','Alcohol','Working past 9pm'],
    ['Processed meat','Fried food','Checking email in bed'],
    ['Sweetened coffee drinks','Industrial seed oils','Arguments before sleep'],
    ['Packaged snacks','Soda','Caffeine after 2pm'],
    ['Fast food','Trans fats','Sleeping with the phone in the room'],
    ['Deli meat','Margarine','Skipping the wind-down hour']
  ],
  tips:[
    'Nitric oxide has a half-life measured in seconds. Producing more helps, but protecting what you produce helps as much — that is what polyphenols do.',
    'Cortisol and testosterone come from the same precursor. When your body prioritises stress, it is literally spending the raw material.',
    'Zone 2 cardio is the least glamorous and most effective thing in this phase. It builds new capillaries. Nothing else on this list does that.',
    'If you boil broccoli you lose most of the sulforaphane to the water. Steam it, or eat it raw in a salad.',
    'The wind-down hour is the part men skip and the part that moves the needle most for stress-driven difficulty.',
    'Green tea with a meal blocks iron absorption. Drink it between meals, not with them.',
    'A longer exhale than inhale is the mechanical trigger for the nervous system to stand down. This is not a metaphor, it is the vagus nerve responding to pressure changes.',
    'You cannot outrun a bad diet vascularly. Five minutes of walking after a clean meal beats an hour of cardio after a terrible one.',
    'Erections are parasympathetic. Anxiety is sympathetic. They are mutually exclusive by design — which is why performance pressure is self-fulfilling.',
    'Dark chocolate above 85% is a genuine vascular food. Below 70% it is mostly sugar and works against you.',
    'If your sleep got worse this phase, look at evening light before you look at anything else.',
    'The contrast shower is training, not punishment. Finish cold, but do not extend it past what you can breathe calmly through.',
    'Most men underestimate their background stress because it has been constant for years. The audit is worth the five minutes.'
  ]
};

/* ---------------- PHASE 4 — Reactivate ---------------- */
const P4 = {
  instructions:[
    { t:'Protect the first sleep cycle', d:'Your largest testosterone pulse happens during the first deep sleep block, roughly 90 minutes after you fall asleep. Room cold, fully dark, no alcohol tonight. Protecting this one window matters more than total hours.' },
    { t:'Saturated fat and cholesterol at dinner', d:'Eggs, butter, red meat. Testosterone is synthesised from cholesterol — men on chronically low-fat diets consistently show lower free testosterone. This is not licence to eat badly, it is the raw material.' },
    { t:'Start-stop training', d:'During self-stimulation, bring yourself to roughly 7 out of 10 arousal, then stop completely for 30 seconds until it drops to 4. Repeat three times, then finish or not. This is the foundational ejaculatory control drill.', timer:30, timerLabel:'Stop phase' },
    { t:'Compound lifting, 15 minutes', d:'Squats, deadlifts or presses — heavy, low reps, long rests. Fifteen minutes is enough. Large-muscle compound work produces an acute androgenic response that isolation work does not.', timer:900, timerLabel:'Lifting block' },
    { t:'12-hour eating window', d:'Eat within a 12-hour window today, nothing outside it. Not aggressive fasting — just a defined boundary. This improves insulin sensitivity, and insulin resistance is strongly tied to low testosterone.' },
    { t:'Edging with breath control', d:'Same as start-stop, but during the stop phase use the 4-8 breathing from Phase 3. The goal is learning to lower arousal deliberately rather than waiting it out.', timer:60, timerLabel:'Breath-down' },
    { t:'Morning light plus movement', d:'Sunlight within 30 minutes of waking, combined with 5 minutes of walking. The combination sets the cortisol peak where it belongs — early — which lets it fall properly by evening.', timer:300, timerLabel:'Morning walk' },
    { t:'Advanced Kegel — 20 second holds', d:'Hold for 20 seconds, release 20. Five repetitions. At this stage you should manage this cleanly. This is the endurance that translates directly into control during sex.', timer:200, timerLabel:'20s holds' },
    { t:'14-hour overnight fast', d:'Finish dinner early, delay breakfast. Fourteen hours overnight. Growth hormone and testosterone both benefit from the fasted window, and most of it happens while you sleep anyway.' },
    { t:'Cold exposure, 2 minutes', d:'Two full minutes now, groin and lower back. At this point your vascular response should be noticeably faster than in Phase 2 — you should feel the rebound warmth arrive sooner.', timer:120, timerLabel:'Cold exposure' },
    { t:'Squeeze technique', d:'At high arousal, firmly squeeze just below the head of the penis for 5 seconds. Arousal drops sharply. Repeat twice per session. This is the emergency brake — learn it before you need it.', timer:5, timerLabel:'Squeeze hold' },
    { t:'Zinc and boron day', d:'Oysters, beef, raisins, almonds, avocado. Boron specifically reduces SHBG, which means more of the testosterone you already produce becomes free and usable.' },
    { t:'Sleep temperature protocol', d:'Drop the room to 18-19°C tonight. Core temperature has to fall for deep sleep to initiate. A warm room is the most common reason men get eight hours and still wake unrested.' },
    { t:'Three-round start-stop', d:'Three full rounds, each taking arousal to 8 out of 10 before stopping. Longer at the edge than last week. The tolerance you build here is what extends duration later.', timer:45, timerLabel:'Stop phase' },
    { t:'Heavy carry', d:'Carry something heavy for 60 seconds — loaded bag, dumbbells, anything. Twice. Loaded carries spike the hormonal response with almost no recovery cost.', timer:60, timerLabel:'Carry' }
  ],
  foods:[
    ['Eggs with yolk','Grass-fed beef','Raisins','Avocado','Brazil nuts (2)'],
    ['Oysters','Butter','Almonds','Olive oil','Spinach'],
    ['Liver','Whole milk yoghurt','Pumpkin seeds','Sweet potato','Dark chocolate'],
    ['Lamb','Hard cheese','Walnuts','Beets','Pomegranate'],
    ['Shellfish','Egg yolks','Cashews','Asparagus','Garlic'],
    ['Steak','Full-fat cottage cheese','Macadamia','Broccoli','Ginger'],
    ['Salmon','Ghee','Pistachios','Onion','Honey (small)'],
    ['Pork','Kefir','Hemp seeds','Kale','Maca (if available)'],
    ['Venison','Cream','Peanuts','Mushrooms','Sea salt']
  ],
  avoid:[
    ['Alcohol — it blunts the overnight testosterone pulse','Late screens','Eating within 3 hours of bed'],
    ['Sugar','Chronic cardio','Sleeping in a warm room'],
    ['Low-fat products','Plastic food containers (heated)','Under-eating'],
    ['Beer specifically (phytoestrogens + alcohol)','Overtraining','Skipping sleep for work'],
    ['Processed carbs','Excess caffeine','Finishing every session to ejaculation'],
    ['Soy protein isolate in bulk','Late-night gym sessions','Blue light after 10pm'],
    ['Trans fats','Stimulant pre-workouts','Napping late in the afternoon']
  ],
  tips:[
    'Start-stop is not about endurance for its own sake. It is about learning where your point of no return actually is, so you can stay below it deliberately.',
    'The squeeze technique works because it interrupts the reflex arc. It is mechanical, not willpower.',
    'Alcohol suppresses the overnight testosterone pulse for roughly 24 hours. One night of drinking costs you a full day of this phase.',
    'Fifteen minutes of heavy compound work beats an hour of machines for hormonal response. Intensity and muscle mass involved are what matter.',
    'Do not finish every session. Training arousal control requires sessions that end at 8, not at 10.',
    'Insulin resistance and low testosterone travel together. The 12-hour window is the cheapest intervention for it.',
    'Core body temperature must drop about 1°C to initiate deep sleep. A cold room does half the work for you.',
    'Boron is the least-known lever here — raisins and almonds are the easiest sources, and it works by freeing testosterone you already have.',
    'If morning erections have not improved by Day 100, look at alcohol and sleep before anything else. They are almost always the answer.',
    'Edging sessions should be relaxed. If you are tense and rushing, you are training anxiety alongside control.',
    'Cholesterol is the literal precursor molecule for testosterone. Men who fear dietary fat often cap their own production.',
    'Morning light is more powerful than any supplement for hormonal timing, and it is free.',
    'Two to three edging sessions a week is the useful dose. Daily is counterproductive.'
  ]
};

/* ---------------- PHASE 5 — Amplify ---------------- */
const P5 = {
  instructions:[
    { t:'Full arousal ladder', d:'Take arousal to 8 out of 10, hold it there for 60 seconds using breath alone, then let it drop to 5. Three rounds. Holding at the edge without rising is the core skill of duration.', timer:60, timerLabel:'Hold at 8' },
    { t:'Pre-encounter protocol', d:'Ninety minutes before: beets or beet juice, 500ml water, 10 minutes of walking. Thirty minutes before: 2 minutes of box breathing. This is the stack that makes the difference on the night.' },
    { t:'Kegel under arousal', d:'During arousal, hold a Kegel for 10 seconds without losing erection quality. Five repetitions. Contracting under load is entirely different from contracting cold, and this is the version that matters.', timer:150, timerLabel:'Loaded Kegels' },
    { t:'Position endurance drill', d:'Practise holding a plank or a wall-sit for 90 seconds. Twice. Most duration failures are core and hip fatigue, not arousal. Train the limiting factor.', timer:90, timerLabel:'Hold' },
    { t:'Citrulline-rich day', d:'Watermelon, cucumber, pumpkin. Citrulline converts to arginine more efficiently than arginine itself and raises nitric oxide for several hours. Timing it 2-3 hours before is ideal.' },
    { t:'Non-ejaculatory session', d:'A full session with no ejaculation. Take it to 8 three times, then stop entirely. This builds tolerance and, for most men, sharply increases intensity in the next session.' },
    { t:'Orgasm intensification — pre-contraction', d:'In the final 30 seconds before climax, hold a strong Kegel rather than releasing. This increases the force of the contractions themselves. Practise it deliberately.', timer:30, timerLabel:'Pre-contraction' },
    { t:'Two-minute cold finish', d:'Cold water on the groin for 2 minutes at the end of your shower. By Phase 5 this should produce a strong, fast rebound. Use it 2-3 hours before an encounter, not immediately before.', timer:120, timerLabel:'Cold finish' },
    { t:'Breath-paced control', d:'Practise slowing your breathing while arousal is high. Inhale 4, exhale 8, while at 7 out of 10. Five minutes. Breath is the only lever that works in real time, mid-act.', timer:300, timerLabel:'Paced breathing' },
    { t:'Hip mobility for position range', d:'Ten minutes: hip flexor stretch, deep squat hold, 90-90 rotations. Limited hip range is what forces men into the two positions they can manage, rather than the ones that work best.', timer:600, timerLabel:'Hip work' },
    { t:'Hydration timing', d:'3.5L today, but finish the bulk by early evening. Blood volume matters for engorgement — but being up at 3am to urinate costs you the deep sleep that matters more.' },
    { t:'Refractory reduction', d:'After climax, do 20 slow Kegels over two minutes rather than lying still. For many men this measurably shortens the recovery window. Test it on yourself.', timer:120, timerLabel:'Post Kegels' },
    { t:'Full stack rehearsal', d:'Run the entire pre-encounter protocol today with no encounter planned. Rehearsing it once removes the fumbling so it is automatic when it counts.' },
    { t:'Edge for 10 minutes', d:'One continuous session staying between 6 and 8 out of 10 for ten minutes without crossing over. This is the single best predictor of real-world duration.', timer:600, timerLabel:'Extended edge' },
    { t:'Recovery day', d:'No arousal training today. Sleep, water, walking, food. Pelvic floor tissue adapts during rest, not during work. Skipping recovery is why some men plateau here.' }
  ],
  foods:[
    ['Watermelon','Beets','Oysters','Dark chocolate','Pomegranate juice'],
    ['Cucumber','Arugula','Steak','Walnuts','Green tea'],
    ['Pumpkin','Spinach','Salmon','Pumpkin seeds','Cherry juice'],
    ['Cantaloupe','Beet greens','Eggs','Almonds','Beet juice'],
    ['Honeydew','Swiss chard','Shellfish','Brazil nuts (2)','Watermelon juice'],
    ['Zucchini','Celery','Lamb','Cashews','Hibiscus tea'],
    ['Squash','Lettuce','Sardines','Pistachios','Cranberry juice'],
    ['Melon','Kale','Chicken','Sesame seeds','Ginger shot'],
    ['Papaya','Bok choy','Tuna','Hemp seeds','Coconut water']
  ],
  avoid:[
    ['Alcohol before any encounter','Heavy meals within 3 hours','Ejaculating the same day you want peak performance'],
    ['Sugar spikes','Overtraining the pelvic floor','Caffeine within 4 hours of sex'],
    ['Large dinners','Nicotine','Daily ejaculation during this phase'],
    ['Fried food','Dehydration','Skipping recovery days'],
    ['Beer','Late cold exposure right before an encounter','Performance-focused self-talk'],
    ['Processed carbs','Training to exhaustion','Using porn as the training stimulus'],
    ['Energy drinks','Under-sleeping','Rushing the edging sessions']
  ],
  tips:[
    'Duration is not endurance of arousal. It is the skill of staying in a narrow band — high enough to perform, low enough not to trigger.',
    'Most duration failures in real encounters are physical: hips and core give out before arousal does. Train the hips.',
    'Breath is the only control lever that works in real time and is invisible to your partner. Everything else requires stopping.',
    'The pre-encounter stack matters more than anything you do in the moment. Nitrates need 90 minutes to convert.',
    'Holding a Kegel through the final seconds before climax measurably increases contraction force. Practise it alone first.',
    'Non-ejaculatory sessions are not abstinence. They are training the system to operate at high arousal without discharging.',
    'Citrulline from watermelon outperforms arginine supplements because it survives first-pass metabolism in the liver.',
    'Cold exposure immediately before sex is counterproductive — the constriction phase is still active. Use it hours earlier.',
    'If you plateau here, add a recovery day before you add more training. Overworked pelvic floors get tight, and tight is not strong.',
    'A slightly lower arousal ceiling with total control beats a higher one you cannot manage. Aim for the band, not the peak.',
    'Post-climax Kegels shorten the refractory period for many men. It costs two minutes and it is worth testing.',
    'Alcohol before sex is the most common self-inflicted wound at this stage. One drink is noticeable, three is decisive.',
    'You are now 140 days in. Compare your morning erections to Day 1 honestly — that comparison is the real scoreboard.'
  ]
};

/* ---------------- PHASE 6 — Maintain ---------------- */
const P6 = {
  instructions:[
    { t:'Identify your non-negotiables', d:'Write down the three habits from the last 150 days that produced the clearest change for you. Those three are what you keep forever. Everything else is optional maintenance.' },
    { t:'The 10-minute daily minimum', d:'From here, your floor is: 500ml water on waking, 10 minutes of walking, and one Kegel set. Ten minutes total. On your worst day, this is what you still do.', timer:60, timerLabel:'Kegel set' },
    { t:'Weekly cold exposure', d:'Drop cold exposure to twice a week rather than daily. The vascular adaptation you built is maintained at far lower frequency than it took to create.', timer:90, timerLabel:'Cold exposure' },
    { t:'Maintenance Kegel protocol', d:'Three sets a week: 10 holds of 10 seconds, plus 20 quick flicks. That is the maintenance dose. Daily training is no longer necessary and can become counterproductive.', timer:200, timerLabel:'Maintenance set' },
    { t:'The 80/20 food rule', d:'Eighty percent of the time, eat the way Phase 1 through 3 taught you. Twenty percent, eat like a normal person. Protocols that demand perfection get abandoned; this one should not.' },
    { t:'Monthly self-assessment', d:'Once a month, rate morning erections, firmness and duration on the same 1-5 scale from your check-ins. Catching a slide early makes it trivial to correct.' },
    { t:'Keep the sleep window', d:'Of everything in this protocol, the fixed bedtime is the habit with the highest cost if you drop it and the lowest cost to keep. Guard it above all the others.' },
    { t:'Rotate your training focus', d:'Alternate months: one month emphasising cardiovascular work, the next emphasising pelvic floor and control. Rotating prevents both boredom and adaptation plateaus.' },
    { t:'Build the relapse plan', d:'Write down what you will do if things slide — which two weeks of the protocol you would repeat. Having it written means you act instead of spiralling.' },
    { t:'Stress remains the main threat', d:'Everything you built can be undone by six months of unmanaged stress. Keep the wind-down hour and the breathing work. They cost nothing and protect everything.', timer:120, timerLabel:'Box breathing' },
    { t:'Reintroduce deliberately', d:'If you want alcohol or processed food back, reintroduce one thing at a time and watch morning erections for a week. You now have a reliable personal test.' },
    { t:'Teach it once', d:'Explain the core of what you did to someone who needs it. Articulating it consolidates the habit in you more than another week of doing it silently.' },
    { t:'Set the annual reset', d:'Mark a date twelve months out to repeat Phase 1 for thirty days. An annual reset keeps the baseline from drifting without you noticing.' },
    { t:'Full protocol review', d:'Read back through your weekly check-in notes from Day 1. Most men badly underestimate how far they came, because the change was gradual and they adjusted their sense of normal along the way.' },
    { t:'Day 180 — define what is next', d:'This is the last programmed day. Decide now: the maintenance minimum, the monthly assessment, the annual reset. Write the three dates down. Then close the app and go live it.' }
  ],
  foods:[
    ['Whatever your best week looked like','Beets twice a week','Fatty fish twice a week','Leafy greens daily','3L water'],
    ['Eggs','Berries','Olive oil','Nuts','Green tea'],
    ['Red meat twice a week','Cruciferous vegetables','Avocado','Pumpkin seeds','Water'],
    ['Oysters or shellfish weekly','Spinach','Dark chocolate','Walnuts','Herbal tea'],
    ['Salmon','Arugula','Eggs','Almonds','Pomegranate'],
    ['Chicken','Broccoli','Butter or ghee','Brazil nuts (2)','Lemon water'],
    ['Sardines','Kale','Cheese','Sesame seeds','Ginger tea'],
    ['Beef','Cabbage','Yoghurt','Pistachios','Water'],
    ['Lamb','Beet greens','Coconut oil','Cashews','Green tea']
  ],
  avoid:[
    ['All-or-nothing thinking','Dropping the sleep schedule','Waiting for a problem before acting'],
    ['Daily alcohol','Returning to 10-hour sitting days','Skipping the monthly check'],
    ['Perfectionism about food','Chronic late nights','Abandoning the walk'],
    ['Reintroducing everything at once','Untracked stress','Stopping Kegels entirely'],
    ['Believing you are fixed permanently','Sugar creep','Losing the morning light habit'],
    ['Nicotine','Overtraining as compensation','Ignoring early warning signs'],
    ['Ultra-processed convenience food','Sleep debt','Letting the routine become invisible']
  ],
  tips:[
    'The men who keep results are not the disciplined ones. They are the ones who reduced the protocol to something small enough to survive a bad month.',
    'Your ten-minute minimum is the single most valuable thing in this phase. Everything else is optional.',
    'Morning erections remain your best early warning system. If they fade for two straight weeks, something changed — usually sleep or alcohol.',
    'Vascular adaptation is maintained at roughly a third of the effort it took to build. You have already done the hard part.',
    'Do not do the full protocol forever. It was designed to end. Maintenance is a different, lighter thing.',
    'The annual reset is thirty days a year to protect 180 days of work. It is the best trade in the whole programme.',
    'Reintroduce one variable at a time. You now have a clean baseline and a reliable test — most men never get that.',
    'If you slide, you will not be back at Day 1. Adaptation retains. Two weeks usually recovers months of drift.',
    'The habit most likely to quietly disappear is the post-meal walk. It is also one of the highest-yield. Watch for it.',
    'Write the relapse plan while things are good. You will not write it well when things are bad.',
    'Compare your Day 180 self-assessment with your Day 1 onboarding answers. That is the honest measure.',
    'Stress is the only thing that can undo all of this quickly. Treat the wind-down hour as maintenance, not luxury.',
    'You built this. The protocol pointed, but the consistency was yours — and that is what makes it repeatable.'
  ]
};

const PHASE_POOLS = [P1,P2,P3,P4,P5,P6];

/* Deterministic per-day composition.
   Different strides per field guarantee a unique combination per day and
   prevent any component repeating on consecutive days. */
function phaseOf(day){
  return PHASES.find(p => day >= p.from && day <= p.to) || PHASES[PHASES.length-1];
}

function dayContent(day){
  const phase = phaseOf(day);
  const pool  = PHASE_POOLS[phase.n - 1];
  const i     = day - phase.from;               // 0..29 inside the phase
  const instr = pool.instructions[i % pool.instructions.length];
  return {
    day,
    phase,
    week: Math.ceil(day / 7),
    instruction: instr,
    foods: pool.foods[(i * 2 + 1) % pool.foods.length],
    avoid: pool.avoid[(i * 3 + 2) % pool.avoid.length],
    tip:   pool.tips[(i * 5 + 3) % pool.tips.length]
  };
}
