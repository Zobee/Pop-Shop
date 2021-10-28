import { useState, useEffect } from "react"
import axios from "axios"

const Scores = () => {
  const [scores, setScores] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/scores")
    .then(res => setScores(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      {console.log(scores)}
    </div>
  )
}

export default Scores
