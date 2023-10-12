import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { ChatDotsFill, PlusCircle, Trash } from "react-bootstrap-icons";

export default function Subscribers(): JSX.Element {
    return <Container fluid className="border p-2">
        <Row className="align-items-center">
            <Col lg="auto">
                <Image src="https://picsum.photos/200" style={{ width: 50, height: 50 }} roundedCircle/>
            </Col>
            <Col>
                <span className="fw-bold">Mindauguas Jakubauskas</span>
            </Col>
            <Col lg="auto">
                <span className="small">Joined 08/10/2023</span>
            </Col>
            <Col lg="auto">
                <Button>
                    <Row className="m-0 p-0 align-items-center">
                        <Col className="m-0 p-0">
                            <ChatDotsFill/>
                        </Col>
                        <Col className="m-0 p-0 ms-2">Contact</Col>
                    </Row>
                </Button>
            </Col>
        </Row>
        <Row className="align-items-center mt-3">
            <Col lg="auto">
                <Image src="https://picsum.photos/200" style={{ width: 50, height: 50 }} roundedCircle/>
            </Col>
            <Col>
                <span className="fw-bold">Anja Vogel</span>
            </Col>
            <Col lg="auto">
                <span className="small">Joined 08/10/2023</span>
            </Col>
            <Col lg="auto">
                <Button>
                    <Row className="m-0 p-0 align-items-center">
                        <Col className="m-0 p-0">
                            <ChatDotsFill/>
                        </Col>
                        <Col className="m-0 p-0 ms-2">Contact</Col>
                    </Row>
                </Button>
            </Col>
        </Row>
        <Row className="align-items-center mt-3">
            <Col lg="auto">
                <Image src="https://picsum.photos/200" style={{ width: 50, height: 50 }} roundedCircle/>
            </Col>
            <Col>
                <span className="fw-bold">Available</span>
            </Col>
            <Col lg="auto">
                <Button>
                    <Row className="m-0 p-0 align-items-center">
                        <Col lg="auto" className="m-0 p-0">
                            <Trash/>
                        </Col>
                        <Col className="m-0 p-0 ms-2">
                            <span>Remove available slot</span>
                        </Col>
                    </Row>
                </Button>
            </Col>
        </Row>
        <Row className="align-items-center mt-3">
            <Col lg="auto">
                <Image src="https://picsum.photos/200" style={{ width: 50, height: 50 }} roundedCircle/>
            </Col>
            <Col>
                <span className="fw-bold">Available</span>
            </Col>
            <Col lg="auto">
                <Button>
                    <Row className="m-0 p-0 align-items-center">
                        <Col lg="auto" className="m-0 p-0">
                            <Trash/>
                        </Col>
                        <Col className="m-0 p-0 ms-2">
                            <span>Remove available slot</span>
                        </Col>
                    </Row>
                </Button>
            </Col>
        </Row>
        <Row className="align-items-center mt-3">
            <Col lg="auto">
                <Image src="https://picsum.photos/200" style={{ width: 50, height: 50 }} roundedCircle/>
            </Col>
            <Col>
                <span className="fw-bold">Available</span>
            </Col>
            <Col lg="auto">
                <Button>
                    <Row className="m-0 p-0 align-items-center">
                        <Col lg="auto" className="m-0 p-0">
                            <Trash/>
                        </Col>
                        <Col className="m-0 p-0 ms-2">
                            <span>Remove available slot</span>
                        </Col>
                    </Row>
                </Button>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col lg="auto">
                <Button variant="link" className="text-decoration-none">
                    <Row className="m-0 p-0 align-items-center">
                        <Col lg="auto" className="m-0 p-0">
                            <PlusCircle/>
                        </Col>
                        <Col lg="auto">
                            <span className="fw-bold">Add Slot</span>
                        </Col>
                    </Row>
                </Button>
            </Col>
        </Row>
    </Container>
}