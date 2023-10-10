import { useState } from 'react'
import Header from "./components/Header"
import { feedbackData } from "./data/feedbackData"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from "uuid"


function App() {
    const [feedback, setFeedback] = useState(feedbackData)

    // it updates the state by remobing an item with the mentioned id.
    const deleteFeedback = (id) => {
        //we want to set the feedback to new array
        if (window.confirm("Are you sure that you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }


    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm
                    handleAdd={addFeedback}
                />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}

                />
            </div>
        </>
    )
}

export default App


