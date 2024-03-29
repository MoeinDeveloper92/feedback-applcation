import React from 'react'
import PropTypes from 'prop-types'
const Card = ({ children, reverse }) => {
    // return (
    //     <div className={`card ${reverse && 'reverse'}`}>
    //         {children}
    //     </div>
    // )

    return (
        <div className="card"
            style={{
                backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
                color: reverse ? "#fff" : "#000"
            }}>

            {children}
        </div>
    )
}
Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    reverse: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
export default Card

// A shared component\just wrap the html.