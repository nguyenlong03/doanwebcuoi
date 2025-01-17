import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ProductDetailngoaingu = () => {
  const { id } = useParams();

  const productsngaoingu = [
    {
      id: 1,
      name: "127 chủ đề ngữ pháp",
      price: 61000,
      image: "https://bizweb.dktcdn.net/thumb/medium/100/418/570/products/6a8c75f7-e42b-4235-95ec-7122459e65c4.jpg?v=1619243075577",
      description: "Sách dành cho người mới bắt đầu",
      author : "Thiên Phúc"
    },
    {
      id: 2,
      name: "Em học giỏi tiếng anh",
      price: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBJtcAh3Jg2OG8ke-EqVPlMtlmxi3j9ItYQ&s",
      description: "Em học giỏi tiếng anh",
      author : "Nguyễn Long"
    },
    {
      id: 3,
      name: "Mindmap ngữ pháp",
      price: 70000,
      image: "https://mcbooks.vn/wp-content/uploads/2023/09/Bia-sau-Mindmap-ngu-phap-tieng-Trung-theo-giao-trinh-Han-Ngu-scaled.jpg",
      description: "Lộ trình học ngữ pháp tiếng anh",
      author : "Nguyễn Thị Bích Ngọc"
    },
    {
      id: 4,
      name: "Sách tiếng anh cơ bản ",
      price: 32000,
      image: "https://product.hstatic.net/200000900535/product/ngoai-ngu-kho-day-nhung-ban-tu-hoc-duoc-song-ngu-bia-4_c87c071dadae44ec90291713696eeea0.jpg",
      description: "Sách dành cho người mới bắt đầu học tiếng anh",
      author : "Việt Lê"
    },
    {
      id: 5,
      name: "130 bài ngữ pháp tiếng anh",
      price: 18000,
      image: "https://bizweb.dktcdn.net/thumb/medium/100/418/570/products/screenshot-1-1720062420308.png?v=1720062424060",
      description: "Sách hay và bổ ích cho tất cả mọi người về tiếng anh",
      author : "Nguyễn Giang"
    },
    {
      id: 6,
      name: "Bài tập ngữ pháp tiếng anh ",
      price: 20000,
      image: "https://newshop.vn/public/uploads/products/14932/sach-bai-tap-ngu-phap-tieng-anh-can-ban-mc-books-1.jpg",
      description: "LÀM CHỦ NGỮ PHÁP TRONG 1 QUYỂN",
      author : "Thu Phương"
    },
  ];
  

  const product = productsngaoingu.find((p) => p.id === parseInt(id));

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
      <p> Mô tả : {product.description}</p>
      <p> Tác giả : {product.author}</p>

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

export default ProductDetailngoaingu;
