import { Container, Row, Col, Alert, Button, Form } from "react-bootstrap";

export default function Management(): JSX.Element {
    return <Container fluid className="border p-2">
        <Row className="m-0 p-0">
            <Alert variant="warning">
                <span className="d-block fw-bold">End subscription</span>
                <p className="mt-3 small">Are you sure to stop the subscription? By doing this, all your subscribers will be lost, and their current month's payments will be refunded. The refund will be total if you provide them the service for less than a month, or partial if the subscription is older. <span className="fw-bold">This cannot be undone.</span></p>
            </Alert>
        </Row>
        <Row className="m-0 p-0">
            <span className="small">To permanently delete the subscription please type "Delete" in the field below.</span>
        </Row>
        <Row className="m-0 p-0 mt-3 align-items-center">
            <Col>
            <Form.Control type="text" placeholder="Delete" />
            </Col>
            <Col lg="auto">
                <Button>Cancel Subscription</Button>
            </Col>
        </Row>
    </Container>
}