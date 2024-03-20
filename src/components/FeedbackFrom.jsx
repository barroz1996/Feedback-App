import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"

function FeedbackFrom() {
  const [text,setText] = useState('')
  const handleTextChange = (e) => {
    setText(e.target.value)
}
  return (
    <Card>
      <form>
        <h2>how would you rate your service with us?</h2>
        <div className="input-group">
          {/*@todo - rating select component */}
          <input onChange={handleTextChange} 
          type = "text" 
          placeholder="Write a review" 
          value = {text}
          />
          <Button type ='submit' >Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackFrom