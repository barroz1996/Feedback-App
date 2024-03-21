import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackFrom from "./components/FeedbackFrom"
import {v4 as uuidv4} from 'uuid'
import {motion,AnimatePresence} from 'framer-motion'



function App(){
  const[feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4() // make the rating we get unseen with code
      setFeedback([newFeedback, ...feedback ])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter ((item)=> item.id !== id)) // we want to filter the id was clicked by the client
    }
    
  }

  return(
    <>
    <Header feedback = {feedback}/>
      <div className="container">
        <FeedbackFrom handleAdd = {addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback = {feedback}
        handleDelete = {deleteFeedback}/>
      </div>
    </>
  )

}
export default App