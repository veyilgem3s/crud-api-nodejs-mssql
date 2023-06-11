//var sql = require("mssql");
var config = {
  user: 'sa',
  password: 'root',
  server: 'localhost', 
  database: 'user_management_v2',
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustedConnection: true
  },
  trustServerCertificate: true
};

module.exports = config;