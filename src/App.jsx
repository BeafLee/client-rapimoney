import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/new' element={<h1>Register new client</h1>} />
        <Route path='/login' element={<h1>login</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
