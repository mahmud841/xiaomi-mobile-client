import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  //Footer Section
  return (
    <>
      <footer className="footer">
        <div className="container py-5">
          <div className="row footer-info">
            <div className="col-md-3 col-sm-6 footer-grids">
              <h3 className="mb-3">Categories</h3>
              <ul>
                <li className="mb-3">
                  <Link to="/">Xiaomi  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Apple</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Samsung</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">One Plus</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Oppo </Link>
                </li>
                <li>
                  <Link to="/">Realme</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
              <h3 className="mb-3">Quick Links</h3>
              <ul>
                <li className="mb-3">
                  <Link to="/">About Us</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Contact Us</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Help</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">FAQ</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Terms of use</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
              <h3 className="mb-3">Get in Touch</h3>
              <ul>
                <li className="mb-3">
                  <i className="fas fa-map-marker"></i> Dhaka, Bangladesh
                </li>
                <li className="mb-3">
                  <i className="fas fa-mobile-alt"></i>
                  <Link to="/">8801719752465</Link>{" "}
                </li>
                <li className="mb-3">
                  <i className="fas fa-phone"></i>
                  <Link to="/">8801719752465</Link>{" "}
                </li>
                <li className="mb-3">
                  <i className="fas fa-envelope-open"></i>
                  <Link to="/">mahmud@gmail.com</Link>
                </li>
                <li>
                  <i className="fas fa-envelope-open"></i>
                  <Link to="/"> mahmud@gmail.com</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-grids footer-form mt-md-0 mt-4">
              <h3 className="mb-3">Newsletter</h3>
              <p className="mb-3">Free Delivery on your first three order!</p>
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    required=""
                  />
                  <button type="submit" className="btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              <div className="footer-grids  footer-social-icons mt-3">
                <h3 className="mb-3">Follow Social Media</h3>
                <div className="social">
                  <ul>
                    <li>
                      <a className="icon fb" href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon tw" href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon gp" href="https://www.google.com/">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-right py-3">
        <div className="container">
          <p className="text-center ">
            © 2021 <span className="logoName">Xiaomi Store </span>. All rights
            reserved | Design by
            <span> Mahmud Khan </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
