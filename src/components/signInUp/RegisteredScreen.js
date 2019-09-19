import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Check from '@material-ui/icons/Check';
import SnackbarContent from "@material-ui/core/SnackbarContent";

function RegisteredScreen(props) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
            open={false}
            // onClose={handleClose}
            message={
                <span><Check/>Thank You for registration</span>
            }
        >
        </Snackbar>
    );
}

export default RegisteredScreen;