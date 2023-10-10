import { useState } from 'react'
import Header from "./components/Header"
import { feedbackData } from "./data/feedbackData"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
function App() {


    const [feedback, setFeedback] = useState(feedbackData)

    // it updates the state by remobing an item with the mentioned id.
    const deleteFeedback = (id) => {
        //we want to set the feedback to new array
        if (window.confirm("Are you sure that you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App


