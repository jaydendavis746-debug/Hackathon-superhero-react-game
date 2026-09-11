import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Arena, Header,Home } from './components'
import './App.css'

export default function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Header />} >
        <Route index element={<Home />} />
        <Route path='/arena' element={<Arena />} />
      </Route>
    </Routes>
  )
}
