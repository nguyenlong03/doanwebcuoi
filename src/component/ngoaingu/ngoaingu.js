import React from "react";
import "../it/it.scss";
import { useState, useEffect } from "react";
import anh1 from "../../assets/anh1.jpg";
import anh2 from "../../assets/anh2.jpg";
import anh3 from "../../assets/anh3.jpeg";
import "./ngoaingu.scss";
import { useNavigate } from "react-router";
const Ngoaingu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [anh1, anh2, anh3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Chuyển ảnh mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const handleViewDetailngoaingu = (id) => {
    navigate(`/productngoaingu/${id}`);
  };
  const productsngaoingu = [
    {
      id: 1,
      name: "127 chủ đề ngữ pháp",
      price: 61000,
      image: "https://bizweb.dktcdn.net/thumb/medium/100/418/570/products/6a8c75f7-e42b-4235-95ec-7122459e65c4.jpg?v=1619243075577",
      description: "Sách dành cho người mới bắt đầu",
    },
    {
      id: 2,
      name: "Em học giỏi tiếng anh",
      price: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBJtcAh3Jg2OG8ke-EqVPlMtlmxi3j9ItYQ&s",
      description: "Em học giỏi tiếng anh",
    },
    {
      id: 3,
      name: "Mindmap ngữ pháp",
      price: 70000,
      image: "https://mcbooks.vn/wp-content/uploads/2023/09/Bia-sau-Mindmap-ngu-phap-tieng-Trung-theo-giao-trinh-Han-Ngu-scaled.jpg",
      description: "Lộ trình học ngữ pháp tiếng anh",
    },
    {
      id: 4,
      name: "Sách tiếng anh cơ bản ",
      price: 32000,
      image: "https://product.hstatic.net/200000900535/product/ngoai-ngu-kho-day-nhung-ban-tu-hoc-duoc-song-ngu-bia-4_c87c071dadae44ec90291713696eeea0.jpg",
      description: "Sách dành cho người mới bắt đầu học tiếng anh",
    },
    {
      id: 5,
      name: "130 bài ngữ pháp tiếng anh",
      price: 18000,
      image: "https://bizweb.dktcdn.net/thumb/medium/100/418/570/products/screenshot-1-1720062420308.png?v=1720062424060",
      description: "Sách hay và bổ ích cho tất cả mọi người về tiếng anh",
    },
    {
      id: 6,
      name: "Bài tập ngữ pháp tiếng anh ",
      price: 20000,
      image: "https://newshop.vn/public/uploads/products/14932/sach-bai-tap-ngu-phap-tieng-anh-can-ban-mc-books-1.jpg",
      description: "LÀM CHỦ NGỮ PHÁP TRONG 1 QUYỂN",
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
      <h2>Danh mục sách ngoại ngữ</h2>
      <div className="books">
        {productsngaoingu.map((productsngaoingu) => (
          <div className="book" key={productsngaoingu.id}>
            <img src={productsngaoingu.image} alt={productsngaoingu.name} />
            <p>{productsngaoingu.name}</p>
            <p>Giá: {productsngaoingu.price.toString()} VND</p>

             {/* Phần số lượng */}
             <div className="soluong">
              <button
                className="btn_soluonggiam"
                onClick={() => handleDecrease(productsngaoingu.id)}
              >
                -
              </button>
              <input
                type="number"
                value={quantities[productsngaoingu.id] || 1} // Hiển thị số lượng riêng biệt cho mỗi sản phẩm
                readOnly
              />
              <button
                className="btn_soluongtang"
                onClick={() => handleIncrease(productsngaoingu.id)}
              >
                +
              </button>
            </div>
            <button  onClick={() => handleViewDetailngoaingu(productsngaoingu.id)} className="btn" >Xem chi tiết</button>
            <button className="btn"> Mua</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ngoaingu;
