/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            screens: false,
        },
        fontFamily: {
            SusseWorks: "SusseWorks",
            main: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        colors: {
            white: "#fff",
            disableColor: "#6a6f73",
            "gray-secondary": "#f5f5f5",
            mainTextClr: "#1c1d1f",
            activeClr: "#6b3fd6",
            border: "#d1d7dc",
            liColor: "#2d2f31",
        },
        extend: {
            boxShadow: {
                custom: "  0px 9px 15px -3px rgba(0,0,0,0.1)",
                dropDownBox: "0 0 0 1px #d1d7dc,0 2px 4px #00000014,0 4px 12px #00000014",
            },
        },
    },
    plugins: [],
};
