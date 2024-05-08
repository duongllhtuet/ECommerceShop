import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="App__Container">
        <div className="grid wide">
            <div className="row sm--gutter App_Content">
            <div className="col l-2 m-0 c-0">
                <nav className="Category">
                <h3 className="Category__Heading">
                    Danh mục
                </h3>

                <ul className="Category--List">
                    <li className="Category--Item Category--Item--Active">
                    <a href="#" className="Category--Item__Link">Sản phẩm</a>
                    </li>

                    <li className="Category--Item">
                    <a href="#" className="Category--Item__Link">Trang điểm môi</a>
                    </li>

                    <li className="Category--Item">
                    <a href="#" className="Category--Item__Link">Trang điểm mắt</a>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="col l-10 m-12 c-12">

                <div className="Home--Products">
                <div className="row sm--gutter">
                    <div className="col l-2-4 m-4 c-6">
                    {/* <!-- Product Item --> */}
                    <a className="Home--Product--Items" href="#">
                        <div
                            className="Home--Product--Item__Img"
                            style={{ backgroundImage: `url(https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltdk0z6wuoqs01_tn)` }}
                        ></div>

                        <h4 className="Home--Product--Item__Name">Loa Máy Tính Để Bàn
                        Leerfei E-350T Công Suất Lớn Dùng Cho Máy Vi Tính PC, Laptop,
                        Tivi- E-350Ts</h4>

                        <div className="Home--Product--Item__Price">
                        <span
                            className="Home--Product--Item__Price--Current"
                        >1.200.000đ</span>
                        <span className="Home--Product--Item__Sold">88 đã bán</span>
                        </div>
                    </a>
                    </div>
                </div>
                </div>

                <ul className="Pagnination Home--Product__Pagination">
                <li className="Pagnination--Item">
                    <a href="" className="Pagnination--Item__Link">
                    <i className="Pagnination--Item__Icon fas fa-angle-left"></i>
                    </a>
                </li>

                <li className="Pagnination--Item Pagnination--Item--Active">
                    <a href="" className="Pagnination--Item__Link">1</a>
                </li>

                <li className="Pagnination--Item">
                    <a href="" className="Pagnination--Item__Link">
                    <i className="Pagnination--Item__Icon fas fa-angle-right"></i>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home
