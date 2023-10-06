import { Container } from "react-bootstrap";
import ChatCard from "../../components/ChatCard";

export default function Chat(): JSX.Element {
    return <Container>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
    </Container>
}