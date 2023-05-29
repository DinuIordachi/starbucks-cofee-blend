import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{zIndex: "3"}}>
        <Container className='d-flex justify-content-between'>
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
          <Navbar.Collapse id="basic-navbar-nav" style={{maxWidth: "fit-content"}}>
            <Nav className="me-auto">
              <Nav.Link href="/">Principala</Nav.Link>
              <Nav.Link href="/about">Despre noi</Nav.Link>
              <Nav.Link href="/catalog">Catalog</Nav.Link>
              <Nav.Link href="/cart">Catalog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header