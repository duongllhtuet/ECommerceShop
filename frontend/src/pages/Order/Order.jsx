import React from 'react'

const Purchase = () => {
  return (
    <div class="purchase">
        <div class="Grid">
            <div class="container">
                <div class="sidebar">
                    <a href="/src/resources/views/user/profile" class="sidebar-child">
                        <i class="fa-regular fa-user"></i>
                        <p>My Account</p>
                    </a>
                    <a href="/src/resources/views/user/purchase" class="sidebar-child current">
                        <i class="fa-solid fa-clipboard-list"></i>
                        <p>My Purchase</p>
                    </a>
                </div>
                <div class="my-purchase">    
                    <ul class="list-purchase">
                        {/* <% if (data && data.purchase && data.purchase.length > 0) { %>
                        <%    data.purchase.array.forEach(item => { %>
                        
                            <li class="purchase-item">
                                <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltmmuu2qgumic1_tn" class="item_picture">
                                <div class="item_info">
                                    <a href="" class="item_info-name"><%= item.name %></a>
                                    <div class="item_info-quantity">x<%= item.quantity %></div>
                                </div>
                                <div class="item_price"><%= item.price %></div>
                            </li>
                        <% })}; %> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Purchase
