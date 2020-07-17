const db = require("../models");
const Placement = db.placement;

exports.getPlacements = (req, res) => { Placement.findAll().then(response => res.send(response)) };

exports.insertPlacement = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Placement.create({
    university: parsedData.university,
    position: parsedData.position
  }).then(results => res.send(results));
};

exports.updatePlacement = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Placement.update({
    university: parsedData.university,
    position: parsedData.position
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deletePlacement = (req, res) => { Placement.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
