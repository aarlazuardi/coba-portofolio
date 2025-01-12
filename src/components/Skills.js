import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jsLogo from "../assets/img/js-logo.png";
import reactLogo from "../assets/img/react-logo.png";
import htmlLogo from "../assets/img/html-logo.png";
import cssLogo from "../assets/img/css-logo.png";
import tailwindLogo from "../assets/img/tailwind-logo.png";
import bootstrapLogo from "../assets/img/bootstrap-logo.png";
import viteLogo from "../assets/img/vite-logo.png";
import nodeLogo from "../assets/img/node-logo.png";
import pythonLogo from "../assets/img/python-logo.png";
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from "framer-motion";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const webDevSkills = [
    { img: jsLogo, title: "JavaScript" },
    { img: reactLogo, title: "React" },
    { img: htmlLogo, title: "HTML" },
    { img: cssLogo, title: "CSS" },
    { img: tailwindLogo, title: "Tailwind CSS" },
    { img: bootstrapLogo, title: "Bootstrap" },
    { img: viteLogo, title: "Vite" },
    { img: nodeLogo, title: "Node.js" },
  ];

  const dataScienceSkills = [{ img: pythonLogo, title: "Python" }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>Here are some of the technologies I have worked with:</p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <motion.div className="item" variants={itemVariants}>
                    <h3 className="skill-category">Web Development</h3>
                    <Row className="skill-slider row">
                      {webDevSkills.map((skill, index) => (
                        <Col key={index} className="skill-col">
                          <div className="glass-card">
                            <img src={skill.img} alt={skill.title} />
                            <h5 className="skill-title">{skill.title}</h5>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                  <motion.div className="item" variants={itemVariants}>
                    <h3 className="skill-category">Data Science</h3>
                    <Row
                      className={
                        dataScienceSkills.length === 1
                          ? "justify-content-center"
                          : "skill-slider row"
                      }
                    >
                      {dataScienceSkills.map((skill, index) => (
                        <Col key={index} sm={6} md={3} className="skill-col">
                          <div className="glass-card">
                            <img src={skill.img} alt={skill.title} />
                            <h5 className="skill-title">{skill.title}</h5>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                </Carousel>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};

export default Skills;
