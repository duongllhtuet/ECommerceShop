import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const PlaceOrder = () => {

  const { getTotalCartAmount, token, product_list, cartItems, url } = useContext(StoreContext)

  const [user, setUser] = useState({})

  const [data,setData] = useState({
    name: "",
    street: "",
    city: "",
    phone: "",
  })

  const getUser = async () => {
    const response = await axios.post(url + "/api/user/get", {}, {headers: {token}});
    if (response.data.success) {
        const userData = response.data.data;
        setUser(userData);
        if (userData.address) {
            setData({
                name: userData.name,
                city: "",
                phone: userData.phoneNumber,
                address: userData.address
            })
        } else {
            setData({
                name: userData.name,
                city: "",
                phone: userData.phoneNumber,
            })
        }
    } else {
        console.log("Error")
    }
  }

  const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData (data => ({...data, [name]: value}))
  }

  const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];

      product_list.map((item) => {
        if (user.cartData && user.cartData.length > 0) {
            user.cartData.map((cart, index) => { 
                if (cart.quantity > 0 && cart.productId === item._id) {
                  let itemInfo = item
                  itemInfo["Quantity"] = cart.quantity
                  itemInfo["Size"] = cart.size
                  orderItems.push(itemInfo);
                }
            })
        }
      })

      let orderData = {
          address: data,
          items: orderItems,
          amount: getTotalCartAmount() + 30000,
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
    <div className="grid wide">

    <form onSubmit={placeOrder} className='row sm--gutter place-order'>
      <div className="col l-7 m-7 c-7 place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input className='multi-fields-input' required name='name' onChange={ onChangeHandler } value={ data.name } type="text" placeholder='Name' />
        </div>
        <input className='multi-fields-input' required name='street' onChange={ onChangeHandler } value={ data.street } type="text" placeholder='Street' />
        <div className="multi-fields">
          <input className='multi-fields-input' required name='city' onChange={ onChangeHandler } value={ data.city } type="text" placeholder='City' />
        </div>
        <input className='multi-fields-input' required name='phone' onChange={ onChangeHandler } value={ data.phone } type="text" placeholder='Phone' />
      </div>
      <div className="col l-5 m-5 c-5 place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>VND {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>VND {getTotalCartAmount() === 0 ? 0 : 30000}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>VND {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30000}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default PlaceOrder
