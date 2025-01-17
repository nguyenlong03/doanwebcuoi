import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ProductDetailluat = () => {
  const { id } = useParams();

  const productsluat = [
    {
      id: 1,
      name: "Bộ luật hình sự",
      price: 61000,
      image: "https://sachluat.com.vn/library/module_new/sach-bo-luat-hinh-su-ap-dung-2018_s1428.jpg",
      description: "Bộ luật hình sự đầy đủ cho mọi người muốn tham khảo",
      author: "Nhà xuất bản Hồng Đức"
    },
    {
      id: 2,
      name: "Tố tụng hình sự",
      price: 25000,
      image: "https://static.dav.edu.vn/w640/images/upload/2019/01/Bo%20luat%20to%20tung%20hinh%20su.jpg",
      description: "Sách hay về tố tụng hình sự",
      author: "Nhà xuất bản lao động "
    },
    {
      id: 3,
      name: "Bộ 5 quyển hình sự",
      price: 70000,
      image: "https://media.loveitopcdn.com/6050/thumb/combo-5-cuon-sach-luat-giup-ban-hieu-ro-hon-ve-luat-hinh-su-hien-hanh-1.png",
      description: "Bộ 5 quyển hay về bộ luật việt nam ",
      author: "Nhà xuất bản chính trị quốc gia"
    },
    {
      id: 4,
      name: "Bộ luật đất đai",
      price: 32000,
      image: "https://bizweb.dktcdn.net/thumb/grande/100/116/097/products/td-2024-07-luat-dat-dai-2024-nho-b.jpg?v=1709284173857",
      description: "Luật đất đai ",
      author: "Nhà xuất bản lao động"
    },
    {
      id: 5,
      name: "Luật hình sự Việt Nam",
      price: 18000,
      image: "https://thuquan.ou.edu.vn/cover//2020/10/20/KL-TLHT-Luat-hinh-su-VN-C28A-23-12-2019-Thao-sbi-01.jpg",
      description: "Sách về Luật hình sự Việt Nam",
      author: "Nhà xuất bản Hồng Đức - Hội luật quốc gia Việt Nam"
    },
    {
      id: 6,
      name: "Luật Công Đoàn",
      price: 20000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6rt646TqWX8l22Dir3NP9TnHSc5nG2lKZQ&s",
      description: "Sách tìm hiểu về Luật công đoàn",
      author: "Nhà xuất bản Hồng Đức"
    },
  ];
  

  const product = productsluat.find((p) => p.id === parseInt(id));
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

export default ProductDetailluat;
