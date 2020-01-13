import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {createConversationAction} from "../../../../actions/createConversationAction";
import {connect} from "react-redux";

class CreateConversation extends Component {

    state = {
        participants: new Set()
    };

    addOrRemoveParticipants = (item) => {
        if(this.state.participants.has(item)){
            this.state.participants.delete(item)
        }else{
            this.setState({
                participants:this.state.participants.add(item)
            })
        }
    };

    createConversation = () => {
        this.props.dispatch(createConversationAction(Array.from(this.state.participants)));
        this.props.closeDialog()
    };

    render() {

        return (
            <Dialog
                open={this.props.open}
                onClose={() => {
                    this.state.participants.clear();
                    this.props.closeDialog()
                }}
                scroll="paper"
            >
                <DialogTitle id="scroll-dialog-title">Wybierz użytkowników</DialogTitle>
                <DialogContent dividers>
                    <FormGroup>
                        {this.props.followersAndFollowee.map((item, key) => (
                            <FormControlLabel
                                key={key}
                                control={
                                    <Checkbox value={item.first_name} onChange={() => this.addOrRemoveParticipants(item._id)} />
                                }
                                label={item.first_name+" "+item.last_name}
                            />
                        ))}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.createConversation()} color="primary" variant="contained">
                        Utwórz konwersację
                    </Button>
                    <Button onClick={() => {
                        this.state.participants.clear();
                        this.props.closeDialog()
                    }} color="secondary" variant="outlined">
                        Zamknij okno
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => ({
    conversationCreate:state.createConversationReducers
});

export default connect(mapStateToProps)(CreateConversation);