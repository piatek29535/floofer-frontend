import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

class CustomSnackbar extends Component {

    state = {
        open:false,
    };

    handleClose = () => {
        if(this.props.isError){
            this.setState({
                open:false
            })
        }
    };

    render() {

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.props.isError ? this.state.open : null}
                autoHideDuration={1000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{this.props.errorMessage}</span>}
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