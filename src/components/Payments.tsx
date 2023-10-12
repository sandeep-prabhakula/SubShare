import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

export default function Payments(): JSX.Element {
    return <Container fluid className="border p-2">
        <Row className="align-items-center justify-content-between">
            <Col lg="auto">
                <span className="fw-bold">Payment History</span>
            </Col>
            <Col lg="auto">
                <Row className="m-0 p-0 border align-items-center">
                    <Col lg="auto">
                        <Button variant="link" className="text-decoration-none">
                            <CaretLeftFill/>
                        </Button>
                    </Col>
                    <Col>
                        <span className="fw-bold">October 2023</span>
                    </Col>
                    <Col lg="auto">
                    <Button variant="link" className="text-decoration-none">
                            <CaretRightFill/>
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Col lg="auto">
                <span className="fw-bold text-primary">TOTAL: &#8377; 20.00</span>
            </Col>
        </Row>
        <Row className="mt-3 align-items-center">
            <Col lg="auto">
                <Image src="https://picsum.photos/200" style={{ width: 50, height: 50 }} roundedCircle/>
            </Col>
            <Col lg={1}>
                <span className="fw-bold">Mindaugus Jakubauskas</span>
            </Col>
            <Col>
                <span className="fw-bold d-block text-center text-primary">Paid for the current month</span>
                <span className="d-block text-center">10/08/2023</span>
            </Col>
            <Col lg="auto">
                <span className="fw-bold">&#8377; 3.1</span>
            </Col>
        </Row>
        <Row className="mt-3 align-items-center">
            <Col lg="auto">
                <Image src="https://picsum.photos/200" style={{ width: 50, height: 50 }} roundedCircle/>
            </Col>
            <Col lg={1}>
                <span className="fw-bold">Anja Vogel</span>
            </Col>
            <Col>
                <span className="fw-bold d-block text-primary text-center">Paid for the current month</span>
                <span className="d-block text-center">10/08/2023</span>
            </Col>
            <Col lg="auto">
                <span className="fw-bold">&#8377; 3.1</span>
            </Col>
        </Row>
    </Container>
}