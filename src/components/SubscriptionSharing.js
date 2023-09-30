import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function SubscriptionSharing() {
    return (
        <Container fluid className="mt-5 mb-5 vh-100">
            <h4 className='display-6 fw-light text-center'>A solution at the service of users</h4>
            <h3 className='display-3 fw-bolder text-center'>Subscription sharing</h3>
            <Row className="w-75 m-auto mt-5">
                <Col lg="auto">
                    <Row className="h-100 align-items-center">
                        <Col>
                            <Card style={{ width: '18rem' }} className='d-flex flex-row justify-content-center align-items-center'>
                                <Card.Body>
                                    <Card.Title>Share</Card.Title>
                                    <Card.Text>
                                        I have a subscription and would like to offer available slots to save money.
                                    </Card.Text>
                                    {/* TODO : Add navigation */}
                                    <Link to={`/`} className='btn btn-primary rounded-pill'>
                                        Share
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className='d-flex flex-row justify-content-center align-items-center'>
                                <Card.Body>
                                    <Card.Title>Subscribe</Card.Title>
                                    <Card.Text>
                                        I want to subscribe for a fraction of the price by joining a cost sharing group.
                                    </Card.Text>
                                    {/* TODO : Add navigation */}
                                    <Link to={`/subscriptions`} className='btn btn-primary rounded-pill'>
                                        Join
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <span className="d-block mt-5">
                        <span className="fw-bold">Sharesub</span> is the best solution to <span className="fw-bold">share the cost of your subscriptions</span> and monthly expenses.</span>
                    <span className="d-block mt-5">No more chasing your friends for refunds, or hesitating to take out a Netflix or Spotify subscription.</span>
                    <span className="d-block mt-5">Get started and share it to save money. We'll take care of the rest.</span>
                </Col>
            </Row>
        </Container>
    )
}

export default SubscriptionSharing