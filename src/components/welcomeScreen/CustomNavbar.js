import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../../WelcomeScreen.css';

const styles = {
    loginLink: {
        background: '#3fc1c9',
        border: "1px solid white",
        borderRadius: 3,
        color: 'white',
        fontWeight:"bold",
    },
    registerLink:{
        color: 'white',
        fontWeight:"bold",
        marginRight:"2px"
    }

};

const CustomNavbar = (props) => {

    const link = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/".concat(props.random, "_avatar-256.png");

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src={link}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                <span> Fluffer</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#aboutPage">O stronie</Nav.Link>
                    <Nav.Link href="#benefits">Korzyści</Nav.Link>
                    <Nav.Link href="#recommendations">Co mówią o nas</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link style={styles.loginLink}>Zaloguj się</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default CustomNavbar;