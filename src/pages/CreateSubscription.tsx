import { useMemo, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { DashCircleFill, People, PeopleFill, PlusCircleFill, WalletFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";


function Brands(): JSX.Element {
    return <Row className="m-0 p-0 mt-3 p-5" style={{ border: "1px solid black" }}>
        <Col lg={3}>
            <Button variant="outline-primary" className="w-100">Disney + Hotstar</Button>
        </Col>
        <Col lg={3}>
            <Button variant="outline-primary" className="w-100">Youtube</Button>
        </Col>
        <Col lg={3}>
            <Button variant="outline-primary" className="w-100">Netflix</Button>
        </Col>
        <Col lg={3}>
            <Button variant="outline-primary" className="w-100">Amazon prime</Button>
        </Col>
    </Row>
}

function SubscriptionTypes(): JSX.Element {
    return <Row className="m-0 p-0 mt-3 p-5" style={{ border: "1px solid black" }}>
        <Col>
            <label htmlFor="disney-plus" className="w-100 p-2 mt-3" style={{ border: "1px solid black" }}>
                <input type="radio" className="d-none" id="disney-plus" name="subscription-type" />
                <Row className="">
                    <span className="h3">Disney+</span>
                </Row>
                <Row className="align-items-center mt-1">
                    <Col lg="auto">
                        <People />
                    </Col>
                    <Col lg="auto">
                        <span className="small">4 users max</span>
                    </Col>
                    <Col lg="auto">
                        <span className="fw-bold">&#8377; 40.00/month</span>
                    </Col>
                </Row>
            </label>
            <label htmlFor="disney-plus" className="w-100 p-2 mt-3" style={{ border: "1px solid black" }}>
                <input type="radio" className="d-none" id="disney-plus" name="subscription-type" />
                <Row className="">
                    <span className="h3">Disney + Hotstar Super</span>
                </Row>
                <Row className="align-items-center mt-1">
                    <Col lg="auto">
                        <People />
                    </Col>
                    <Col lg="auto">
                        <span className="small">2 users max</span>
                    </Col>
                    <Col lg="auto">
                        <span className="fw-bold">&#8377; 20.00/month</span>
                    </Col>
                </Row>
            </label>
            <label htmlFor="disney-plus" className="w-100 p-2 mt-3" style={{ border: "1px solid black" }}>
                <input type="radio" className="d-none" id="disney-plus" name="subscription-type" />
                <Row className="">
                    <span className="h3">Disney + Hotstar Premium</span>
                </Row>
                <Row className="align-items-center mt-1">
                    <Col lg="auto">
                        <People />
                    </Col>
                    <Col lg="auto">
                        <span className="small">4 users max</span>
                    </Col>
                    <Col lg="auto">
                        <span className="fw-bold">&#8377; 40.00/month</span>
                    </Col>
                </Row>
            </label>
        </Col>
    </Row>
}

function SubscriptionVisibility(): JSX.Element {
    return <Row className="m-0 p-0 mt-3 p-5" style={{ border: "1px solid black" }}>
        <Col>
            <label htmlFor="public" className="w-100 p-2 mt-3" style={{ border: "1px solid black" }}>
                <input type="radio" className="d-none" id="public" name="subscription-visibility" />
                <Row className="">
                    <span className="h3">Public</span>
                </Row>
                <Row className="align-items-center mt-1">
                    <Col lg="auto">
                        <span className="small">Your subscriptions will be displayed in the list of available subscriptions on the site.</span>
                    </Col>
                </Row>
            </label>
            <label htmlFor="private" className="w-100 p-2 mt-3" style={{ border: "1px solid black" }}>
                <input type="radio" className="d-none" id="private" name="subscription-visibility" />
                <Row className="">
                    <span className="h3">Private</span>
                </Row>
                <Row className="align-items-center mt-1">
                    <Col lg="auto">
                        <span className="small">Only people to whom you communicate the secure link can join your subscription.</span>
                    </Col>
                </Row>
            </label>
        </Col>
    </Row>
}

function SubscriptionPrice(): JSX.Element {

    const [users, setUsers] = useState(1);

    const addUser = () => {
        setUsers(users + 1);
    }

    const removeUser = () => {
        setUsers(users - 1);
    }

    return <Row className="m-0 p-0 mt-3 p-5" style={{ border: "1px solid black" }}>
        <Col>
            <Row className="mb-5">
                <Col lg="auto">
                    <Row className="align-items-center">
                        <Col lg="auto" className="m-0 p-0">
                            <PeopleFill size={20} />
                        </Col>
                        <Col>
                            <span><span className="fw-bold">4</span> maximum <span className="fw-bold">users</span></span>
                        </Col>
                    </Row>
                </Col>
                <Col lg="auto" className="ms-3">
                    <Row className="align-items-center">
                        <Col lg="auto" className="m-0 p-0">
                            <WalletFill />
                        </Col>
                        <Col>
                            <span>Total price of the subscription: <span className="fw-bold">&#8377; 40/month</span></span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <span className="h4">How many slots would you like to share?</span>
            </Row>
            <Row className="mt-2">
                <Col lg="auto">
                    <Button onClick={() => removeUser()}>
                        <DashCircleFill />
                    </Button>
                </Col>
                <Col lg="auto">
                    <Form.Control
                        type="text"
                        value={users}
                        className="text-center"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </Col>
                <Col lg="auto">
                    <Button onClick={() => addUser()}>
                        <PlusCircleFill />
                    </Button>
                </Col>
            </Row>
            <div className="mt-3">
                <span className="d-block small">Each person pays you <span className="fw-bold">&#8377; 5/month.</span></span>
                <span className="d-block small mt-1">You'll receive <span className="fw-bold">&#8377; 20/month</span> in total.</span>
            </div>
            <Button className="mt-5">Continue</Button>
        </Col>
    </Row>
}

function ShareYourLoginDetails(): JSX.Element {

    const navigate = useNavigate();
    return <Row className="m-0 p-0 mt-3 p-5" style={{ border: "1px solid black" }}>
        <Col>
            <Row>
                <span>Please provide the login info for your subscribers: mobile number, email, link... Can be edited in your account.</span>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Form.Check
                        type="radio"
                        label="Same message for all subscribers"
                        name="message"
                    />
                </Col>
                <Col>
                    <Form.Check
                        type="radio"
                        label="One message per subscriber"
                        name="message"
                    />
                </Col>
            </Row>
            <Row className="mt-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={5} placeholder="Specify additional information such as the profile to be used. Optional except for invitation subscription: specify what you will need, such as an email." />
                </Form.Group>
            </Row>
            <Row>
                <Col lg="auto">
                    <Form.Check
                        type="checkbox"
                    />
                </Col>
                <Col>
                    <span>I provide reliable information and identity. I agree to Subshare <a href="#" className="text-decoration-none">Terms and Conditions</a> and Stripe <a href="#" className="text-decoration-none">Terms of Service</a></span>
                </Col>
            </Row>
            <Button className="mt-4" onClick={() => navigate("/my-account")}>Create and share</Button>
        </Col>
    </Row>
}

const stepsToCreateSubscription = ["Select Brand", "Describe your subscription", "Subscription visibility", "Price", "Share your login details"];
const componentsToCreateSubscription = [<Brands />, <SubscriptionTypes />, <SubscriptionVisibility />, <SubscriptionPrice />, <ShareYourLoginDetails />];

export default function CreateSubscription(): JSX.Element {

    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = stepsToCreateSubscription.length;
    const stepTitle = useMemo(() => stepsToCreateSubscription[currentStep], [currentStep]);
    const stepComponent = useMemo(() => componentsToCreateSubscription[currentStep], [currentStep]);

    return <Container fluid>
        <Row className="m-0 p-0">
            <Col lg={9} className="m-auto m-0 p-0">
                <Row className="m-0 p-0 justify-content-between align-items-center p-3 mt-5" style={{ border: "1px solid black" }}>
                    <Col lg={1} className="m-0 p-0">
                        { currentStep > 0 && <Button className="w-100" onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>}
                    </Col>
                    <Col className="m-0 p-0">
                        <span className="h2 text-center d-block">{stepTitle}</span>
                    </Col>
                    <Col lg={1} className="m-0 p-0">
                        { currentStep < (totalSteps - 1)  && <Button className="w-100" onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>}
                    </Col>
                </Row>

                {stepComponent}
            </Col>
        </Row>
    </Container>
}