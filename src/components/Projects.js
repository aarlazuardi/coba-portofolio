import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/calculearn.png";
import projImg5 from "../assets/img/calcumat.png";
import projImg6 from "../assets/img/dormcoffee.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  const projectsTab1 = [
    {
      title: "Calculearn",
      description: "Educational App",
      imgUrl: projImg4,
      demoLink: "https://padiil.github.io/CalcuLearn/",
    },
    {
      title: "Calcumat",
      description: "Mathematics App",
      imgUrl: projImg5,
      demoLink: "https://faridfirdaus-fred.github.io/calculus-project/",
    },
    {
      title: "Dorm Coffee",
      description: "Coffee Shop App",
      imgUrl: projImg6,
      demoLink: "https://dorm-coffee.vercel.app/",
    },
  ];

  const projectsTab2 = [
    {
      imgUrl: projImg1,
    },
    {
      imgUrl: projImg2,
    },
    {
      imgUrl: projImg3,
    },
  ];

  const projectsTab3 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      detailLink: "https://example.com/business-startup1",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      detailLink: "https://example.com/business-startup2",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      detailLink: "https://example.com/business-startup3",
    },
  ];

  const renderProjects = (
    projects,
    useGlassCard = false,
    isDetail = false,
    showCertificate = false
  ) => {
    return projects.map((project, index) => (
      <Col key={index} sm={6} md={4}>
        <div className={useGlassCard ? "glass-card proj-imgbx" : "proj-imgbx"}>
          <img src={project.imgUrl} alt={project.title || "Project Image"} />
          {showCertificate && (
            <div
              className="view-certificate"
              onClick={() => setModalImage(project.imgUrl)}
            >
              View Certificate
            </div>
          )}
          <div className="project-info">
            {project.title && <h4>{project.title}</h4>}
            {project.description && <span>{project.description}</span>}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-demo-btn">
                  View Demo <ArrowRightCircle size={12} />
                </button>
              </a>
            )}
            {isDetail && project.detailLink && (
              <a
                href={project.detailLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-detail-btn">
                  View Detail <ArrowRightCircle size={12} />
                </button>
              </a>
            )}
          </div>
        </div>
      </Col>
    ));
  };

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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <h2>Portofolio</h2>
              <p>
                This portfolio showcases a variety of projects, from web
                development to educational platforms, highlighting my dedication
                to creating innovative and impactful solutions for users
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                  id="slideInUp"
                  className={"animate__animated animate__slideInUp"}
                >
                  <Tab.Pane eventKey="first">
                    <Row>{renderProjects(projectsTab1, true)}</Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {renderProjects(projectsTab2, false, false, true)}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>{renderProjects(projectsTab3, true, true)}</Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certificate" />
            <button className="close-btn" onClick={() => setModalImage(null)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
