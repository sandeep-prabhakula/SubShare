import { Button, Container, Row, Col, Badge } from "react-bootstrap";
import SharedSubscriptionCard from "../../components/SharedSubscriptionCard";
import { useState } from "react";
import { ArrowLeft, ChatDotsFill, Clipboard } from "react-bootstrap-icons";

export default function SharedSubscriptions(): JSX.Element {
    const [showDetails, setShowDetails] = useState(false);
    return <Container>
        {!showDetails ? <>
            <SharedSubscriptionCard onViewDetails={() => setShowDetails(true)} />
            <SharedSubscriptionCard onViewDetails={() => setShowDetails(true)} />
            <SharedSubscriptionCard onViewDetails={() => setShowDetails(true)} />
            <SharedSubscriptionCard onViewDetails={() => setShowDetails(true)} />
            <SharedSubscriptionCard onViewDetails={() => setShowDetails(true)} />
        </> : <>
            <Row className="m-0 p-0">
                <Col lg="auto" className="m-0 p-0">
                    <Button variant="link" className="text-decoration-none" onClick={() => setShowDetails(false)}>
                        <Row className="m-0 p-0 align-items-center">
                            <Col lg="auto" className="m-0 p-0">
                                <ArrowLeft />
                            </Col>
                            <Col lg="auto" className="m-0 p-0 ms-2">
                                <span>Back</span>
                            </Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
            <Row className="m-0 p-0 mt-3 border px-2 py-3 align-items-center justify-content-between">
                <Col className="m-0 p-0" lg="auto">
                    <Row className="m-0 p-0">
                        <span className="h2">Youtube Premium</span>
                    </Row>
                    <Row className="m-0 p-0 ms-3">
                        <Col lg="auto" className="m-0 p-0">
                            <Badge bg="secondary">Public</Badge>
                        </Col>
                        <Col lg="auto" className="m-0 p-0 ms-2">
                            <Badge bg="success">Created on 10/09/2023</Badge>
                        </Col>
                    </Row>
                </Col>
                <Col className="m-0 p-0" lg="auto">
                    <Row className="m-0 p-0" lg="auto">
                        <Button variant="primary" className="m-0 p-0 py-1 px-2 m-auto">
                            <Row className="align-items-center m-0 p-0">
                                <Col lg="auto" className="m-0 p-0">
                                    <ChatDotsFill />
                                </Col>
                                <Col lg="auto" className="m-0 p-0 ms-2">
                                    <span>Chat</span>
                                </Col>
                            </Row>
                        </Button>
                    </Row>
                    <Row className="m-0 p-0 mt-2">
                        <Button variant="link" className="m-0 p-0 py-1 px-2 text-decoration-none">
                            <Row className="align-items-center m-0 p-0">
                                <Col lg="auto" className="m-0 p-0">
                                    <Clipboard/>
                                </Col>
                                <Col lg="auto" className="m-0 p-0 ms-2">
                                    <span>Copy the invitation</span>
                                </Col>
                            </Row>
                        </Button>
                    </Row>
                </Col>
            </Row>
            <Row className="m-0 p-0 mt-3 justify-content-between align-items-stretch">
                <Col className="m-0 p-0 bg-white border">
                    <Row className="m-0 p-0">
                        <span className="fw-bold d-block text-center">Revenue Mensuel</span>
                        <span className="fw-bold d-block text-center h3 mt-2">&#8377; 19.00</span>
                        <span className="d-block text-center">/month</span>
                    </Row>
                </Col>
                <Col className="m-0 p-0 bg-white border mx-3">
                    <Row className="m-0 p-0">
                        <span className="fw-bold d-block text-center">Revenue per subscriber</span>
                        <span className="fw-bold d-block text-center h3 mt-2">&#8377; 4.00</span>
                        <span className="d-block text-center">/month</span>
                    </Row>
                </Col>
                <Col className="m-0 p-0 bg-white border">
                    <Row className="m-0 p-0">
                        <span className="fw-bold d-block text-center">Number of Subscribers</span>
                        <div className="mt-2 text-center">
                        <span className="fw-bold text-primary h3">2</span>
                        <span className="fw-bold h3">/5</span>
                        </div>
                        <span className="d-block text-center">subscribers</span>
                    </Row>
                </Col>
            </Row>
            <Row className="m-0 p-0">
                
            </Row>
        </>}
    </Container>
}