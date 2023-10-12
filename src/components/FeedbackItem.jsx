import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from "react-icons/fa"


const FeedbackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    const handleClick = (id) => {
        deleteFeedback(id)
    }

    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleClick(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <button className='edit' onClick={() => editFeedback(item)} >
                <FaEdit color='purple' />
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem

//keep in mind that, if you want to change something inside the state you would always have to call
//the function set, since the states are immutable, and they cannot be changed directly, it has ti be reset
//if you want to add neew data to the state, you need to make a copy of the state in orderto maitain the rest of the items