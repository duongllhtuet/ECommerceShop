import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div class="App__Container">
        <div class="grid wide">
          <div class="row product__container">
            <ul class="product__address--detail">
              <a href="" class="product__address--link">
                Shopee
              </a>
      
              <i class="product__address--icon fa-solid fa-angle-right"></i>
      
              <a href="" class="product__address--link">
                Thời trang nam
              </a>
      
              <i class="product__address--icon fa-solid fa-angle-right"></i>
      
              <span class="product__name">
                Áo sơ mi nam Basic chất kaki cao cấp cực đẹp
              </span>
            </ul>
      
            <div class="product__information">
              <div class="col l-5">
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltp03ksjtnuy7b"
                  alt=""
                  class="product__img--main"
                />
      
                <ul class="product__imgs">
                  <li class="product__img">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltp03ksjtnuy7b"
                      alt=""
                      class="product__img--link"
                    />
                  </li>
                </ul>
              </div>
      
              <div class="col l-7">
                <div class="row">
                  <div class="col l-12">
                    <div class="product__information--heading">
      
                      <span class="product__information--heading--name">
                        Áo sơ mi nam Basic chất kaki cao cấp cực đẹp
                      </span>
                    </div>
                  </div>
                </div>
      
                <div class="row">
                  <div class="col l-12">
                    <div class="product__information--rating">
                      <div class="product__information--rating--star">
                        <span class="product__information--rating--index">
                          4.6
                        </span>
      
                        <i
                          class="product__information--icon--star product__information--icon--star--active fa-solid fa-star"
                        ></i>
      
                        <i
                          class="product__information--icon--star product__information--icon--star--active fa-solid fa-star"
                        ></i>
      
                        <i
                          class="product__information--icon--star product__information--icon--star--active fa-solid fa-star"
                        ></i>
      
                        <i
                          class="product__information--icon--star product__information--icon--star--active fa-solid fa-star"
                        ></i>
      
                        <i
                          class="product__information--icon--star fa-solid fa-star"
                        ></i>
                      </div>
      
                      <div class="product__information--rating--number">
                        <span class="product__information--rated--number">
                          5k
                        </span>
      
                        <span class="product__information--rated--title">
                          Đánh giá
                        </span>
      
                      </div>
      
                      <div class="product__information--selled">
                        <span class="product__information--selled--number">
                          18,7k
                        </span>
      
                        <span class="product__information--selled--name">
                          Đã bán
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="row">
                  <div class="col l-12">
                    <div class="product__information--price">      
                      <span class="product__information--price__discounted">
                        ₫95.000
                      </span>
                    </div>
                  </div>
                </div>
      
                <div class="row">
                  <div class="product__option">
      
                    <div class="row">
                      <div class="col l-12">
                        <div class="product__option--size">
                          <div class="product__option--size--name">
                            Size
                          </div>
      
                          <div class="grid product__option--size--select">
                            <div class="row">
                              <div class="col l-4">
                                <button
                                  class="product__option--size--select--option product__option--size--option--selected"
                                >
                                  M: 45-54kg &lt; 1m65
                                </button>
                              </div>
      
                              <div class="col l-4">
                                <button class="product__option--size--select--option">
                                  L: 55-64kg &lt; 1m72
                                </button>
                              </div>
      
                              <div class="col l-4">
                                <button class="product__option--size--select--option">
                                  XL: 65-73kg &lt; 1m76
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div class="row">
                      <div class="col l-12">
                        <div class="product__option--order--item">
                          <div class="product__option--order--item--title">
                            Số lượng
                          </div>
      
                          <div class="product__option--order--item--quantity">
                            <button
                              class="product__option--order--item--quantity--decrease"
                            >
                              <svg
                                enable-background="new 0 0 10 10"
                                viewBox="0 0 10 10"
                                x="0"
                                y="0"
                                class="uet-shop-svg-icon--decrease"
                              ><polygon
                                  points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"
                                ></polygon></svg>
                            </button>
      
                            <input
                              type="text"
                              class="product__option--order--item--quantity--input"
                              value="1"
                            />
      
                            <button
                              class="product__option--order--item--quantity--increase"
                            >
                              <svg
                                enable-background="new 0 0 10 10"
                                viewBox="0 0 10 10"
                                x="0"
                                y="0"
                                class="uet-shop-svg-icon-increase"
                              ><polygon
                                  points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"
                                ></polygon></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="row">
                  <div class="product__information--btn">
                    <div class="Btn Btn--normal--product__information">
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0f3bf6e431b6694a9aac.svg"
                        alt=""
                        class="product__information--add--product--icon"
                      />
      
                      <span class="product__information--add--product--name">
                        Thêm vào giỏ hàng
                      </span>
                    </div>
      
                    <div class="Btn Btn--Primary--product__information">
                      <span class="product__information--purchase">
                        Mua ngay
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="page-product">
              <div class="grid">
                <div class="page-product__content">
                  <div class="product-detail page-prodcut__detail">
                    <div class="I_DV_3">
                      <h2 class="product-detail__header">Chi tiết sản phẩm</h2>
                      <div class="product__detail--text">
                        <ul class="product-detail--list">
                          <li class="product-detail--item">
                            <label class="product-detail--item__label">Hạn bảo hành</label>
                            <div class="product-detail--item__get-label">12 tháng</div>
                          </li>
                          <li class="product-detail--item">
                            <label class="product-detail--item__label">Loại bảo hành</label>
                            <div class="product-detail--item__get-label">Bảo hành nhà
                              sản xuất</div>
                          </li>
                          <li class="product-detail--item">
                            <label class="product-detail--item__label">Kho hàng</label>
                            <div class="product-detail--item__get-label">12 tháng</div>
                          </li>
                          <li class="product-detail--item">
                            <label class="product-detail--item__label">Gửi từ</label>
                            <div class="product-detail--item__get-label">TP. Hồ Chí
                              Minh</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="I_DV_3">
                      <h2 class="product-detail__header">Mô tả sản phẩm</h2>
                      <div class="product__detail--text">
                        <p class="product__detail--information">
                          * Shop chỉ phân phối hàng chính hãng được phân phối tại Việt
                          Nam
                        </p>
      
                        <p class="product__detail--information">
                          * Bảo hành chính hãng thông qua nhà phân phối hoặc hãng tại
                          Việt Nam
                        </p>
      
                        <p class="product__detail--information">
                          * Một số sản phẩm có niêm phong hay đóng gói theo công nghệ
                          "ép chết" khi xuất xưởng - Thì tất cả những sản phẩm này khi
                          bán ra thị trường nhà phân phối " BẮT BUỘC PHẢI THÁO MỞ để
                          DÁN TEM BẢO HÀNH CHÍNH HÃNG" sản phẩm bạn mua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="Product-Rating">
              <div class="Product-Rating__Header">
                ĐÁNH GIÁ SẢN PHẨM
              </div>
      
              <div class="row product--rating--score">
                <div class="col c-3">
                  <div class="Product-Rating__Score">
                    <div class="Product-Rating__Score--Score">
                      <span class="Product-Rating__Score--Score--highlight">
                        4
                      </span>
                      trên 5
                    </div>
      
                    <div class="Product-Rating__Score--Star">
                      <img src="img/star.png" />
                      <img src="img/star.png" />
                      <img src="img/star.png" />
                      <img src="img/star.png" />
                      <img src="img/starnofill.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="Product-Rating__List">
                <div class="Product-Rating__Main">
                  <div class="Product-Rating__Main--Avatar">
                    <img
                      src="https://i.pinimg.com/564x/89/31/e0/8931e0c19e5bfca74c58e1c29625c46a.jpg"
                    />
                  </div>
                  <div class="Product-Rating__Main--Name">
                    Phạm Chiến
                  </div>
                  <div class="Product-Rating__Main--Score">
                    <img src="img/star.png" />
                    <img src="img/star.png" />
                    <img src="img/star.png" />
                    <img src="img/star.png" />
                    <img src="img/starnofill.png" />
                  </div>
                  <div class="Product-Rating__Main--Time">
                    2024-04-12 14:51
                  </div>
                  <div class="Product-Rating__Main--Comment">
                    Hàng đẹp lắm
                  </div>
                  <div class="Product-Rating__Main--Image">
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
              <div class="Product-Rating__Limit">
                <button class="Product-Rating__Limit--Left"> &lt; </button>
                <button class="Product-Rating__Limit--Change active">1</button>
                <button class="Product-Rating__Limit--Change">2</button>
                <button class="Product-Rating__Limit--Change">3</button>
                <button class="Product-Rating__Limit--Change">4</button>
                <button class="Product-Rating__Limit--Change">5</button>
                <button class="Product-Rating__Limit--Right"> &gt; </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product
