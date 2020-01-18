import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Send from "@material-ui/icons/Send";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";
import {fetchSingleConversationAction} from "../../../../actions/fetchSingleConversationAction";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import ScrollToBottom from "react-scroll-to-bottom";
import profilePic from "../../../../images/mainScreen/profilePic.png";
import {sendMessageAction} from "../../../../actions/sendMessageAction";

import "../../../../style/Conversation.css"

const styles = {
    mainContainer:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
    },

    // --------- Header ---------
    headerBox:{
        display:'flex',
        marginBottom:'1%'
    },
    headerBoxParticipants:{
        flex:2,
        display:'flex',
        alignItems:'center',
    },
    headerButton:{
        flex:1,
        borderRadius:0
    },

    // --------- Content ---------

    // Tutaj muszę używać styli z pliku css, gdyż ScrollToBottom komponent nie wspomaga propsów "style"

    message:{
        borderRadius:'20px',
        backgroundColor:'lightgrey',
        width:'80%',
        margin:'2%'
    },
    myMessage:{
        borderRadius:'20px',
        flexDirection:'row-reverse',
        justifyContent:'flex-end',
        backgroundColor:'#2277aa',
        color:'white',
        width:'80%',
        margin:'2% 2% 2% 18%',
    },
    messageText:{
        wordWrap:'break-word'
    },

    // --------- Footer ---------
    footerBox:{
        display:'flex',
        flex:1,
    },
    footerBoxInput:{
        flex:1,
    },
};

class Conversation extends Component {

    state = {
        message:''
    };

    componentDidMount() {
        this.props.dispatch(fetchSingleConversationAction(this.props.match.params.id))
    }

    pushMessages = (conversationId, message) => {
        this.setState({
            message:''
        });
        this.props.dispatch(sendMessageAction(conversationId, message))
    };

    changeMessage = (value) => {
        this.setState({
            message:value
        })
    };

    render() {

        const {
            fetchingSingleConversation:fetching,
            fetchingSingleConversationSuccess:conversation,
            // fetchingSingleConversationFailure:failure
        } = this.props.conversation;

        if(Object.keys(conversation).length !== 0){
            return (
                <Grid container style={styles.mainContainer}>
                    <Grid container style={styles.headerBox}>
                        <Typography style={styles.headerBoxParticipants}>
                            {conversation.participants.length > 2
                                ? conversation.participants[0].first_name+", "+conversation.participants[1].first_name+" +"+(conversation.participants.length-2)+" więcej"
                                : conversation.participants[0].first_name+", "+conversation.participants[1].first_name
                            }
                        </Typography>
                        <Button color="primary" variant="contained" style={styles.headerButton}>
                            Członkowie
                        </Button>
                    </Grid>

                    <ScrollToBottom className="messages">
                        {conversation.messages.map((item, key) => (
                            <Fade in key={key}>
                                <ListItem
                                    style={item.sender._id === this.props.myId ? styles.myMessage : styles.message}
                                    alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt=""
                                            src={
                                                item.sender.profilePic === undefined
                                                    ? profilePic
                                                    : `${process.env.REACT_APP_API_URL+'/'+item.sender.profilePic}`
                                            } />
                                    </ListItemAvatar>
                                    <ListItemText
                                        style={styles.messageText}
                                        primary={item.sender.first_name}
                                        secondary={item.content}
                                    />
                                </ListItem>
                            </Fade>
                        ))}
                    </ScrollToBottom>

                    <Grid style={styles.footerBox}>
                        <Input
                            placeholder="Twoja wiadomosć"
                            type="text"
                            multiline
                            rows="4"
                            value={this.state.message}
                            onChange={(e) => this.changeMessage(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Send/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            style={styles.footerBoxInput}
                            onKeyPress={(event) => event.key === "Enter" ? this.pushMessages(conversation._id, this.state.message) : null}
                        />
                    </Grid>
                </Grid>
            );
        }else{
            return null
        }

    }
}

const mapStateToProps = (state) => ({
    conversation:state.fetchSingleConversationReducers,
    message:state.sendMessageReducers
});

export default connect(mapStateToProps)(Conversation);