const query = require("mssql");
var Sequelize = require('sequelize');
const user = require("../model/user.model").user;
const sequelize = require("../model/user.model").user;
const config = require('../config/db');
var sql = require("mssql");
//const User = db.User;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    let  pool = await  sql.connect(config);
    let  users = await  pool.request().query("SELECT * from users");
    return  users.recordsets;
}

async function getById(id) {
    let  pool = await  sql.connect(config);
    let  users = await  pool.request().query("SELECT * from users where id ='" + id + "'");
    return  users.recordsets;
}

async function create(params) {
    var full_name = params.full_name;
    var dob = params.dob;
    var email = params.email;
    let  pool = await  sql.connect(config);
    let  insertUser = await  pool.request().query("insert into users values ('" + full_name + "','" + dob + "','" + email + "')");    
    return  insertUser.recordsets;
}

async function update(id, params) {
    var full_name = params.full_name;
    var dob = params.dob;
    var email = params.email;
    let  pool = await  sql.connect(config);
    let  users = await  pool.request().query("update users SET full_name ='" + full_name + "', dob ='" + dob + "', email ='" + email + "' where id ='" + id + "'");
    return  users.recordsets;
}

async function _delete(id) {
    let  pool = await  sql.connect(config);
    let  users = await  pool.request().query("delete from users where id ='" + id + "'");
    return  users.recordsets;
}