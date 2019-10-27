import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

class CustomSnackbar extends Component {

    state = {
        open:true,
    };

    handleClose = () => {
        this.setState({
            open:!this.state.open
        })
    };

    render() {

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Message</span>}
                action={(
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            />
        );
    }
}

export default CustomSnackbar;