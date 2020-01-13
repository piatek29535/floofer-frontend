import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
    mainContainer:{
        display:'flex',
        height:'100%'
    },
    conversationBox:{

    },
    messages:{

    },
    inputMessageBox:{
        flex:1,
        display:'flex',
        alignItems:'stretch'
    },
    sendButton:{
        borderRadius:0
    }
};

class Conversation extends Component {
    render() {
        return (
            <Grid container style={styles.mainContainer}>
                <Box style={styles.conversationBox}>
                    <List style={styles.messages}>
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item, key) => (
                            <ListItem button key={key}>
                                <Typography>{item}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Box style={styles.inputMessageBox}>
                        <TextField
                            multiline
                            rows="4"
                            label="Twoja wiadomość"
                            defaultValue="Default Value"
                            variant="filled"
                        />
                        <Button color="primary" variant="contained" style={styles.sendButton}>
                            Wyślij
                        </Button>
                    </Box>
                </Box>
            </Grid>
        );
    }
}

export default Conversation;