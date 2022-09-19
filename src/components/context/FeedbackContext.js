import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid";


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
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data);
        setIsLoading(false);
    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }
    
    const deleteFeedback = (id) =>{
        if(window.confirm("Are you sure you want to delete?")){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item, 
            edit: true,
        })
    }

    const updateFeedback = (id, upItem) =>{
        setFeedback(feedback.map((item) =>
            item.id === id ? {
                ...item, ...upItem
            }: item ))
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