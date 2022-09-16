import { useState } from "react";

// components
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
// states
const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
