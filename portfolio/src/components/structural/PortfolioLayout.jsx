import React from "react";
import { Nav, Navbar, Tooltip } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import '../../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import homeIcon from "../../assets/216242_home_icon.svg"
import projectsIcon from "../../assets/216184_edit_icon.svg"
import workIcon from "../../assets/216422_list_th_icon.svg"
import aboutMeIcon from "../../assets/216498_user_icon.svg"

function PortfolioLayout(props) {

    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 675) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div className="root-container">
            <Container fluid className="full-height" style={{backgroundColor: "#111725"}}>
                <Navbar bg="#111725" sticky="top" variant="dark" style={{ backgroundColor: "#111725", borderBottom: "2px solid #20242e" }}>
                    <Nav className="mx-auto"> {/* Use mx-auto to center align items */}
                        {isMobile ?
                        <>
                            <Nav.Link as={Link} to="/"> <img src={homeIcon} alt="Home Icon" style={{ filter: 'invert(1)', height: 50}} /> </Nav.Link>
                            <Nav.Link as={Link} to="about-me"> <img src={aboutMeIcon} alt="About Me Icon" style={{ filter: 'invert(1)', height: 50}} /> </Nav.Link>
                            <Nav.Link as={Link} to="projects"> <img src={projectsIcon} alt="Projects Icon" style={{ filter: 'invert(1)', height: 50}} /> </Nav.Link>
                            <Nav.Link as={Link} to="experience"> <img src={workIcon} alt="Experience Icon" style={{ filter: 'invert(1)', height: 50}} /> </Nav.Link>
                        </> :
                        <>
                            <Nav.Link as={Link} to="/"><h2 className="headerButton">Home</h2></Nav.Link>
                            <Nav.Link as={Link} to="about-me"><h2 className="headerButton">About Me</h2></Nav.Link>
                            <Nav.Link as={Link} to="projects"><h2 className="headerButton">Projects</h2></Nav.Link>
                            <Nav.Link as={Link} to="experience"><h2 className="headerButton">Experience</h2></Nav.Link>
                        </>}
                        
                    </Nav>
                </Navbar>
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