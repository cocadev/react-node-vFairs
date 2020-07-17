const controller = require("../../app/controllers/tables.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/users/get", controller.getUser);
  app.get("/api/universities/get", controller.getUniversities);
  app.get("/api/universities/get/:id", controller.getFairUniversities);
  app.get("/api/schools/get", controller.getSchools);

  app.put("/api/university/updateInfo", controller.updateInfo);
  app.put("/api/updateStudent", controller.updateStudent);
  app.put("/api/updateLogo", controller.updateLogo);

  app.get("/api/representatives/get", controller.getReps);
  app.post("/api/representatives/insert", controller.insertRep);
  app.put("/api/representatives/update", controller.updateRep);
  app.delete("/api/representatives/delete", controller.deleteRep);

  app.get("/api/fairs/get", controller.getFairs);
  app.post("/api/fairs/insert", controller.insertFair);
  app.put("/api/fairs/update", controller.updateFair);
  app.delete("/api/fairs/delete", controller.deleteFair);
};
