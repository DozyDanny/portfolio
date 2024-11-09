import "../../index.css";
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ConnectFourImage from "../../assets/connectfour.png"
import MazeImage from "../../assets/maze.png"
import { Row, Col, Button, Card, CardTitle, CardBody, CardImg } from "react-bootstrap";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function Home(props)
{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>
        <Container style={{height: `${windowDimensions.height - 94}px`, alignContent: 'center'}}>
            <h1 className="boujee-text">Daniel Hungness</h1>
            <h3>I'm a software developer. I enjoy programming and creating fun, interactive software.</h3>
        </Container>
        <Container style={{paddingTop: 50}}>

        </Container>
        <h1>Highlights</h1>
        <h3>In my free time, I'm also really passionate about electronic music production, I'm an avid reader of fantasy books, and I enjoy being active and playing disc golf.</h3>
        <Container style={{paddingTop: 100}}>
            <h1 className="boujee-text" style={{paddingTop: 40}}>Projects</h1>
            <Row>
                <Col sm={12} md={6} style={{ marginBottom: '1em' }}>
                    <Card style={{ height: '100%', backgroundColor: "#0d1322"}}>
                        <CardImg
                            alt="ConnectFour"
                            src={ConnectFourImage}
                            style={{ height: '15rem', objectFit: 'cover' }}
                            top
                        />
                        <CardBody>
                            <h2>Connect Four</h2>
                            <subtitle>Java</subtitle>
                            <h4 style={{marginBottom: '0.7em'}}>Developed a recreation of the tabletop game Connect Four with Java FX</h4>
                            <Button>Source</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12} md={6} style={{ marginBottom: '1em' }}>
                    <Card style={{ height: '100%', backgroundColor: "#0d1322"}}>
                        <CardImg
                            alt="Maze Solver"
                            src={MazeImage}
                            style={{ height: '15rem', objectFit: 'cover' }}
                            top
                        />
                        <CardBody>
                            <h2>Maze Solver</h2>
                            <subtitle>C++, .NET</subtitle>
                            <h4 style={{marginBottom: '0.7em'}}>Wrote a program that takes text input and draws a maze, which can be solved by clicking an open spot</h4>
                            <Button>Source</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container style={{paddingTop: 100}}>
            <h1 style={{paddingTop: 40, paddingBottom: 30}} className="boujee-text">Experience</h1>
            <Button>View Resume as PDF</Button>
            <h1 style={{paddingTop: 20, paddingBottom: 38}}>Work</h1>
            <h2 style={{paddingBottom: 17}}>TruStage</h2>
            <Row>
                <Col>
                    <h3>Application Analyst I</h3>
                </Col>
                <Col>
                    <div style={{ textAlign: 'right' }}>
                        <subtitle>August 2024 - Present</subtitle>
                    </div>
                </Col>
            </Row>
            <subtitle>C#, .NET</subtitle>
            <ul>
                <li>Continuing on the Life Products team</li>
            </ul>
            <Row>
                <Col>
                    <h3>IT Intern</h3>
                </Col>
                <Col>
                    <div style={{ textAlign: 'right' }}>
                        <subtitle>June 2024 - August 2024</subtitle>
                    </div>
                </Col>
            </Row>
            <subtitle>C#, .NET</subtitle>
            <ul>
                <li>Worked with the Life Products team</li>
                <li>Added unit test stage to a service release pipeline to improve reliability in production environments</li>
                <li>Acted as an IT Feature Lead and created 4 PBIs</li>
                <li>Provided bug fixes to crucial business applications</li>
            </ul>
            <Row>
                <Col>
                    <h3>IT Intern</h3>
                </Col>
                <Col>
                    <div style={{ textAlign: 'right' }}>
                        <subtitle>June 2023 - August 2023</subtitle>
                    </div>
                </Col>
            </Row>
            <subtitle>SQL, Agile Software Development</subtitle>
            <ul>
                <li>Worked with the Marketing Operations team</li>
                <li>Lead multiple daily Sprints, gained experience with the Agile software development</li>
                <li>Learned SQL through writing scripts to clean up and clear up data</li>
                <li>Learned Azure Pipelines by configuring pipelines with YAML</li>
            </ul>
            <h1 style={{paddingTop: 50, paddingBottom: 30}}>Education</h1>
            <h2>University of Wisconsin-Madison</h2>
            <h3>B.S. in Computer Science</h3>
            <subtitle>2020-2024</subtitle>


            
            <h1 style={{paddingBottom: 300}}></h1>
        </Container>
        
    </>
}