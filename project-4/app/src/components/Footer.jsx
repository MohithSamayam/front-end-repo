// components/Footer.jsx
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="#terms">Terms</a>
        <a href="#privacy">Privacy</a>
        <a href="#help">Help</a>
      </NavLinks>
      <CopyText>&copy; {new Date().getFullYear()} FoodApp. All rights reserved.</CopyText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #1e1e1f;
  color: #aaa;
  text-align: center;
  padding: 30px 16px;
  margin-top: 40px;
`;

const NavLinks = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: #ff4343;
    }
  }
`;

const CopyText = styled.p`
  font-size: 13px;
  margin: 0;
`;
