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
                id="successDialog"
                open={this.props.status}
                onClose={() => this.props.handleClose()}
            >
                <DialogTitle >Rejestracja zakończona sukcesem!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Dziękujemy za zarejestrowanie konta na naszym portalu.
                        Na Twoją pocztę została wysłana wiadomość z linkiem do aktywacji konta.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="confirmRegistrationButton" onClick={() => this.props.handleClose()} color="primary">
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default RegisterSuccessDialog;