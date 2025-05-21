import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const WhyHireMe = () => {
  const reasons = [
    {
      title: "Pengalaman & Keahlian",
      description:
        "Dengan pengalaman bertahun-tahun di industri pengembangan web dan data science, saya memiliki keahlian teknis yang kuat untuk menyelesaikan proyek dengan hasil berkualitas tinggi.",
    },
    {
      title: "Komunikasi Efektif",
      description:
        "Saya memprioritaskan komunikasi yang jelas dan terbuka selama proses pengerjaan. Saya akan selalu menjaga Anda terinformasi tentang kemajuan proyek dan terbuka untuk masukan Anda.",
    },
    {
      title: "Solusi Kreatif",
      description:
        "Saya tidak hanya menyelesaikan masalah, tetapi juga mencari cara inovatif untuk membuat produk Anda menonjol. Pendekatan kreatif saya akan memberikan hasil yang unik dan efektif.",
    },
    {
      title: "Tepat Waktu",
      description:
        "Saya menghargai waktu Anda dan berkomitmen untuk menyelesaikan proyek sesuai jadwal yang telah disepakati. Manajemen waktu yang baik adalah prioritas utama saya.",
    },
  ];

  return (
    <section className="why-hire-me" id="why-hire-me">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="section-title">Mengapa Memperkerjakan Saya</h2>
                  <p className="section-subtitle">
                    Beberapa alasan mengapa saya adalah pilihan tepat untuk
                    proyek Anda
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          {reasons.map((reason, index) => (
            <Col xs={12} md={6} key={index}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeInUp reason-card"
                        : "reason-card"
                    }
                  >
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyHireMe;
