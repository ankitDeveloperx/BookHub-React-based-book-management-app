import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import AddBooks from './AddBooks'
import Users from '../Users/Users'
import AddUsers from './AddUsers'
import LandingPage from '../LandingPage'

const AdminPortal = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books' />
        <Route element={<ReadBooks/>} path='/readbook/:id' />
        <Route element={<AddBooks/>} path='/addbooks' />
        <Route element={<Users/>} path='/users' />
        <Route element={<AddUsers/>} path='/addusers' />
      </Routes>
    </>
  )
}

export default AdminPortal