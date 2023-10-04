import { useMemo, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { People } from "react-bootstrap-icons";


function Brands(): JSX.Element {
    return <Row className="m-0 p-0 mt-3 p-5" style={{ border: "1px solid black"}}>
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
    return <Row className="m-0 p-0 mt-3 p-5" style={{ border: "1px solid black"}}>
        <Col>
            <label htmlFor="disney-plus" className="w-100 p-2 mt-3" style={{ border: "1px solid black"}}>
                <input type="radio" className="d-none" id="disney-plus" name="subscription-type" />
                <Row className="">
                    <span className="h3">Disney+</span>
                </Row>
                <Row className="align-items-center mt-1">
                    <Col lg="auto">
                        <People/>
                    </Col>
                    <Col lg="auto">
                        <span className="small">4 users max</span>
                    </Col>
                    <Col lg="auto">
                        <span className="fw-bold">&#8377; 40.00/month</span>
                    </Col>
                </Row>
            </label>
            <label htmlFor="disney-plus" className="w-100 p-2 mt-3" style={{ border: "1px solid black"}}>
                <input type="radio" className="d-none" id="disney-plus" name="subscription-type" />
                <Row className="">
                    <span className="h3">Disney + Hotstar Super</span>
                </Row>
                <Row className="align-items-center mt-1">
                    <Col lg="auto">
                        <People/>
                    </Col>
                    <Col lg="auto">
                        <span className="small">2 users max</span>
                    </Col>
                    <Col lg="auto">
                        <span className="fw-bold">&#8377; 20.00/month</span>
                    </Col>
                </Row>
            </label>
            <label htmlFor="disney-plus" className="w-100 p-2 mt-3" style={{ border: "1px solid black"}}>
                <input type="radio" className="d-none" id="disney-plus" name="subscription-type" />
                <Row className="">
                    <span className="h3">Disney + Hotstar Premium</span>
                </Row>
                <Row className="align-items-center mt-1">
                    <Col lg="auto">
                        <People/>
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

function subscriptionVisibility(): JSX.Element {
    return <Row className="m-0 p-0 mt-3 p-5" style={{ border: "1px solid black"}}>
    <Col>
        <label htmlFor="public" className="w-100 p-2 mt-3" style={{ border: "1px solid black"}}>
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
        <label htmlFor="private" className="w-100 p-2 mt-3" style={{ border: "1px solid black"}}>
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

const stepsToCreateSubscription = [ "Select Brand", "Describe your subscription", "Subscription visibility" ];
const componentsToCreateSubscription = [ Brands, SubscriptionTypes, subscriptionVisibility ];

export default function CreateSubscription(): JSX.Element {

    const [ currentStep, setCurrentStep ] = useState(0);

    const stepTitle = useMemo(() => stepsToCreateSubscription[currentStep], [ currentStep ]);
    const stepComponent = useMemo(() => componentsToCreateSubscription[currentStep], [currentStep]);

    return <Container fluid>
        <Row className="m-0 p-0">
            <Col lg={9} className="m-auto m-0 p-0">
                <Row className="m-0 p-0 justify-content-between align-items-center p-3 mt-5" style={{ border: "1px solid black" }}>
                    <Col lg={1} className="m-0 p-0">
                        <Button className="w-100" onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>
                    </Col>
                    <Col className="m-0 p-0">
                        <span className="h2 text-center d-block">{stepTitle}</span>
                    </Col>
                    <Col lg={1} className="m-0 p-0">
                        <Button className="w-100" onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
                    </Col>
                </Row>

                { stepComponent() }
            </Col>
        </Row>
    </Container>
}