import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../assets/logo.png";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <Navbar variant='dark' bg='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="starbucks-brand">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            STARBUCKS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Principala</Nav.Link>
              <Nav.Link href="/about">Despre noi</Nav.Link>
              <Nav.Link href="/catalog">Catalog</Nav.Link>
              <Nav.Link href="/cart"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
              <Nav.Link href="/contact" className='header-button'>Conecteaza-te</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header