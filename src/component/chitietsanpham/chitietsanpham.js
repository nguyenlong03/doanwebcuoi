import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./chitietsanpham.scss";

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Code dạo ký sự",
      price: 61000,
      image:
        "https://itplus-academy.edu.vn/upload/071663969d40ee0e4a5c57251c1a8993/files/1(23).jpg",
      description: "Cuốn sách về lập trình thú vị.",
      author: "Phạm Huy Hoàng"
    },
    {
      id: 2,
      name: "Gián điệp mạng",
      price: 25000,
      image:
        "https://listsach.com/wp-content/uploads/2019/08/sach-gian-diep-mang-sach-hay-ve-it-lap-trinh-cong-nghe.jpg",
      description: "Học về an ninh mạng.",
      author: "Lý Vũ Kỳ"
    },
    {
      id: 3,
      name: "Bóng ma trên mạng",
      price: 70000,
      image:
        "https://listsach.com/wp-content/uploads/2019/08/Sach-bong-ma-tren-mang-sach-hay-ve-hacker-lap-trinh-it.jpg",
      description: "Khám phá thế giới hacker.",
      author: "Trần Thanh Hương"
    },
    {
      id: 4,
      name: "Nghệ thuật ẩn mình",
      price: 32000,
      image:
        "https://itplus-academy.edu.vn/upload/071663969d40ee0e4a5c57251c1a8993/files/4(18).jpg",
      description: "Kỹ năng bảo mật cá nhân.",
      author: "Thu Giang"
    },
    {
      id: 5,
      name: "Tự học IT tiếng Nhật",
      price: 18000,
      image:
        "https://bizweb.dktcdn.net/thumb/grande/100/180/408/products/bo-sach-tieng-nhat-danh-cho-it.jpg?v=1697267168887",
      description: "Sách học tiếng Nhật cho dân IT.",
      author: "Nguyễn Hữu Long"
    },
    {
      id: 6,
      name: "Tin vào chính mình",
      price: 20000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBDkvH8OyYkhUw4TmmO5scEOApJadmDgcBg&s",
      description: "Khơi dậy niềm tin vào bản thân.",
      author: "Lê Quang Huy"
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  // State quản lý số lượng sản phẩm
  const [quantity, setQuantity] = useState(1);

  // Xử lý tăng số lượng
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // Xử lý giảm số lượng
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (!product) {
    return <p>Không tìm thấy sản phẩm.</p>;
  }

  return (
    <div className="product-detail">
      <div className="detai_img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detai_noidung">
        <h1>{product.name}</h1>
        <p>Giá: {product.price.toLocaleString()} VND</p>
        <p>Mô tả: {product.description}</p>
        <p>Tác giả: {product.author}</p>

        {/* Phần số lượng */}
        <div className="soluongchitiet">
          <button
            className="btn_soluonggiamchitiet btn"
            onClick={handleDecrease}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
          />
          <button
            className="btn_soluongtangchitiet btn"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <button className="btn">Mua</button>
      </div>
    </div>
  );
};

export default ProductDetail;
