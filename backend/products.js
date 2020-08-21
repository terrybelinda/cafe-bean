var mysql_connection = require("./db_connection.js");

function getProducts(req, res) {
  const sql = "call cafebean.getProducts()";
  mysql_connection.executeQuery(sql, []).then((result) => {
    console.log(result);
    res.send(result);
  });
}

module.exports = {
  getProducts: getProducts,
};
