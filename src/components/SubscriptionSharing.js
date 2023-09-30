import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function SubscriptionSharing() {
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center mt-5 mb-5">

                <h4 className='display-6 fw-light'>A solution at the service of users</h4>
                <h3 className='display-3 fw-bolder'>Subscription sharing</h3>
                <div className="container d-flex flex-row justify-content-center align-items-center mt-5 gap-5">
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

                    <Card style={{ width: '18rem' }} className='d-flex flex-row justify-content-center align-items-center'>
                        <Card.Body>
                            <Card.Title>Subscribe</Card.Title>
                            <Card.Text>
                                I want to subscribe for a fraction of the price by joining a cost sharing group.
                            </Card.Text>
                            {/* TODO : Add navigation */}
                            <Link to={`/`} className='btn btn-primary rounded-pill'>
                                Join
                            </Link>
                        </Card.Body>
                    </Card>

                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 text-justify">
                        <small className='display-6'>Sharesub is the best solution to share the cost of your subscriptions and monthly expenses.</small>

                        <small className='display-6'>No more chasing your friends for refunds, or hesitating to take out a Netflix or Spotify subscription.</small>

                        <small className='display-6'>Get started and share it to save money. We'll take care of the rest.</small>
                    </div>

                </div>
            </div >

        </>
    )
}

export default SubscriptionSharing