import React from 'react'
import { FaQuestion } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'
const AboutIconLink = () => {

    return (
        <div className='about-link'>
            <Link to={{
                pathname: "/about",
                // search: "?sort=name"

            }}>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}

export default AboutIconLink