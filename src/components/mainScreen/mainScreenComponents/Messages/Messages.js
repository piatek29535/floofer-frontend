import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Conversations from "./Conversations";
import Conversation from "./Conversation";

const styles = {
    mainContainer:{
        display:'flex',
        flex:1,
    },
};

class Messages extends Component {
    render() {
        return (
            <Grid container style={styles.mainContainer}>
                <Conversations />
                {/*<Conversation/>*/}
            </Grid>
        );
    }
}

export default Messages;