import React from 'react'

const Login = () => {
  return (
    <div class="Modal">
        <div class="Modal_Overlay">

        </div>
        <div class="Modal__Body">
            {/* <!-- Login Form--> */}
            <div class="Auth-Form">
                <div class="Auth-Form__Container">
                    <div class="Auth-Form__Header">
                        <h3 class="Auth-Form__Heading">Đăng nhập</h3>

                        <a href="http://localhost:5000/user/signup" class="Auth-Form__Switch--Btn">Đăng ký</a>
                    </div>

                    <form action="/src/resources/views/user/login" method="POST">
                        <div class="Autho-Form__Form">
                            <div class="Auth-Form__Group">
                                <input type="text" id="email" name="email" class="Auth-Form__Input" placeholder="Email của bạn" required autocomplete="off"/>
                            </div>
                            <div class="Auth-Form__Group">
                                <input type="text" id="password" name="password" class="Auth-Form__Input" placeholder="Mật khẩu của bạn" required/>
                            </div>
                            
                        </div>

                        <div class="Auth-Form__Aside">
                            <div class="Auth-Form__Help">
                                <a href="" class="Auth-Form__Help--Link Auth-Form__Help--Forgot">Quên mật khẩu</a>
                                <span class="Auth-Form__Help--Separate"></span>
                                <a href="" class="Auth-Form__Help--Link">Cần trợ giúp?</a>
                            </div>
                        </div>

                        <div class="Auth-Form__Controls">
                            <button type="submit" class="Btn Btn--Primary">ĐĂNG NHẬP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
