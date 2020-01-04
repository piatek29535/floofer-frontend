import React, {Component} from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const styles = {
    mainContainer:{
        border:'1px solid red',
        overflow:'auto',
        height:'100%',
        flexGrow:1,
    },
    conversations:{
        height:'100px',
    },
    createConversationButton:{
        borderRadius:0,
    }
};

class Conversations extends Component {
    render() {
        return (
            <Box style={styles.mainContainer}>
                <List style={styles.conversations}>
                    {[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10].map((item, value) => (
                        <ListItem key={value} button>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${value + 1}`}
                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={`Line item ${value + 1}`} />
                        </ListItem>
                    ))}
                </List>

                <Button
                    style={styles.createConversationButton}
                    color="primary"
                    variant="contained">
                    Stwórz +
                </Button>
            </Box>
        );
    }
}

export default Conversations;