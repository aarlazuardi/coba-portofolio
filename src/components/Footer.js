import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>{" "}
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center footer-links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Tentang</a>
              </li>
              <li>
                <a href="#skills">Keahlian</a>
              </li>
              <li>
                <a href="#why-hire-me">Mengapa Saya</a>
              </li>
              <li>
                <a href="#testimonials">Testimoni</a>
              </li>
              <li>
                <a href="#projects">Portofolio</a>
              </li>
              <li>
                <a href="#connect">Kontak</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
