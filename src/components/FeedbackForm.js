import React, {useState} from 'react';

import {Card} from "../styles";
import Button from '../shared/Button';

function FeedbackForm() {

const [text, setText] = useState("");
const [btnDisabled, setBtndisabled] = useState(true);
const [message, setMessage] = useState("");

const handleText = (e) =>{
    if(text === ""){
        setBtndisabled(true);
        setMessage(null)
    }else if(text !== "" && text.trim().length <= 10){
        setBtndisabled(true);
        setMessage("Text must be at least 10 characters.")
    }else{
        setBtndisabled(false);
        setMessage(null);
    }
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

            <Button
            isDisabled={btnDisabled} 
            type='submit'>Send</Button>
        </div>

        {message && <div className='message'> {message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm;
