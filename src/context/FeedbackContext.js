import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"
const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "Text number 1 of from context",
            rating: 10
        },
        {
            id: 2,
            text: "Text number 2 from context ",
            rating: 9,
        },
        {
            id: 3,
            text: "Text number 3 from context",
            rating: 8
        }
    ])

    // Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure that you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext