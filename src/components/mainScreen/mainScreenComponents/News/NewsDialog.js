import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {newsDialogPostClose} from "../../../../actions/newsDialogActions";
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
    postTypography:{
        color:'gray',
        fontStyle:'italic'
    },
    dialogActions:{
        justifyContent:'space-between'
    },
    dialogActionsLikesAndComments:{
        display:'flex',
        flexDirection:'column'
    },
    commentBox:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
    },
    commentBoxField:{
        width:'70%'
    }
};

class NewsDialog extends Component {

    state = {
        isButtonClicked:false, // tutaj z propsów ustawiać jc
        isCommentFieldShown: false
    };

    buttonClicked = (type) => {
        switch(type){
            case 'like':{

                this.setState({
                    ...this.state,
                    isButtonClicked:!this.state.isButtonClicked
                });
                break;
            }
            case 'comment':{
                this.setState({
                    ...this.state,
                    isCommentFieldShown:!this.state.isCommentFieldShown
                });
                break;
            }
            default:
                return null
        }
    };

    render() {
        let post = this.props.newsDialogData.post;

        if(Object.entries(post).length === 0){
            return null;
        }else{
            return (
                <Dialog fullWidth onClose={() => this.props.dispatch(newsDialogPostClose())} open={this.props.newsDialogData.isOpened}>
                    <List>
                        <DialogTitle>
                            <IconButton>
                                <Avatar
                                    alt=" "
                                    // src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png"
                                >
                                    {post.post.author.username.charAt(0).toLocaleUpperCase()}
                                </Avatar>
                            </IconButton>
                            {`Uzytkownik ${post.post.author.username} napisał:`}
                        </DialogTitle>
                        <DialogContent>
                            <Typography gutterBottom style={styles.postTypography}>
                                {`"${post.post.content}"`}
                            </Typography>
                        </DialogContent>
                        <DialogActions style={styles.dialogActions}>
                            <div style={styles.dialogActionsLikesAndComments}>
                                <Typography style={{color:'silver'}}>Polubienia: {post.post.likesAmount}</Typography>
                                <Typography style={{color:'silver'}}>Komentarze: {post.post.commentsAmount}</Typography>
                            </div>
                            <div>
                                <IconButton color={this.state.isButtonClicked ? 'secondary' : 'primary'} onClick={() => this.buttonClicked('like')}><ThumbUp fontSize='small'/></IconButton>
                                <IconButton color={this.state.isCommentFieldShown ? 'secondary' : 'primary'} onClick={() => this.buttonClicked('comment')}><Comment/></IconButton>
                            </div>
                        </DialogActions>
                        <Box style={ this.state.isCommentFieldShown ? styles.commentBox : {display:'none'}}>
                            <TextField
                                style={styles.commentBoxField}
                                id="outlined-multiline-static"
                                label="Twój komentarz"
                                multiline
                                rows="4"
                                margin="normal"
                                variant="filled"
                            />
                            <Button color='primary' variant="contained">Skomentuj</Button>
                        </Box>
                        <DialogContent>
                            {post.post.commentsAmount === 0
                                ? <Typography>Ten post nie ma jeszcze komentarzy. Bądź pierwszym który go napisze!</Typography>
                                : post.post.comments.map((title,id) =>
                                <ListItem key={id}>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )}
                        </DialogContent>
                    </List>
                </Dialog>
            );
        }


    }
}

export default NewsDialog;