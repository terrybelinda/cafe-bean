const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "terry",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw error;
  console.log("connected!");
});

function executeQuery(query, args) {
  return new Promise((resolve, reject) => {
    con.query(query, args, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}

module.exports = {
  executeQuery: executeQuery,
};
