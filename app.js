"use strict";

require("./helpers");
const path = require("path");
const AutoLoad = require("fastify-autoload");
const minifier = require("html-minifier");
const handlebars = require("handlebars");
//
const publicDir = path.join(__dirname, "public");

module.exports = async function (app, opts) {
  app.register(require("fastify-static"), {
    root: publicDir,
    prefix: "/public",
  });

  app.register(require("point-of-view"), {
    engine: {
      handlebars: handlebars,
    },
    includeViewExtension: true,
    layout: "./views/layouts/layout.hbs",
    options: {
      partials: {
        head: "/views/partials/head.hbs",
        header: "/views/partials/header.hbs",
        footer: "/views/partials/footer.hbs",
      },

      useHtmlMinifier: minifier,
      htmlMinifierOptions: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
      },
    },
  });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  app.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  app.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};
