import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

import { Index } from './page'
import { Header } from './components/templates/header'
import { Login } from './page/login'
import { Libros } from './page/Libros'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/libros' element={<Libros/>}></Route>
      </Routes>
    </>
  )
}

export default App
