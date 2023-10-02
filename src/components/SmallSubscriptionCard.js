import React from 'react'
import { ListGroup } from 'react-bootstrap'

function SmallSubscriptionCard(props) {
    return (
        <div className="col-6 col-md-4 col-lg-3 m-3 p-2 border border-primary border-2 rounded-start rounded-end" key={props.subscription.id}>
            <div className='d-flex justify-content-center align-items-center'>

                <h2 >{props.subscription.subscriptionName}</h2>


            </div>
            <hr />
            <div className='d-flex flex-row justify-content-center align-items-center'>

                <p className='fw-bold'>{props.subscription.price}</p>
                <small className='text-body-tertiary'>/ month</small>
            </div>
        </div>
    )
}

export default SmallSubscriptionCard