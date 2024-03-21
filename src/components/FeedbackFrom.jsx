import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackFrom() {
  const [text,setText] = useState('')
  const [rating,setRating] = useState(10)
  const [btnDisabled,setBtnDisabled] = useState(true)
  const [message,setMessage] = useState('')


  const handleTextChange = (e) => {
    const inputValue = e.target.value;
    if(inputValue.trim().length === 0){
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !=='' && inputValue.trim().length <= 10){
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    }else{
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
}
  return (
    <Card>
      <form>
        <h2>how would you rate your service with us?</h2>
        <RatingSelect select = {(rating)=> setRating(rating)}/>
        <div className="input-group">
          <input onChange={handleTextChange} 
          type = "text" 
          placeholder="Write a review" 
          value = {text}
          />
          <Button type ='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackFrom
