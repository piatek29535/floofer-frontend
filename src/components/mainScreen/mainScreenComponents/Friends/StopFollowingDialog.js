import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class StopFollowingDialog extends Component {


    render() {
        const {handleClose,isOpened, followeeUsername, followeeId} = this.props;

        return (
            <Dialog
                open={isOpened}
                onClose={() => handleClose(null, null)}
            >
                <DialogTitle>{"Przestań obserwować"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Czy na pewno chcesz przestać obserwować użytkownika {followeeUsername}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(followeeId, 'unfollow')} color="primary" variant="contained" autoFocus>
                        Przestań obserwować
                    </Button>
                    <Button onClick={() => handleClose(null)} color="primary" variant="outlined">
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default StopFollowingDialog;