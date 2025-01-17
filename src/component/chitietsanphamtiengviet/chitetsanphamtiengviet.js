import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ProductDetailtiengviet = () => {
  const { id } = useParams();

  const productstiengviet = [
    {
      id: 1,
      name: "Tiếng việt lớp 1",
      price: 61000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzp4p2YvO3xVnyPBq5k57up389IHHamLaSg&s",
      description: "Sách giáo khoa dành cho học sinh lớp 1",
      author : "Bộ giáo dục và đào tạo"
    },
    {
      id: 2,
      name: "Tiếng việt lớp 4",
      price: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AdOWUEF4enGb9i1mIC5kCUVfVukUEEDMXw&s",
      description: "Sách giáo khoa dành cho học sinh lớp 4",
      author : "Bộ giáo dục và đào tạo"
    },
    {
      id: 3,
      name: "tiếng việt lớp 5",
      price: 70000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AdOWUEF4enGb9i1mIC5kCUVfVukUEEDMXw&s",
      description: "Sách giáo khoa dành cho học sinh lớp 5",
      author : "Bộ giáo dục và đào tạo"
    },
    {
      id: 4,
      name: "tiếng việt quyển 2",
      price: 32000,
      image: "https://nxbhcm.com.vn/Image/Biasach/vanhocdangianvinhlongtap1.jpg",
      description: "Sách dành cho giáo viên dạy tiếng việt ",
      author : "Bộ giáo dục và đào tạo"
    },
    {
      id: 5,
      name: "Tiếng việt lớp 2",
      price: 18000,
      image: "https://sytu.vn//images/bookimg/sgk-tieng-viet-2-tap-lop-1-ket-noi-tri-thuc-voi-cuoc-song-43.jpg",
      description: "Sách tiếng việt dành cho học sinh lớp 2",
      author : "Bộ giáo dục và đào tạo"
    },
    {
      id: 6,
      name: "Tiếng việt quyển 3",
      price: 20000,
      image: "https://sytu.vn//images/bookimg/sgk-tieng-viet-2-tap-lop-1-ket-noi-tri-thuc-voi-cuoc-song-43.jpg",
      description: "Sách tiếng việt quyển 3",
      author : "Bộ giáo dục và đào tạo"
    },
  ];
  

  const product = productstiengviet.find((p) => p.id === parseInt(id));
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
        <p>Mô tả : {product.description}</p>
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

export default ProductDetailtiengviet;
