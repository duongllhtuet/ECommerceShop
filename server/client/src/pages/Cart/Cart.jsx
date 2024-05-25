import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {

  const { product_list, cartItems, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart grid wide'>
      <div className="row sm--gutter cart-items-title hide--on--mobile">
        <div className="cart-items-title">
          <div className="col l-11 m-11 cart-items--title--modify">
              <p className='col l-2 m-2'>Items</p>
              <p className='col l-2 m-2'>Title</p>
              <p className='col l-2 m-2'>Size</p>
              <p className='col l-2 m-2'>Price</p>
              <p className='col l-2 m-2'>Quantity</p>
              <p className='col l-2 m-2'>Total</p>
          </div>

          <div className="col l-1 m-1">
              <p className='col l-1 m-1'>Remove</p>
          </div>
        </div>
        <br />
      </div>

      {product_list.map((item, index) => {
          if (cartItems && cartItems.length > 0) {
              const cartElements = cartItems.map((cart, cartIndex) => {
                  if (cart.productId === item._id && cart.quantity > 0) {
                      return (
                          <div key={cartIndex} className='cart--item--modify'>
                              <hr />
                              <div className="row sm--gutter cart-items-title cart-items-item" id='modify--on--mobile' key={cartIndex}>
                                <div className="col l-11 m-11 c-11 cart-items--title--modify--option--1">
                                  <img className='col l-2 m-2 c-2' src={url + "/images/" + item.picture} alt="" />
                                  <p className='col l-2 m-2 c-2'>{item.name}</p>
                                  <p className='col l-2 m-2 c-2'>{cart.size}</p>
                                  <p className='col l-2 m-2 c-2'>${item.price}</p>
                                  <p className='col l-2 m-2 c-2'>{cart.quantity}</p>
                                  <p className='col l-2 m-2 c-2'>${item.price * cart.quantity}</p>
                                </div>

                                <div className="col l-1 m-1 c-1">
                                  <p className='col l-12 m-12 c-12 cross' onClick={() => removeFromCart(item._id, cart.size)}>x</p>
                                </div>
                              </div>
                              <hr />
                          </div>
                      );
                  }
                  return null;
              });
              return cartElements;
          }
          return null;
      })}

      <div>
        <div className="cart-bottom">
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
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;