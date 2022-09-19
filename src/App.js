import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import {Route, Routes } from "react-router-dom";

// components
import FeedbackData from "./data/FeedbackData";


// pages
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
// states
const [feedback, setFeedback] = useState(FeedbackData);

const addFeedback = (newFeedback) =>{
  newFeedback.id = uuidv4();
  setFeedback([newFeedback, ...feedback]);
}

const deleteFeedback = (id) =>{
  if(window.confirm("Are you sure you want to delete?")){
    setFeedback(feedback.filter((item) => item.id !== id))
  }
}

  return (
    <Routes>
        <Route exact path="/feedback-app"
         element={<Home 
                    addFeedback={addFeedback}
                    deleteFeedback={deleteFeedback}
                    feedback={feedback} />} 
                    />

        <Route path="/about" element={<About />} />
        
    </Routes>
  );
}

export default App;
