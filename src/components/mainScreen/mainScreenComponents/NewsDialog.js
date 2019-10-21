import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {newsDialogPostClose} from "../../../actions/newsDialogActions";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const styles={
    commentList:{
        overflow:'auto'
    }
};

class NewsDialog extends Component {
    render() {
        let post = this.props.newsDialogData.post;

        return (
            <Dialog onClose={() => this.props.dispatch(newsDialogPostClose())} open={this.props.newsDialogData.isOpened}>
                <DialogTitle>
                    {post.title}
                </DialogTitle>
                <DialogContent dividers>
                        <Typography gutterBottom>
                            {post.body}
                        </Typography>

                        <TextField
                            fullWidth
                            label="Skomentuj"
                            multiline
                            rows="2"
                            placeholder="Twój komendarz"
                            margin="normal"
                            variant="outlined"
                            autoFocus
                        />
                </DialogContent>
                <DialogContent>
                    <List style={styles.commentList}>
                        {["Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz"].map(title =>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        )}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Like
                    </Button>
                    <Button onClick={() => this.props.dispatch(newsDialogPostClose())} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default NewsDialog;