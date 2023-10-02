import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Bank } from 'react-bootstrap-icons'

function PaymentMethodCard() {
    return (
        <>
            <Row>
                <Col>
                    <h2 className='fs-3 fw-bold'>Payment method</h2>
                </Col>
                <Row>
                    <span>
                        You must provide a new card to subscribe. You will pay ₹ 40.00 today on a pro-rata basis for the current month, then you will pay ₹ 40.00 each following month. Your card will be charged only if the subscription is working correctly.
                    </span>
                </Row>
                <Row className='mt-3 p-3'>
                    <Form.Check
                        type='radio'
                        label={`Paying with a new card`}
                        id={``}
                        className='fs-6 fw-bold'
                    />
                </Row>
                <Col className='mt-3'>
                    <Bank size={20} />
                    <span className='m-2'>
                        Your bank may ask you to authorize payment to complete your purchase. Your card numbers will never be shared with others.
                    </span>
                </Col>
                <Row className='mt-3'>
                    <Form.Check
                        type='checkbox'
                        label={`I provide reliable information and identity. I agree to sharesub Terms and conditions and stripe Terms of service.`}
                        id={``}
                        className='fs-6'
                    />
                </Row>
                <Col className='mt-3'>
                    <Button className='btn-primary rounded-pill fw-bold p-2'>
                        Next
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default PaymentMethodCard