import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Header(): JSX.Element {

  const { pathname } = useLocation();

    return <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img src="/logo192.png" alt="logo" width={50} height={50}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/subscriptions" active={pathname === "/subscriptions" } className="me-5">Subscriptions</Nav.Link>
          <Nav.Link as={Link} to="/login" active={pathname === "/login" }>Login</Nav.Link>
          <Nav.Link as={Link} to="/about" active={pathname === "/about" }>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}