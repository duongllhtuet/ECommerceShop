import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Header from './components/header/Header'
import User from './pages/User/User'
import Order from './pages/Order/Order'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Header setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
