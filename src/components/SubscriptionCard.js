import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SubscriptionCard(props) {
    return (
        <div className="col-6 col-md-4 col-lg-3 m-3 p-2 border border-primary border-2 rounded-start rounded-end" key={props.subscription.id}>
            <div className='d-flex justify-content-center align-items-center'>
                <Link className='text-decoration-none' to={`/brand/${props.subscription.subscriptionName}`}>
                    <h2 >{props.subscription.subscriptionName}</h2>
                </Link>
            </div>
            <hr />
            <Row>
                <p className='fw-bold'>{props.subscription.price}<span className='small text-body-tertiary'>/ month</span></p>
            </Row>
        </div>
    )
}

export default SubscriptionCard