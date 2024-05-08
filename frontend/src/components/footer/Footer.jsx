import React from 'react'

const Footer = () => {
  return (
    <footer class="Footer">
        <div class="grid wide footer__content">
            <div class="row">
            <div class="col l-2-4 m-4 c-6">
                <h3 class="Footer__Heading">
                Chăm sóc khách hàng
                </h3>

                <ul class="Footer__List">
                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    Trung tâm trợ giúp
                    </a>
                </li>

                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    UET-Shop
                    </a>
                </li>

                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    Hướng dẫn mua hàng
                    </a>
                </li>
                </ul>
            </div>

            <div class="col l-2-4 m-4 c-6">
                <h3 class="Footer__Heading">
                Giới thiệu
                </h3>

                <ul class="Footer__List">
                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    Giới thiệu
                    </a>
                </li>

                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    Tuyển dụng
                    </a>
                </li>

                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    Điều khoản
                    </a>
                </li>
                </ul>
            </div>

            <div class="col l-2-4 m-4 c-6">
                <h3 class="Footer__Heading">
                Danh mục
                </h3>

                <ul class="Footer__List">
                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    Sản phẩm
                    </a>
                </li>

                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    Trang điểm mặt
                    </a>
                </li>

                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    Trang điểm mắt
                    </a>
                </li>
                </ul>
            </div>

            <div class="col l-2-4 m-4 c-6">
                <h3 class="Footer__Heading">
                Theo dõi
                </h3>

                <ul class="Footer__List">
                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    <i class="Footer--Item__Icon fa-brands fa-facebook"></i>
                    Facebook
                    </a>
                </li>

                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    <i class="Footer--Item__Icon fa-brands fa-instagram"></i>
                    Instagram
                    </a>
                </li>

                <li class="Footer--Item">
                    <a href="" class="Footer--Item__Link">
                    <i class="Footer--Item__Icon fa-brands fa-linkedin"></i>
                    Linkedin
                    </a>
                </li>
                </ul>
            </div>

            <div class="col l-2-4 m-8 c-12">
                <h3 class="Footer__Heading">
                Vào cửa hàng trên ứng dụng
                </h3>

                <div class="Footer__Download">
                <img
                    src="img/QR_Code.png"
                    alt="Download Qr"
                    class="Footer__Download--Qr"
                />

                <div class="Footer__Download--Apps">
                    <a href="" class="Footer__Download--App--Link">
                    <img
                        src="img/Google%20Play.png"
                        alt="Google Play"
                        class="Footer__Download--App--Img"
                    />

                    <img
                        src="img/App%20Store.png"
                        alt="Apple Store"
                        class="Footer__Download--App--Img"
                    />

                    <img
                        src="img/AppGallery.png"
                        alt="App Gallery"
                        class="Footer__Download--App--Img"
                    />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class="Footer__Bottom">
            <div class="grid wide">
            <p class="Footer__Text">
                © 2024 - Bản quyền thuộc về Công ty UET-Shop
            </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
