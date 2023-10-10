import { Button, Col, Row } from "react-bootstrap";
import { ChatDotsFill, Person, PersonFill } from "react-bootstrap-icons";

type SharedSubscriptionCardProps = {
    onViewDetails?: () => void;
    onViewChat?: () => void;
}

export default function SharedSubscriptionCard(props: SharedSubscriptionCardProps): JSX.Element {
    return <Row className="p-3 mb-3" style={{ border: "1px solid black" }}>
        <Col>
            <Row className="mb-3">
                <Col lg="auto">
                    <img src="https://picsum.photos/100" alt="profile" style={{ width: 60, height: 60, borderRadius: 50 }} />
                </Col>
                <Col>
                    <span className="h4">Youtube Premium</span>
                    <span className="d-block small text-body-secondary">Created on 25/09/2023</span>
                    <span className="d-block small">Public</span>
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
                <Col className="m-0 p-0 text-end">
                    <span className="h5 d-inline text-primary">&#8377; 40.00</span>
                    <span className="d-inline"> /month</span>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="m-0 p-0 text-end">
                    <span className="small">Each subscriber pays you</span>
                    <span className="fw-bold"> &#8377; 5.00 /month</span>
                </Col>
            </Row>
            <Row className="mt-3 justify-content-end">
                {/* Added route to detailed subscription */}
                <Col lg="auto">
                    <Button variant="primary" onClick={props.onViewDetails}>View detials</Button>
                </Col>
                <Col lg="auto">
                    <Button variant="primary" onClick={props.onViewChat}>
                        <Row className="align-items-center px-3">
                        <Col lg="auto" className="m-0 p-0">
                        <ChatDotsFill />
                        </Col>
                       <Col lg="auto" className="m-0 p-0 ms-2">
                       <span>Chat</span>
                       </Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
        </Col>
    </Row>
}