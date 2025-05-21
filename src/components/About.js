import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/img/aar-poto.jpeg"; // Gunakan foto yang sama atau ganti dengan foto khusus about
import "animate.css";
import TrackVisibility from "react-on-screen";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Tentang Saya</h2>
                  <p>
                    Saya adalah seorang Web Developer dan Data Science
                    Enthusiast dengan pengalaman dalam mengembangkan aplikasi
                    web yang menarik dan fungsional. Dengan kombinasi
                    keterampilan desain dan pengembangan, saya dapat menciptakan
                    solusi digital yang tidak hanya cantik tapi juga bekerja
                    dengan baik.
                  </p>
                  <p>
                    Saya selalu bersemangat untuk belajar teknologi baru dan
                    menerapkan pengetahuan terbaru dalam proyek-proyek saya.
                    Keahlian saya meliputi pengembangan front-end dengan React,
                    HTML/CSS, JavaScript, serta kemampuan data science dengan
                    Python.
                  </p>
                  <p>
                    Mari kita bekerjasama untuk mewujudkan visi digital Anda
                    menjadi kenyataan!
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={aboutImg} alt="Foto Saya" className="about-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
