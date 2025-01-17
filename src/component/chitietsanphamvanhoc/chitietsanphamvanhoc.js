import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ProductDetailvanhoc = () => {
  const { id } = useParams();

  const productsvanhoc = [
    {
      id: 1,
      name: "Code dạo ký sự",
      price: 61000,
      image:
        "https://giaotrinhpdf.com/book_covers/2023/04/03bac39f65ea4eb6ba7831040d8ce0ab.jpg",
      description: "Cuốn sách về lập trình thú vị.",
      author : "Phạm Đăng Xuân Hương"
    },
    {
      id: 2,
      name: "Gián điệp mạng",
      price: 25000,
      image: "https://hevobooks.com/wp-content/uploads/2018/09/7X152-1.jpg",
      description: "Học về an ninh mạng.",
      author : "Võ Quang Nhơn"
    },
    {
      id: 3,
      name: "Bóng ma trên mạng",
      price: 70000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6LIbssdR9Z0OwmowxC2sHn8lZ4sZLnIDdQ&s",
      description: "Khám phá thế giới hacker.",
      author : "Đại học Thái Nguyên"
    },
    {
      id: 4,
      name: "Nghệ thuật ẩn mình",
      price: 32000,
      image:
        "https://nxbhcm.com.vn/Image/Biasach/vanhocdangianvinhlongtap1.jpg",
      description: "Kỹ năng bảo mật cá nhân.",
      author : "Lê Thị Thanh Vy"
    },
    {
      id: 5,
      name: "Tự học IT tiếng Nhật",
      price: 18000,
      image:
        "https://product.hstatic.net/200000900535/product/van-hoc-dan-gian-cai-hay-ve-dep-2_dff1fe87a2fe498aa4b0bb9df8509853_grande.jpg",
      description: "Sách học tiếng Nhật cho dân IT.",
      author : "Lê Dân"
    },
    {
      id: 6,
      name: "Tin vào chính mình",
      price: 20000,
      image: "https://hcmussh.edu.vn/img/news/81178217.jpeg?t=81178222",
      description: "Khơi dậy niềm tin vào bản thân.",
      author : "Trần Thị Mai Nhân"
    },
  ];
  

  const product = productsvanhoc.find((p) => p.id === parseInt(id));

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
      <p>Tác giả : {product.author}</p>

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

export default ProductDetailvanhoc;
