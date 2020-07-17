const controller = require("../../app/controllers/placement.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/placement/get", controller.getPlacements);
  app.post("/api/placement/insert", controller.insertPlacement);
  app.put("/api/placement/update", controller.updatePlacement);
  app.delete("/api/placement/delete", controller.deletePlacement);
};
