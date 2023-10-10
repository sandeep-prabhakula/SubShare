import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap'
import { ArrowLeft, ArrowRight, Bank2, ChatDotsFill, Clipboard2CheckFill, CreditCard2BackFill, LockFill, PeopleFill, PersonCheckFill, PersonFill, PieChartFill, ShareFill, TagFill, Trash3Fill, WalletFill } from 'react-bootstrap-icons'

function LoginDetails() {
    
    return (
        <>
            <Col className='container d-flex justify-content-center align-items-center m-5'>

                {/* Start of 1st column */}
                <Col>
                    <div className='container'>
                        <h1 className='fw-bold'>Hi, User</h1>
                    </div>

                    {/* left navigation menu starts */}
                    <Col className='m-2 p-2 border border-dark rounded-end rounded-start'>
                        <ShareFill size={20} className='m-2' />
        
                        <span>
                            Shared Subscription
                        </span>
                    </Col>
                    <Col className='m-2 p-2 border border-dark rounded-end rounded-start'>
                        <PieChartFill size={20} className='m-2' />
                        <span>
                            Joined Subscription
                        </span>
                    </Col>
                    <Col className='m-2 p-2 border border-dark rounded-end rounded-start'>
                        <ChatDotsFill size={20} className='m-2' />
                        <span>
                            Chats
                        </span>
                    </Col>

                    <Col className='m-2 p-2 border border-dark rounded-end rounded-start'>
                        <WalletFill size={20} className='m-2' />
                        <span>
                            Wallet
                        </span>
                    </Col>
                    <Col className='m-2 p-2 border border-dark rounded-end rounded-start'>
                        <PersonFill size={20} className='m-2' />
                        <span>
                            Identity and Verification
                        </span>
                    </Col>
                    <Col className='m-2 p-2 border border-dark rounded-end rounded-start'>
                        <CreditCard2BackFill size={20} className='m-2' />
                        <span>
                            PaymentCards
                        </span>
                    </Col>
                    <Col className='m-2 p-2 border border-dark rounded-end rounded-start'>
                        <Bank2 size={20} className='m-2' />
                        <span>
                            Connected Bank Account
                        </span>
                    </Col>
                    {/* left navigation menu end */}

                </Col> {/*end of first column*/}

                <Col>

                    <Col className='border border-dark rounded-start rounded-end p-2'>
                        <Col className='container d-flex justify-content-between align-items-center '>
                            <h2 className='fw-bolder'>Youtube Premium</h2>
                            <Button className='btn-primary rounded-pill'>
                                <ChatDotsFill size={20} className='m-2' />
                                <span>
                                    Chat
                                </span>
                            </Button>
                        </Col>


                        <Col className='container d-flex justify-content-between align-items-center'>
                            <Col>
                                <span className='bg-dark text-light m-2 p-2'>
                                    public
                                </span>
                                <span className='bg-success text-light p-2 m-2'>
                                    Created on 2023/09/07
                                </span>
                            </Col>
                            <Col>
                                <Clipboard2CheckFill size={20} className='m-2' />
                                <span>Copy the invitation</span>
                            </Col>
                        </Col>


                    </Col> {/* end of 1st card in 2nd column  */}

                    <Row className='m-2'>
                        <Col className='border border-dark rounded-start rounded-end p-2 m-2'>

                            <div className="container d-flex flex-column justify-content-center align-items-center">
                                <TagFill size={30} />
                                <span className='fw-bold'>Revenu mensuel</span>
                                <span className='display-6 fw-bolder text-success'>
                                    ₹40.00
                                </span>
                                <span className='fw-bold'>
                                    \month
                                </span>
                            </div>

                        </Col>
                        <Col className='border border-dark rounded-start rounded-end p-2 m-2'>
                            <div className="container d-flex flex-column justify-content-center align-items-center">
                                <PieChartFill size={30} />
                                <span className='fw-bold'>Revenue per subscriber</span>
                                <span className='display-6 fw-bolder text-success'>
                                    ₹10.00
                                </span>
                                <span className='fw-bold'>
                                    \month
                                </span>
                            </div>

                        </Col>
                        <Col className='border border-dark rounded-start rounded-end p-2 m-2'>
                            <div className="container d-flex flex-column justify-content-center align-items-center">
                                <PeopleFill size={30} />
                                <span className='fw-bold'>Number of subscribers</span>
                                <span className='display-6 fw-bolder text-success'>
                                    2/5
                                </span>
                                <span className='fw-bold'>
                                    \month
                                </span>
                            </div>

                        </Col>
                    </Row> {/* end of 2nd item in 2nd column */}

                    <Tabs defaultActiveKey={`tab1`} className='m-2'>
                        <Tab eventKey={`tab1`} title="Login Details">
                            <div className="container d-flex flex-column justify-content-center align-items-start m-2">
                                <span className='fw-bold'>Contextual help</span>
                                <span>
                                    You need your co-subscriber's email address to share Youtube with them. You will then need to add them to your "Google Family".
                                    <span className='text-primary'>Click here for more information</span>
                                </span>
                            </div>
                            <div className="container d-flex flex-column justify-content-center align-items-start m-2 border border-dark rounded-start rounded-end p-2">
                                <Col>
                                    <LockFill size={30} />
                                    <span className='text-success fw-medium'> End-to-end encryption</span>
                                </Col>
                                <span className='fw-bold m-2'>You can update below additional information: </span>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Form.Check
                                        type='radio'
                                        label={`Same info for all subscribes`}
                                        id={`same_message`}
                                        className='fs-6 m-2'
                                    />
                                    <Form.Check
                                        type='radio'
                                        label={`One message per subscriber`}
                                        id={`different_message`}
                                        className='fs-6 m-2'
                                    />
                                </div>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Hi there, thanks for joining in. In order to enjoy our common subscription, please create your account on the service and use this code XMJKFT. Do not forget that you must use our common address for billing information.'></textarea>

                                <div className="d-flex justify-content-center align-items-start">
                                    <LockFill size={80} />
                                    <span className='m-2 text-justify'>
                                        your login and this message are saved encrypted on a secure server. These elements will only be you,your subscribers and, if necessary, Sharesub customer service. If you need to provide a password,
                                        make sure it's unique and not used on any of your other accounts.
                                    </span>
                                </div>
                                <Button className='btn-success text-light fw-bolder rounded-pill'>Save Changes</Button>
                            </div>

                        </Tab> {/* end of tab-1 */}

                        <Tab eventKey={`tab2`} title="Subscribers">
                            <div className="container d-flex flex-column justify-content-center align-items-start m-2">
                                <div className="container d-flex flex-row justify-content-between align-items-center">
                                    <PersonCheckFill size={30} />
                                    <span className='fw-bold'>John Doe</span>
                                    <span>joined 2023/10/08 </span>
                                    <span>
                                        <ChatDotsFill size={30} />
                                        <span className='fw-bold text-success m-2'>Contact</span>
                                    </span>
                                </div>
                                <hr />
                                <div className="container d-flex flex-row justify-content-between align-items-center">
                                    <PersonCheckFill size={30} />
                                    <span className='fw-bold'>John Greesham</span>
                                    <span>joined 2023/10/08 </span>
                                    <span>
                                        <ChatDotsFill size={30} />
                                        <span className='fw-bold text-success m-2'>Contact</span>
                                    </span>
                                </div>
                                <hr />
                                <div className="container d-flex flex-row justify-content-between align-items-center">
                                    <PersonFill size={30} />
                                    <span className='fw-bold'>Available</span>
                                    <span>
                                        <Trash3Fill size={30} />
                                        <span className='fw-bold text-success m-2'>Remove available slot</span>
                                    </span>
                                </div>
                                <hr />
                                <div className="container d-flex flex-row justify-content-between align-items-center">
                                    <PersonFill size={30} />
                                    <span className='fw-bold'>Available</span>
                                    <span>
                                        <Trash3Fill size={30} />
                                        <span className='fw-bold text-success m-2'>Remove available slot</span>
                                    </span>
                                </div>
                                <hr />
                                <div className="container d-flex flex-row justify-content-between align-items-center">
                                    <PersonFill size={30} />
                                    <span className='fw-bold'>Available</span>
                                    <span>
                                        <Trash3Fill size={30} />
                                        <span className='fw-bold text-success m-2'>Remove available slot</span>
                                    </span>
                                </div>
                            </div>
                        </Tab> {/* end of tab-2 */}

                        <Tab eventKey={`tab3`} title="Payments">
                            <div className="container d-flex flex-column justify-content-center align-items-start m-2">
                                <div className="container d-flex flex-row justify-content-between align-items-center">
                                    <span className='fw-bold'>Payment history</span>
                                    <span className='border border-dark rounded-start rounded-end p-2'>
                                        <ArrowLeft size={20} />
                                        <span className='fw-bold m-2'>October 2023</span>
                                        <ArrowRight size={20} />
                                    </span>
                                    <span className='text-primary fw-medium'>TOTAL: ₹80.00</span>
                                </div>
                                <div className="container d-flex flex-row justify-content-between align-items-center">
                                    <PersonCheckFill size={30} />
                                    <span className='fw-bold'>John Doe</span>
                                    <span>
                                        <span className='text-primary fw-bold'>

                                            Paid pro rata for the current month
                                        </span>
                                        2023/10/08

                                    </span>
                                    <span className='fw-bold'>
                                        ₹40.00
                                    </span>
                                </div>
                                <hr />
                                <div className="container d-flex flex-row justify-content-between align-items-center">
                                    <PersonCheckFill size={30} />
                                    <span className='fw-bold'>John Greesham</span>
                                    <span>
                                        <span className='text-primary fw-bold'>
                                            Paid pro rata for the current month
                                        </span>
                                        2023/10/08 </span>
                                    <span className='fw-bold'>
                                        ₹40.00
                                    </span>
                                </div>
                            </div>
                        </Tab> {/* end of tab-3 */}
                        <Tab eventKey={`tab4`} title="Management">
                            <div className="container d-flex flex-column justify-content-center align-items-center ">
                                <div className="container d-flex flex-column justify-content-center align-items-start m-2 bg-warning rounded-start rounded-end p-2">

                                    <span className='fw-bold'>

                                        End subscription
                                    </span>
                                    <span>
                                        Are you sure you want to stop the subscription? By doing this, all your subscribers will be lost, and their current month's payments will be refunded. The refund will be total if you provide them the service for less than a month, or partial if the subscription is older. <span className='fw-bold'>
                                            This cannot be undone.
                                        </span>
                                    </span>
                                </div>

                            </div>
                            <div className="container d-flex flex-column justify-content-center align-items-start m-2 p-2">

                                To permanently delete the subscription please type "Delete" in the field below:
                                <div className="container d-flex flex-row justify-content-center align-items-center m-2 p-2">

                                    <Form.Control type="text" name="Delete"
                                        placeholder="Delete" required />
                                    <Button className='bg-danger m-2' disabled>Cancel Subscription</Button>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>

                </Col> {/* end of 2nd column */}


            </Col> {/* end of page */}
        </>
    )
}

export default LoginDetails