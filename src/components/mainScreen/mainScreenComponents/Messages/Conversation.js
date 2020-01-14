import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {ButtonGroup} from "react-bootstrap";
import {Button as Buttonstrap} from 'react-bootstrap';
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
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

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
    contentBox:{
        overflow:'auto',
        maxHeight:'58vh'
    },

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

    componentDidMount() {
        this.props.dispatch(fetchSingleConversationAction(this.props.match.params.id))
    }

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

                    <List style={styles.contentBox}>
                        {[1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1].map((item, key) => (
                            <Fade in key={key}>
                                <ListItem
                                    style={item === 1 ? styles.myMessage : styles.message}
                                    alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="" src="" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        style={styles.messageText}
                                        primary="Użytkownik inny"
                                        secondary="Spoooooook Spoooooook Spoooooook Spoooooook Spoooooook Spoooooook Spoooooook Spoooooook Spoooooook Spoooooook Spoooooook "
                                    />
                                </ListItem>
                            </Fade>
                        ))}
                    </List>

                    <Grid style={styles.footerBox}>
                        <Input
                            placeholder="Twoja wiadomosć"
                            type="text"
                            multiline
                            rows="4"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Send/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            style={styles.footerBoxInput}
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
    conversation:state.fetchSingleConversationReducers
});

export default connect(mapStateToProps)(Conversation);