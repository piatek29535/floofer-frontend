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
};

class Conversations extends Component {
    render() {
        return (
            <Box style={styles.mainContainer}>
                <Container style={styles.conversationsContainerTypography}>
                    <Typography variant={"h4"}>
                        Wiadomości
                    </Typography>
                </Container>
                {<LinearProgress color="primary" variant="determinate" value={100}/>}

                <Grid style={{marginTop:'1%'}} container spacing={2}>
                    {[1,2,3,4,5,6,7,8,9,10].map((item, value) => (
                        <Grid item xs={6} key={value}>
                            <ExpansionPanel
                                style={styles.expansionPanel}
                                >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>Użytkownicy</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography style={styles.detailsDescription}>
                                        Uzytkownik: ostatnia wiadomość
                                    </Typography>
                                </ExpansionPanelDetails>
                                <Grid container justify='space-between'>
                                    <Grid item>
                                        <Button
                                            color="primary"
                                            variant='contained'
                                        >Otwórz</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            color="secondary"
                                            variant='contained'
                                        >Opuść konwersację</Button>
                                    </Grid>
                                </Grid>
                            </ExpansionPanel>
                        </Grid>

                    ))}
                </Grid>
                <Fab
                    color="primary"
                    style={styles.createConversationButton}
                >
                    <Add/>
                </Fab>
            </Box>
        );
    }
}

export default Conversations;