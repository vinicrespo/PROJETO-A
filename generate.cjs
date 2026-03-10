const fs = require("fs");

const generateContent = () => {
  const content = [];

  const cogActions = [
    "Spend 5 minutes vividly imagining walking through your childhood home",
    "Identify 5 red objects in your room and memorize their exact positions",
    "Count backward from 100 by 7s as fast as possible without error",
    "Close your eyes and try to identify 3 distinct sounds in your environment",
    "Read a paragraph from a book upside down to force neural adaptation",
    "Draw a complex shape with your non-dominant hand",
    "Try to recall what you ate for lunch exactly one week ago",
    "Visualize a clock face and mentally draw hands at 10:10, 3:45, and 6:30",
    "List 10 words that start with the letter 'M' in under 60 seconds",
    "Memorize a random 7-digit phone number and recall it 1 hour later",
    "Mentally trace the route from your house to your workplace step-by-step",
    "Try to juggle 2 objects (or simulate the motion) to build spatial awareness",
    "Memorize the order of a shuffled deck of 5 playing cards",
    "Write your name backward on a piece of paper",
    "Close your eyes and balance on one foot for 30 seconds",
    "Learn 3 new words in a foreign language and repeat them aloud",
    "Rub your belly and tap your head simultaneously for 1 minute",
    "Try to remember the names of all your primary school teachers",
    "Find a complex painting online and memorize 10 distinct details",
    "Alphabetize the items currently in your refrigerator in your mind"
  ];

  const dietActions = [
    "Consume 1 tsp of extra virgin olive oil",
    "Add a pinch of Celtic sea salt to your first glass of water",
    "Incorporate 1/4 cup of walnuts or pecans as a snack",
    "Drink 500ml of lemon water immediately upon waking",
    "Eat a small portion of dark chocolate (85%+ cacao)",
    "Include a serving of wild-caught salmon or chia seeds",
    "Drink a cup of green tea or matcha in the afternoon",
    "Add a dash of turmeric and black pepper to your meal",
    "Consume a handful of blueberries or other dark berries",
    "Ensure you eat at least 2 cups of leafy greens today",
    "Take 1 tablespoon of apple cider vinegar in water before eating",
    "Eat 2 whole eggs with the yolk for a choline boost",
    "Avoid all refined sugars for the next 24 hours",
    "Snack on pumpkin seeds for a strong magnesium intervention",
    "Have a serving of fermented foods like kimchi or sauerkraut"
  ];

  const dietBenefits = [
    "to provide instant ketone fuel across the blood-brain barrier.",
    "to optimize neuronal action potentials and limit brain fog.",
    "where high DHA levels support long-term myelin sheath repair.",
    "to flush neurotoxins accumulated during deep sleep.",
    "providing flavanols that increase cerebral blood flow.",
    "delivering critical Omega-3s for synaptic plasticity.",
    "supplying L-theanine for alert but calm focus.",
    "reducing chronic neuro-inflammation.",
    "providing potent antioxidants to protect brain cells.",
    "to deliver crucial folate and vitamin K for cognition.",
    "to stabilize blood glucose, preventing afternoon sleepiness.",
    "which is the direct precursor to the acetylcholine neurotransmitter.",
    "to prevent hippocampal shrinkage caused by insulin resistance.",
    "which acts as a gatekeeper for N-methyl-D-aspartate (NMDA) receptors.",
    "supercharging the gut-brain axis for better mood regulation."
  ];

  const practiceActions = [
    "Perform 3 cycles of physiological sighs (double inhale, long exhale)",
    "Practice 10 minutes of Non-Sleep Deep Rest (NSDR)",
    "Engage in 15 minutes of zone 2 cardiovascular movement",
    "Do 5 minutes of alternate nostril breathing",
    "Take a 2-minute cold shower at the end of your normal wash",
    "Perform 10 minutes of light stretching or yoga",
    "Spend 5 minutes in natural sunlight within 30 mins of waking",
    "Practice gratitude journaling by writing down 3 specific things",
    "Engage in 5 minutes of mindful chewing during a meal",
    "Do 20 jumping jacks to spike heart rate and oxygenate the brain",
    "Stare at a flame or single dot on the wall for 3 uninterrupted minutes",
    "Take a 10-minute walk outside without taking your phone",
    "Practice 4 cycles of Box Breathing (4s in, 4s hold, 4s out, 4s hold)",
    "Gargle water aggressively for 2 minutes to stimulate the vagus nerve",
    "Listen to a new piece of classical music with your eyes closed"
  ];

  const practiceBenefits = [
    "to rapidly clear cortisol.",
    "to accelerate neuroplastic consolidation.",
    "to maximize Brain-Derived Neurotrophic Factor (BDNF).",
    "to balance the right and left hemispheres of the brain.",
    "to trigger a massive release of natural dopamine and norepinephrine.",
    "releasing physical tension that drains mental energy.",
    "to perfectly calibrate your circadian rhythm and optimize melatonin.",
    "to shift your brain from a threat-state to a reward-state.",
    "improving gut-brain axis communication and nutrient absorption.",
    "immediately increasing cerebral blood oxygenation.",
    "to dramatically improve visual attention and parasympathetic tone.",
    "allowing your brain to enter the 'Default Mode Network' for creativity.",
    "to manually lower your heart rate and hack the stress response.",
    "which controls the parasympathetic rest-and-digest system.",
    "forcing your auditory cortex to map novel sonic patterns."
  ];

  for (let i = 1; i <= 180; i++) {
    const cogIndex = (i * 3 + Math.floor(i/10)) % cogActions.length;
    const dietIdx = (i * 7 + Math.floor(i/5)) % dietActions.length;
    const dietBen = (i * 11 + Math.floor(i/3)) % dietBenefits.length;
    const pracIdx = (i * 13 + Math.floor(i/7)) % practiceActions.length;
    const pracBen = (i * 17 + Math.floor(i/2)) % practiceBenefits.length;

    let phasePrefix = "";
    if (i <= 30) {
      phasePrefix = "Neural Cleanse: ";
    } else if (i <= 90) {
      phasePrefix = "Synaptic Strengthening: ";
    } else {
      phasePrefix = "Shield Protocol: ";
    }

    content.push({
      day: i,
      cognitive: phasePrefix + cogActions[cogIndex] + ".",
      dietary: dietActions[dietIdx] + " " + dietBenefits[dietBen],
      practice: practiceActions[pracIdx] + " " + practiceBenefits[pracBen]
    });
  }
  
  fs.writeFileSync("src/app/data/programContent.ts", "export const programContent = " + JSON.stringify(content, null, 2) + ";\n");
};

generateContent();
console.log("Written successfully");
