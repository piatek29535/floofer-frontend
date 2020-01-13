import React, {Component} from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";
import ExpansionPanelBackground from "../../../../images/mainScreen/message.png";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";
import CreateConversation from "./CreateConversation";
import {fetchFollowersAndFollowee} from "../../../../actions/followersAndFolloweFetchAction";
import {connect} from "react-redux";
import {followersAndFolloweReducers} from "../../../../reducers/followersAndFolloweeFetchReducers";
import {fetchConversationsAction} from "../../../../actions/fetchConversationsAction";

const styles = {
    mainContainer:{
        flexGrow:1,
    },
    expansionPanel:{
        background:`url(${ExpansionPanelBackground})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
    },
    createConversationButton:{
        borderRadius:0,
        position:'fixed',
        bottom: 50,
        right: 50,
    },
    detailsDescription:{
        color:'white',
        textShadow:'0 0 10px black'
    },
    conversationsContainerTypography:{
        width:'90%',
        display:'flex',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
    },
    openConversationGridItem:{
        display:'flex',
        flex:1
    },
    openConversationButton:{
        flex:1,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        outline:'none'
    }
};

class Conversations extends Component {

    state = {
        createConversationOpened:false,
    };

    componentDidMount() {
        this.props.dispatch(fetchFollowersAndFollowee());
        this.props.dispatch(fetchConversationsAction());
    }

    openCreateConversation = () => {
        this.setState({
            createConversationOpened:true
        })
    };

    closeCreateConversation = () => {
        this.setState({
            createConversationOpened:false
        })
    };

    render() {

        const {followers} = this.props.followersAndFollowee;
        const {fetchingConversations:fetching,fetchingConversationsSuccess:conversations} = this.props.conversations;

        if(conversations !== undefined){
            return (
                <Box style={styles.mainContainer}>
                    <Container style={styles.conversationsContainerTypography}>
                        <Typography variant={"h4"}>
                            Wiadomości
                        </Typography>
                    </Container>
                    {fetching
                        ? <LinearProgress color="primary" />
                        : <LinearProgress color="primary" variant="determinate" value={100}/>}

                    <Grid style={{marginTop:'1%'}} container spacing={2}>
                        {conversations.map((item, value) => (
                            <Grid item xs={6} key={value}>
                                <ExpansionPanel
                                    style={styles.expansionPanel}
                                >
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>{item.participants.length > 2
                                            ? item.participants[0].first_name+", "+item.participants[1].first_name+" +"+(item.participants.length-2)+" więcej"
                                            : item.participants[0].first_name+", "+item.participants[1].first_name
                                        }</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography style={styles.detailsDescription}>
                                            Uzytkownik: ostatnia wiadomość
                                        </Typography>
                                    </ExpansionPanelDetails>
                                    <Grid container alignItems="stretch" justify='center'>
                                        <Grid item style={styles.openConversationGridItem}>
                                            <Button
                                                style={styles.openConversationButton}
                                                color="primary"
                                                variant='contained'
                                            >Otwórz</Button>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanel>
                            </Grid>

                        ))}
                    </Grid>
                    <Fab
                        onClick={() => this.openCreateConversation()}
                        color="primary"
                        style={styles.createConversationButton}
                    >
                        <Add/>
                    </Fab>

                    <CreateConversation
                        open={this.state.createConversationOpened}
                        followersAndFollowee={followers}
                        closeDialog={this.closeCreateConversation}
                    />
                </Box>
            );
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    followersAndFollowee:state.followersAndFolloweReducers,
    conversations:state.fetchConversationsReducers
});

export default connect(mapStateToProps)(Conversations);