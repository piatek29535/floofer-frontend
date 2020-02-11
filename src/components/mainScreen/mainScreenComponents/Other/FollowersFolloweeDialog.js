import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Close from '@material-ui/icons/Close';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";

const styles = {
    dialogTitle:{

    },
    closeIconButton:{
        position:'absolute',
        top:5,
        right:5
    }
};

class FollowersFolloweeDialog extends Component {
    render() {

        const followers = this.props.followers;

        return (
            <Dialog
                id="followersFolloweeDialog"
                disableEscapeKeyDown
                open={this.props.followersDialogOpened}
                fullWidth
                onClose={() => this.props.closeFollowersDialog()}
            >
                <DialogTitle id="followersFolloweeDialogTitle" style={styles.dialogTitle}>
                    <Typography>{this.props.followersDialogTitle+" "+this.props.followersAmount}</Typography>
                    <IconButton style={styles.closeIconButton} onClick={() => this.props.closeFollowersDialog()}>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent id="listOfFollowers" dividers>
                    {followers.map(item => (
                        <Link key={item._id} onClick={() => this.props.closeFollowersDialog()} to={`/main/profil/${item._id}`}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar

                                    />
                                </ListItemAvatar>
                                <ListItemText primary={item.first_name+" "+item.last_name}/>
                            </ListItem>
                        </Link>
                    ))}
                </DialogContent>
            </Dialog>
        );
    }
}

export default FollowersFolloweeDialog;