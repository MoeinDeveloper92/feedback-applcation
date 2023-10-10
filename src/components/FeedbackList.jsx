import React from 'react'
import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
const FeedbackList = ({ feedback, handleDelete }) => {
    if (!feedback || feedback.length === 0) return <p>No Feedback Yet</p>

    return (
        <div className="feedbackList">
            {feedback.map((item) => (
                <FeedbackItem item={item} key={item.id}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackList