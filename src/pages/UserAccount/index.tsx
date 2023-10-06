import { Container, Row, Col, Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

export default function UserAccount(): JSX.Element {

    const navigate = useNavigate();

    return <Container className="pb-5">
        <Row className="mt-5 justify-content-center">
            <Col lg="3">
                <span className="h1">Hi, Ravi</span>
            </Col>
            <Col lg="6"></Col>
        </Row>
        <Row className="mt-5 justify-content-center">
            <Col lg="3">
                <Button variant="outline-primary" className="w-100 mb-3 text-start" onClick={() => navigate("shared-subscriptions")}>Shared subscriptions</Button>
                <Button variant="outline-primary" className="w-100 mb-3 text-start" onClick={() => navigate("joined-subscriptions")}>Joined subscriptions</Button>
                <Button variant="outline-primary" className="w-100 mb-3 text-start" onClick={() => navigate("chat")}>Chat</Button>
                <Button variant="outline-primary" className="w-100 mb-3 text-start" onClick={() => navigate("wallet")}>Wallet</Button>
                <Button variant="outline-primary" className="w-100 mb-3 text-start" onClick={() => navigate("identity-and-verification")}>Identity and Verification</Button>
                <Button variant="outline-primary" className="w-100 mb-3 text-start" onClick={() => navigate("payment-cards")}>Payment Cards</Button>
                <Button variant="outline-primary" className="w-100 mb-3 text-start" onClick={() => navigate("connected-bank-account")}>Connected Bank Account</Button>
                <Button variant="outline-primary" className="w-100 mb-3 text-start" onClick={() => navigate("change-password")}>Change Password</Button>
            </Col>
            <Col lg="6">
                <Outlet/>
            </Col>
        </Row>
    </Container>
}