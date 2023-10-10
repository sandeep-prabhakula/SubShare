import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { KeyFill } from "react-bootstrap-icons";

export default function LoginDetails(): JSX.Element {
    return <Container fluid className="p-3 border">
        <Row className="m-0 p-0">
            <span className="fw-bold">Contextual help</span>
        </Row>
        <Row className="mt-2 m-0 p-0">
            <span className="small">You need your co-subscriber's email address to share Youtube with them. You'll then need to add them to your "Google Family". <a href="#" className="text-decoration-none">Click here for more explanation.</a></span>
        </Row>
        <Row className="m-0 p-0 mt-3">
            <span className="fw-bold">You can update below additional information:</span>
        </Row>
        <Row className="m-0 p-0 mt-2">
            <Col>
                <Form.Check type="radio" name="message" label="Same info for all subscribers"/>
            </Col>
            <Col>
                <Form.Check type="radio" name="message" label="One message per subscriber"/>
            </Col>
        </Row>
        <Row className="m-0 p-0 mt-2">
            <Col>
            <Form.Control as="textarea" rows={5} value="Hi there, thanks for joining in. In order to enjoy our common subscription, please create your account on the service and use this code XMJKTF. Do not forget that you must use our common address for billing information."/>
            </Col>
        </Row>
        <Row className="m-0 p-0 mt-2">
            <Col lg="auto">
                <KeyFill size={30}/>
            </Col>
            <Col>
                <span className="small">Your login and this message are saved encrypted on a secure server. These elements will only be visible to you, your subscribers and, if necessary, Subshare customer service. If you need to provide a password, make sure it's unique and not used on any of your other accounts.</span>
            </Col>
        </Row>
        <Row className="m-0 p-0 mt-3">
            <Col lg="auto">
                <Button>Save Changes</Button>
            </Col>
        </Row>
    </Container>
}