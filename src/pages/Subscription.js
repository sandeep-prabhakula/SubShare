import { Col, Container, Row } from 'react-bootstrap'
import SubscriptionCard from '../components/SubscriptionCard'

function Subscription() {
    const subscriptions = [
        {
            "id": 1,
            "subscriptionName": 'Disney + Hotstar',
            "price": "₹499"
        },
        {
            "id": 2,
            "subscriptionName": 'Youtube Premium',
            "price": "₹299"
        },
        {
            "id": 3,
            "subscriptionName": 'Spotify',
            "price": "₹199"
        },
        {
            "id": 4,
            "subscriptionName": 'Amazon Prime',
            "price": "₹699"
        },
        {
            "id": 5,
            "subscriptionName": 'Zee 5',
            "price": "₹399"
        },
    ]
    return (
        <Container fluid className="vh-100 p-5">
            <h1 className='display-1 fw-medium text-center'>Subscriptions Available</h1>
            <Row className='m-0 p-0 mt-5'>
                <Col lg={10} className='m-auto m-0 p-0'>
                    <Row className='justify-content-center'>
                        {subscriptions.map((item, index) => {
                            return <SubscriptionCard subscription={item} />
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Subscription