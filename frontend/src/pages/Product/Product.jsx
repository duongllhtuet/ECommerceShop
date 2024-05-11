import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import { StoreContext } from '../../context/StoreContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../../assets/assets'


const Product = () => {

  const { id } = useParams();

  const {addToCart, url} = useContext(StoreContext);
        
  const [data, setData] = useState([]);

  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const fetchProduct = async () => {
      const response = await axios.get(url + `/api/product/${id}`);
      if (response.data.success) {
          setData(response.data.data);
      } else {
          console.log("Error")
      }
  }

  useEffect (() => {
    fetchProduct()
  })

  const onChangeHandler = (event) => {
    let value = event.target.value;
    value = Math.max(1, value);
    setQuantity(value);
  }

  return (
    <div className="App__Container">
        <div className="grid wide">
          <div className="row product__container">
      
            <div className="product__information">
              <div className="col l-5">
                <img
                  src={url + "/images/"+ data.picture}
                  alt=""
                  className="product__img--main"
                />
      
                {/* <ul className="product__imgs">
                  <li className="product__img">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltp03ksjtnuy7b"
                      alt=""
                      className="product__img--link"
                    />
                  </li>
                </ul> */}
              </div>
      
              <div className="col l-7">
                <div className="row">
                  <div className="col l-12">
                    <div className="product__information--heading">
                      <span className="product__information--heading--name">
                        {data.name}
                      </span>
                    </div>
                    <div className="product__information--heading">
                      <span className="product__information--heading--name">
                        {data.description}
                      </span>
                    </div>
                  </div>
                </div>
      
                <div className="row">
                  <div className="col l-12">
                    <div className="product__information--rating">
                      <div className="product__information--rating--number">
                        <span className="product__information--rated--number">
                          {data.rating ? data.rating.length : 0}
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
                  <div className="col l-12">
                    <div className="product__information--price">      
                      <span className="product__information--price__discounted">
                        ₫ {data.price}
                      </span>
                    </div>
                  </div>
                </div>
      
                <div className="row">
                  <div className="product__option">
      
                    <div className="row">
                      <div className="col l-12">
                        <div className="product__option--size">
                          <div className="product__option--size--name">
                            Size
                          </div>
      
                          <div className="grid product__option--size--select">
                            <div className="row">
                              <div className="col l-4">
                                <button onClick={()=>setSize(prev=>"M")} 
                                className={size==="M"?"product__option--size--select--option product__option--size--option--selected":"product__option--size--select--option"}>
                                  M: 45-54kg &lt; 1m65
                                </button>
                              </div>
      
                              <div className="col l-4">
                                <button onClick={()=>setSize(prev=>"L")} 
                                className={size==="L"?"product__option--size--select--option product__option--size--option--selected":"product__option--size--select--option"}>
                                  L: 55-64kg &lt; 1m72
                                </button>
                              </div>
      
                              <div className="col l-4">
                                <button onClick={()=>setSize(prev=>"XL")} 
                                className={size==="XL"?"product__option--size--select--option product__option--size--option--selected":"product__option--size--select--option"}>
                                  XL: 65-73kg &lt; 1m76
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div className="row">
                      <div className="col l-12">
                        <div className="product__option--order--item">
                          <div className="product__option--order--item--title">
                            Số lượng
                          </div>
      
                          <div className="product__option--order--item--quantity">
                            <input
                                type="number"
                                className="product__option--order--item--quantity--input"
                                value={quantity} 
                                name='quantity'  
                                onChange={onChangeHandler}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="row">
                  <div className="product__information--btn">
                    <div className="Btn Btn--normal--product__information" onClick={() => addToCart(id, size, quantity)}>
                      <img src={assets.AddItem} className="product__information--add--product--icon" />
                      <span className="product__information--add--product--name">
                        Thêm vào giỏ hàng
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="Product-Rating">
              <div className="Product-Rating__Header">
                ĐÁNH GIÁ SẢN PHẨM
              </div>
      
              <div className="row product--rating--score">
                <div className="col c-3">
                  <div className="Product-Rating__Score">
                    <div className="Product-Rating__Score--Score">
                      <span className="Product-Rating__Score--Score--highlight">
                        {data.rating && data.rating.length > 0 ? (
                          <>
                            {data.rating.reduce((acc, rate) => acc + rate, 0) / data.rating.length} trên 5
                          </>
                        ) : (
                          <span>Không có đánh giá</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Product-Rating__List">
                <div className="Product-Rating__Main">
                  <div className="Product-Rating__Main--Avatar">
                    <img
                      src="https://i.pinimg.com/564x/89/31/e0/8931e0c19e5bfca74c58e1c29625c46a.jpg"
                    />
                  </div>
                  <div className="Product-Rating__Main--Name">
                    Phạm Chiến
                  </div>
                  <div className="Product-Rating__Main--Score">
                    <img src="img/star.png" />
                    <img src="img/star.png" />
                    <img src="img/star.png" />
                    <img src="img/star.png" />
                    <img src="img/starnofill.png" />
                  </div>
                  <div className="Product-Rating__Main--Time">
                    2024-04-12 14:51
                  </div>
                  <div className="Product-Rating__Main--Comment">
                    Hàng đẹp lắm
                  </div>
                  <div className="Product-Rating__Main--Image">
                    <img
                      src="https://i.pinimg.com/564x/77/c2/15/77c215a82ef476da53f0d32126eeb98f.jpg"
                    />
                    <img
                      src="https://i.pinimg.com/564x/77/c2/15/77c215a82ef476da53f0d32126eeb98f.jpg"
                    />
                    <img
                      src="https://i.pinimg.com/564x/77/c2/15/77c215a82ef476da53f0d32126eeb98f.jpg"
                    />
                    <img
                      src="https://i.pinimg.com/564x/77/c2/15/77c215a82ef476da53f0d32126eeb98f.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="Product-Rating__Limit">
                <button className="Product-Rating__Limit--Left"> &lt; </button>
                <button className="Product-Rating__Limit--Change active">1</button>
                <button className="Product-Rating__Limit--Change">2</button>
                <button className="Product-Rating__Limit--Change">3</button>
                <button className="Product-Rating__Limit--Change">4</button>
                <button className="Product-Rating__Limit--Change">5</button>
                <button className="Product-Rating__Limit--Right"> &gt; </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product
