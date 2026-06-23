import re

with open("app/index.html", "r") as f:
    content = f.read()

# 1. Replace SEQUENCES array
old_sequences = """        const SEQUENCES = [
            ["Reset Hydration", "Reset Trigger", "Reset Hormone"], // Sun
            ["Hydration", "Metabolic Trigger", "Hormone Window"], // Mon
            ["Lemon Cleanse", "Ginger Pulse", "Stillness 90s"], // Tue
            ["Mineral Activation", "Cinnamon Trigger", "Window Lock"], // Wed
            ["Apple Cider Spark", "Berberine Pulse", "Breath Cycle"], // Thu
            ["Salt Flush", "Turmeric Trigger", "Hormone Window"], // Fri
            ["Hydration Plus", "Metabolic Trigger", "Extended Window"] // Sat
        ];"""

new_sequences = """        const SEQUENCES = [
            [
                { n: "Reset Hydration", d: "Drink 16oz of warm water with a pinch of Celtic salt to rehydrate cells." },
                { n: "Reset Trigger", d: "Add 1/4 tsp of cayenne pepper to 2oz water. Drink in one gulp." },
                { n: "Reset Hormone", d: "Perform 4-7-8 breathing for 60 seconds to lower cortisol." }
            ], // Sun
            [
                { n: "Hydration", d: "Drink 12oz of room temperature water immediately upon waking." },
                { n: "Metabolic Trigger", d: "Take 1 capsule of your preferred probiotic with 4oz water." },
                { n: "Hormone Window", d: "Wait exactly 15 minutes before consuming your first meal." }
            ], // Mon
            [
                { n: "Lemon Cleanse", d: "Squeeze 1/2 fresh lemon into 8oz of warm water. Drink slowly." },
                { n: "Ginger Pulse", d: "Consume 1/4 tsp of raw ginger powder mixed in 2oz of water." },
                { n: "Stillness 90s", d: "Sit in complete silence for 90 seconds to stabilize vagal tone." }
            ], // Tue
            [
                { n: "Mineral Activation", d: "Drink 12oz water with 1/8 tsp of pink Himalayan salt." },
                { n: "Cinnamon Trigger", d: "Mix 1/2 tsp of Ceylon cinnamon in 4oz of warm water." },
                { n: "Window Lock", d: "Do not consume any calories or caffeine for the next 47 minutes." }
            ], // Wed
            [
                { n: "Apple Cider Spark", d: "Mix 1 tbsp raw ACV in 4oz water. Drink with a straw." },
                { n: "Berberine Pulse", d: "Take 500mg of Berberine (or substitute with green tea)." },
                { n: "Breath Cycle", d: "Take 10 deep belly breaths, exhaling twice as long as inhaling." }
            ], // Thu
            [
                { n: "Salt Flush", d: "Drink 16oz water mixed with 1/4 tsp of high-quality sea salt." },
                { n: "Turmeric Trigger", d: "Mix 1/4 tsp turmeric + a pinch of black pepper in 2oz water." },
                { n: "Hormone Window", d: "Wait 20 minutes before breaking your fast to maximize absorption." }
            ], // Fri
            [
                { n: "Hydration Plus", d: "Drink 16oz of water infused with cucumber or mint." },
                { n: "Metabolic Trigger", d: "Consume 1 tsp of raw coconut oil or MCT oil." },
                { n: "Extended Window", d: "Delay your first meal by an extra 30 minutes today." }
            ] // Sat
        ];"""

content = content.replace(old_sequences, new_sequences)

# 2. Replace Rendering Logic
old_render = """            let seqHtml = "";
            seqBase.forEach((step, i) => {
                let timeStr = `7:${12 + (i*6)} AM`;
                seqHtml += `
                <div class="sequence-step">
                    <div class="step-num">${i+1}</div>
                    <div class="step-info">
                        <div class="step-name">${prefix}${step}</div>
                        <div class="step-time">${timeStr}</div>
                    </div>
                    <div class="step-status">${hour >= 8 ? '✓' : (hour === 7 ? '▶' : '🔒')}</div>
                </div>`;
            });"""

new_render = """            let seqHtml = "";
            seqBase.forEach((stepObj, i) => {
                let timeStr = `7:${12 + (i*6)} AM`;
                seqHtml += `
                <div class="sequence-step" style="height: auto; align-items: flex-start; padding: 16px 12px;">
                    <div class="step-num" style="margin-top: 2px; flex-shrink: 0;">${i+1}</div>
                    <div class="step-info" style="flex-grow: 1; padding-right: 12px;">
                        <div class="step-name" style="margin-bottom: 2px;">${prefix}${stepObj.n}</div>
                        <div class="step-time" style="margin-bottom: 8px;">${timeStr}</div>
                        <div style="font-size: 13px; color: var(--text-muted); line-height: 1.4;">${stepObj.d}</div>
                    </div>
                    <div class="step-status" style="margin-top: 2px; flex-shrink: 0;">${hour >= 8 ? '✓' : (hour === 7 ? '▶' : '🔒')}</div>
                </div>`;
            });"""

content = content.replace(old_render, new_render)

with open("app/index.html", "w") as f:
    f.write(content)

print("Applied sequence updates.")
