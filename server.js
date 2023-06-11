const express = require('express');
const config = require('./app/config/db')
const app = express();
const cors = require('cors');
const router = require('./app/routes/user.routes')

var sql = require("mssql");

// config for your database


sql.connect(config, function (err) {    
    if (err) console.log(err);
    else console.log("connect")
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user",router);


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
