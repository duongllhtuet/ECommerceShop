import React from 'react'

const Profile = () => {
  return (
    <div class="profile">
        <div class="Grid">
            <div class="container">
                <div class="sidebar">
                    <a href="/src/resources/views/user/profile" class="sidebar-child current">
                        <i class="fa-regular fa-user"></i>
                        <p>My Account</p>
                    </a>
                    <a href="/user/purchase" class="sidebar-child">
                        <i class="fa-solid fa-clipboard-list"></i>
                        <p>My Purchase</p>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Profile
