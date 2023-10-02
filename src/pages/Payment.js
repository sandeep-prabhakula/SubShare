import React from 'react'
import PaymentMethodCard from '../components/PaymentMethodCard'
import { Col, Row } from 'react-bootstrap'
import PaymentSummaryCard from '../components/PaymentSummaryCard'

function Payment() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center m-5">
                <h1 className='fw-bold'>Join the subscription</h1>
            </div>
            <div className='container d-flex justify-content-around align-items-center'>

                <div className="container d-flex justify-content-center align-items-center m-5 border border-dark border-2 rounded-start rounded-end p-3">
                    <PaymentMethodCard />
                </div>

                <div className="container d-flex justify-content-center align-items-center m-5 border border-dark border-2 rounded-start rounded-end p-3">
                    <PaymentSummaryCard/>
                </div>
            </div>
        </>
    )
}

export default Payment