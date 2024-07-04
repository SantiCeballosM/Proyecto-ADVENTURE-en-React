/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});
let values;

app.post("/register", (req, res) => {
    console.log(req.body.fullname)
    const values = [
    req.body.fullname,
    req.body.email,
    req.body.password,
    req.body.birthdate,
    req.body.phone_number,
  ];

  const sql = "INSERT INTO persona_natural (full_name, email, password, birthdate, phone_number) VALUES(?)";
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM persona_natural WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length > 0) {
      console.log(data)
      return res.json({
        "response":200,
        "data":data
      });
    } else {
      return res.json("Falla");
    }
  });
});

app.listen(5000, () => {
  console.log("listening");
});
