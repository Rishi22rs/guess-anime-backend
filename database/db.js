var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "guessanime",
  password: "",
  multipleStatements: true,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;
