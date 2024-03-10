const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2");

const app = express();
const port = 3003;

// Connection MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// example hello express.js
app.get("/", (req, res) => {
  res.send("Hello! Node.js");
});
//User login
app.get("/users", function (req, res, next) {
  // simple query
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    res.json(results);
  });
});

app.get("/user", function (req, res, next) {
  const { userId } = req.query;
  // simple query
  connection.query(`SELECT * FROM users WHERE user_id = '${userId}'`, function (err, results, fields) {
    if (err) {
      // If there's an error, send a 500 response
      res
        .status(500)
        .json({ message: err, error: "An error occurred while creating the user." });
    } else {
      // If successful, send a 201 response with the inserted user's ID
      res
        .status(201)
        .json({ message: "Find user by id successfully.", data: results });
    }
  });
});

app.post("/user", function (req, res, next) {
  // Extract user data from request body
  const { username } = req.body;

  // SQL query to insert a new user
  const query = "INSERT INTO `users` (username) VALUES (?)";

  // Execute the query
  connection.query(query, [username], function (err, results) {
    if (err) {
      // If there's an error, send a 500 response
      res
        .status(500)
        .json({ message: err, error: "An error occurred while creating the user." });
    } else {
      // If successful, send a 201 response with the inserted user's ID
      res
        .status(201)
        .json({ message: "User created successfully.", id: results.insertId });
    }
  });
});

//Edit Product 
app.get("/product", function (req, res, next) {
  // simple query
  connection.query("SELECT * FROM `Product`", function (err, results, fields) {
    res.json(results);
  });
});

app.post("/product", function (req, res, next) {
  // Extract user data from request body
  const { productName, price, promotion, description } = req.body;

  // SQL query to insert a new user
  const query = "INSERT INTO `Product` (product_Name, price, promotion, description  ) VALUES (?,?,?,?)";
  const values = [productName, price, promotion, description];

  // Execute the query
  connection.query(query, values, function (err, results) {
    if (err) {
      // If there's an error, send a 500 response
      res
        .status(500)
        .json({ message: err, error: "An error occurred while creating the user." });
    } else {
      // If successful, send a 201 response with the inserted user's ID
      res
        .status(201)
        .json({ message: "User created successfully."});
    }
  });
});

app.put("/product/:id", function (req, res, next) {
  // Extract product data from request body
  const { productName, price, promotion, description } = req.body;
  const { id } = req.params; // Get the product ID from the URL parameters
 
  // SQL query to update the product
  const query = "UPDATE `Product` SET product_Name = ?, price = ?, promotion = ?, description = ? WHERE product_ID = ?";
  const values = [productName, price, promotion, description, id];
 
  // Execute the query
  connection.query(query, values, function (err, results) {
     if (err) {
       // If there's an error, send a 500 response
       res
         .status(500)
         .json({ message: err, error: "An error occurred while updating the product." });
     } else {
       // If successful, send a 200 response indicating success
       res
         .status(200)
         .json({ message: "Product updated successfully." });
     }
  });
 });
 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
