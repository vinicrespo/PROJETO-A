/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1a3a52", // Navy
                accent: "#d4a574",  // Gold
                light: "#f5f5f5",   // Off-white
                secondary: "#e8e8e8", // Light Grey
                text: {
                    dark: "#1a3a52",
                    body: "#444444",
                    muted: "#777777",
                },
                softBlue: "#e8f0f6",
            },
            fontFamily: {
                sans: ['"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
