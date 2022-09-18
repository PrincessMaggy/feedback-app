import React, {useState} from 'react';

import {Card} from "../styles";
import Button from '../shared/Button';

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
            <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm;
