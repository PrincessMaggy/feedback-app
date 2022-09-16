import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback}) {
  return (
    <div className='feedback-list'>
        {feedback.map((item) => {
            return <FeedbackItem
                    key={item.id} 
                    item={item}
                    rating = {item.rating} />
        })}
    </div>
  )
}

export default FeedbackList
