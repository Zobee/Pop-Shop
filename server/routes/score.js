const Router = require('express').Router()

const scores = [];

Router.get("/", (req, res) => {
  res.json(scores);
})

Router.post("/", (req, res) => {
  const {player, score} = req.body
  try {
    scores.push({player, score})
    res.send("Score Saved")
  } catch(err) {
    console.log(err)
    res.status(500).json({Error: "Error adding user to DB"})
  }
})

module.exports = Router