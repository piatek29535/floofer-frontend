import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import profilePic from "../../../images/mainScreen/profilePic.png";
import Button from "react-bootstrap/Button";

const styles = {
    menuPanel:{
        color:'#FFFFFF',
    },
    avatar:{
        objectFit:'cover',
    },
    link:{
        color:'white',
        margin:0,
        padding:"10px 10px 10px 20px",
    }
};

class MainScreenNavbar extends Component {

    state = {
        menuExpanded:false,
    };

    expandMenu = () => {
        this.setState({
            menuExpanded:!this.state.menuExpanded
        })
    };

    closeMenu = () => {
        this.setState({
            menuExpanded:false
        })
    };

    render() {
        return (
            <Navbar
                collapseOnSelect
                expanded={this.state.menuExpanded}
                onToggle={(expand) => this.expandMenu(expand)}
                expand="md"
                bg="primary"
                variant="dark"
                style={styles.menuPanel}>
                <Link to="/main/profil" style={{textDecoration:'none'}}>
                    <IconButton style={{outline:'none'}}>
                        <Avatar
                            alt=" "
                            src={
                                this.props.user.profilePic === undefined
                                    ? profilePic
                                    : `${process.env.REACT_APP_API_URL+'/'+this.props.user.profilePic}`
                            }
                            style={styles.avatar}>
                        </Avatar>
                    </IconButton>
                </Link>
                <Navbar.Toggle onClick={() => this.expandMenu()}/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        {
                            [{name:'Aktualnosci', link:'/main'},
                                {name:'Znajomi', link:'/main/znajomi'},
                                {name:'Wiadomości', link:'/main/wiadomosci'},
                                {name:'Ustawienia', link:'/main/ustawienia'}].map((item, key) => (
                                <Link key={key} onClick={() => this.closeMenu()} style={styles.link} to={item.link}>{item.name}</Link>
                            ))
                        }
                    </Nav>
                    <Nav>
                        <Button href="/" variant="outline-light">Wyloguj się</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainScreenNavbar;