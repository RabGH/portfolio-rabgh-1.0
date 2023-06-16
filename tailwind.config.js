/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                screens: {
                    "2xl": "2560px",
                },
            },
            height: {
                "50vh": "50vh",
                "80vh": "80vh",
                "90vh": "90vh",
                "70vh": "70vh",
                "110vh": "110vh",
            },
            screens: {
                // sm: 640px
                // md: 768px
                // lg: 1024px
                // xl: 1280px
                // 2xl: 1536px
                xxxs: "320px",
                xxs: "375px",
                xs: "414px",
                s: "425px",
                ipadpro: {
                    raw: "(min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
