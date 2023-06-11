var Sequelize = require('sequelize');
var sequelize = new Sequelize('user_management_v2', 'sa','root',{
    server: 'localhost', 
    dialect: "mssql", 
    options: {
      encrypt: true,
      enableArithAbort: true,
      trustedConnection: true
    },
    trustServerCertificate: true
});

var user = sequelize.define('user', {
	full_name : {
		type : Sequelize.STRING,
		allowNull : false,
		unique: true,
		validate:  {
			isAlphanumeric: true,
			notEmpty: true
		}
	},
	dob : {
		type : Sequelize.DATE,
		allowNull : false,
		validate : {
			notEmpty: true
		}
	},
	email : {
		type : Sequelize.STRING,
		allowNull : false,
		unique: true,
		validate : {
			isEmail: true,
			notEmpty: true
		}
	}
}, {
	comment: "user table is used for storing the personal details of a User."
});

module.exports = {'Sequelize' : sequelize, 'user' : user };