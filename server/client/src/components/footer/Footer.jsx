import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="grid wide footer__content">
        <div className="row">
          <div className="col l-2-4 m-4 c-6">
            <h3 className="Footer__Heading">Chăm sóc khách hàng</h3>

            <ul className="Footer__List">
              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  Trung tâm trợ giúp
                </a>
              </li>

              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  UET-Shop
                </a>
              </li>

              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  Hướng dẫn mua hàng
                </a>
              </li>
            </ul>
          </div>

          <div className="col l-2-4 m-4 c-6">
            <h3 className="Footer__Heading">Giới thiệu</h3>

            <ul className="Footer__List">
              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  Giới thiệu
                </a>
              </li>

              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  Tuyển dụng
                </a>
              </li>

              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  Điều khoản
                </a>
              </li>
            </ul>
          </div>

          <div className="col l-2-4 m-4 c-6">
            <h3 className="Footer__Heading">Danh mục</h3>

            <ul className="Footer__List">
              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  Sản phẩm
                </a>
              </li>

              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  Thời trang nam
                </a>
              </li>

              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                  Trang trang nữ
                </a>
              </li>
            </ul>
          </div>

          <div className="col l-2-4 m-4 c-6 modify__col">
            <h3 className="Footer__Heading">Theo dõi</h3>

            <ul className="Footer__List">
              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                <FontAwesomeIcon className="Footer--Item__Icon" icon={faFacebook} />
                  Facebook
                </a>
              </li>

              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                <FontAwesomeIcon className="Footer--Item__Icon" icon={faInstagram} />
                  Instagram
                </a>
              </li>

              <li className="Footer--Item">
                <a href="" className="Footer--Item__Link">
                <FontAwesomeIcon className="Footer--Item__Icon" icon={faLinkedin} />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          <div className="col l-2-4 m-4 c-12 modify--on--mobile">
            <h3 className="Footer__Heading">Vào cửa hàng trên ứng dụng</h3>

            <div className="Footer__Download">
              <img
                src={assets.QR_Code}
                alt="Download Qr"
                className="Footer__Download--Qr"
              />

              <div className="Footer__Download--Apps">
                <a href="" className="Footer__Download--App--Link">
                  <img
                    src={assets.GooglePlay}
                    alt="Google Play"
                    className="Footer__Download--App--Img"
                  />
                </a>

                <a href="" className="Footer__Download--App--Link">
                  <img
                    src={assets.AppStore}
                    alt="Apple Store"
                    className="Footer__Download--App--Img"
                  />
                </a>

                <a href="" className="Footer__Download--App--Link">
                  <img
                    src={assets.AppGallery}
                    alt="App Gallery"
                    className="Footer__Download--App--Img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer__Bottom">
        <div className="grid wide">
          <p className="Footer__Text">
            © 2024 - Bản quyền thuộc về Công ty UET-Shop
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
