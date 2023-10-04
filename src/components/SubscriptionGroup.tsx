import { Button, Col, Row } from "react-bootstrap";
import { CheckCircle, Person, PersonFill, ShareFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function SubscriptionCard(): JSX.Element {
    return <Row className="p-3 mt-3" style={{ border: "1px solid black" }}>
        <Col>
            <Row className="mb-3">
                <Col lg="auto">
                    <img src="https://picsum.photos/100" alt="profile" style={{ width: 60, height: 60, borderRadius: 50 }} />
                </Col>
                <Col>
                    <span className="h4">Youtube Premium</span>
                    <span className="small text-body-secondary ms-2">Created on 25/09/2023</span>
                    <span className="d-block small">Shared by Janak.G</span>
                    <span className="d-block small text-body-secondary">Registered since SEP 2023</span>
                </Col>
            </Row>
            <Row className="mt-1">
                <Col lg="auto" className="m-0 p-0">
                    <CheckCircle />
                </Col>
                <Col lg="auto" className="m-0 p-0 ms-3">
                    <span className="small">Verified account</span>
                </Col>
            </Row>
            <Row className="mt-1">
                <Col lg="auto" className="m-0 p-0">
                    <ShareFill />
                </Col>
                <Col lg="auto" className="m-0 p-0 ms-3">
                    <span className="small">5+ Active shares</span>
                </Col>
            </Row>
            <Row className="mt-3 p-0 align-items-center">
                <Col lg="auto" className="m-0 p-0">
                    <PersonFill size={20} />
                    <Person size={20} />
                    <Person size={20} />
                    <Person size={20} />
                    <Person size={20} />
                </Col>
                <Col className="m-0 p-0 ms-3">
                    <span className="small fw-bold">4 Remaning slots</span>
                </Col>
            </Row>
        </Col>
        <Col lg="auto" className="align-self-center">
            <Row className="align-items-center">
                <span className="h1">&#8377; 40.00</span>
            </Row>
            <Row>
                <span className="small">/ month</span>
            </Row>
            <Row className="mt-3">
                {/* Added route to detailed subscription */}
                <Link to={`/youtube`}>
                    <Button variant="primary">Subscribe</Button>
                </Link>
            </Row>
        </Col>
    </Row>
}