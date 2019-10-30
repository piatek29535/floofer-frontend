import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";

class RegisterSuccessDialog extends Component {

    render() {
        return (
            <Dialog
                open={this.props.status}
                onClose={() => this.props.handleClose()}
            >
                <DialogTitle >Rejestracja zakończona sukcesem!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Świetnie! Udało Ci się zarejestrować konto na naszym serwisie. Aby móc korzystać z konta, przejdź do zakładki <b>Zaloguj się</b>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.handleClose()} color="primary">
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default RegisterSuccessDialog;