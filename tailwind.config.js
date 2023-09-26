/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "570px",
      lg: "768px",
      "2lg": "1024px",
      xl: "1280px",
      "2xl": "1536px",
    
    },

    extend: {
      maxWidth: {
        container: "1280px",
      },
      lineHeight: {
        small: "1.1",
        md: "1.2",
      },
      aspectRatio: {
        "4/5": "4 / 5",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },

        wiggle2: {
          '0%, 100%': { transform: 'rotate(-40deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        wiggle2: 'wiggle2 4s ease-in-out infinite',
      },
      innerWidth: {
        clampHeader: "clamp(280px, 5vw, 1140px)",
        // clampBlock: "clamp(336px 50% 32vw)",
      },

      // spacing: {
      //     clampBlock: "clamp(336px 50% 32vw)",
      // },
      content: {
        checkboxSign: 'url("./src/components/icons/checkbox.svg")',
      },
      fontSize: {
        // clamp: "clamp(1rem, 5vw, 3rem)",
        // clampMenu: "clamp(0.75rem, 2vw, 1rem)",
        clampMenu: "clamp(11px, 1.25vw, 16px)",
        // clampTitle: "clamp(2rem, 5vw, 3rem)",
        clampTitle: "clamp(32px, 5vw, 72px)",
        // clamp: "clamp(1rem, 5vw, 1.5rem)",
        clampParagraph: "clamp(14px, 3vw, 16px)",
      },
      colors: {
        main: "#582467",
        accent2: "#B686C3",
        accent3: "#9E71AB",
        accent4: "#E1CAE8",
        accent5: "#AB83B7",
        disabled: "#BC9DC5",
        red: "#E7414B",
        lightGrey: "#A275AF",
        greyLight: "#F2F2F2",
        brown: "#CEA796",
        lightBrown: "#F3E5DF",
        bg: "#FDF8F6",
        shadow: "#AB80B8",
        // primary: colors.purple,
        // secondary: colors.sky,
      },
      fontFamily: {
        main: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // darkMode: "class",
};
