const Router = require('express').Router()

const scores = {
  
}

Router.get("/", (req, res) => {
  res.json(scores);
})

Router.post("/", (req, res) => {
  const {user, score} = req.body
  try {
    scores[user] = score;
    res.send("Score Saved")
  } catch(err) {
    console.log(err)
    res.status(500).json({Error: "Error adding user to DB"})
  }
})

module.exports = Router