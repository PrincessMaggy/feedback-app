import {Route, Routes } from "react-router-dom";

import { FeedbackProvider } from "./components/context/FeedbackContext";


// pages
import About from "./pages/About";
import Home from "./pages/Home";

function App() {

  return (
    <FeedbackProvider>
      <Routes>
          <Route exact path="/feedback-app" element={<Home/>}  />
          <Route path="/about" element={<About />} />
          
      </Routes>
    </FeedbackProvider>
  );
}

export default App;
