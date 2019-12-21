import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link, Route, Switch} from "react-router-dom";
import News from "./mainScreenComponents/News/News";
import Friends from "./mainScreenComponents/Friends/Friends";
import Settings from "./mainScreenComponents/Settings/Settings";
import Paper from "@material-ui/core/Paper";
import Messages from "./mainScreenComponents/Messages/Messages";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Profile from "./mainScreenComponents/Other/Profile";
import {fetchCurrentlyLoggedUser} from "../../actions/fetchCurrentlyLoggedUser";
import {connect} from "react-redux";
import io from "socket.io-client";
import MainScreenNavbar from "./mainScreenComponents/MainScreenNavbar";

const styles = {
    mainContainer:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
    },

    //Content
    contentPanel:{
        padding:'1% 1% 0 1%',
        flex:1,
        backgroundColor: '#FFFFFF'
    },
    contentPaper:{
        height:'100%',
        padding:'1%',
        boxShadow:'0 0 10px',
        borderBottomLeftRadius:'0',
        borderBottomRightRadius:'0',
    }
};

class MainContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCurrentlyLoggedUser()).then(() => {
            this.connect()
        })
    }

    connect(){
        let ENDPOINT = process.env.REACT_APP_API_URL;
        let socket = io(ENDPOINT);
        
        socket.emit('testConnection', this.props.user.userData._id)

        socket.on(this.props.user.userData._id, function(msg){
            console.log("message just for you: " + msg)
          });
    }

    render() {

        const {username, _id, profilePic} = this.props.user.userData;

        return (
            <div style={styles.mainContainer}>
                <MainScreenNavbar user={this.props.user.userData}/>
                <div style={styles.contentPanel}>
                    <Paper style={styles.contentPaper}>
                        <Switch>
                            <Route
                                exact
                                path="/main"
                                children={<News myId={_id}/>}
                            />
                            <Route
                                path="/main/znajomi"
                                children={<Friends myId={_id}/>}
                            />
                            <Route
                                path="/main/wiadomosci"
                                children={<Messages/>}
                            />
                            <Route
                                path="/main/ustawienia"
                                children={<Settings/>}
                            />
                            <Route
                                path="/main/profil"
                                children={<Profile myId={_id} user={this.props.user}/>}
                            />
                        </Switch>
                    </Paper>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user:state.mainUser
});

export default connect(mapStateToProps)(MainContainer);