import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import { StoreContext } from "../../context/StoreContext.jsx";
import ProductItem from "../../components/productItem/ProductItem.jsx";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [sex, setSex] = useState("All");
  const [data, setData] = useState([]);
  const [productsPerRow, setProductsPerRow] = useState(5); // default for large screens

  const { url } = useContext(StoreContext);

  const fetchProduct = async () => {
    const response = await axios.get(url + `/api/product/list`);
    if (response.data.success) {
      setData(response.data.data);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleCategoryClicks = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSexClicks = (selectedSex) => {
    setSex(selectedSex);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerRow(5); // large screens
      } else if (window.innerWidth >= 740 && window.innerWidth <= 1023) {
        setProductsPerRow(3); // medium screens (tablets)
      } else {
        setProductsPerRow(2); // small screens (mobiles)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredData = data.filter(
    (item) =>
      (sex === "All" || sex === item.sex) &&
      (category === "All" || category === item.category)
  );

  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += productsPerRow) {
    chunkedData.push(filteredData.slice(i, i + productsPerRow));
  }

  return (
    <div className="App__Container">
      <div className="grid wide">
        <div className="row sm--gutter App_Content">
          <div className="col l-2 m-0 c-0">
            <nav className="Category">
              <h3 className="Category__Heading">Danh mục</h3>
              <ul className="Category--List">
                <li className={`Category--Item ${sex === "All" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleSexClicks("All")}>Giới tính</div>
                </li>
                <li className={`Category--Item ${sex === "Men" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleSexClicks("Men")}>Thời trang nam</div>
                </li>
                <li className={`Category--Item ${sex === "Women" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleSexClicks("Women")}>Thời trang nữ</div>
                </li>
              </ul>
              <ul className="Category--List">
                <li className={`Category--Item ${category === "All" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleCategoryClicks("All")}>Loại</div>
                </li>
                <li className={`Category--Item ${category === "Shirt" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleCategoryClicks("Shirt")}>Shirt</div>
                </li>
                <li className={`Category--Item ${category === "T-shirt" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleCategoryClicks("T-shirt")}>T-shirt</div>
                </li>
                <li className={`Category--Item ${category === "Quần Short" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleCategoryClicks("Quần Short")}>Quần Short</div>
                </li>
                <li className={`Category--Item ${category === "Quần dài" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleCategoryClicks("Quần dài")}>Quần dài</div>
                </li>
                <li className={`Category--Item ${category === "Áo khoác" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleCategoryClicks("Áo khoác")}>Áo khoác</div>
                </li>
                <li className={`Category--Item ${category === "Áo Len" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleCategoryClicks("Áo Len")}>Áo Len</div>
                </li>
                <li className={`Category--Item ${category === "Áo Hoodie" ? "Category--Item--Active" : ""}`}>
                  <div className="Category--Item__Link" onClick={() => handleCategoryClicks("Áo Hoodie")}>Áo Hoodie</div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col l-10 m-12 c-12">
            <div className="Home--Products">
              {chunkedData.map((row, rowIndex) => (
                <div className="row sm--gutter" key={rowIndex}>
                  {row.map((item, index) => (
                    <div className="col l-2-4 m-4 c-6" key={index}>
                      <ProductItem
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.picture}
                        selling={item.selling}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
