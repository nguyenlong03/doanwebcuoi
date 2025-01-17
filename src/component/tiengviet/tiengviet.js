import React from "react";
import "../it/it.scss";
import { useState, useEffect } from "react";
import anh1 from "../../assets/anh1.jpg";
import anh2 from "../../assets/anh2.jpg";
import anh3 from "../../assets/anh3.jpeg";
import "./tiengviet.scss";
import { useNavigate } from "react-router";
const Tiengviet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [anh1, anh2, anh3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Chuyển ảnh mỗi 5 giây

    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();
  const handleViewDetailtiengviet = (id) => {
    navigate(`/producttiengviet/${id}`);
  };
  const productstiengviet = [
    {
      id: 1,
      name: "Tiếng việt lớp 1",
      price: 61000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzp4p2YvO3xVnyPBq5k57up389IHHamLaSg&s",
      description: "Sách giáo khoa dành cho học sinh lớp 1",
    },
    {
      id: 2,
      name: "Tiếng việt lớp 4",
      price: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AdOWUEF4enGb9i1mIC5kCUVfVukUEEDMXw&s",
      description: "Sách giáo khoa dành cho học sinh lớp 4",
    },
    {
      id: 3,
      name: "tiếng việt lớp 5",
      price: 70000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AdOWUEF4enGb9i1mIC5kCUVfVukUEEDMXw&s",
      description: "Sách giáo khoa dành cho học sinh lớp 5",
    },
    {
      id: 4,
      name: "tiếng việt quyển 2",
      price: 32000,
      image: "https://nxbhcm.com.vn/Image/Biasach/vanhocdangianvinhlongtap1.jpg",
      description: "Sách dành cho giáo viên dạy tiếng việt ",
    },
    {
      id: 5,
      name: "Tiếng việt lớp 2",
      price: 18000,
      image: "https://sytu.vn//images/bookimg/sgk-tieng-viet-2-tap-lop-1-ket-noi-tri-thuc-voi-cuoc-song-43.jpg",
      description: "Sách tiếng việt dành cho học sinh lớp 2",
    },
    {
      id: 6,
      name: "Tiếng việt quyển 3",
      price: 20000,
      image: "https://sytu.vn//images/bookimg/sgk-tieng-viet-2-tap-lop-1-ket-noi-tri-thuc-voi-cuoc-song-43.jpg",
      description: "Sách tiếng việt quyển 3",
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
      <h2>Danh mục sách tiếng Việt</h2>
      <div className="books">
        {productstiengviet.map((productstiengviet) => (
          <div className="book" key={productstiengviet.id}>
            <img src={productstiengviet.image} alt={productstiengviet.name}  />
            <p>{productstiengviet.name}</p>
            <p>Giá: {productstiengviet.price.toString()} VND</p>
             {/* Phần số lượng */}
             
             <div className="soluong">
              <button
                className="btn_soluonggiam"
                onClick={() => handleDecrease(productstiengviet.id)}
              >
                -
              </button>
              <input
                type="number"
                value={quantities[productstiengviet.id] || 1} // Hiển thị số lượng riêng biệt cho mỗi sản phẩm
                readOnly
              />
              <button
                className="btn_soluongtang"
                onClick={() => handleIncrease(productstiengviet.id)}
              >
                +
              </button>
            </div>
            <button onClick={() => handleViewDetailtiengviet(productstiengviet.id)} className="btn">Xem chi tiết</button>
            <button className="btn">Mua</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiengviet;
