import { Container, Row, Col, Button } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

type Route = {
    name: string;
    path: string;
}

function route(name: string, path: string):Route {
    return { name, path }
}

export default function UserAccount(): JSX.Element {
    const user = useAppSelector((state)=>state.userReducer)
    console.log(user)
    const childRoutes: Route[] = [
        route("Shared Subscriptions", "shared-subscriptions"),
        route("Joined Subscriptions", "joined-subscriptions"),
        route("Chat", "chat"),
        route("Wallet", "wallet"),
        route("Identity and Verification", "identity-and-verification"),
        route("Payment Cards", "payment-cards"),
        route("Connected Bank Account", "connected-bank-account"),
        route("Change Password", "change-password")
    ];

    const navigate = useNavigate();
    const location = useLocation();

    return <Container className="pb-5">
        <Row className="mt-5 justify-content-center">
            <Col lg="3">
                <span className="h1">Hi,{user} </span>
            </Col>
            <Col lg="6"></Col>
        </Row>
        <Row className="mt-5 justify-content-center">
            <Col lg="3">
                { childRoutes.map((childRoute, childRouteKey) => <Button
                key={childRouteKey}
                variant={location.pathname.includes(childRoute.path) ? "primary": "outline-primary"}
                className="w-100 mb-3 text-start"
                onClick={() => navigate(childRoute.path)}>{childRoute.name}</Button>)}
            </Col>
            <Col lg="6">
                <Outlet/>
            </Col>
        </Row>
    </Container>
}