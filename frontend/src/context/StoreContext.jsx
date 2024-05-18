import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([
        { productId: "", quantity: "", size: "" }
    ]);
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [product_list, setProductList] = useState([])

    const addToCart = async (itemId, size, quantity) => {
        let existingItemIndex = -1
        if (cartItems) {
            existingItemIndex = cartItems.findIndex(cart => cart.productId === itemId && cart.size === size);
        }

        if (existingItemIndex !== -1) {
            // Nếu mặt hàng đã tồn tại trong giỏ hàng, cập nhật số lượng
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedCartItems);
        } else {
            // Nếu mặt hàng chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
            setCartItems(prevCartItems => {
                if (Array.isArray(prevCartItems)) {
                  return [...prevCartItems, { productId: itemId, size: size, quantity: quantity }];
                } else {
                  return [{ productId: itemId, size: size, quantity: quantity }]; // Khởi tạo mảng mới nếu prevCartItems là rỗng
                }
            });
        }

        console.log(cartItems)
        
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId, size, quantity }, { headers: { token } });
            toast.success("Đã thêm sản phẩm vào giỏ hàng")
        }
    };
    
    const removeFromCart = async (itemId, size) => {
        let existingItemIndex = -1
        if (cartItems) {
            existingItemIndex = cartItems.findIndex(cart => cart.productId === itemId && cart.size === size);
        }

        if (existingItemIndex !== -1) {
            // Nếu mặt hàng đã tồn tại trong giỏ hàng, cập nhật số lượng
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity -= 1;
            setCartItems(updatedCartItems)

            if (token) {
                await axios.post(url + "/api/cart/remove", { itemId, size }, { headers: { token } });
            }
        }
    };
    
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        if (cartItems && cartItems.length > 0) {
            cartItems.map((cart, index) => { 
                if (cart.quantity > 0) {
                    const itemInfo = product_list.find((product) => product._id === cart.productId);
                    if (itemInfo) {
                        totalAmount += itemInfo.price * cart.quantity;
                    }
                }
            })
        }
        return totalAmount;
    };
    

    const fetchProductList = async () => {
        const response = await axios.get(url+"/api/product/list");
        setProductList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, {headers: {token}});
        setCartItems(response.data.cartData);
    }

    useEffect(()=> {
        async function loadData() {
            await fetchProductList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    const contextValue = {
        product_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;