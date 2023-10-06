import { Container } from "react-bootstrap";
import SharedSubscriptionCard from "../../components/SharedSubscriptionCard";

export default function SharedSubscriptions(): JSX.Element {
    return <Container>
        <SharedSubscriptionCard/>
        <SharedSubscriptionCard/>
        <SharedSubscriptionCard/>
        <SharedSubscriptionCard/>
        <SharedSubscriptionCard/>
    </Container>
}