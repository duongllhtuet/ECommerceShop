import React, { useContext, useEffect, useState } from "react";
import "./User.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { assets } from "../../assets/assets";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { token, url } = useContext(StoreContext);

  const [imageFile, setImageFile] = useState(null); // Tệp thực tế
  const [imageURL, setImageURL] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const getUser = async () => {
    const response = await axios.post(
      url + "/api/user/get",
      {},
      { headers: { token } }
    );
    if (response.data.success) {
      const userData = response.data.data;
      setUser(userData);

      if (userData.address) {
        setData({
          name: userData.name,
          email: userData.email,
          phone: userData.phoneNumber,
          address: userData.address,
        });
      } else {
        setData({
          name: userData.name,
          email: userData.email,
          phone: userData.phoneNumber,
        });
      }
      if (userData.picture) {
        setImageURL(url + "/images/" + userData.picture);
      }
    } else {
      console.log("Error");
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    getUser();
  }, [token]);

  const SaveProfile = async (event) => {
    event.preventDefault();
    if (
      data.name !== user.name ||
      data.email !== user.email ||
      data.phone !== user.phone ||
      data.address !== user.address
    ) {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("address", data.address);
      formData.append("image", imageFile);
      const response = await axios.put(url + "/api/user/modify", formData, {
        headers: { token },
      });
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    }
  };

  return (
    <div className="profile">
      <div className="grid wide">
        <div className="row container">
          <div className="col l-3 m-0 c-0 side-bar">
            <a
              onClick={() => navigate("/profile")}
              className="sidebar-child current"
            >
              <i className="fa-regular fa-user"></i>
              <p>My Account</p>
            </a>
            <a onClick={() => navigate("/myorders")} className="sidebar-child">
              <i className="fa-solid fa-clipboard-list"></i>
              <p>My Purchase</p>
            </a>
          </div>

          <div className="col l-9 m-12 c-12 User-Information">
            <div className="User-Information__Title">Hồ Sơ Của Tôi</div>
            <div className="User-Information__Overview">
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </div>

            <form onSubmit={SaveProfile}>
              <div className="row sm--gutter">
                <div className="col l-8 m-8 c-12 User-Information__Description">
                  <div className="row sm--gutter User-Information_Description--Detail">
                    <div className="col l-5 m-5 c-12 User-Information_Description--Detail--Modify ">
                      Tên
                    </div>
                    <input
                      className="col l-7 m-7 c-12 User-Information__Description--Detail--Modify--Input"
                      required
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="row sm--gutter User-Information_Description--Detail">
                    <div className="col l-5 m-5 c-12 User-Information_Description--Detail--Modify">
                      Email
                    </div>

                    <input
                      required
                      className="col l-7 m-7 c-12 User-Information__Description--Detail--Modify--Input"
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={onChangeHandler}
                      disabled
                    />
                  </div>

                  <div className="row sm--gutter User-Information_Description--Detail">
                    <div className="col l-5 m-5 c-12 User-Information_Description--Detail--Modify">
                      Số điện thoại
                    </div>
                    <input
                      required
                      className="col l-7 m-7 c-12 User-Information__Description--Detail--Modify--Input"
                      type="tel"
                      name="phone"
                      value={data.phone}
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="row sm--gutter User-Information__Description--Detail User-Infomation__Description--Address2">
                    <div className="col l-5 m-5 c-12 User-Information_Description--Detail--Modify User-Information_Description--Detail--Modify--Option">
                      Địa chỉ
                    </div>

                    <input
                      className="col l-7 m-7 c-12 User-Information__Description--Detail--Modify--Input"
                      type="text"
                      name="address"
                      value={data.address}
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>

                <div className="col l-4 m-4 c-12 User-Information__Update-Avatar">
                  <img
                    src={imageURL ? imageURL : assets.defaultAvatar}
                    className="User-Infomation__Update-Avatar--Avatar"
                    alt=""
                  />
                  <input
                    onChange={(e) => {
                      setImageFile(e.target.files[0]);
                      setImageURL(URL.createObjectURL(e.target.files[0]));
                    }}
                    type="file"
                    id="image"
                    hidden
                  />
                  <label
                    htmlFor="image"
                    className="User-Infomation__Upload-Button"
                  >
                    Chọn ảnh
                  </label>
                </div>
              </div>

              <div className="User-Information__Description--Save" id="modify">
                <button type="submit" style={{  width: "78px" }}>
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
