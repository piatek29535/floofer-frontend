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
import {connect} from "react-redux";
import {likeAction} from "../../../../actions/likeAction";
import {commentAction} from "../../../../actions/commentAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {commentLikeAction} from "../../../../actions/commentLikeAction";

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
    },
    avatar:{
        backgroundColor:'#004E92'
    },
    commentLikeAction:{
        display:'flex',
        alignItems:'center'
    },
    commentLikeAmount:{
        marginLeft:12
    }
};

class NewsDialog extends Component {

    state = {
        isCommentFieldShown: false,
        commentFieldValue:"",
        commentFieldError:false
    };

    buttonClicked = (type, id) => {
        switch(type){
            case 'like':{
                this.props.dispatch(likeAction(id));
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

    commentTextFieldChange = (value) => {
        this.setState({
            ...this.state,
            commentFieldValue:value,
            commentFieldError:false,
        })
    };

    postComment = (post) => {
        this.setState({commentFieldValue:"", isCommentFieldShown:false})
        this.props.dispatch(commentAction(post._id,this.state.commentFieldValue))
    };

    render() {
        let {isOpened, post} = this.props.newsDialogData;

        if(Object.entries(post).length === 0){
            return null
        }else{

            const likeCondition = post.likes.filter(e => e._id === this.props.myId).length > 0;

            return (
                <Dialog fullWidth onClose={() => {
                    this.props.dispatch(this.props.fetchNewsFeed());
                    this.props.dispatch(newsDialogPostClose())
                }} open={isOpened}>
                    <List>
                        <DialogTitle>
                            <IconButton>
                                <Avatar
                                    style={styles.avatar}
                                    alt=" "
                                    // src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png"
                                >
                                    {post.author.username.charAt(0).toLocaleUpperCase()}
                                </Avatar>
                            </IconButton>
                            {`Uzytkownik ${post.author.username} napisał:`}
                        </DialogTitle>
                        <DialogContent>
                            <Typography gutterBottom style={styles.postTypography}>
                                {`"${post.content}"`}
                            </Typography>
                        </DialogContent>
                        <DialogActions style={styles.dialogActions}>
                            <div style={styles.dialogActionsLikesAndComments}>
                                <Typography style={{color:'silver'}}>Polubienia: {post.likesAmount}</Typography>
                                <Typography style={{color:'silver'}}>Komentarze: {post.commentsAmount}</Typography>
                            </div>
                            <div>
                                <IconButton color={likeCondition ? 'secondary' : 'primary'} onClick={() => this.buttonClicked('like', post._id)}><ThumbUp fontSize='small'/></IconButton>
                                <IconButton color={this.state.isCommentFieldShown ? 'secondary' : 'primary'} onClick={() => this.buttonClicked('comment')}><Comment/></IconButton>
                            </div>
                        </DialogActions>
                        <Box style={ this.state.isCommentFieldShown ? styles.commentBox : {display:'none'}}>
                            <TextField
                                style={styles.commentBoxField}
                                error={this.state.commentFieldError}
                                id="outlined-multiline-static"
                                label={this.state.commentFieldError ? "Podaj zawartość!" : "Twój komentarz"}
                                multiline
                                rows="4"
                                margin="normal"
                                variant="filled"
                                value={this.state.commentFieldValue}
                                onChange={(e) => this.commentTextFieldChange(e.target.value)}
                            />
                            <Button onClick={() => this.state.commentFieldValue.length !== 0
                                ? this.postComment(post)
                                : this.setState({commentFieldError:true})}
                                    color='primary'
                                    variant="contained">Skomentuj</Button>
                        </Box>
                        <Divider/>
                        <DialogContent>
                            {post.commentsAmount === 0
                                ? <Typography>Ten post nie ma jeszcze komentarzy. Bądź pierwszym który go napisze!</Typography>
                                : post.comments.map((item) =>
                                    <ListItem
                                        button
                                        key={item._id}>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt=" "
                                                style={styles.avatar}
                                                // src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png"
                                            >
                                                {item.author.username.charAt(0).toLocaleUpperCase()}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.author.username}
                                            secondary={item.content}/>
                                        <ListItemSecondaryAction style={styles.commentLikeAction}>
                                            <IconButton
                                                onClick={() => this.props.dispatch(commentLikeAction(item._id,post._id))}
                                                edge="end">
                                                <ThumbUp
                                                    fontSize='small'
                                                    color={item.likes.filter(e => e._id === this.props.myId).length > 0 ? "secondary" : "primary"}
                                                />
                                            </IconButton>
                                            <span style={styles.commentLikeAmount}>{item.likesAmount}</span>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                        </DialogContent>
                    </List>
                </Dialog>
            );
        }


    }
}

const mapStateToProps = (state) => ({
    likedPost:state.likeReducers,
    commentedPost:state.commentReducers,
    commentLikeReducers:state.commentLikeReducers
});

export default connect(mapStateToProps)(NewsDialog);