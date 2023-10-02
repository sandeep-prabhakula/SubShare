import React from 'react'
import { Col, Row } from 'react-bootstrap'

function BppCard() {
    return (
        <>
            <Col>
                <Row className='m-3'>
                    <span className='fs-3 fw-bold'>Buyer Protection Program</span>
                    <span className='mt-3 text-wrap'>All your purchases are protected: we guarantee the functioning of the subscriptions, or refund you free of charge. After payment, you get access to the shared subscription. If you have a problem, our team will check and refund you free of charge if necessary.</span>
                    <span className='mt-3 fs-4 '>Read more </span>
                </Row>
            </Col>
        </>
    )
}

export default BppCard