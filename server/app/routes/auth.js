const controller = require("../../app/controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/users", controller.getUsers);
  app.post("/api/setUserData", controller.setUserData);
  app.post("/api/removeUserData", controller.removeUserData);
  app.post("/api/registerUser", controller.registerUser);
  app.post("/api/registerStudent", controller.registerStudent);
};
