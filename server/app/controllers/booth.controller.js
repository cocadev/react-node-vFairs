const FileSaver = require('file-saver');
const db = require("../models");
const fs = require('fs');
const path = require('path');
const Booth = db.booth;
const Program = db.program;
const Link = db.menu;
const Mat = db.mat;
const Graphics = db.graphics;
const User = db.user;
const Blob = require("cross-blob");
const mkdirp = require('mkdirp')

exports.getBooth = (req, res) => { Booth.findAll({ where: { universityId: userId } }).then(response => res.send(response)) };
exports.getGraphics = (req, res) => { Graphics.findAll({ where: { universityId: userId } }).then(response => res.send(response)) };
exports.getPrograms = (req, res) => { Program.findAll().then(response => res.send(response)) };
exports.getBooths = (req, res) => { Booth.findAll({ where: { fairId: req.params.id } }).then(response => res.send(response)) };

exports.updateBoothPosition = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Booth.update({
    position: parsedData.position
  }, {
    where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.setLayout = (req, res) => {
  Booth.update({
    layout: req.body.layout
  }, {
    where: { universityId: userId }
  }).then(status => res.sendStatus(200));
};

exports.setPublish = (req, res) => {
  Booth.update({
    ready: 1
  }, {
    where: { universityId: userId }
  }).then(status => res.sendStatus(200));
};

exports.setPublishUser = (req, res) => {
  User.update({
    boothReady: 1
  }, {
    where: { id: userId }
  }).then(status => res.sendStatus(200));
};

exports.setColor = (req, res) => {
  Booth.update({
    color: req.body.color
  }, {
    where: { universityId: userId }
  }).then(status => res.sendStatus(200));
};

exports.setGraphics = (req, res) => {
  Graphics.update({
    layout: req.body.layout,
    color: req.body.color,
    tv: req.body.tv,
    tvLnk: req.body.tvLnk,
  }, {
    where: { universityId: userId }
  }).then(status => res.sendStatus(200));
};

exports.resetBanners = (req, res) => {
  Booth.update({
    graphics: null
  }, {
    where: { universityId: userId }
  }).then(status => res.sendStatus(200));
};

exports.getMenus = (req, res) => { Link.findAll({ where: { universityId: userId } }).then(response => res.send(response)) };

exports.insertMenu = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Link.create({
    universityId: userId,
    title: parsedData.title,
    url: parsedData.url
  }).then(results => res.send(results));
};

exports.updateMenu = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Link.update({
    title: parsedData.title,
    url: parsedData.url
  }, {
    where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteMenu = (req, res) => { Link.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };

exports.getMats = (req, res) => { Mat.findAll({ where: { universityId: userId } }).then(response => res.send(response)) };

exports.insertMat = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Mat.create({
    universityId: userId,
    type: parsedData.type,
    title: parsedData.title,
    url: parsedData.url
  }).then(results => res.send(results));
};

exports.updateMat = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Mat.update({
    type: parsedData.type,
    title: parsedData.title,
    url: parsedData.url
  }, {
    where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.uploadDoc = (req, res) => {
  console.log('body: ', req.body);
  console.log('files: ', req.files);
  console.log('file: ', req.file);

  var obj = req.files.file;
  var userId = req.body.key;
  var name = obj.name;
  var imagePath = path.join("public/uploads", userId, name);
  console.log('path: ' + imagePath);

  mkdirp(`public/uploads/${userId}`).then(made => {
    obj.mv(
      imagePath,
      function (err) {
        if (err) {
          return res.status(500).send(err)
        }
        Mat.update({ url: imagePath }, { where: { id: userId } }).then(status => res.json({
          file: imagePath,
        }));
      },
    )
  })


};

exports.deleteMat = (req, res) => { Mat.destroy({ where: { id: userId } }).then(status => res.sendStatus(200)); };
