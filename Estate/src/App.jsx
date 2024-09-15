import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Nav from './Component/Nav/nav'
import Footer from './Component/Footer/footer'
function App() {
  return (
    <div>
     <Router>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />

          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

