import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../it/it.scss";
import anh1 from "../../assets/anh1.jpg";
import anh2 from "../../assets/anh2.jpg";
import anh3 from "../../assets/anh3.jpeg";

const It = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [anh1, anh2, anh3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Chuyển ảnh mỗi 3 giây

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Code dạo ký sự",
      price: 61000,
      image: "https://itplus-academy.edu.vn/upload/071663969d40ee0e4a5c57251c1a8993/files/1(23).jpg",
      description: "Cuốn sách về lập trình thú vị.",
    },
    {
      id: 2,
      name: "Gián điệp mạng",
      price: 25000,
      image: "https://listsach.com/wp-content/uploads/2019/08/sach-gian-diep-mang-sach-hay-ve-it-lap-trinh-cong-nghe.jpg",
      description: "Học về an ninh mạng.",
    },
    {
      id: 3,
      name: "Bóng ma trên mạng",
      price: 70000,
      image: "https://listsach.com/wp-content/uploads/2019/08/Sach-bong-ma-tren-mang-sach-hay-ve-hacker-lap-trinh-it.jpg",
      description: "Khám phá thế giới hacker.",
    },
    {
      id: 4,
      name: "Nghệ thuật ẩn mình",
      price: 32000,
      image: "https://itplus-academy.edu.vn/upload/071663969d40ee0e4a5c57251c1a8993/files/4(18).jpg",
      description: "Kỹ năng bảo mật cá nhân.",
    },
    {
      id: 5,
      name: "Tự học IT tiếng Nhật",
      price: 18000,
      image: "https://bizweb.dktcdn.net/thumb/grande/100/180/408/products/bo-sach-tieng-nhat-danh-cho-it.jpg?v=1697267168887",
      description: "Sách học tiếng Nhật cho dân IT.",
    },
    {
      id: 6,
      name: "Tin vào chính mình",
      price: 20000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBDkvH8OyYkhUw4TmmO5scEOApJadmDgcBg&s",
      description: "Khơi dậy niềm tin vào bản thân.",
    },
  ];

  // Quản lý số lượng cho từng sản phẩm
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

  const handleViewDetail = (id) => {
    navigate(`/product/${id}`);
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

      <h2>Danh mục sách công nghệ thông tin</h2>
      <div className="books">
        {products.map((product) => (
          <div className="book" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>Giá: {product.price.toLocaleString()} VND</p>

            {/* Phần số lượng */}
            <div className="soluong">
              <button
                className="btn_soluonggiam"
                onClick={() => handleDecrease(product.id)}
              >
                -
              </button>
              <input
                type="number"
                value={quantities[product.id] || 1} // Hiển thị số lượng riêng biệt cho mỗi sản phẩm
                readOnly
              />
              <button
                className="btn_soluongtang"
                onClick={() => handleIncrease(product.id)}
              >
                +
              </button>
            </div>

            <button onClick={() => handleViewDetail(product.id)} className="btn">
              Xem chi tiết
            </button>
            <button className="btn">Mua</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default It;
