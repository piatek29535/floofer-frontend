import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Conversations from "./Conversations";
import MessageBox from "./MessageBox";

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
                <MessageBox />
            </Grid>
        );
    }
}

export default Messages;