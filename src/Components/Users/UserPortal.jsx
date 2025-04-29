import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import Users from './Users'
import AddToCart from './AddToCart'

const UserPortal = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books' />
        <Route element={<ReadBooks/>} path='/readbook/:id' />
        <Route element={<Users/>} path='/users' />
        <Route element={<AddToCart/>} path='/cart' />
      </Routes>
    </>
  )
}

export default UserPortal