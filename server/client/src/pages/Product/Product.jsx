import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { StoreContext } from "../../context/StoreContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
  const { id } = useParams();

  const { addToCart, url } = useContext(StoreContext);

  const [data, setData] = useState([]);

  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [averageRating, setAverageRating] = useState(null);

  const fetchProduct = async () => {
    const response = await axios.get(url + `/api/product/${id}`);
    if (response.data.success) {
      setData(response.data.data);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchProduct();

    const calculateAverageRating = () => {
      if (data.ratings && data.ratings.length > 0) {
        let total = 0;
        data.ratings.forEach((rate) => {
          total += rate.rating;
        });
        return (total / data.ratings.length).toFixed(1);
      }
      return null;
    };

    setAverageRating(calculateAverageRating());
  });

  const onChangeHandler = (event) => {
    let value = event.target.value;
    value = Math.max(1, value);
    setQuantity(value);
  };

  const calculateAverageRating = async () => {
    let total = 0;
    data.ratings.map((rate, index) => {
      total += rate.rating;
    });
    console.log((total / data.ratings.length).toFixed(1));
    return (total / data.ratings.length).toFixed(1);
  };

  return (
    <div className="App__Container">
      <div className="grid wide">
        <div className="row product__container">
          <div className="product__information">
            <div className="col l-5 m-5 c-5">
              <img
                src={url + "/images/" + data.picture}
                alt=""
                className="product__img--main"
              />
            </div>

            <div className="col l-7 m-7 c-7">
              <div className="row">
                <div className="col l-12 m-12 c-12">
                  <div className="product__information--heading">
                    <span className="product__information--heading--name">
                      {data.name}
                    </span>
                  </div>
                  <div className="product__information--heading--description">
                    <span className="product__information--heading--description">
                      Mô tả: {data.description}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col l-12 m-12 c-12">
                  <div className="product__information--rating">
                    <div className="product__information--rating--number">
                      <span className="product__information--rated--number">
                        {data.ratings ? data.ratings.length : 0}
                      </span>

                      <span className="product__information--rated--title">
                        Đánh giá
                      </span>
                    </div>

                    <div className="product__information--selled">
                      <span className="product__information--selled--number">
                        {data.selling}
                      </span>

                      <span className="product__information--selled--name">
                        Đã bán
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col l-12 m-12 c-12">
                  <div className="product__information--price">
                    <span className="product__information--price__discounted">
                      ₫ {data.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col l-12 m-12 c-12">
                  <div className="row sm--gutter product__option--size">
                    <div className="col l-4 m-12 product__option--size--name">
                      Size
                    </div>

                    <div className="col l-8 m-12 c-12 product__option--size--select">
                      <div className="col l-4 m-4 c-4">
                        <button
                          onClick={() => setSize((prev) => "M")}
                          className={
                            size === "M"
                              ? "product__option--size--select--option product__option--size--option--selected"
                              : "product__option--size--select--option"
                          }
                        >
                          M: 45-54kg &lt; 1m65
                        </button>
                      </div>

                      <div className="col l-4 m-4 c-4">
                        <button
                          onClick={() => setSize((prev) => "L")}
                          className={
                            size === "L"
                              ? "product__option--size--select--option product__option--size--option--selected"
                              : "product__option--size--select--option"
                          }
                        >
                          L: 55-64kg &lt; 1m72
                        </button>
                      </div>

                      <div className="col l-4 m-4 c-4">
                        <button
                          onClick={() => setSize((prev) => "XL")}
                          className={
                            size === "XL"
                              ? "product__option--size--select--option product__option--size--option--selected"
                              : "product__option--size--select--option"
                          }
                        >
                          XL: 65-73kg &lt; 1m76
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col l-12 m-12 c-12">
                  <div className="product__option--order--item">
                    <div className="col l-4 m-4 c-4 product__option--order--item--title">
                      Số lượng
                    </div>

                    <div className="col l-8 m-8 c-8 product__option--order--item--quantity">
                      <input
                        type="number"
                        className="product__option--order--item--quantity--input"
                        value={quantity}
                        name="quantity"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="product__information--btn">
                  <div
                    className="Btn Btn--normal--product__information"
                    onClick={() => addToCart(id, size, quantity)}
                  >
                    <FontAwesomeIcon icon={faCartPlus} className="product__information--add--product--icon" />

                    <span className="product__information--add--product--name">
                      Thêm vào giỏ hàng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Product-Rating">
            <div className="Product-Rating__Header">ĐÁNH GIÁ SẢN PHẨM</div>

            {data.ratings && data.ratings.length > 0 ? (
              <>
                <div className="row product--rating--score">
                  <div className="col l-12 m-12 c-12">
                    <div className="Product-Rating__Score">
                      <div className="Product-Rating__Score--Score">
                        <span className="Product-Rating__Score--Score--highlight">
                          <span>{averageRating} trên 5</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {data.ratings.map((rate, index) => {
                  return (
                    <div key={index} className="Product-Rating__List">
                      <div className="Product-Rating__Main">
                        <div className="Product-Rating__Main--Name">
                          Người dùng: {rate.userId}
                        </div>
                        <div className="">Đánh giá: {rate.rating} sao</div>
                        <div className="Product-Rating__Main--Comment">
                          {rate.comment}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <span>Không có đánh giá</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
