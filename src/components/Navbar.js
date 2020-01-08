import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  Button
} from "reactstrap";

const Home = ({ isLogin }) => {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">Unsircle</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            {isLogin ? (
              <Button
                color="danger"
                onClick={() => (window.location.href = "/")}>
                Logout
              </Button>
            ) : (
              <NavbarText>Hi! Welcome</NavbarText>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
