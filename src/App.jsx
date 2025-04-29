import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'
import ForgottenPassword from './Components/ForgottenPassword'
import UserPortal from './Components/Users/UserPortal'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/adminPortal/*' element={<AdminPortal/>} />
        <Route path='/forget' element={<ForgottenPassword/>} />
        <Route path='/userPortal/*' element={<UserPortal/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
