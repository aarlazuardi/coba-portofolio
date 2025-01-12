import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Connect = () => {
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
    <section className="connect" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h2 className="connect-title">Connect with Me</h2>
                <p className="connect-text">
                  Feel free to reach out to me through the following social
                  media platforms.
                </p>
                <div className="glass">
                  <div className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/aar-lazuardi-majid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/aarlazuardi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.instagram.com/aarlazuardi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Connect;
