const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",     // since you’re running locally
  user: "root",          // default MySQL user
  password: "grapes@31", // your password
  database: "schooldb",   // we will create this DB
  port: 3306             // default MySQL port
});


db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed: ", err);
    return;
  }
  console.log("✅ Connected to MySQL Database!");
});

module.exports = db;