
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo href="#"><img src="./Los.svg" alt="logo"  /></Logo>
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #343434;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  color: black;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;

   img {
    width: 200px; /* Adjust the size of the logo image */
    height: auto;
    margin-left: 30px;
  }
`;

const NavLinks = styled.div`
  a {

    margin-left: 35px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    color: #ccc;

    &:hover {
      color: #ff4343;
    }
  }
`;
