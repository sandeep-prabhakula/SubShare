import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight, Bank2, PeopleFill, SendFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function SubscriptionSuccess(): JSX.Element {
    return <Container fluid>
        <Row className="mt-5">
            <Col lg="9" className="m-auto">
                <Row>
                    <span className="h2 text-center">"Disney + Hotstar Premium" is successfully created</span>
                </Row>
                <Row className="mt-3">
                    <span className="h2 text-center text-primary">Invite your friends now</span>
                </Row>
                <Row className="justify-content-end mt-5">
                    <Col lg="auto">
                        <Link to="/my-account/shared-subscriptions" className="text-decoration-none">
                            <Row className="m-0 p-0 align-items-center">
                                <Col lg="auto" className="m-0 p-0">Skip</Col>
                                <Col lg="auto" className="m-0 p-0 ms-1">
                                    <ArrowRight size={16}/>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Row className="m-0 p-0 p-3 align-items-center" style={{ border: "1px solid black" }}>
                            <Col className="m-0 p-0" lg="auto">
                                <SendFill size={30}/>
                            </Col>
                            <Col className="m-0 p-0 ms-3">
                                <span className="fw-bold">You can also invite friends on your subscription</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="m-0 p-0 p-3 align-items-center" style={{ border: "1px solid black" }}>
                            <Col className="m-0 p-0" lg="auto">
                                <PeopleFill size={30}/>
                            </Col>
                            <Col className="m-0 p-0 ms-3">
                                <span className="fw-bold">Co-subscribers pay to join your subscription</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="m-0 p-0 p-3 align-items-center" style={{ border: "1px solid black" }}>
                            <Col className="m-0 p-0" lg="auto">
                                <Bank2 size={30}/>
                            </Col>
                            <Col className="m-0 p-0 ms-3">
                                <span className="fw-bold">I receive my transfer at the beginning of the month</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}