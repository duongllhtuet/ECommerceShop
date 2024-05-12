import React, { useContext, useEffect, useState } from 'react';
import './User.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';

const Profile = () => {

    const { token, url } = useContext(StoreContext)

    const [image, setImage] = useState(false)
    const [data,setData] = useState({
        name: "",
        email: "",
        phone: "",
      })

    const [user, setUser] = useState({})

    const getUser = async () => {
        const response = await axios.post(url + "/api/user/get", {}, {headers: {token}});
        if (response.data.success) {
            const userData = response.data.data;
            setUser(userData);
            setData({
                name: userData.name,
                email: userData.email,
                phone: userData.phoneNumber,
            })
            if(userData.picture) {
                setImage(url + "/images/" + userData.picture)
            }
        } else {
            console.log("Error")
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData (data => ({...data, [name]: value}))
    }

    useEffect(() => {
        getUser()
    }, [token])

    const SaveProfile = async (event) => {
        event.preventDefault();
        if (data.name !== user.name || data.email !== user.email || data.phone !== user.phone) {
            const formData = new FormData();
            formData.append('name', data.name)
            formData.append('email', data.email)
            formData.append('phone', data.phone)
            formData.append('image', image)
            const response = await axios.put(url + "/api/user/modify", formData, {headers: {token}});
            if (response.data.success) {
                console.log(response.data.message)
            } else {
                console.log(response.data.message)
            }
        }
    }


  return (
    <div className="profile">
        <div className="Grid">
            <div className="container">
                <div className="sidebar">
                    <a onClick={() => navigate('/profile')} className="sidebar-child current">
                        <i className="fa-regular fa-user"></i>
                        <p>My Account</p>
                    </a>
                    <a onClick={() => navigate('/purchase')} className="sidebar-child">
                        <i className="fa-solid fa-clipboard-list"></i>
                        <p>My Purchase</p>
                    </a>
                </div>

                <div className="User-Infomation">
            <div className="User-Infomation__Title">
                Hồ Sơ Của Tôi
            </div>
            <div className="User-Infomation__Overview">
                Quản lý thông tin hồ sơ để bảo mật tài khoản
            </div>
            <form onSubmit={SaveProfile}>
                <div className="User-Infomation__Description">
                    <div className="User-Infomation__Description--Name1">
                        Tên
                    </div>
                    <div className="User-Infomation__Description--Name2">
                        <input required type="text" name="name" value={data.name} onChange={ onChangeHandler } />
                    </div>

                    <div className="User-Infomation__Description--Email1">
                        Email
                    </div>
                    <div className="User-Infomation__Description--Email2">
                        <input required type="email" name="email" value={data.email} onChange={ onChangeHandler } />
                    </div>
                    <div className="User-Infomation__Description--Phone1">
                        Số điện thoại
                    </div>
                    <div className="User-Infomation__Description--Phone2">
                        <input required type="tel" name="phone" value={data.phone} onChange={ onChangeHandler } />
                    </div>
                </div>
            
                <div className="User-Infomation__Update-Avatar">
                    <img src={image ? image : assets.defaultAvatar} className="User-Infomation__Update-Avatar--Avatar" alt="" />
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden />
                    <label htmlFor="image" className="User-Infomation__Upload-Button">Chọn ảnh</label>
                </div>

                <div className="User-Infomation__Description--Save">
                        <button type="submit">Lưu </button>
                </div>
            </form>
        </div>
                
            </div>
        </div>
    </div>
  )
}

export default Profile
