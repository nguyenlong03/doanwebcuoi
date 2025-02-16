import React from "react";
import "../contentmid/contentmid.scss";
import { useState, useEffect } from "react";
import anh1 from "../../../assets/anh1.jpg";
import anh2 from "../../../assets/banner2.png";
import anh3 from "../../../assets/banner1.jpg";
import { useNavigate } from "react-router-dom";
const Contentmid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [anh1, anh2, anh3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Chuyển ảnh mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  const productsvanhoc = [
    {
      id: 1,
      name: "Giáo trình văn học dân gian Việt Nam",
      price: 61000,
      image:
        "https://giaotrinhpdf.com/book_covers/2023/04/03bac39f65ea4eb6ba7831040d8ce0ab.jpg",
      description: "Cuốn sách về lập trình thú vị.",
    },
    {
      id: 2,
      name: "Văn học dân gian Việt Nam quyển 2",
      price: 25000,
      image: "https://hevobooks.com/wp-content/uploads/2018/09/7X152-1.jpg",
      description: "Học về an ninh mạng.",
    },
    {
      id: 3,
      name: "Văn học dân gian Việt Nam quyến 1",
      price: 70000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6LIbssdR9Z0OwmowxC2sHn8lZ4sZLnIDdQ&s",
      description: "Khám phá thế giới hacker.",
    },
    {
      id: 4,
      name: "Văn học dân gian Vĩnh Long",
      price: 32000,
      image:
        "https://nxbhcm.com.vn/Image/Biasach/vanhocdangianvinhlongtap1.jpg",
      description: "Kỹ năng bảo mật cá nhân.",
    },
    {
      id: 5,
      name: "Văn học dân gian quyển 3 Việt Nam",
      price: 18000,
      image:
        "https://product.hstatic.net/200000900535/product/van-hoc-dan-gian-cai-hay-ve-dep-2_dff1fe87a2fe498aa4b0bb9df8509853_grande.jpg",
      description: "Sách học tiếng Nhật cho dân IT.",
    },
    {
      id: 6,
      name: "Văn học dân gian quyển 4 Việt Nam",
      price: 20000,
      image: "https://hcmussh.edu.vn/img/news/81178217.jpeg?t=81178222",
      description: "Khơi dậy niềm tin vào bản thân.",
    },
  ];

  const handleViewDetail = (id) => {
    navigate(`/productvanhoc/${id}`);
  };
  const navigate = useNavigate();

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
      <h2>Danh mục sách văn học dân gian</h2>
      <div className="books">
        {productsvanhoc.map((productsvanhoc) => (
          <div className="book" key={productsvanhoc.id}>
            <img src={productsvanhoc.image} alt={productsvanhoc.name} />
            <p>{productsvanhoc.name}</p>
            <p>Giá: {productsvanhoc.price.toLocaleString()} VND</p>

            {/* Phần số lượng */}
            <div className="soluong">
              <button
                className="btn_soluonggiam"
                onClick={() => handleDecrease(productsvanhoc.id)}
              >
                -
              </button>
              <input
                type="number"
                value={quantities[productsvanhoc.id] || 1} // Hiển thị số lượng riêng biệt cho mỗi sản phẩm
                readOnly
              />
              <button
                className="btn_soluongtang"
                onClick={() => handleIncrease(productsvanhoc.id)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleViewDetail(productsvanhoc.id)}
              className="btn"
            >
              Xem chi tiết
            </button>
            <button className="btn">Mua</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contentmid;
