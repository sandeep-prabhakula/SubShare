import { Col, Container, Form, Row } from "react-bootstrap";
import SubscriptionCard from "../components/SubscriptionGroup";

export default function SubscriptionGroups(): JSX.Element {
    return <Container fluid className="p-5">
        <Row className="justify-content-center">
            <Col lg={3}>
                <Row className="p-3 mt-3" style={{ border: "1px solid black" }}>
                            <Form>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                    label="Immediate Access"
                                />
                                <span className="d-block small">You'll recieve your login details immediately.</span>
                                <Form.Check // prettier-ignore
                                className="mt-5"
                                    type="switch"
                                    id="custom-switch"
                                    label="Verified Identity"
                                />
                                <span className="d-block small">This user has provided additional information to ensure their identity.</span>
                            </Form>
                </Row>
            </Col>
            <Col lg={6} className="ms-5">
                <SubscriptionCard />
                <SubscriptionCard />
                <SubscriptionCard />
            </Col>
        </Row>
    </Container>
}