const express = require("express");
var bodyParser = require("body-parser");
var user_handler = require("./user.js");
var product_handler = require("./products.js");
var category_handler = require("./categories.js");
var cart_handler = require("./cart.js");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json({ extended: false }));
const { body, validationResult } = require("express-validator");

app.get("/", (req, res) => res.send("API runing"));
app.get("/user", user_handler.checkLogin);
app.get("/products", product_handler.getProducts);
app.get("/category", category_handler.getCategories);
app.post("/insertCart", cart_handler.insertToCart);
app.get("/getCart", cart_handler.getCart);
app.post(
  "/register",
  [
    // username must be an email
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    user_handler.registerUser(req, res, validationResult(req));
  }
);

app.listen(port, () => console.log(`hello ${port}`));
