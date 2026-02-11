
const PHASES = [
    { id: 1, title: "Foundation & Awareness", focus: "Building the core habits regarding screens and posture." },
    { id: 2, title: "Light & Environment", focus: "Optimizing your visual workspace and lighting conditions." },
    { id: 3, title: "Relaxation & Recovery", focus: "Deepening relief techniques and stress management." },
    { id: 4, title: "Dynamic Focus", focus: "Training focus flexibility and peripheral awareness." },
    { id: 5, title: "Physical Integration", focus: "Connecting vision with neck, shoulders, and body movement." },
    { id: 6, title: "Lifestyle Mastery", focus: "Cementing these habits into your permanent lifestyle." }
];

const TOPICS = [
    {
        theme: "Screen Habits",
        concepts: [
            "The 20-20-20 Rule", "Conscious Blinking", "Micro-breaks", "The 'Look Up' Habit", "Text Size Optimization"
        ],
        actions: [
            "Set a timer for every 20 minutes.", "Blink softly every time you hit 'Enter'.", "Look out a window for 1 minute.", "Increase font size on your phone.", "Clean your screen dust."
        ]
    },
    {
        theme: "Environment",
        concepts: [
            "Ambient Lighting", "Glare Reduction", "Screen Distance", "Air Quality", "Color Temperature"
        ],
        actions: [
            "Adjust your desk lamp position.", "Close blinds to remove glare.", "Measure arm's length to screen.", "Open a window for fresh air.", "Switch phone to 'Night Shift' mode."
        ]
    },
    {
        theme: "Physical Relief",
        concepts: [
            "Jaw Tension", "Neck Mobility", "Shoulder Relaxation", "Hydration for Eyes", "Palming Basics"
        ],
        actions: [
            "Massage your jaw hinge.", "Do 3 gentle neck rolls.", "Drop your shoulders away from ears.", "Drink a full glass of water.", "Warm hands and cover eyes for 30s."
        ]
    },
    {
        theme: "Mindset & Awareness",
        concepts: [
            "Visual Breath", "Peripheral Awareness", "Soft Focus", "Scanning vs Staring", "Mental Strain"
        ],
        actions: [
            "Take 3 deep breaths while looking far.", "Notice objects to your far left/right.", "Soften your gaze on a plant.", "Scan the room corners with eyes only.", "Close eyes and visualize black."
        ]
    }
];

const TIPS = [
    "Hydration directly affects tear production.",
    "A lower screen angle produces less strain than a high one.",
    "Blue light filters can help in the evening.",
    "Blinking pumps moisture over the eye surface.",
    "Tension in the neck restricts blood flow to the head.",
    "Natural light is the best light for reading.",
    "Your eyes need darkness to fully recover.",
    "Staring freezes your focus muscles; movement keeps them flexible."
];

export const getDayContent = (id) => {
    // 1. Identify Phase
    const phaseIndex = Math.ceil(id / 30) - 1;
    const phase = PHASES[phaseIndex] || PHASES[5];

    // 2. Identify Cycle Logic (Rotate through topics)
    const topicIndex = (id - 1) % TOPICS.length;
    const topic = TOPICS[topicIndex];

    // 3. Select Specific Concept/Action within the Topic (Rotate to avoid repetition)
    const variationIndex = Math.floor((id - 1) / TOPICS.length) % 5;

    const conceptTitle = topic.concepts[variationIndex] || topic.concepts[0];
    const actionDetails = topic.actions[variationIndex] || topic.actions[0];
    const tip = TIPS[(id - 1) % TIPS.length];

    // 4. Special Case: Milestone Days (30, 60, 90...)
    const isMilestone = id % 30 === 0;

    if (isMilestone) {
        return {
            phase: phase.id,
            title: `Day ${id}: Phase ${phase.id} Completion`,
            date: `Day ${id} of 180`,
            focus: "Reflection and Consolidation",
            focusText: `Congratulations! You have reached the end of Phase ${phase.id}: ${phase.title}. Today is about reviewing what you've learned and preparing for the next step.`,
            concept: "Mastery through Consistency",
            conceptText: [
                "You have successfully navigated 30 days of conscious visual practice.",
                "Take this day to celebrate your consistency. Your eyes thank you."
            ],
            action: {
                title: "Phase Review",
                details: "Scroll back through the last few weeks and note which habits felt most beneficial.",
                steps: ["Review your progress.", "Rest your eyes fully.", "Prepare for the next phase."],
                time: "10 minutes"
            },
            tips: ["Rest is just as important as practice."]
        };
    }

    // 5. Normal Day Construction
    return {
        phase: phase.id,
        title: `Day ${id}: ${conceptTitle}`,
        date: `Day ${id} of 180`,
        focus: `${phase.title} - ${topic.theme}`,
        focusText: `Welcome to Day ${id}. In this phase, we are focusing on ${phase.focus} Today, we dive deeper into **${topic.theme}**, specifically looking at **${conceptTitle}**.`,
        concept: conceptTitle,
        conceptText: [
            `Understanding ${conceptTitle} is crucial for long-term comfort.`,
            `When we neglect this aspect, cumulative strain builds up. By addressing it today, you are investing in your future vision.`
        ],
        action: {
            title: `Practice: ${conceptTitle}`,
            details: actionDetails,
            steps: [
                "Stop what you are doing.",
                actionDetails,
                "Notice how your eyes feel immediately after."
            ],
            time: "3-5 minutes"
        },
        tips: [tip]
    };
};
