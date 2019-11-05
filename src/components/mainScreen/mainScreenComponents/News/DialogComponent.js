import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import {toggleOffDialog} from "../../../../actions/mainPosts";

class DialogComponent extends Component {
    render() {
        return (
            <Dialog open={this.props.isDialogOpened.dialogToggle.isDialogOpened}>
                <DialogTitle >Dodaj post</DialogTitle>
                <DialogContent>
                    <TextField
                        style={{width:'500px'}}
                        label="Twoj post"
                        multiline
                        rows="4"
                        placeholder="Napisz coś..."
                        margin="normal"
                        variant="outlined"
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.isDialogOpened.dispatch(toggleOffDialog())} color="primary">
                        Zamknij
                    </Button>
                    <Button variant="contained" color="primary">
                        Opublikuj
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default DialogComponent;