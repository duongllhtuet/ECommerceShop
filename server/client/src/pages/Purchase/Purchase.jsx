import React, { useContext, useEffect, useState } from "react";
import "./Purchase.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Comment from "../../components/comment/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [commentData, setCommentData] = useState(null);

  const navigate = useNavigate();

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const handleRatingClick = (order, item) => {
    if (order.status === "Delivered") {
      setCommentData(item);
      setShowComment(true);
    }
  };

  return (
    <>
      {showComment ? (
        <Comment setShowComment={setShowComment} commentData={commentData} />
      ) : (
        <></>
      )}
      <div className="purchase">
        <div className="grid wide">
          <div className="row sm--gutter container">
            <div className="col l-2 m-0 c-0 sidebar">
              <a onClick={() => navigate("/profile")} className="sidebar-child">
                <i className="fa-regular fa-user"></i>
                <p>My Account</p>
              </a>
              <a
                onClick={() => navigate("/myorders")}
                className="sidebar-child current"
              >
                <i className="fa-solid fa-clipboard-list"></i>
                <p>My Purchase</p>
              </a>
            </div>

            <div className="col l-10 m-12 c-12 my-purchase">
              {data.reverse().map((order, index) => (
                <ul key={index} className="list-purchase">
                  <li className="list-purchase--heading">
                    <div className="list-purchase--heading--status">
                      <FontAwesomeIcon
                        className="list-purchase--heading--status--icon"
                        icon={faTruck}
                      />
                      {order.status === "Delivered"
                        ? "Giao hàng thành công"
                        : "Đang giao hàng"}
                    </div>

                    <div className="list-purchase--heading--status--detail">
                      {order.status === "Delivered"
                        ? "Hoàn thành"
                        : "Chưa hoàn Thành"}
                    </div>
                  </li>

                  {order.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="purchase-item">
                      <div className="purchase-item--img">
                        <img
                          src={url + "/images/" + item.picture}
                          className="item_picture"
                          alt="Item Picture"
                        />
                      </div>
                      <div className="item_info">
                        <a
                          onClick={() => navigate(`/product/${item._id}`)}
                          className="item_info-name"
                        >
                          {item.name}
                        </a>

                        <div className="item_info-quantity">
                          Size: {item.Size}
                        </div>

                        <div className="item_info-quantity">
                          x {item.Quantity}
                        </div>
                      </div>
                      <div className="item_price">đ{item.price}</div>
                      <button
                        className={
                          order.status === "Delivered"
                            ? "can-rating"
                            : "cant-rating"
                        }
                        onClick={() => handleRatingClick(order, item)}
                      >
                        Đánh giá
                      </button>
                    </li>
                  ))}

                  <div className="total">
                    <span className="total--title">Thành tiền:</span>

                    <span className="total--price">đ{order.amount}</span>
                  </div>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
