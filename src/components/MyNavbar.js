import { Navbar, Nav } from "react-bootstrap";


function MyNavbar(props) {
    const {activeUser, onLogout} = props;

    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="#/">מערכת גליל </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {activeUser ? <Nav.Link href="#/entrance"> <i class="fas fa-home fa-lg"></i>בית </Nav.Link> : null}
                </Nav>
                <Nav className="ml-auto">
                    {activeUser ? null : <Nav.Link href="#/login">התחבר/י</Nav.Link>}
                    {activeUser ? null : <Nav.Link href="#/signup">הרשמ/י</Nav.Link>}
                    {activeUser ? <Nav.Link href="javascript:void(0)" onClick={() => onLogout()}>התנתק/י</Nav.Link> : null}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar;