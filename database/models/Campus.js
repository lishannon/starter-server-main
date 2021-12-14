const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  address: {
    type: Sequelize.STRING
  },

  description: {
    type: Sequelize.STRING,
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://today.newhampton.org/wp-content/uploads/2017/09/campus-icon.png"
  }

});

module.exports = Campus;