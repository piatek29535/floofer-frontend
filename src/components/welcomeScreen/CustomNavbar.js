import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../../WelcomeScreen.css';
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import {Forward} from "@material-ui/icons";

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
                <span> Floofer</span>
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
                    {/*<Nav.Link href={"/signUp"}>Zaloguj się</Nav.Link>*/}
                    <Button href="/signUp" variant="primary" style={{border:'1px solid white', fontWeight:'600', paddingRight:'7px'}}>
                       Zaloguj się <Forward/>
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default CustomNavbar;