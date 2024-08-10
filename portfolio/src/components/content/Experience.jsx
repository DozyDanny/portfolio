import { Row, Col, Button, Card, CardTitle, CardBody, CardImg } from "react-bootstrap";

export default function Experience(props)
{
    return <>
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
    </>
}