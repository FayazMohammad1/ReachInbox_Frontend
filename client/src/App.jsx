import React from 'react'
import SignUpPage from './pages/SignUpPage'
import { Route, Routes } from 'react-router-dom'
import OneBoxPage from './pages/OneBoxPage'
import InboxPage from './pages/InboxPage'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUpPage/>} />
      <Route path='/empty' element={<OneBoxPage/>} />
      <Route path='/inbox' element={<InboxPage/>} />
    </Routes>
    </>
  )
}

export default App;