import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ChangePassword(): JSX.Element {
    return <Container>
        <Row>
            <span className="h3">Security</span>
        </Row>
        <Row className="mt-3">
            <Col>
                <Form.Label htmlFor="current-password">Current password</Form.Label>
                <Form.Control
                    type="password"
                    id="current-password"
                    placeholder="Current password"
                />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <Form.Label htmlFor="new-password">New password</Form.Label>
                <Form.Control
                    type="password"
                    id="new-password"
                    placeholder="Atleast 8 characters"
                />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <Form.Label htmlFor="confirm-new-password">Confirm new password</Form.Label>
                <Form.Control
                    type="password"
                    id="confirm-new-password"
                    placeholder="Atleast 8 characters"
                />
            </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
            <Col lg="auto">
                <Button>Save Changes</Button>
            </Col>
        </Row>
    </Container>
}