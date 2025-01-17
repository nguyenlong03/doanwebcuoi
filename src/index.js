import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./page/Đangky";
import Login from "./page/Đangnhap";
import Trangchu from "./page/trangchu";
import It from "./component/it/it";
import Contentmid from "./component/content/contentmid/contentmid";
import Tiengviet from "./component/tiengviet/tiengviet";
import Luat from "./component/luat/luat";
import Ngoaingu from "./component/ngoaingu/ngoaingu";
import ProductDetail from "./component/chitietsanpham/chitietsanpham";
import ProductDetailluat from "./component/chitietsanphamluat/chitietsanphamluat";
import ProductDetailvanhoc from "./component/chitietsanphamvanhoc/chitietsanphamvanhoc";
import ProductDetailngoaingu from "./component/chitietsanphamngoaingu/chitietsanphamngoaingu";
import ProductDetailtiengviet from "./component/chitietsanphamtiengviet/chitetsanphamtiengviet";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route path="/product/:id" element={<ProductDetail />} />  
    <Route path="/productluat/:id" element={<ProductDetailluat />} />  
    <Route path="/productvanhoc/:id" element={<ProductDetailvanhoc />} /> 
    <Route path="/productngoaingu/:id" element={<ProductDetailngoaingu />} /> 
    <Route path="/producttiengviet/:id" element={<ProductDetailtiengviet />} /> 


    
      <Route path="/" element={<Trangchu />}> 
      
      <Route index element={<Contentmid />} /> 
      <Route path="vanhocdangian" element={<Contentmid/>}/>
        <Route path="luat" element={<Luat/>}/>
        <Route path="tiengviet" element={<Tiengviet/>}/>
        <Route path="ngoaingu" element={<Ngoaingu/>}/>
        <Route path="it" element={<It/>}/>

      </Route>
    </Route>

    {/* Các route khác */}
    <Route path="dangnhap" element={<Login />} />
    <Route path="dangky" element={<Register />} />
  </Routes>
</BrowserRouter>


);
