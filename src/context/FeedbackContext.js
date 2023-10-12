import { createContext, useEffect, useState } from "react";
const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    //Once the page has been loaded we want to get the data
    useEffect(() => {
        fethData()
    }, [])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    //Set Item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //Create feedback
    const addFeedback = async (newFeedback) => {

        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }


    //Read Feedbacks... or Fetch feedback
    const fethData = async () => {
        //fetch returns a promise
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    //Update Feedback
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => {
            if (item.id === id) {
                return { ...item, ...data };
            } else {
                return item;
            }
        }));
    };

    // Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure that you want to delete?")) {
            await fetch(`/feedback/${id}`, {
                method: "DELETE"
            })//first it will delete the item from database
            //then it will update the ui by deleted ui. and if we refresh the window, it will get update list
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }




    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isLoading
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext