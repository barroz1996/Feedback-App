import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from 'uuid'
import AboutPage from "./pages/AboutPage"
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"



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
    <FeedbackProvider>
      <Router>
      <Header feedback = {feedback}/>
        <div className="feedback-container">
          <Routes>
            <Route 
            exact 
            path='/' element={
              <>
                <FeedbackForm handleAdd = {addFeedback}/>
                <FeedbackStats  feedback={feedback}/>
                <FeedbackList  feedback = {feedback}
                handleDelete = {deleteFeedback}/>
              </>
            }>
            </Route>
            
            <Route path='/about' element = {<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )

}
export default App