// components/ContactUs.jsx
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact Us</h2>
      <p>Email: support@foodapp.com</p>
      <p>Phone: +1 (555) 123-4567</p>
      <p>Address: 123 Food Street, Flavor Town, USA</p>
    </ContactSection>
  );
};

export default ContactUs;

const ContactSection = styled.section`
  padding: 40px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-top: 40px;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin: 6px 0;
  }
`;
