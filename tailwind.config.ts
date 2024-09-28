import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  darkMode: 'class',  // Enable dark mode using a class
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',  // Scan context folder too
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
      colors: {
        dark: '#000000', // Custom color for dark mode background
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

export default config;

function addVariablesForColors({ addBase, theme }: { addBase: Function; theme: Function }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
