require("handlebars-helpers")();
const handlebars = require("handlebars");

// Custom helper for Handlebars
handlebars.registerHelper("custom-helper", function (value) {
  return value;
});
