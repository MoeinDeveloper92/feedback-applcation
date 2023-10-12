
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { Routes, Route, Link } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

function App() {

    return (
        <FeedbackProvider>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={(
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList

                            />
                        </>
                    )} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>

            </div>
            <AboutIconLink />
        </FeedbackProvider>
    )
}

export default App


