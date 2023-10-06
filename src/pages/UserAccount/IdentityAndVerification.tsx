import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function IdentityAndVerfication(): JSX.Element {
    return <Container>
        <Row>
            <span className="h3">Identity</span>
        </Row>
        <Row className="mt-3">
            <Col lg="auto">
                <Form.Check // prettier-ignore
                    type="radio"
                    label="Individual"
                />
            </Col>
            <Col lg="auto">
                <Form.Check // prettier-ignore
                    type="radio"
                    label="Company"
                />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <Form.Label htmlFor="first-name">First name</Form.Label>
                <Form.Control
                    type="text"
                    id="first-name"
                    placeholder="ex. Jhon"
                />
            </Col>
            <Col>
                <Form.Label htmlFor="last-name">Last name</Form.Label>
                <Form.Control
                    type="text"
                    id="last-name"
                    placeholder="ex. Doe"
                />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
            <Form.Label htmlFor="birth-date">Birth date</Form.Label>
                <Form.Control
                    type="text"
                    id="birth-date"
                    placeholder="ex. Doe"
                />
            </Col>
        </Row>
        <Row className="mt-3">
            <span className="h3">Contact Information</span>
        </Row>
        <Row className="mt-3">
            <Col>
            <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                    type="email"
                    id="email"
                    placeholder="mail@example.com"
                />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
            <Form.Label htmlFor="phone">Phone</Form.Label>
                <Form.Control
                    type="text"
                    id="phone"
                    placeholder="+91 xxxx xxx xxx"
                />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
            <Form.Label>Address</Form.Label>
                <Form.Control
                    type="text"
                    id="address-line-1"
                    placeholder="Address line 1"
                />
                <Form.Control
                    type="text"
                    id="address-line-2"
                    placeholder="Address line 2"
                    className="mt-3"
                />
                <Form.Control
                    type="text"
                    id="city"
                    placeholder="City"
                    className="mt-3"
                />
                <Form.Control
                    type="text"
                    id="postcode"
                    placeholder="Postcode"
                    className="mt-3"
                />
                <Form.Control
                    type="text"
                    id="state"
                    placeholder="State"
                    className="mt-3"
                />
                <Form.Control
                    type="text"
                    id="country"
                    placeholder="Country"
                    className="mt-3"
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