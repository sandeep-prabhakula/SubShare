import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import ChatCard from "../../components/ChatCard";
import { useState } from "react";
import SubscriberChatCard from "../../components/SubscriberChatCard";
import { ArrowLeft, Send } from "react-bootstrap-icons";

type SubscriberChat = {
    name: string;
    verified: boolean;
}

type SubscriptionChat = {
    name: string;
    subscribersCount: number;
    subscribers: SubscriberChat[];
}

const subscriptionChats: SubscriptionChat[] = [
    {
        name: "Youtube Premium",
        subscribersCount: 2,
        subscribers: [
            {
                name: "Mindauas J",
                verified: true
            },
            {
                name: "Anja V",
                verified: false
            }
        ]
    },
    {
        name: "Disney + Hotstar Premium",
        subscribersCount: 0,
        subscribers: []
    }
];

export default function Chat(): JSX.Element {

    const [subscribersChat, setSubscribersChat] = useState<SubscriberChat[]>([]);
    const [showChat, setShowChat] = useState<{
        groupName?: string;
        subscriberName?: string;
    }>({
        groupName: undefined,
        subscriberName: undefined
    });

    return <Container>
        {!(showChat.groupName && showChat.subscriberName) ? <Row>
            <Col>
                {
                    subscriptionChats.map((group, groupKey) => <ChatCard
                        onClick={() => {
                            setSubscribersChat(group.subscribers);
                            setShowChat({
                                ...showChat,
                                groupName: group.name
                            })
                        }}
                        key={groupKey}
                        name={group.name}
                        subscribers={group.subscribersCount}
                    />)
                }
            </Col>
            <Col className="ms-2">
                {
                    subscribersChat.map((subscriber, subscriberKey) => <SubscriberChatCard
                        onClick={() => {
                            setShowChat({
                                ...showChat,
                                subscriberName: subscriber.name
                            })
                        }}
                        key={subscriberKey}
                        name={subscriber.name}
                        verified={subscriber.verified}
                    />)
                }
            </Col>
        </Row> : <>
        <Row className="mb-2 m-0 p-0">
            <Col lg="auto" className="m-0 p-0">
                <Button variant="link" className="text-decoration-none" onClick={() => setShowChat({ ...showChat, subscriberName: undefined})}>
                    <Row className="m-0 p-0 align-items-center">
                        <Col className="m-0 p-0" lg="auto">
                            <ArrowLeft/>
                        </Col>
                        <Col className="m-0 p-0 ms-2">
                            <span>Back</span>
                        </Col>
                    </Row>
                </Button>
            </Col>
        </Row>
            <Row>
                <Col>
                    <ChatCard
                        name={showChat.groupName}
                        subscribers={2}
                    />
                </Col>
                <Col className="ms-2">
                    <SubscriberChatCard
                        name={showChat.subscriberName}
                        verified
                    />
                </Col>
            </Row>
            <Row style={{ height: "500px" }} className="border">
                <Col className="h-100">
                    <Row style={{ height: "calc(100% - 60px)", overflowY: "scroll"}}>
                        <Col>
                            {/* Alert row - start */}
                            <Row className="py-5">
                                <Col lg={10} className="m-auto">
                                    <Alert variant="warning">
                                        <span className="fw-bold d-block text-center">Subshare informs you</span>
                                        <span className="mt-3 small d-block">This is the beginning of your conversation with {showChat.subscriberName}. For your safety:</span>
                                        <ul className="small">
                                            <li>Do not share a password that you use on another account than the one you share</li>
                                            <li>Do not accept payments outside of Subshare (Paypal, wire transfers,...) as you will no longer be covered by the buyer protection program.</li>
                                            <li>Only exchange on the chat to allow the customer service to intervence. Do not accept off-platform exchanges for your own safety.</li>
                                        </ul>
                                    </Alert>
                                </Col>
                            </Row>
                            {/* Aler row -end */}

                            {/* sender messages - start */}
                            <Row className="m-0 p-0 mt-3">
                                <Col lg={8} className="m-0 p-0">
                                    <Row className="m-0 p-0">
                                        <span className="small">08/10/2023 8:46</span>
                                    </Row>
                                    <Row className="m-0 p-0">
                                        <span className="bg-primary p-1 text-white small">Hello, please send an invitation to jamcis84@gmail.com Thank you,  mindo</span>
                                    </Row>
                                </Col>
                            </Row>
                            {/* sender messages - end */}

                            {/* receiver messages - start */}
                            <Row className="m-0 p-0 justify-content-end mt-3">
                                <Col lg={8} className="m-0 p-0">
                                    <Row className="m-0 p-0">
                                        <span className="small">08/10/2023 8:46</span>
                                    </Row>
                                    <Row className="m-0 p-0">
                                        <span className="bg-success p-1 text-white small">Hello, please send an invitation to jamcis84@gmail.com Thank you,  mindo</span>
                                    </Row>
                                </Col>
                            </Row>
                            {/* receiver messages - end */}
                        </Col>
                    </Row>
                    <Row className="align-items-center" style={{ height: "60px" }}>
                        <Col>
                            <Form.Group>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                        </Col>
                        <Col lg="auto">
                            <Button>
                                <Row className="m-0 p-0 align-items-center">
                                    <Col lg="auto" className="m-0 p-0">
                                        <Send />
                                    </Col>
                                    <Col lg="auto" className="m-0 p-0 ms-2">
                                        <span>Send</span>
                                    </Col>
                                </Row>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>}
    </Container>
}