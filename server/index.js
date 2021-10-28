const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors')
const app = express();

const score = require('./routes/score')

app.use(express.json())
app.use(cors())
app.use("/scores", score)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`)
})