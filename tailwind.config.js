/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        container: {
            center: true,
            screens:false
        },
        fontFamily: {
            main: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        colors: {
            disableColor: "#898b8d",
            "gray-secondary": "#f5f5f5",
            mainTextClr: "#1c1d1f",
            activeClr: "#6b3fd6"
        },
        extend: {},
    },
    plugins: [],
};
