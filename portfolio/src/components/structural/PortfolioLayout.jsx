import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function PortfolioLayout(props) {

    return (
        <Container className="d-flex flex-column">
            <Navbar bg="white" variant="white">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="about-me">About Me</Nav.Link>
                    <Nav.Link as={Link} to="projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="experience">Experience</Nav.Link>
                </Nav>
            </Navbar>
            <div className="mt-3">
                <Outlet />
            </div>
        </Container>
        
    );
}

export default PortfolioLayout;