import React from "react";
import "../contentleft/contentleft.scss";
import { NavLink } from "react-router";
const Contentleft = () => {
  return (
    <div class="sidebar">
      <h4>chủ đề sách</h4>

      <NavLink to="tiengviet">Tiếng Việt</NavLink>
      <NavLink to="ngoaingu">Ngoại ngữ</NavLink>
      <NavLink to="it">Công nghệ thông tin</NavLink>
      <NavLink to="luat">Luật</NavLink>
      <NavLink to="vanhocdangian">Văn học dân gian</NavLink>
    </div>
  );
};

export default Contentleft;
