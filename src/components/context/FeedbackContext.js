import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [isloading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit : false,
        }
    )
    
    useEffect(() => {
        fetchFeedback();
    }, [])

    // fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data);
        setIsLoading(false);
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        })
    
        const data = await response.json()
    
        setFeedback([data, ...feedback])
      }
    
      const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
          await fetch(`/feedback/${id}`, { method: 'DELETE' })
    
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item, 
            edit: true,
        })
    }

    const updateFeedback = async (id, upItem) => {
        const response = await fetch(`/feedback/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(upItem),
        })
    
        const data = await response.json()
    
        // NOTE: no need to spread data and item
        setFeedback(feedback.map((item) => (item.id === id ? data : item)))
    
        // FIX: this fixes being able to add a feedback after editing
        // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
        setFeedbackEdit({
          item: {},
          edit: false,
        })
      }

    return <FeedbackContext.Provider
        value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isloading,
            }}> 
                {children}
        </FeedbackContext.Provider>
};

export default FeedbackContext;