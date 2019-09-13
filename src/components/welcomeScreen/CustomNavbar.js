import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../../WelcomeScreen.css';
import NavLink from "react-bootstrap/NavLink";
import {Button} from "react-bootstrap";

const CustomNavbar = (props) => {

    const link = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/".concat(props.random, "_avatar-256.png");

    return (
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
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
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    {
                        props.refs !== null ? props.refs.map((ref, key) => {
                            return (<NavLink key={key}
                                onClick={() => props.scrollToRef(ref)}> {ref.name}
                            </NavLink>)
                        })
                        : null
                    }
                </Nav>
                <Nav>
                    {/*<Nav.Link style={styles.loginLink}>Zaloguj się</Nav.Link>*/}
                    <Button variant="outline-light">Zaloguj się</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default CustomNavbar;