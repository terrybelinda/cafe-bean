var mysql_connection = require("./db_connection.js");

function getCategories(req, res) {
  console.log("getct");
  const sql = "call cafebean.getCategories()";
  mysql_connection.executeQuery(sql, []).then((result) => {
    res.send(result);
  });
}

module.exports = {
  getCategories: getCategories,
};
