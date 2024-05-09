import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets'
import './Header.css';
import { StoreContext } from '../../context/StoreContext.jsx';

const Header = ({ setShowLogin, setShowSignup }) => {

    const {token, setToken} = useContext(StoreContext); // lay gia tri tu context

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }

  return (
    <header className="header">
      <div className="grid wide">
        <nav className="header__navbar hide--on--mobile--tablet">
          <ul className="header__navbar--list">
            <li className="header__navbar--item header__navbar--item--separate header__navbar--has-qr">
              Vào cửa hàng trên ứng dụng UET-Shop

              {/* Header__QR_Code */}
              <div className="header__QR_Code">
                <img
                  src={assets.QR_Code}
                  alt="QR_Code"
                  className="header__QR_Code--img"
                />

                <div className="header__QR_Code--Apps">
                  <a href="" className="header_QR_Code--Link">
                    <img
                      src={assets.GooglePlay}
                      alt="Google Play"
                      className="header__QR_Code--Download--Image"
                    />
                  </a>

                  <a href="" className="header_QR_Code--Link">
                    <img
                      src={assets.AppStore}
                      alt="AppStore"
                      className="header__QR_Code--Download--Image"
                    />
                  </a>

                  <a href="" className="header_QR_Code--Link">
                    <img
                      src={assets.AppGallery}
                      alt="AppGallery"
                      className="header__QR_Code--Download--Image header__QR_Code--Download--Image--Modify"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li className="header__navbar--item">
              <span className="header__navbar--title--no--pointer">Kết nối</span>

              <a href="" className="header__navbar--icon--link">
                <i className="header__navbar--icon fa-brands fa-facebook"></i>
              </a>

              <a href="" className="header__navbar--icon--link">
                <i className="header__navbar--icon fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>

          <ul className="header__navbar--list">
            {!token? 
            (
                <>
                    <li className="header__navbar--item header__navbar--item--strong" onClick={() => setShowLogin(true)} >Đăng nhập</li>
                </>
            ) : (<li className="header__navbar--item Header__Navbar--User">
              <img
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/247810700_1069744317560635_7349963908123137132_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=z06GmgSLSgkAX8mrW_9&tn=u4pq1EfURnFbcfg8&_nc_ht=scontent.fhan14-3.fna&oh=498a91ae9d8f09d761f3ffef1d075f4f&oe=624B5FE4"
                alt="Avatar"
                className="header__navbar--user-avatar"
              />

              <span className="header__navbar--user-name">Đào Hải Long</span>

              <ul className="header__navbar--user-options">
                <li className="header__navbar--user-option">
                  <a href="" className="header__navbar--user-option--link">
                    <i className="header__navbar--user-option--icon fa-solid fa-user-circle"></i>
                    Tài khoản của tôi
                  </a>
                </li>
                <li className="header__navbar--user-option">
                  <a href="" className="header__navbar--user-option--link">
                    <i className="header__navbar--user-option--icon fa-solid fa-money-bill-wave"></i>
                    Sản phẩm đã mua
                  </a>
                </li>
                <li className="header__navbar--user-option">
                  <a onClick={logout} className="header__navbar--user-option--link">
                    <i className="header__navbar--user-option--icon fa-solid fa-sign-out-alt"></i>
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
