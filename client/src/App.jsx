import React from 'react'
import SignUpPage from './pages/SignUpPage'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUpPage/>} />
    </Routes>
    </>
  )
}

export default App