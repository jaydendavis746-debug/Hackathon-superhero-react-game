import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Arena } from './components'


export default function App() {

  return (
    
    <Routes>
      <Route path='/' element={<h1>Hello world</h1>} />
      <Route path='/arena' element={<Arena />} />
    </Routes>
  )
}
