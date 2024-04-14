import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

import { Index } from './page'
import { Header } from './components/templates/header'

function App() {

  return (
    <Header>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
      </Routes>
    </Header>
  )
}

export default App
