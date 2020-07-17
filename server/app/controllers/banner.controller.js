const db = require("../models");
const Banner = db.banner;

exports.getBanners = (req, res) => { Banner.findAll({ where: { fairId: req.params.id } }).then(response => res.send(response)) };

exports.insertBanner = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Banner.create({
    fairId: req.params.id,
    position: parsedData.position,
    link: parsedData.link
  }).then(results => res.send(results));
};

exports.updateBanner = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Banner.update({
    link: parsedData.link,
    position: parsedData.position
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.updateBannerImage = (req, res) => {
  Banner.update({
    base64: req.body.banner
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteBanner = (req, res) => { Banner.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
