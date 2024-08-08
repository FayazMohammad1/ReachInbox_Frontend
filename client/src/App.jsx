import React from 'react'
import SignUpPage from './pages/SignUpPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import OneboxPage from './pages/OneboxPage'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUpPage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/onebox' element={<OneboxPage/>} />
    </Routes>
    </>
  )
}

export default App;