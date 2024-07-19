import React from "react";
import { Nav, Navbar, Tooltip } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import '../../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PortfolioLayout(props) {

    return (
        <Container>
            <Row className="justify-content-md-center" style={{ margin: "3rem" }}>
                <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/"><headerButton>Home</headerButton></Nav.Link>
                        <Nav.Link as={Link} to="about-me"><headerButton>About Me</headerButton></Nav.Link>
                        <Nav.Link as={Link} to="projects"><headerButton>Projects</headerButton></Nav.Link>
                        <Nav.Link as={Link} to="experience"><headerButton>Experience</headerButton></Nav.Link>
                    </Nav>
                </Navbar>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <h1>test</h1>
                </Col>
                <Col md="auto">
                    {/* Content goes here */}
                    <Outlet />
                </Col>
                <Col xs lg="2">
                    <h1>test</h1>
                </Col>
            </Row>
            
        </Container>
        
    );
}

export default PortfolioLayout;