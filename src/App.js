import { useState } from "react";

// components
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
// states
const [feedback, setFeedback] = useState(FeedbackData);
const deleteFeedback = (id) =>{
  if(window.confirm("Are you sure you want to delete?")){
    setFeedback(feedback.filter((item) => item.id !== id))
  }
}
  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList 
        feedback={feedback}
        handleDelete = {deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
