import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FeedbackList = ({ feedback, handleDelete }) => {
    if (!feedback || feedback.length === 0) return <p>No Feedback Yet</p>;

    return (
        <div>
            <div className="feedbackList">
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        // Exit specifies the state when the element is removed from the DOM
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FeedbackItem item={item} handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired,
};

export default FeedbackList;