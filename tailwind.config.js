// eslint-disable-next-line no-undef
module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            "sm": "0.75rem",
            "base": "1rem",
            "lg": "1.5rem",
            "xl": "2rem",
            "2xl": ["min(6rem, 2rem + 15vw)", "normal"]
        },
        colors: {
            "primary": "var(--primary)",
            "primary-highlight": "var(--primary-highlight)",
            "secondary": "var(--secondary)",
            "secondary-highlight": "var(--secondary-highlight)",
            "dark": "var(--dark)",
            "light": "var(--light)"
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
