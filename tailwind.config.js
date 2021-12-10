const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./views/**/*.hbs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
