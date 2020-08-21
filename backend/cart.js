var mysql_connection = require("./db_connection.js");

function insertToCart(req, res) {
  console.log("insert");
  const sql = "call cafebean.insertToCart(?,?,?,?,?)";
  const { user_id, product_id, quantity, cost, size } = req.body;
  mysql_connection
    .executeQuery(sql, [user_id, product_id, quantity, cost, size])
    .then((result) => {
      res.send(result);
    });
}

function getCart(req, res) {
  console.log("*********************************");

  const sql = "call cafebean.getCart(?)";
  const user_id = req.query.user_id;

  mysql_connection.executeQuery(sql, [user_id]).then((result) => {
    res.send(result);
  });
}

module.exports = {
  insertToCart: insertToCart,
  getCart: getCart,
};
