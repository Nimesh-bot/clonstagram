import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Edit from './pages/Edit'
import Add from './pages/Add'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="edit" element={<Edit />} />
            <Route path="/add" element={<Add />} />
        </Routes>
    </Router>
  )
}

export default App