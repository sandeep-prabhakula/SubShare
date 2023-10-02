import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { CheckCircle, Coin, CreditCard, Lock, Paypal, Person, PersonFill, ShareFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
function DetailedSubscriptionCard() {
    return (
        <>
            <Row>


                <Col>
                    <Row>
                        <Col lg="auto">
                            <img src="https://picsum.photos/100" alt="profile" style={{ width: 60, height: 60, borderRadius: 50 }} />
                        </Col>
                        <Col>
                            <span className="h4">Youtube Premium</span>
                            <span className="small text-body-secondary ms-2">Created on 25/09/2023</span>
                            <span className="d-block small">Shared by Janak.G</span>
                            <span className="d-block small text-body-secondary">Registered since SEP 2023</span>
                            <Row className="mt-1">
                                <Col lg="auto" className="m-0 p-0">
                                    <CheckCircle />
                                </Col>
                                <Col lg="auto" className="m-0 p-0 ms-3">
                                    <span className="small">Verified account</span>
                                </Col>
                            </Row>
                            <Row className="mt-1">
                                <Col lg="auto" className="m-0 p-0">
                                    <ShareFill />
                                </Col>
                                <Col lg="auto" className="m-0 p-0 ms-3">
                                    <span className="small">5+ Active shares</span>
                                </Col>
                            </Row>

                            <Col>
                                <span className="d-block small text-justify">Youtube Premium Unlimited Family is a subscription that offers access to a catalog of 90 million songs. Sharing allows up to 6 users and therefore a very reasonable price per person. Please note, all group members must reside in the same country.</span>
                            </Col>

                            <Row className="mt-3 p-0 align-items-center">
                                <Col lg="auto" className="m-0 p-0">
                                    <PersonFill size={20} />
                                    <Person size={20} />
                                    <Person size={20} />
                                    <Person size={20} />
                                    <Person size={20} />
                                </Col>
                                <Col className="m-0 p-0 ms-3">
                                    <span className="small fw-bold">4 Remaning slots</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="auto" className="align-self-center">
                            <Row>
                                <span className="h1">&#8377; 40.00</span>
                            </Row>
                            <Row className="mt-3">
                                {/* Added route to payment */}
                                <Link to={`/payment`}>
                                    <Button variant="primary">Subscribe</Button>
                                </Link>
                            </Row>
                            <Col className='m-2'>
                                <Coin size={20} className='m-2'/>
                                <span className='fw-bold'>
                                    Immediate access
                                </span>
                            </Col>
                            <Col lg="auto" className="m-0 p-2">
                                <Lock size={20} className='m-2' />
                                <CreditCard size={20} className='m-2' />
                                <Paypal size={20} className='m-2' />
                            </Col>
                        </Col>

                    </Row>

                </Col>
            </Row>
        </>
    )
}

export default DetailedSubscriptionCard