import { Button, Col, Row } from "react-bootstrap";

type ChatCardProps = {
    name: string;
    subscribers: number;
    onClick?: () => void;
}

export default function ChatCard(props: ChatCardProps): JSX.Element {
    return <Button className="m-0 p-0 bg-transparent w-100 mb-3 p-1" onClick={props.onClick}>
        <Row className="py-1 m-0 p-0">
        <Col className="m-0 p-0">
            <Row className="m-0 p-0 align-items-center">
                <Col lg="auto" className="m-0 p-0">
                    <img src="https://picsum.photos/100" alt="profile" style={{ width: 60, height: 60, borderRadius: 50 }} />
                </Col>
                <Col className="m-0 p-0 ms-2">
                    <span className="d-block fw-bold text-start text-black">{props.name}</span>
                    <span className="d-block small text-start text-body-secondary">{props.subscribers} Subscribers</span>
                </Col>
            </Row>
        </Col>
    </Row>
    </Button>
}