import React, {useState} from 'react';

import {Card} from "../styles"

function FeedbackForm() {

const [text, setText] = useState("");

const handleText = (e) =>{
    setText(e.target.value);
}

  return (
    <Card>
      <form>
        <h2>How would you rate your experience with us?</h2>
        <div className='input-group'>
            <input 
            type="text" 
            value={text}
            onChange= {handleText} 
            placeholder="Write a review" />
            <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm;
