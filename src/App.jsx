import React, { useState } from "react"


function App() {
    const title = "Blog Post"
    const body = "This is my blog post"

    const comments = [
        { id: 1, text: "Coments One" },
        { id: 2, text: "Comment Two" },
        { id: 3, text: "Comment Three" }
    ]

    const loading = false
    const showCommetns = false



    if (loading) return <h1>Loading...</h1>

    return (
        <>
            <div className="container">
                <h1>{title.toUpperCase()}</h1>
                <p>{body}</p>

                {showCommetns && (<>
                    <div className="comments">
                        <h3>Commetns: {comments.length}</h3>
                        <ul>
                            {comments.map((cm, index) => {
                                return <li key={index}>{cm.text}</li>
                            })}
                        </ul>
                    </div>
                </>)}

            </div>
        </>

    )
}

export default App
