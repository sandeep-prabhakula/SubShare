import { Button, Container, Row, Col } from "react-bootstrap";

export default function JoniedSubscriptions(): JSX.Element {
    return <Container>
        <Row style={{ border: "1px solid black" }} className="px-2 py-4">
            <span className="d-block small">You have not joined an active subscription. Create your own and share with your friends.</span>
        </Row>
        <Row className="mt-5 justify-content-center">
            <Col lg="auto">
                <Button>Join a Subscription</Button>
            </Col>
        </Row>
    </Container>
}