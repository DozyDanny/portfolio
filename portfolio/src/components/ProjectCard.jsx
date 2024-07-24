import Col from 'react-bootstrap/Col';
import { Card, CardTitle, CardBody, CardImg } from "react-bootstrap";

const ProjectCard = (props) => {
    return (
        <Col xs={12} sm={12} md={6} lg={6} xl={4} style={{ marginBottom: '1em' }} id={props.id}>
            <Card style={{ height: '100%' }}>
                <CardImg
                    alt="Cat"
                    src={props.image}
                    style={{ height: '20rem', objectFit: 'cover' }}
                    top
                />
                <CardBody>
                    <CardTitle tag="h2">{props.name}</CardTitle>
                    <h3>{props.description}</h3>
                    <Button>Source</Button>
                </CardBody>
            </Card>
        </Col>
    );
}

export default ProjectCard;