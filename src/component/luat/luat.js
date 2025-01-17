import React from "react";
import "../it/it.scss";
import { useState, useEffect } from "react";
import anh1 from "../../assets/anh1.jpg";
import anh2 from "../../assets/anh2.jpg";
import anh3 from "../../assets/anh3.jpeg";
import { useNavigate } from "react-router-dom";

import "./luat.scss";
const Luat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [anh1, anh2, anh3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Chuyển ảnh mỗi 5 giây

    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();
  const handleViewDetailluat = (id) => {
    navigate(`/productluat/${id}`);
  };
  const productsluat = [
    {
      id: 1,
      name: "Bộ luật hình sự",
      price: 61000,
      image: "https://sachluat.com.vn/library/module_new/sach-bo-luat-hinh-su-ap-dung-2018_s1428.jpg",
      description: "Bộ luật hình sự đầy đủ cho mọi người muốn tham khảo",
    },
    {
      id: 2,
      name: "Tố tụng hình sự",
      price: 25000,
      image: "https://static.dav.edu.vn/w640/images/upload/2019/01/Bo%20luat%20to%20tung%20hinh%20su.jpg",
      description: "Sách hay về tố tụng hình sự",
    },
    {
      id: 3,
      name: "Bộ 5 quyển hình sự",
      price: 70000,
      image: "https://media.loveitopcdn.com/6050/thumb/combo-5-cuon-sach-luat-giup-ban-hieu-ro-hon-ve-luat-hinh-su-hien-hanh-1.png",
      description: "Bộ 5 quyển hay về bộ luật việt nam ",
    },
    {
      id: 4,
      name: "Bộ luật đất đai",
      price: 32000,
      image: "https://bizweb.dktcdn.net/thumb/grande/100/116/097/products/td-2024-07-luat-dat-dai-2024-nho-b.jpg?v=1709284173857",
      description: "Luật đất đai ",
    },
    {
      id: 5,
      name: "Luật hình sự Việt Nam",
      price: 18000,
      image: "https://thuquan.ou.edu.vn/cover//2020/10/20/KL-TLHT-Luat-hinh-su-VN-C28A-23-12-2019-Thao-sbi-01.jpg",
      description: "Sách về Luật hình sự Việt Nam",
    },
    {
      id: 6,
      name: "Luật Công Đoàn",
      price: 20000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6rt646TqWX8l22Dir3NP9TnHSc5nG2lKZQ&s",
      description: "Sách tìm hiểu về Luật công đoàn",
    },
  ];

  const [quantities, setQuantities] = useState({});
  
    // Hàm tăng số lượng cho sản phẩm cụ thể
    const handleIncrease = (id) => {
      setQuantities((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1, // Nếu chưa có số lượng, khởi tạo là 1
      }));
    };
  
    // Hàm giảm số lượng cho sản phẩm cụ thể
    const handleDecrease = (id) => {
      setQuantities((prev) => ({
        ...prev,
        [id]: Math.max((prev[id] || 1) - 1, 1), // Không cho số lượng nhỏ hơn 1
      }));
    };
  return (
    <div className="content">
      <div className="banner-container">
        <div
          className="banner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Banner ${index + 1}`} />
          ))}
        </div>
      </div>
      
      <h2>Danh mục sách luật Việt Nam</h2>
      <div className="books">
        {productsluat.map((productsluat) => (
          <div className="book" key={productsluat.id}>
            <img src={productsluat.image} alt={productsluat.name}  />
            <p>{productsluat.name}</p>
            <p>Giá: {productsluat.price.toString()} VND</p>

              {/* Phần số lượng */}
              <div className="soluong">
              <button
                className="btn_soluonggiam"
                onClick={() => handleDecrease(productsluat.id)}
              >
                -
              </button>
              <input
                type="number"
                value={quantities[productsluat.id] || 1} // Hiển thị số lượng riêng biệt cho mỗi sản phẩm
                readOnly
              />
              <button
                className="btn_soluongtang"
                onClick={() => handleIncrease(productsluat.id)}
              >
                +
              </button>
            </div>

            <button onClick={() => handleViewDetailluat(productsluat.id)} className="btn">Xem chi tiết</button>
            <button className="btn"> Mua</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Luat;
