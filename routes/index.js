module.exports = async function (app, opts) {
  app.get("/", function (req, res) {
    res.view("/views/index");
  });
};
