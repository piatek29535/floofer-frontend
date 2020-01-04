import React, {Component} from 'react';
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = {
    mainContainer:{
        border:'1px solid red',
        height:'100%',
        flexGrow:40
    }
};

class MessageBox extends Component {
    render() {
        return (
            <Box style={styles.mainContainer}>
                <Typography>Wiadomosci plus inputbox</Typography>
            </Box>
        );
    }
}

export default MessageBox;