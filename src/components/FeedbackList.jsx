import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import { motion } from 'framer-motion';

const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext)

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
                        <FeedbackItem item={item} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackList;