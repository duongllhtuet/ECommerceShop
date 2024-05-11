import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Header from './components/header/Header'
import User from './pages/User/User'
import Order from './pages/Order/Order'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Verify from './pages/Verify/Verify'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Header setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/user' element={<User />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<Order />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
