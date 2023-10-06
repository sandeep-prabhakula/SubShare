import { Col, Row } from "react-bootstrap";

export default function ChatCard(): JSX.Element {
    return <Row className="p-3 mb-3" style={{ border: "1px solid black" }}>
        <Col>
            <Row>
                <Col lg="auto">
                    <img src="https://picsum.photos/100" alt="profile" style={{ width: 60, height: 60, borderRadius: 50 }} />
                </Col>
                <Col>
                    <span className="h4">Youtube Premium</span>
                    <span className="d-block small text-body-secondary">0 Subscribers</span>
                </Col>
            </Row>
        </Col>
    </Row>
}