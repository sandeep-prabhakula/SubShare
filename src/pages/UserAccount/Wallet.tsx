import { Col, Container, Row, Alert } from "react-bootstrap";
import { CashCoin, ChevronRight, Clock, WalletFill } from "react-bootstrap-icons";

export default function Wallet(): JSX.Element {
    return <Container style={{ border: "1px solid black" }} className="p-3">
        <Row className="m-0 p-0">
            <Col className="m-0 p-0">
                <Row className="m-0 p-0 align-items-center">
                    <Col lg="auto" className="m-0 p-0">
                        <div style={{ width: 60, height: 60 }} className="d-flex align-items-center justify-content-center rounded-circle bg-warning">
                            <Clock className="text-white" size={20} />
                        </div>
                    </Col>
                    <Col className="m-0 p-0 ms-2">
                        <span className="h5 text-start">&#8377; 0</span>
                        <span className="small d-block text-start">Available soon</span>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row className="m-0 p-0 align-items-center">
                    <Col lg="auto" className="m-0 p-0">
                        <div style={{ width: 60, height: 60 }} className="d-flex align-items-center justify-content-center rounded-circle bg-success">
                            <WalletFill className="text-white" size={20}/>
                        </div>
                    </Col>
                    <Col className="m-0 p-0 ms-2">
                        <span className="h5 text-start">&#8377; 0</span>
                        <span className="small d-block text-start">Available in your wallet</span>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row className="m-0 p-0 align-items-center">
                    <Col lg="auto" className="m-0 p-0">
                        <div style={{ width: 60, height: 60 }} className="d-flex align-items-center justify-content-center rounded-circle bg-primary">
                            <CashCoin className="text-white" size={20}/>
                        </div>
                    </Col>
                    <Col className="m-0 p-0 ms-2">
                        <span className="h5 text-start">&#8377; 0</span>
                        <span className="small d-block text-start">Total earnings</span>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="mt-3">
            <span className="small">The available money is automatically transfered to your account on the 9th of each month, as soon as you exceed the minimum &#8377; 100. Transfers may take 3 to 5 days to arrive in your account depending on your bank.</span>
        </Row>
        <Row className="m-0 p-0 mt-3">
            <Alert variant="warning">
                <Row className="m-0 p-0 align-items-center">
                    <Col className="m-0 p-0">
                    <span className="fw-bold small">Verify your identity to send the money to your bank account. You must also add your bank account number.</span>
                    </Col>
                    <Col className="m-0 p-0 ms-3" lg="auto">
                        <ChevronRight size={20}/>
                    </Col>
                </Row>
            </Alert>
        </Row>
    </Container>
}