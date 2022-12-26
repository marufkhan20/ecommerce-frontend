/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //Themes colors
        primary: "#3577f0",
        lightPrimary: "#8c71db",
        secondary: "#ff497c",
        tertiary: "#FAB8C4",
        white: "#ffffff",
        dark: "#27272E",
        black: "#000000",
        light: "#CBD3D9",
        lighter: "#F6F7FB",
        lightest: "#C4C4C4",

        // Chart Color
        chart01: "#896BA7",
        chart02: "#BADEFF",
        chart03: "#E76458",
        // Typo Color
        heading: "#292930",
        body: "#777777",
        // Border Color
        "border-light": "#E3E6E9",
        "border-dark": "#42424A",
        // Gery Colors
        gray: "#999FAE",
        midgray: "#878787",
        // Extra Color
        extra01: "#999FAE",
        // Notify Colors
        success: "#3EB75E",
        danger: "#FF0003",
        warning: "#FF8F3C",
        info: "#1BA2DB",
        //Social icon colors
        facebook: "#3B5997",
        twitter: "#1BA1F2",
        youtube: "#ED4141",
        linkedin: "#0077B5",
        pinterest: "#E60022",
        instagram: "#C231A1",
        vimeo: "#00ADEF",
        twitch: "#6441A3",
        discord: "#7289da",
      },
    },
  },
  plugins: [],
};
