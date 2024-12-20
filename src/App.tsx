import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
            </Routes>
        </div>
    )
}

export default App