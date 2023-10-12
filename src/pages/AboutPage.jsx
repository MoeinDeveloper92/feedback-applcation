import React from 'react'
import Card from '../components/shared/Card'
import { Link } from "react-router-dom"
const About = () => {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, illo culpa ut maxime nulla, temporibus saepe omnis tempora, minus repellendus ipsum enim voluptates consequatur? Quidem nulla nobis unde nesciunt expedita.</p>
                <p>Version: 1.1.0</p>
                <Link to={"/"} className='btn btn-secondary'>
                    Back Home
                </Link>
            </div>
        </Card>
    )
}

export default About