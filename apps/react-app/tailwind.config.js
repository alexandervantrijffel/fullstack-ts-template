module.exports = {
    content: [
        "./pages/**/*.{ts,tsx,js,jsx}",
        "./src/**/*.{ts,tsx,js,jsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                blue: {
                    light: "#415f80",
                    DEFAULT: "#295686",
                    dark: "#225082",
                },
                gray: {
                    dark: "#6a6a6a",
                },
            },
        },
        fontFamily: {
            roboto: ["Roboto", "Helvetica"],
            mogra: ["Mogra", "Helvetica"],
            poppins: ["Poppins", "Helvetica"],
        },
        backgroundImage: (theme) => ({
            bg: "url('/img/bg.webp')",
            maincontainer: "url('/img/maincontainer.png')",
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
