import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';
import "../header/header.scss"


 function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container className='header'>
      <NavLink to= "/" >Trang chủ</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/dangnhap" >Đăng nhập</NavLink>
          <NavLink to ="/dangky" >Đăng ký</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default Header;