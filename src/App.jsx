import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

import { Index } from './page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Index/>}></Route>
    </Routes>
  )
}

export default App
