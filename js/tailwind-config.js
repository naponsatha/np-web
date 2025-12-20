// Tailwind CSS Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                secondary: "#1E3A8A",
                "background-light": "#F9FAFB",
                "background-dark": "#0F172A",
                "surface-light": "#FFFFFF",
                "surface-dark": "#1E293B",
            },
            fontFamily: {
                sans: ["Prompt", "sans-serif"],
                display: ["Prompt", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': "1rem",
                '2xl': "1.5rem",
            },
        },
    },
};
