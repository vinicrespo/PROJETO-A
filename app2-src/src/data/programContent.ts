// src/data/program2Content.ts

export interface DayContentP2 {
  day: number;
  focus: string;
  adjustment: string;
  tip: string;
  physicalSigns: string;
}

const p2Focuses = [
  "Introduction to the three windows, baseline setup",
  "Morning window mastery",
  "Midday window mastery",
  "Evening window mastery",
  "First full integration day",
  "Advanced morning techniques (thermal acceleration)",
  "Week 1 check — measurements, energy review",
  "Advanced midday techniques (lymphatic activation)",
  "Advanced evening techniques (parasympathetic deep dive)",
  "Peak integration day — all windows at max efficiency",
  "Plateau-busting techniques",
  "Result amplification day",
  "Final optimization",
  "Completion review and transition to maintenance"
];

export const generateProgram2Content = (): DayContentP2[] => {
  return p2Focuses.map((focus, index) => ({
    day: index + 1,
    focus,
    adjustment: `Adjust your timing by 5 minutes earlier for day ${index + 1} to maximize receptor sensitivity.`,
    tip: `Dr. Oz Tip: The ${index < 7 ? 'first week is about consistency' : 'second week is about intensity'}. Keep pushing!`,
    physicalSigns: `You may feel ${index < 4 ? 'mild fatigue as your body adapts' : 'increased energy and reduced bloating'}.`
  }));
};

export const program2Data = generateProgram2Content();

// src/data/program3Content.ts

export const program3Tips = [
  "Drink water before coffee.",
  "Chew your food 20 times per bite.",
  "Take a 5-minute walk after lunch.",
  "Stop eating 3 hours before bed.",
  "Prioritize protein at breakfast.",
  "Get 15 minutes of morning sunlight.",
  "Swap one sugary drink for water.",
  "Add a handful of spinach to your eggs.",
  "Eat without looking at a screen.",
  "Stretch your legs while brushing teeth.",
  "Breathe deeply before your largest meal.",
  "Keep healthy snacks visible.",
  "Go to bed 15 minutes earlier.",
  "Limit caffeine after 2 PM.",
  "Eat an apple when craving sweets.",
  "Stand up for 2 minutes every hour.",
  "Write down what you ate today.",
  "Focus on fiber-rich vegetables.",
  "Drink herbal tea in the evening.",
  "Plan your meals for tomorrow.",
  "Take the stairs instead of the elevator.",
  "Eat until you are 80% full.",
  "Add a pinch of salt to morning water.",
  "Do 10 squats before sitting down.",
  "Start your meal with a salad.",
  "Avoid artificial sweeteners.",
  "Keep a water bottle on your desk.",
  "Celebrate your small wins.",
  "Don't shop for food when hungry.",
  "Forgive yourself for slip-ups."
];

export const program3Messages = [
  "You are capable of amazing things.",
  "Consistency is the secret ingredient.",
  "Your health is an investment, not an expense.",
  "Small daily habits lead to massive results.",
  "You deserve to feel energetic and vibrant.",
  "Trust the process, even when it feels slow.",
  "Every healthy choice is a victory.",
  "Focus on how you feel, not just the scale.",
  "You are rewriting your biological destiny.",
  "Your body wants to heal itself.",
  "Nourish yourself with love and good food.",
  "A setback is just a setup for a comeback.",
  "You are stronger than your excuses.",
  "Hydration is the foundation of health.",
  "Sleep is your ultimate superpower.",
  "Be patient with your transformation.",
  "Your mind and body are connected.",
  "Celebrate how far you've come.",
  "Healthy is a lifestyle, not a destination.",
  "You have the power to change your life.",
  "Fuel your body like the premium engine it is.",
  "Breathe deeply and let go of stress.",
  "Your future self will thank you for today.",
  "Progress, not perfection.",
  "Listen to the whispers of your body.",
  "You are worthy of feeling your absolute best.",
  "Make today a masterpiece of healthy choices.",
  "Your potential is limitless.",
  "Every day is a fresh start.",
  "You've got this!"
];
