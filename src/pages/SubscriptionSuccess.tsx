import { Col, Container, Row, Card, Badge, Alert, Button, Form } from "react-bootstrap";
import { ArrowRight, Bank2, Clipboard, Facebook, PeopleFill, PlusCircleFill, SendFill, Tv, Twitter, Whatsapp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function SubscriptionSuccess(): JSX.Element {
    return <Container fluid className="pb-5">
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
                                    <ArrowRight size={16} />
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Row className="m-0 p-0 p-3 align-items-center" style={{ border: "1px solid black" }}>
                            <Col className="m-0 p-0" lg="auto">
                                <SendFill size={30} />
                            </Col>
                            <Col className="m-0 p-0 ms-3">
                                <span className="fw-bold">You can also invite friends on your subscription</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="m-0 p-0 p-3 align-items-center" style={{ border: "1px solid black" }}>
                            <Col className="m-0 p-0" lg="auto">
                                <PeopleFill size={30} />
                            </Col>
                            <Col className="m-0 p-0 ms-3">
                                <span className="fw-bold">Co-subscribers pay to join your subscription</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="m-0 p-0 p-3 align-items-center" style={{ border: "1px solid black" }}>
                            <Col className="m-0 p-0" lg="auto">
                                <Bank2 size={30} />
                            </Col>
                            <Col className="m-0 p-0 ms-3">
                                <span className="fw-bold">I receive my transfer at the beginning of the month</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="m-0 p-0 mt-3 p-3 pb-5" style={{ border: "1px solid black" }}>
                    <Col lg={11} className="m-auto m-0 p-0">
                        <Row className="m-0 p-0 p-5 align-items-center">
                            <Col lg="auto">
                                <Card>
                                    <Card.Body>
                                        <Row className="m-0 p-0 justify-content-center">
                                            <Col lg="auto">
                                                <Tv size={30} />
                                            </Col>
                                        </Row>
                                        <Card.Title className="mt-3">Disney + Hotstar Premium</Card.Title>
                                        <hr />
                                        <span className="fw-bold text-center d-block">&#8377; 20 /month</span>
                                        <Row className="justify-content-center mt-3">
                                            <Col lg="auto">
                                                <Badge pill bg="primary">
                                                    <Row className="m-0 p-0 align-items-center">
                                                        <Col lg="auto" className="m-0 p-0">
                                                            <PeopleFill />
                                                        </Col>
                                                        <Col lg="auto" className="m-0 p-0 ms-2">
                                                            <span className="fw-bold">3 slots</span>
                                                        </Col>
                                                    </Row>
                                                </Badge>
                                            </Col>
                                        </Row>
                                        <span className="d-block text-center mt-3">Created 02/10/2023</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Row>
                                    <span className="small">Send the link to your friends to start collecting money. Share widely to make sure you will have participants.</span>
                                </Row>
                                <Row className="mt-5 align-items-center">
                                    <Col lg="auto">
                                        <span className="fw-bold small">Copy Link</span>
                                    </Col>
                                    <Col className="m-0 p-0">
                                        <Alert variant="info" className="p-1">
                                            <Row className="m-0 p-0 align-items-center">
                                                <Col>
                                                    <span>https://www.subshare.com/join/a400b0d</span>
                                                </Col>
                                                <Col lg="auto">
                                                    <Button>
                                                        <Row className="m-0 p-0">
                                                            <Col lg="auto" className="m-0 p-0">
                                                                <Clipboard />
                                                            </Col>
                                                            <Col className="m-0 p-0 ms-2">
                                                                <span>Copy</span>
                                                            </Col>
                                                        </Row>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Alert>
                                    </Col>
                                </Row>
                                <Row className="mt-3 bg-dark justify-content-end align-items-center p-2">
                                    <Col>
                                        <span className="fw-bold text-white">Share on social networks:</span>
                                    </Col>
                                    <Col lg="auto">
                                        <Row className="align-items-center m-0 p-0">
                                            <Col lg="auto" className="m-0 p-0 me-2">
                                                <Button>
                                                    <Facebook />
                                                </Button>
                                            </Col>
                                            <Col lg="auto" className="m-0 p-0 me-2">
                                                <Button>
                                                    <Whatsapp />
                                                </Button>
                                            </Col>
                                            <Col lg="auto" className="m-0 p-0 me-2">
                                                <Button>
                                                    <Twitter />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <span className="d-block fw-bold">Send invitation to your friends</span>
                                <span>Or fill their email and we will send them the invite</span>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" rows={5} value="Hello, I've just created a group to share my subscription to Disney + Hotstar Premium on Subshare, The subscription sharing platform. I'm happy to give you the oppertunity to join it! Follow this link and get instant access: https://www.subshare.com/join/a400b0d. Together we can enjoy it for just a small amount of price. Feel free to share it as well! ravi" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Ex. John Doe"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group>
                                    <Form.Control type="email" placeholder="john.doe@example.com"></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col lg="auto">
                                <Button>
                                    <Row className="m-0 p-0 align-items-center">
                                        <Col className="m-0 p-0" lg="auto">
                                            <PlusCircleFill/>
                                        </Col>
                                        <Col className="m-0 p-0 ms-2">Add another</Col>
                                    </Row>
                                </Button>
                            </Col>
                        </Row>
                        <Row className="mt-5 justify-content-center">
                            <Col lg="auto">
                                <Button>Send invitation</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}