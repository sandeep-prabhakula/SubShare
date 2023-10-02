import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CreditCard, Lock, Paypal, Shield } from 'react-bootstrap-icons'
function PaymentSummaryCard() {
    return (
        <>
            <Col>
                <Col>
                    <h2 className='fs-3 fw-bold'>Summary</h2>
                </Col>
                <Col className='d-flex justify-content-between'>
                    <span className='text-grey fw-light'>1 x </span>
                    <span className='fw-medium'>
                        Youtube Premium
                    </span>
                    <span className='fw-medium'>
                        ₹ 40.00/ month
                    </span>
                </Col>
                <Col className='d-flex justify-content-between'>
                    <span className='text-grey fw-light'>
                        Pro-rata adjustment
                    </span>
                    <span>
                        ₹ -2.00
                    </span>
                </Col>
                <Col className='d-flex justify-content-between'>
                    <span className='fw-bold'>
                        Total due today
                    </span>
                    <span className='fw-bold'>
                        ₹ 38.00
                    </span>
                </Col>
                <Col>
                    <span>
                        All fees included
                    </span>
                </Col>
                <Col>
                    <Col lg="auto" className="m-0 p-2">
                        <Lock size={20} className='m-2' />
                        <CreditCard size={20} className='m-2' />
                        <Paypal size={20} className='m-2' />
                    </Col>
                </Col>

                <Col className='border border-dark border-2 rounded-start rounded-end m-3 p-2'>
                    <span className='fw-bold'>Billing schedule</span>
                    <Col>
                        <span>
                            Renewal on: day of each month. No commitment, all fees included
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-around align-items-center'>
                        <span className='text-primary'>Nowadays</span>
                        <Row>
                            <span className='fw-bold'>₹ 38.00</span>
                            <span>initial month pro-rata</span>
                        </Row>
                    </Col>

                    <Col className='d-flex justify-content-around align-items-center'>
                        <span className='text-primary'>Following months</span>
                        <Row>
                            <span className='fw-bold'>₹ 40.00</span>
                            <span>Monthly recurring payment</span>
                        </Row>
                    </Col>
                </Col>

                <Col>
                    <Shield size={20} />

                    <span className='fw-bold m-0 p-2'>
                        Buyer protection fees
                    </span>
                </Col>

                <Col>
                    <span>
                        For any subscription made, we apply a fee covering our buyer protection.
                    </span>
                </Col>
            </Col>
        </>
    )
}

export default PaymentSummaryCard