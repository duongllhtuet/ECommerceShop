import React, { useContext } from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext.jsx';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, price, description, image, selling }) => {

    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div>
        <div className="Home--Product--Items">
            <img className="Home--Product--Item__Img" src={url + "/images/"+ image} alt="" />

            <Link className="Home--Product--Item__Name" to={`/product/${id}`}>{name}</Link>

            <div className="Home--Product--Item__Price">
            <span className="Home--Product--Item__Price--Current">{price} VND</span>
            <span className="Home--Product--Item__Sold">đã bán {selling}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
