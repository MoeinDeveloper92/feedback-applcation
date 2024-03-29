import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext)

    //we should calculate the ratings average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1)
    if (!feedback) {
        return <h1>Loading....</h1>
    }
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats

//since feedback is a state when it chagnes , it will automatically take effect within the stat component