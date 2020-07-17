const db = require("../models");
const User = db.user;
const Student = db.student;
const VFair = db.vfair;

exports.getUser = (req, res) => { User.findAll({ where: { id: userId } }).then(response => res.send(response)) };
exports.getUniversities = (req, res) => { User.findAll({ where: { role: 'university', boothReady: 1 } }).then(response => res.send(response)) };
exports.getFairUniversities = (req, res) => { User.findAll({ where: { role: 'university', boothReady: 1, fairId: req.params.id } }).then(response => res.send(response)) };
exports.getSchools = (req, res) => { User.findAll({ where: { role: 'school' } }).then(response => res.send(response)) };
exports.getReps = (req, res) => { User.findAll({ where: { role: 'representative', university_id: userId } }).then(response => res.send(response)) };

exports.insertRep = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  User.create({
    university_id: userId,
    role: 'student',
    logo: 'assets/images/avatars/profile.jpg',
    name: parsedData.name,
    phone: parsedData.phone,
    email: parsedData.email,
    password: parsedData.password
  }).then(results => res.send(results));
};

exports.updateRep = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  User.update({
    name: parsedData.name,
    phone: parsedData.phone,
    email: parsedData.email,
    password: parsedData.password
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteRep = (req, res) => { User.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };

exports.updateInfo = (req, res) => {
  const programs = req.body.programs;
  const progr = JSON.stringify(programs);
  console.log(progr);
  User.update({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    destination: req.body.dest,
    programs: progr,
    description: req.body.description
  }, { where: { id: userId }
  }).then(status => res.sendStatus(200));
};

exports.updateLogo = (req, res) => {
  User.update({
    logo: req.body.logo
  }, { where: { id: userId }
  }).then(status => res.sendStatus(200));
};

exports.updateStudent = (req, res) => {
  User.update({
    name: req.body.name,
    phone: req.body.ph,
    email: req.body.email,
    password: req.body.pass
  }, { where: { id: userId }
  }).then(status => res.sendStatus(200));
};

exports.getFairs = (req, res) => { VFair.findAll().then(response => res.send(response)) };

exports.insertFair = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  VFair.create({
    name: parsedData.name,
    start: parsedData.start,
    end: parsedData.end,
    g12: parsedData.g12,
    g11: parsedData.g11,
    max: parsedData.max,
    school: parsedData.school
  }).then(results => res.send(results));
};

exports.updateFair = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  VFair.update({
    name: parsedData.name,
    start: parsedData.start,
    end: parsedData.end,
    g12: parsedData.g12,
    g11: parsedData.g11,
    max: parsedData.max,
    school: parsedData.school
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteFair = (req, res) => { VFair.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
