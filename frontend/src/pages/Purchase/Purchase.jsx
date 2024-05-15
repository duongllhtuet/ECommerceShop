import React, { useContext, useEffect, useState } from 'react'
import './Purchase.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Comment from '../../components/comment/Comment'

const Order = () => {

    const {url, token} = useContext(StoreContext);
    const [data, setData] = useState([]);
    const [showComment, setShowComment] = useState(false)
    const [commentData, setCommentData] = useState(null);

    const navigate = useNavigate();

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, {headers:{token}});
        setData(response.data.data);
    }

    useEffect (() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    const handleRatingClick = (order, item) => {
        if (order.status === 'Delivered') {
          setCommentData(item); // Lưu trữ dữ liệu đánh giá
          setShowComment(true); // Hiển thị thành phần đánh giá
        }
    };

  return (
    <>
    {showComment ? <Comment setShowComment={setShowComment} commentData={commentData}/> : <></>}
    <div className="purchase">
        <div className="Grid">
            <div className="container">
                <div className="sidebar">
                    <a onClick={() => navigate('/profile')} className="sidebar-child">
                        <i className="fa-regular fa-user"></i>
                        <p>My Account</p>
                    </a>
                    <a onClick={() => navigate('/myorders')} className="sidebar-child current">
                        <i className="fa-solid fa-clipboard-list"></i>
                        <p>My Purchase</p>
                    </a>
                </div>
                <div className="my-purchase">    
                    {data.map((order, index) => (
                        <ul key={index} className="list-purchase">
                            {order.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="purchase-item">
                                        <img src={url + "/images/" + item.picture} className="item_picture" alt="Item Picture"/>
                                        <div className="item_info">
                                            <a onClick={() => navigate(`/product/${item._id}`)} className="item_info-name">{item.name}</a>
                                            <div className="item_info-quantity">x {item.Quantity}</div>
                                            <div className="item_info-quantity">Size: {item.Size}</div>
                                        </div>
                                        <div className="item_price">{item.price}</div>
                                        <button className={order.status === "Delivered" ? "can-rating" : "cant-rating"} onClick={() => handleRatingClick(order, item)}>Rating</button>
                                    </li>
                            ))}
                            <span>{order.amount}</span>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Order
