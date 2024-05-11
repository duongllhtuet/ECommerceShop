import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [user, setUser] = useState({})

  const getUser = async () => {
    const response = await axios.post(url + "/api/user/get", {headers: {token}});
    if (response.data.success) {
        setUser(response.data.user);
    } else {
        console.log("Error")
    }
  }

  const [data,setData] = useState({
    name: user.name,
    email: user.email,
    street: "",
    city: "",
    phone: user.phoneNumber,
  })

  const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData (data => ({...data, [name]: value}))
  }

  const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      food_list.map((item) => {
          if (cartItems[item._id] > 0) {
              let itemInfo = item;
              itemInfo["Quantity"] = cartItems[item._id];
              orderItems.push(itemInfo);
          }
      })
      let orderData = {
          address: data,
          items: orderItems,
          amount: getTotalCartAmount() + 2,
      }
      let response = await axios.post(url + "/api/order/place", orderData, {headers: {token}});
      if (response.data.success) {
          const {session_url} = response.data;
          window.location.replace(session_url);
      } else {
          alert("error");
      }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    } 
    else if (getTotalCartAmount() === 0){
      navigate('/cart')
    }
    getUser()
  }, [token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='name' onChange={ onChangeHandler } value={ data.name } type="text" placeholder='Name' />
        </div>
        <input required name='email' onChange={ onChangeHandler } value={ data.email } type="email" placeholder='Email address' />
        <input required name='street' onChange={ onChangeHandler } value={ data.street } type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city' onChange={ onChangeHandler } value={ data.city } type="text" placeholder='City' />
        </div>
        <input required name='phone' onChange={ onChangeHandler } value={ data.phone } type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
