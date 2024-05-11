import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {

  const { product_list, cartItems, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Size</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {product_list.map((item, index) => {
          if (cartItems && cartItems.length > 0) {
              const cartElements = cartItems.map((cart, cartIndex) => {
                  if (cart.productId === item._id && cart.quantity > 0) {
                      return (
                          <div key={cartIndex}>
                              <div className="cart-items-title cart-items-item" key={cartIndex}>
                                  <img src={url + "/images/" + item.picture} alt="" />
                                  <p>{item.name}</p>
                                  <p>{cart.size}</p>
                                  <p>${item.price}</p>
                                  <p>{cart.quantity}</p>
                                  <p>${item.price * cart.quantity}</p>
                                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                              </div>
                              <hr />
                          </div>
                      );
                  }
                  return null; // Tránh trường hợp không có phần tử phù hợp
              });
              return cartElements;
          }
          return null; // Trường hợp cartItems không tồn tại hoặc không có phần tử
      })}
      </div>
      <div>
        <div className="cart-bottom">
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
                <p>${getTotalCartAmount() === 0 ? 0 : 30000}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30000}</b>
              </div>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
