import { useState, useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { motion } from "framer-motion"


const FeedbackForm = ({ handleAdd }) => {
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisbaled] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)

    const { addFeedback } = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        if (text === "") {
            //if there is nothin in text there is no point to show the text
            setBtnDisbaled(true)
            setMessage(null)
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisbaled(true)
            setMessage("Text must be at least 10 characters!!")
        } else {
            setMessage(null)
            setBtnDisbaled(false)
        }
        setText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            //if the text is greater than 10 we will preceed to do whatever that we want to do
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)
            setText("")
        }
    }
    return (
        <Card>
            <motion.div
                initial={{
                    x: "-100%"
                }}
                animate={{
                    x: "0"
                }}

            >
                <form onSubmit={handleSubmit}>
                    <h2>How Would you rate your service with us?</h2>
                    <RatingSelect select={(rating) => setRating(rating)} />
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder='Write a review'
                            onChange={handleTextChange}
                            value={text}
                        />
                        <Button type='suBmit' version={"secondary"} isDisabled={btnDisabled}>
                            Send
                        </Button>
                    </div>

                    {message && (
                        <div className='message'>
                            {message}
                        </div>
                    )}
                </form>
            </motion.div>
        </Card>
    )
}

export default FeedbackForm