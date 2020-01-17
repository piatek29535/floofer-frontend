import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import News from "./mainScreenComponents/News/News";
import Friends from "./mainScreenComponents/Friends/Friends";
import Settings from "./mainScreenComponents/Settings/Settings";
import Paper from "@material-ui/core/Paper";
import Messages from "./mainScreenComponents/Messages/Messages";
import Profile from "./mainScreenComponents/Other/Profile";
import {fetchCurrentlyLoggedUser} from "../../actions/fetchCurrentlyLoggedUser";
import {connect} from "react-redux";
import io from "socket.io-client";
import MainScreenNavbar from "./mainScreenComponents/MainScreenNavbar";
import Conversation from "./mainScreenComponents/Messages/Conversation";
import NotificationToast from "./mainScreenComponents/Other/NotificationToast";

const styles = {
    mainContainer:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
    },

    //Content
    contentPanel:{
        padding:'1% 5% 0 5%',
        flex:1,
        backgroundColor: '#FFFFFF'
    },
    contentPaper:{
        height:'100%',
        padding:'1%',
        boxShadow:'0 0 10px',
        borderBottomLeftRadius:'0',
        borderBottomRightRadius:'0',
    },

};

class MainContainer extends Component {

    state = {
        showToast:false,
    };

    componentDidMount() {
        this.props.dispatch(fetchCurrentlyLoggedUser()).then(() => {
            this.connect()
        })
    }

    connect(){
        let ENDPOINT = process.env.REACT_APP_API_URL;
        let socket = io(ENDPOINT);

        socket.emit('testConnection', this.props.user.userData._id)

        socket.on(this.props.user.userData._id, (msg) => {
            console.log("message just for you: " + msg);

            this.setState({
                showToast:true
            });

            if(this.state.showToast){
                setTimeout(() => this.setState({
                    showToast:false
                }), 5000)
            }


        });
    }

    closeToast = () => {
        this.setState({
            showToast:false
        })
    }

    render() {

        const {_id} = this.props.user.userData;

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
                                exact
                                path="/main/wiadomosci"
                                children={<Messages/>}
                            />
                            <Route
                                path="/main/ustawienia"
                                children={<Settings/>}
                            />
                            <Route
                                path="/main/profil/:id"
                                render={({match}) => <Profile myId={_id} match={match}/>}
                            />
                            <Route
                                path="/main/wiadomosci/:id"
                                render={({match}) => <Conversation myId={_id} match={match}/>}
                            />
                        </Switch>
                    </Paper>
                </div>

                {this.state.showToast
                    ?
                    <NotificationToast
                        closeToast={this.closeToast}
                    />
                    : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user:state.mainUser
});

export default connect(mapStateToProps)(MainContainer);