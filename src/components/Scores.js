import { useState, useEffect } from "react"
import axios from "axios"

const Scores = () => {
  const [scores, setScores] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/scores")
    .then(res => console.log(res.data))
  },[])
  return (
    <div>
      Ball
    </div>
  )
}

export default Scores
