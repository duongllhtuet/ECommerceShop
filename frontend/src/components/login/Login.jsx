import React from 'react'

const Login = ({ setShowLogin }) => {
  return (
    <div className="Modal">
        <div className="Modal_Overlay">

        </div>
        <div className="Modal__Body">
            {/* <!-- Login Form--> */}
            <div className="Auth-Form">
                <div className="Auth-Form__Container">
                    <div className="Auth-Form__Header">
                        <h3 className="Auth-Form__Heading">Đăng nhập</h3>

                        <a href="http://localhost:5000/user/signup" className="Auth-Form__Switch--Btn">Đăng ký</a>
                    </div>

                    <form action="/src/resources/views/user/login" method="POST">
                        <div className="Autho-Form__Form">
                            <div className="Auth-Form__Group">
                                <input type="text" id="email" name="email" className="Auth-Form__Input" placeholder="Email của bạn" required autocomplete="off"/>
                            </div>
                            <div className="Auth-Form__Group">
                                <input type="text" id="password" name="password" className="Auth-Form__Input" placeholder="Mật khẩu của bạn" required/>
                            </div>
                            
                        </div>

                        <div className="Auth-Form__Aside">
                            <div className="Auth-Form__Help">
                                <a href="" className="Auth-Form__Help--Link Auth-Form__Help--Forgot">Quên mật khẩu</a>
                                <span className="Auth-Form__Help--Separate"></span>
                                <a href="" className="Auth-Form__Help--Link">Cần trợ giúp?</a>
                            </div>
                        </div>

                        <div className="Auth-Form__Controls">
                            <button type="submit" className="Btn Btn--Primary">ĐĂNG NHẬP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
