import "./styles.scss";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-end">
        <Navbar.Brand href="">
          <span style={{ marginRight: "30px" }}>Copyright Lore Petriella</span>

          <a href="https://github.com/LorePetriella">
            <VscGithubAlt size={30} color="white" />
          </a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export { Footer };
