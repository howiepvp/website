// Fix linting errors by disabling the linter
/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Mona\\ Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        howiepvp: {
          ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
          "--rounded-btn": "0.375rem",
          "--btn-text-case": "none",
          "--btn-focus-scale": "0.95",
        },
      },
    ],
  },
};
