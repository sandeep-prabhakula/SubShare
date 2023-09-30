import React from 'react'
import { Link } from 'react-router-dom';

function CarousalCard(props) {
    return (
        <div className="col-6 col-md-4 col-lg-3 m-3 p-2 border border-primary border-2 rounded-start rounded-end" key={props.subscription.id}>
            <div className='d-flex justify-content-center align-items-center'>
            {/* // TODO:- add the navigation  */}
                <Link className='text-decoration-none' to={`/`}>
                    <h2 >{props.subscription.subscriptionName}</h2>
                </Link>


            </div>
            <hr />
            <div className='d-flex flex-column justify-content-center align-items-center'>

                <h3 className='fw-bolder'>{props.subscription.price}</h3>
                <small className='fw-bold'>Participate for -85%</small>
            </div>
        </div>
    )
}

export default CarousalCard