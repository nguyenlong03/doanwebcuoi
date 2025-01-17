import React from "react";
import "./contentright.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
const Contentright = () => {
  return (
    <div className="right">
      <div className="right_top">
        <div className="right_giohang">
          <h3>
            <FaShoppingCart />
          </h3>
          <p>Giỏ hàng</p>
        </div>
        <div className="right_giaothieu">
          <h3>
            <FcMoneyTransfer />
          </h3>
          <p> 61.000 vnđ</p>
        </div>
      </div>

      <div className="right_quangcao">
        <img
          className="quangcao_img"
          src="https://bestprint.vn/wp-content/uploads/2022/02/1645853954_632_50-logo-nha-xuat-ban-sach-noi-bat.png"
          alt=""
        />
        <img
          className="quangcao_img"
          src="https://beedesign.com.vn/wp-content/uploads/2020/08/Logo-Nha-Sach-Tan-Ninh.jpg"
          alt=""
        />
        <img
          className="quangcao_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mA0vxEBNhxsS9Igpbvea9PcZhv8vOfxXJQ&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contentright;
