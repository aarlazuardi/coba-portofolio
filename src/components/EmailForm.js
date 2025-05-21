import React, { useEffect, useRef } from "react";
import $ from "jquery";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const EmailForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // jQuery code for form handling
    if (formRef.current) {
      const $form = $(formRef.current);

      $form.on("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        // Basic validation
        if (!name || !email || !message) {
          showFormMessage("danger", "Harap isi semua kolom!");
          return;
        }

        if (!isValidEmail(email)) {
          showFormMessage("danger", "Email tidak valid!");
          return;
        }

        // Simulate email sending (would connect to your backend in production)
        $("#submit-btn").prop("disabled", true).html("Mengirim...");

        // Simulate API call with timeout
        setTimeout(() => {
          showFormMessage(
            "success",
            "Pesan berhasil dikirim! Kami akan menghubungi Anda segera."
          );
          $form.trigger("reset");
          $("#submit-btn").prop("disabled", false).html("Kirim");
        }, 1500);
      });
    }
  }, []);

  // Helper function to validate email format
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  // Helper function to show message
  const showFormMessage = (type, message) => {
    const $messageDiv = $(".form-message");
    $messageDiv
      .removeClass("text-danger text-success")
      .addClass(`text-${type}`);
    $messageDiv.html(message);
    $messageDiv.fadeIn().delay(3000).fadeOut();
  };

  return (
    <section className="email-form" id="email">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Hubungi Kami" />
          </Col>
          <Col size={12} md={6}>
            <div className="email-form-box">
              <h2>Kirim Pesan Email</h2>
              <form ref={formRef}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" id="name" placeholder="Nama" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" id="email" placeholder="Email" />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Pesan"
                    ></textarea>
                    <button type="submit" id="submit-btn">
                      Kirim
                    </button>
                  </Col>
                  <Col size={12} className="px-1">
                    <div
                      className="form-message"
                      style={{ display: "none" }}
                    ></div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EmailForm;
