import React from 'react';
import { Link } from 'react-router-dom';

// components
import Header from "../components/Header";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";

import {FaQuestion} from "react-icons/fa";

function Home({feedback, addFeedback, deleteFeedback}) {

    
  return (
    <div>
      <Header/>
      <div className="container">
        <FeedbackForm handleAdd ={addFeedback} />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList 
        feedback={feedback}
        handleDelete = {deleteFeedback}/>
     </div>
     <div className='about-link'>
        <Link to={"/about"}>
           <FaQuestion size={30} />
        </Link>
     </div>
    </div>
  )
}

export default Home
