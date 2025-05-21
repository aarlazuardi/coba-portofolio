import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovators",
      feedback:
        "Sangat terkesan dengan kerja yang dilakukan. Desain website kami menjadi jauh lebih menarik dan fungsional. Selalu tepat waktu dan komunikatif selama proses pengerjaan.",
    },
    {
      name: "David Chen",
      company: "Digital Solutions Inc",
      feedback:
        "Hasil pekerjaan sangat memuaskan dan melebihi ekspektasi kami. Pemahaman yang mendalam tentang kebutuhan kami dan implementasi yang sempurna. Kami pasti akan bekerja sama lagi di masa depan.",
    },
    {
      name: "Amanda Rivera",
      company: "Creative Studios",
      feedback:
        "Kolaborasi yang luar biasa! Proyek selesai tepat waktu dengan kualitas premium. Sangat responsif terhadap revisi dan selalu siap membantu dengan ide-ide kreatif.",
    },
    {
      name: "Michael Wong",
      company: "Startup Vision",
      feedback:
        "Pemahaman teknis yang luar biasa dan kemampuan desain yang kreatif membuat situs web kami menonjol. Sangat profesional dan mudah untuk bekerja sama.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
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
                  <h2 className="section-title">Testimoni Client</h2>
                  <p className="section-subtitle">
                    Apa kata client tentang hasil kerja saya
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="testimonial-slider"
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                  <div className="testimonial-content">
                    <p>"{testimonial.feedback}"</p>
                    <h5>{testimonial.name}</h5>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
