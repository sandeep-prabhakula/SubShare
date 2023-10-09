import { Button, Col, Row } from "react-bootstrap";

type ChatCardProps = {
    name: string;
    verified: boolean;
    onClick?: () => void;
}

export default function SubscriberChatCard(props: ChatCardProps): JSX.Element {
    return <Button className="m-0 p-0 w-100 bg-transparent p-1 mb-3" onClick={props.onClick}>
        <Row className="py-1 m-0 p-0">
        <Col className="m-0 p-0">
            <Row className="m-0 p-0 align-items-center">
                <Col lg="auto" className="m-0 p-0">
                    <img src="https://picsum.photos/100" alt="profile" style={{ width: 60, height: 60, borderRadius: 50 }} />
                </Col>
                <Col className="m-0 p-0 ms-2">
                    <span className="fw-bold d-block text-black text-start">{props.name}</span>
                </Col>
            </Row>
        </Col>
    </Row>
    </Button>
}