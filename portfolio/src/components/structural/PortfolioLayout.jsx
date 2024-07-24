import React from "react";
import { Nav, Navbar, Tooltip } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import '../../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PortfolioLayout(props) {

    return (
        <div className="root-container">
            <Container fluid className="full-height" style={{backgroundColor: "#111725"}}>
                <Row>
                    <Navbar bg="#111725" sticky="top" variant="dark" expand="sm" style={{ borderBottom: "2px solid #20242e" }}>
                        <Nav className="mx-auto"> {/* Use mx-auto to center align items */}
                            <Nav.Link as={Link} to="/"><p className="headerButton">Home</p></Nav.Link>
                            <Nav.Link as={Link} to="about-me"><p className="headerButton">About Me</p></Nav.Link>
                            <Nav.Link as={Link} to="projects"><p className="headerButton">Projects</p></Nav.Link>
                            <Nav.Link as={Link} to="experience"><p className="headerButton">Experience</p></Nav.Link>
                        </Nav>
                    </Navbar>
                </Row>
                <Row className="justify-content-center"> {/* Center align content */}
                    <Col sm={12} md={10} lg={8} xl={6}>
                        <Outlet /> {/* Render nested routes here */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PortfolioLayout;