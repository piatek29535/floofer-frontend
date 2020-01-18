import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import profilePic from "../../../images/mainScreen/profilePic.png";
import Button from "react-bootstrap/Button";
import Badge from "@material-ui/core/Badge";
import Notifications from "@material-ui/icons/Notifications";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import {connect} from "react-redux";
import {fetchNotificationsAction} from "../../../actions/fetchNotificationsAction";
import ListGroup from "react-bootstrap/ListGroup";
import {readNotificationAction} from "../../../actions/readNotificationAction";

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
    },
    notificationList:{
        width:'100%',
        height:'300px',
        overflow:'auto',
        borderRadius:0
    },
    listItem:{
        borderRadius: 0,
    }
};

class MainScreenNavbar extends Component {

    state = {
        menuExpanded:false,
        notificationOpen:false,
        notificationTarget:{},
    };

    componentDidMount() {
        this.props.dispatch(fetchNotificationsAction())
    }

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

    notificationsToggle = (target) => {
        this.setState({
            notificationOpen:!this.state.notificationOpen,
            notificationTarget:target,
        })
    };

    render() {

        const {
            // notificationsFetching:fetching,
            notificationsSuccess:notifications,
            // notificationsError:error
        } = this.props.notifications;

        console.log(notifications)

        return (
            <Navbar
                collapseOnSelect
                expanded={this.state.menuExpanded}
                onToggle={(expand) => this.expandMenu(expand)}
                expand="md"
                bg="primary"
                variant="dark"
                style={styles.menuPanel}>
                <Link to={`/main/profil/${this.props.user._id}`} style={{textDecoration:'none'}}>
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
                <IconButton
                    onClick={(e) => this.notificationsToggle(e.target)}
                >
                    <Badge badgeContent={notifications.filter(x => !x.read).length} max={999} color="secondary">
                        <Notifications/>
                    </Badge>
                </IconButton>
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

                <Overlay
                    show={this.state.notificationOpen}
                    target={this.state.notificationTarget}
                    placement="bottom"
                >
                    <Popover
                        style={styles.notificationList}
                    >
                        <Popover.Title><strong>Powiadomienia</strong></Popover.Title>
                        <ListGroup>
                        {notifications.map(item => (
                            <ListGroup.Item
                                onClick={() => {
                                    this.props.dispatch(readNotificationAction(item._id))
                                    this.props.dispatch(fetchNotificationsAction())
                                }}
                                style={styles.listItem}
                                action
                                key={item._id}
                                variant={!item.read ? "primary" : "success"}
                            >
                                <strong>{item.who.first_name}</strong>
                            </ListGroup.Item>
                        ))}
                        </ListGroup>
                    </Popover>
                </Overlay>

            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    notifications:state.fetchNotificationsReducers
});

export default connect(mapStateToProps)(MainScreenNavbar);