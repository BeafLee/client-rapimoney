import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewClient from './pages/NewClient'
import Login from './pages/Login' 

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new' element={<NewClient/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
