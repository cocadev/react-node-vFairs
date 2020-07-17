const db = require("../models");
const User = db.user;
const Student = db.student;

exports.getUsers = (req, res) => { User.findAll().then(response => res.send(response)) };

exports.setUserData = (req, res) => {
  userId = req.body.i;
  userUuid = req.body.u;
  userRole = req.body.r;
  res.send();
};

exports.removeUserData = (req, res) => {
  userId = req.body.i;
  userUuid = req.body.u;
  userRole = req.body.r;
  res.send();
};

exports.registerUser = (req, res) => {
  const uuid = req.body.uuid;
  const name = req.body.name;
  const pass = req.body.pass;
  const phone = req.body.ph;
  const email = req.body.email;
  User.create({
    uuid: uuid,
    role: 'student',
    name: name,
    logo: 'assets/images/avatars/profile.jpg',
    phone: phone,
    email: email,
    password: pass
  }).then(results => res.send(results));
};

exports.registerStudent = (req, res) => {
  const uuid = req.body.uuid;
  const name = req.body.name;
  const pass = req.body.pass;
  const phone = req.body.ph;
  const email = req.body.email;
  Student.create({
    name: name,
    logo: 'assets/images/avatars/profile.jpg',
    email: email
  }).then(results => res.send(results));
};
