import ConnectFourImage from "../../assets/connectfour.png"
import MazeImage from "../../assets/maze.png"
import { Row, Col, Button, Card, CardTitle, CardBody, CardImg } from "react-bootstrap";

export default function Projects(props)
{
    return <>
        <h1 className="boujee-text">Projects</h1>
        <h3 style={{marginBottom: '0.8em'}}>Games, desktop apps, and other projects I've made over the years. Primarily focused on fun stuff you can play around with!</h3>
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
        
    </>
}