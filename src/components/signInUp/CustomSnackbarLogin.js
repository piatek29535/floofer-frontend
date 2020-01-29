import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";

class CustomSnackbarLogin extends Component {

    render() {
        return (
            <Snackbar
                id="errorSnackbar"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.props.isError}
                autoHideDuration={3000}
                onClose={this.props.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{this.props.errorMessage}</span>}
            />
        );
    }
}

export default CustomSnackbarLogin;