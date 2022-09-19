import React, {useState} from 'react';
import { useContext } from 'react';

import FeedbackContext from './context/FeedbackContext';

import {Card} from "../styles";
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm () {

const {addFeedback} = useContext(FeedbackContext);

const [text, setText] = useState("");
const [rating, setRating] = useState(10);
const [btnDisabled, setBtndisabled] = useState(true);
const [message, setMessage] = useState("");

const handleSubmit =(e) =>{
  e.preventDefault();
  if (text.trim().length > 10){
    const newFeedback ={
      text,
      rating
    }
    addFeedback(newFeedback);
    setText("");
  }
}

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
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
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
