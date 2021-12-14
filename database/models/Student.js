const { emit } = require('nodemon');
const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://media.istockphoto.com/vectors/young-teenage-woman-uses-laptop-for-work-or-chatting-with-friends-vector-id1188816693?k=20&m=1188816693&s=612x612&w=0&h=WIQcHnSo8kDmWBdBYcd8wX8PdJ6alsDYb4LQYRcVRxM="
  }
});


module.exports = Student;