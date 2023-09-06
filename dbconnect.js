const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
let db;
const app = express();
app.use(express.json());
app.use(cors());
connectToDb((err) => {
  if (!err) {
    app.listen(3003, () => {
      console.log("listening on port 3003");
    });
    db = getDb();
  }
});

app.get("/log", (req, res) => {
  let posts = [];
  db.collection("Log")
    .find()
    .sort({ id: 1 })
    .forEach((post) => posts.push(post))
    .then(() => {
      res.status(200).json(posts);
    })
    .catch(() => {
      res.status(500).json({ error: "fetch the documents" });
    });
});

app.post("/log", (req, res) => {
  db.collection("Log")
    .insertOne({
      email: req.body.email,
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password,
    })
    .then((result) => {
      res.status(201).json(result.value);
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not create a document" });
    });
});



// app.post("/tshirts", (req, res) => {
//   db.collection("tshirts")
//     .insertOne({
//       name: req.body.name,
//       Du: req.body.Du,
//       Gender: req.body.Gender,
//       size: req.body.size,
//     })
//     .then((result) => {
//       res.status(201).json(result.value);
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Could not create a document" });
//     });
// });

// app.get("/tshirts", (req, res) => {
//   let posts = [];
//   db.collection("tshirts")
//     .find()
//     .sort({ id: 1 })
//     .forEach((post) => posts.push(post))
//     .then(() => {
//       res.status(200).json(posts);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "fetch the documents" });
//     });
// });
