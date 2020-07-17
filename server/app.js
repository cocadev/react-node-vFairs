require('dotenv').config();

var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var http = require('http');
const path = require('path');
const fileUpload = require('express-fileupload')
var router = require('./src/router');
var syncServiceDetails = require('./src/sync_service_details');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public/uploads')))
app.use(router);
app.use(fileUpload())

// Get Sync Service Details for lazy creation of default service if needed
syncServiceDetails();

const db = require("./app/models");
const User = db.user;
const Booth = db.booth;
const Program = db.program;
const Graphics = db.graphics;

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => { initiate(); });

const initiate = () => {
  User.create({
    role: 'admin',
    email: 'admin@odros.com',
    password: 'admin',
    name: 'Administrator Name',
    logo: 'assets/images/avatars/profile.jpg'
  });
  User.create({
    role: 'student',
    email: 'student@odros.com',
    password: 'student',
    name: 'Student Name',
    logo: 'assets/images/avatars/profile.jpg'
  });
  User.create({
    role: 'representative',
    email: 'representative@odros.com',
    password: 'representative',
    name: 'Representative Name',
    logo: 'assets/images/avatars/profile.jpg'
  });
  User.create({
    role: 'university',
    email: 'university@odros.com',
    password: 'university',
    name: 'University Name',
    logo: 'assets/images/avatars/profile.jpg'
  });
  User.create({
    role: 'school',
    email: 'school@odros.com',
    password: 'school',
    name: 'School Name',
    logo: 'assets/images/avatars/profile.jpg'
  });
  Booth.create({
    universityId: 4
  });
  Graphics.create({
    universityId: 4
  });
  Program.create({
    spec_name: 'Math'
  });
  Program.create({
    spec_name: 'English'
  });
  Program.create({
    spec_name: 'Biology'
  });
};

require('./app/routes/auth')(app);
require('./app/routes/banners')(app);
require('./app/routes/placement')(app);
require('./app/routes/tables')(app);
require('./app/routes/booth')(app);

module.exports = app;
