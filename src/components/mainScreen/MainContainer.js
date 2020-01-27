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
import {fetchSingleConversationAction} from "../../actions/fetchSingleConversationAction";
import {fetchFollowersAndFollowee} from "../../actions/followersAndFolloweFetchAction";
import {fetchNotificationsAction} from "../../actions/fetchNotificationsAction";

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
        content:{},
        relevantPost:''
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

            this.closeToast();

            if(typeof msg === "string" && msg.includes("You are connected on socket")){
                return;
            }

            switch(msg.type){
                case 'notification':
                    switch(msg.content.action){
                        case 'follow':
                            this.props.dispatch(fetchFollowersAndFollowee());
                            this.openToast("Nowy obserwator",
                                `Użytkownik ${msg.content.who.first_name+" "+msg.content.who.last_name} obserwuje Cię!`);
                            break;
                        case 'comment':
                            this.openToast("Komentarz",
                                `Użytkownik ${msg.content.who.first_name+" "+msg.content.who.last_name} napisał komentarz pod Twoim postem.`,
                                msg.content.relevantPost);
                            break;
                        case 'likePost':
                            this.openToast("Polubienie posta",
                                `Użytkownik ${msg.content.who.first_name+" "+msg.content.who.last_name} polubił Twój post.`,
                                msg.content.relevantPost);
                            break;
                        case 'likeComment':
                            this.openToast("Polubienie komentarza",
                                `Użytkownik ${msg.content.who.first_name+" "+msg.content.who.last_name} polubił Twój komentarz.`,
                                msg.content.relevantPost);
                            break;
                        default:
                            break;
                    }
                    break;
                case 'message':
                    this.props.dispatch(fetchSingleConversationAction(msg.content));
                    if(this.props.location.pathname.includes("wiadomosci/")){
                        return;
                    }
                    this.openToast("Wiadomość","Masz nową wiadomość!");
                    break;
                default:
                    break;
            }
            this.props.dispatch(fetchNotificationsAction())
        });
    }

    openToast = (header, body, relevantPost) => {
        this.setState({
            showToast:true,
            content:{type:header, body:body},
            relevantPost:relevantPost
        })
    };

    closeToast = () => {
        this.setState({
            showToast:false,
            content:{},
            relevantPost:''
        })
    };

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
                <NotificationToast
                    showToast={this.state.showToast}
                    closeToast={this.closeToast}
                    content={this.state.content}
                    relevantPost={this.state.relevantPost}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user:state.mainUser
});

export default connect(mapStateToProps)(MainContainer);