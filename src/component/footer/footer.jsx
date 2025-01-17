import React from "react";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: nguyenlong682003@gmail.com</p>
          <p>Phone: 0973064395</p>
          <p>Address:Hoằng Hóa , Thanh Hóa</p>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="p">
            <p>
              <FaFacebook />
            </p>
            <p>
              {" "}
              <a href="https://www.facebook.com/profile.php?id=100015816516003">
                nguyễn long
              </a>
            </p>
          </div>
          <div className="p">
            <p>
              <SiZalo />
            </p>
            <p className="sdt">
              <a href="https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F">
                0973064395
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>© 2025 Website selling copyrighted books </p>
        <p>Website selling copyrighted books belongs to Nguyễn Hữu Long</p>
      </div>
    </footer>
  );
};

export default Footer;
