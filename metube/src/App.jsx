import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default App