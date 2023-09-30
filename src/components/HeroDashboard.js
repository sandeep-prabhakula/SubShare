import { Col, Container, Row } from 'react-bootstrap'
import CarousalCard from './CarousalCard'

function HeroDashboard() {
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
        <Container fluid className="mt-5 vh-100">
            <h1 className='text-center display-1 fw-medium mb-5'>Services available <br /> for co-subscription</h1>
            <Row className="m-0 p-0">
                <Col lg={10} className="m-auto m-0 p-0">
                    <Row className="justify-content-center">
                        {subscriptions.map((item, index) => {
                            return <CarousalCard subscription={item} />
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroDashboard