// src/data/program1Content.ts

export interface DayContent {
  day: number;
  phase: string;
  focusHormone: 'GLP-1' | 'Estrogen' | 'Cortisol' | 'Insulin';
  morningAction: string;
  middayAction: string;
  eveningAction: string;
  foodGuidance: string;
  dailyTip: string;
  drOzMessage: string;
  microProtocol: string;
}

const hormones = ['GLP-1', 'Estrogen', 'Cortisol', 'Insulin'] as const;

// A helper to pick pseudo-random but deterministic content based on day
const getPhase = (day: number) => {
  if (day <= 7) return 'Foundation Week';
  if (day <= 14) return 'Expansion Week';
  if (day <= 21) return 'Integration Week';
  if (day <= 30) return 'Activation Complete';
  if (day <= 45) return 'Acceleration Begins';
  if (day <= 60) return 'Mid-program Peak';
  if (day <= 75) return 'Transformation Phase';
  if (day <= 89) return 'Final Refinement';
  return 'Completion';
};

const morningActions = [
  "Drink 16oz warm lemon water",
  "5-minute light stretching",
  "High protein breakfast within 60 mins",
  "10 deep diaphragmatic breaths",
  "Morning sunlight exposure for 10 mins",
  "Cold splash on face",
  "Take Gelatide booster supplement"
];

const middayActions = [
  "10-minute post-meal walk",
  "Stand up and stretch for 2 mins",
  "Drink 8oz green tea",
  "2-minute box breathing",
  "Protein-rich afternoon snack",
  "Posture check and correction",
  "Drink 16oz water before lunch"
];

const eveningActions = [
  "No screens 1 hour before bed",
  "Drink chamomile or magnesium tea",
  "Write down 3 things you're grateful for",
  "Gentle yoga sequence",
  "Dim lights in the house",
  "Read 10 pages of a book",
  "Take evening Gelatide protocol"
];

const foods = [
  "Incorporate 1tbsp of ground flaxseed",
  "Add a serving of leafy greens to lunch",
  "Focus on Omega-3s (salmon, chia)",
  "Prioritize cruciferous vegetables (broccoli, cauliflower)",
  "Eat berries with your morning meal",
  "Include a serving of fermented foods",
  "Swap simple carbs for sweet potato or quinoa"
];

const tips = [
  "Hydration is key for GLP-1 activation.",
  "Sleep is when your hormones reset.",
  "Stress directly spikes cortisol and stores fat.",
  "Protein signals fullness to your brain.",
  "Fiber slows down glucose absorption.",
  "Movement after meals blunts insulin spikes.",
  "Consistency beats perfection every time."
];

const messages = [
  "Your body is a miracle. Treat it with the respect it deserves today.",
  "Every small choice you make is a vote for the healthy woman you are becoming.",
  "Hormones respond to rhythm. Keep your daily rhythm steady.",
  "Don't rush the process. Transformation happens one day at a time.",
  "Listen to your body today. If you need rest, rest. If you need movement, move.",
  "You hold the power to change your biology through your daily habits.",
  "Remember why you started this journey. Keep that 'why' close today."
];

const protocols = [
  "60-second breathing sequence before meals",
  "Thermal contrast in the shower (30s cold)",
  "14-hour intermittent fasting window",
  "Lymphatic drainage massage (face and neck)",
  "Carb backloading (eat carbs only at dinner)",
  "2-minute high-intensity burst before lunch",
  "Digital sunset starting at 8 PM"
];

export const generateProgram1Content = (): DayContent[] => {
  const content: DayContent[] = [];
  for (let i = 1; i <= 90; i++) {
    content.push({
      day: i,
      phase: getPhase(i),
      focusHormone: hormones[i % 4],
      morningAction: morningActions[i % morningActions.length],
      middayAction: middayActions[i % middayActions.length],
      eveningAction: eveningActions[i % eveningActions.length],
      foodGuidance: foods[i % foods.length],
      dailyTip: tips[i % tips.length] + ` Focus on this for day ${i}.`,
      drOzMessage: messages[i % messages.length],
      microProtocol: protocols[i % protocols.length],
    });
  }
  
  // Customizing specific days mentioned in the prompt
  if (content[0]) {
    content[0].morningAction = "Introduction to four-hormone system, baseline measurements";
  }
  if (content[1]) {
    content[1].foodGuidance = "First phytoestrogen food introduction (flaxseed)";
  }
  if (content[2]) {
    content[2].morningAction = "Morning cortisol protocol begins";
  }
  if (content[3]) {
    content[3].middayAction = "First post-meal glucose walk introduction";
  }
  if (content[89]) {
    content[89].drOzMessage = "Full transformation review and celebration. You did it!";
  }

  return content;
};

export const program1Data = generateProgram1Content();
