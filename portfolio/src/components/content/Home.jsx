import "../../index.css";
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

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
        <Container style={{height: `${windowDimensions.height - 94}px`, alignContent: 'center', }}>
            <h1 className="boujee-text">Daniel Hungness</h1>
            <h3>I'm a software developer. I enjoy programming and creating fun, interactive software.</h3>
        </Container>
        <Container style={{paddingTop: 50}}>

        </Container>
        <h1>Highlights</h1>
        <h3>In my free time, I'm also really passionate about electronic music production, I'm an avid reader of fantasy books, and I enjoy being active and playing disc golf.</h3>
    </>
}