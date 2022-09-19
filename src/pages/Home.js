import React from 'react';
import { Link } from 'react-router-dom';

// components
import Header from "../components/Header";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";

import {FaQuestion} from "react-icons/fa";

function Home() {
    
  return (
    <div>
      <Header/>
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList />
     </div>
     <div className='about-link'>
        <Link to={"/about"}>
           <FaQuestion size={30} />
        </Link>
     </div>
    </div>
  )
}

export default Home;
