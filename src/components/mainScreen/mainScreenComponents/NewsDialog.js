import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {newsDialogPostClose} from "../../../actions/newsDialogActions";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Comment from "@material-ui/icons/Comment";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

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
                    <IconButton>
                        <Avatar button alt=" " src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" />
                    </IconButton>
                    {"Somebody's post:"}
                </DialogTitle>
                <DialogContent style={{height:'100%', overflow:'hidden'}}>
                    <Typography gutterBottom>
                        {post.body}
                    </Typography>

                </DialogContent>
                <DialogActions>
                    <IconButton color="primary"><ThumbUp fontSize='small'/></IconButton>
                    <IconButton color="primary"><Comment/></IconButton>
                </DialogActions>
                <Box style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                    <TextField
                        style={{width:'80%'}}
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows="4"
                        defaultValue="Default Value"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button color="primary" variant="contained">Comment</Button>
                </Box>
                <DialogContent dividers>
                    <List style={styles.commentList}>
                        {["Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz","Komentarz"].map((title,id) =>
                            <ListItem key={id}>
                                <ListItemText primary={title} />
                            </ListItem>
                        )}
                    </List>
                </DialogContent>
            </Dialog>
        );
    }
}

export default NewsDialog;