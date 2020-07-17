const controller = require("../../app/controllers/banner.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/banners/get/:id", controller.getBanners);
  app.post("/api/banners/insert/:id", controller.insertBanner);
  app.put("/api/banners/update/:id", controller.updateBanner);
  app.delete("/api/banners/delete/:id", controller.deleteBanner);
  app.put("/api/banners/updateBanner/:id", controller.updateBannerImage);
};
