var mysql_connection = require("./db_connection.js");

function checkLogin(req, res) {
  console.log("here");
  const sql = "select * from cafebean.user;";
  mysql_connection.executeQuery(sql, []).then((result) => {
    res.send(result);
  });
}

function registerUser(req, res, errors) {
  console.log(req.body);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    email,
    password,
    Apt,
    Street,
    city,
    country,
    Zipcode,
    dob,
  } = req.body;

  const sql = "call cafebean.registerUser(?,?,?,?,?,?,?,?,?)";
  console.log("inside user.js");
  mysql_connection
    .executeQuery(sql, [
      name,
      email,
      password,
      Apt,
      Street,
      city,
      country,
      Zipcode,
      dob,
    ])
    .then((result) => {
      res.send(result);
    });
  //see if user exists
  // get user gravitar
  // encrpyt password
  // return JWT.
}
module.exports = {
  checkLogin: checkLogin,
  registerUser: registerUser,
};
