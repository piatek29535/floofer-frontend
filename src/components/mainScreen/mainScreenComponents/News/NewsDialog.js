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
import MoreVert from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Close from "@material-ui/icons/Close";
import {commentEditAction} from "../../../../actions/commentEditAction";
import {commentDeleteAction} from "../../../../actions/commentDeleteAction";
import profilePic from "../../../../images/mainScreen/profilePic.png";
import {Link} from "react-router-dom";

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
    commentLikeAction:{
        display:'flex',
        alignItems:'center',
    },
    commentLikeAmount:{
        marginLeft:12
    },
    listItem:{
        display:'flex',
        flexWrap:'wrap'
    },
    listItemAvatar:{
        width:'80%',
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    image:{
        width:"100%",
        height:'200px',
        objectFit:'cover'
    }
};

class NewsDialog extends Component {

    state = {
        isCommentFieldShown: false,
        commentFieldValue:"",
        commentFieldError:false,
        menuOpen:false,
        anchorEl:null,
        currentCommentId:null,
        commentEditing:false,
        commentEditPlaceholder:null,
        currentPostId:null
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
        this.setState({commentFieldValue:"", isCommentFieldShown:false});
        this.props.dispatch(commentAction(post._id,this.state.commentFieldValue))
    };

    menuOpen = (e, commentId, placeholder, postId) => {
        this.setState({
            anchorEl:e.currentTarget,
            menuOpen:true,
            currentCommentId:commentId,
            commentEditing:false,
            commentEditPlaceholder:placeholder,
            currentPostId:postId
        })
    };

    menuClose = () => {
        this.setState({
            anchorEl:null,
            menuOpen:false,
            currentCommentId:null,
        })
    };

    toggleCommentEdit = (value) => {
        this.setState({
            menuOpen:false,
            commentEditing:true,
            commentEditValue:value
        })
    };

    commentPlaceholderEdit = (value) => {
        this.setState({
            commentEditPlaceholder:value
        })
    };

    commentEditDone = (e, post) => {
        if(e.key === "Enter"){
            this.props.dispatch(commentEditAction(this.state.currentCommentId, post._id, this.state.commentEditPlaceholder))
            this.commentEditCancel()
        }
    };

    commentEditCancel = () => {
        this.setState({
            commentEditing:true,
            currentCommentId:null,
            commentEditPlaceholder:null
        })
    };

    deleteComment = () => {
        this.props.dispatch(commentDeleteAction(this.state.currentCommentId,this.state.currentPostId));
        this.menuClose();
    };

    render() {
        let {isOpened, post} = this.props.newsDialogData;

        if(Object.entries(post).length === 0){
            return null
        }else{

            const likeCondition = post.likes.filter(e => e._id === this.props.myId).length > 0;

            return (
                <Dialog id="singlePostDialog" fullWidth onClose={() => {
                    if(this.props.fetchNewsFeed !== undefined){
                        this.props.dispatch(this.props.fetchNewsFeed());
                    }
                    this.props.dispatch(newsDialogPostClose())
                }} open={isOpened}>
                    <List>
                        <DialogTitle>
                            <Link to={`/main/profil/${post.author._id}`}>
                                <IconButton onClick={() => this.props.dispatch(newsDialogPostClose())}>
                                    <Avatar
                                        alt=""
                                        src={
                                            post.author.profilePic === undefined
                                                ? profilePic
                                                : `${process.env.REACT_APP_API_URL+'/'+post.author.profilePic}`
                                        }
                                    />
                                </IconButton>
                            </Link>
                            {`Uzytkownik ${post.author.first_name} napisał:`}
                        </DialogTitle>
                        <DialogContent>
                            <Typography gutterBottom style={styles.postTypography}>
                                {`"${post.content}"`}
                            </Typography>
                            {post.photo !== null
                            ?
                                <img
                                    alt=" "
                                    style={styles.image}
                                    src={process.env.REACT_APP_API_URL+'/'+post.photo.url}>
                                </img>
                            : null}
                        </DialogContent>
                        <DialogActions style={styles.dialogActions}>
                            <div style={styles.dialogActionsLikesAndComments}>
                                <Typography style={{color:'silver'}}>Polubienia: {post.likesAmount}</Typography>
                                <Typography style={{color:'silver'}}>Komentarze: {post.commentsAmount}</Typography>
                            </div>
                            <div>
                                <IconButton color={likeCondition ? 'secondary' : 'primary'} onClick={() => this.buttonClicked('like', post._id)}><ThumbUp fontSize='small'/></IconButton>
                                <IconButton id="showCommentSectionButton" color={this.state.isCommentFieldShown ? 'secondary' : 'primary'} onClick={() => this.buttonClicked('comment')}><Comment/></IconButton>
                            </div>
                        </DialogActions>
                        <Box id="commentSection" style={ this.state.isCommentFieldShown ? styles.commentBox : {display:'none'}}>
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
                                        style={styles.listItem}
                                        key={item._id}>
                                        <Box style={styles.listItemAvatar}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt=" "
                                                    style={styles.avatar}
                                                    src={
                                                        item.author.profilePic === undefined
                                                            ? profilePic
                                                            : `${process.env.REACT_APP_API_URL+'/'+item.author.profilePic}`
                                                    }
                                                >
                                                </Avatar>
                                            </ListItemAvatar>
                                            {
                                                item._id === this.state.currentCommentId && this.state.commentEditing
                                                    ?
                                                    <TextField
                                                        size="small"
                                                        variant="outlined"
                                                        value={this.state.commentEditPlaceholder}
                                                        onChange={(e) => this.commentPlaceholderEdit(e.target.value)}
                                                        onKeyPress={(e) => this.commentEditDone(e, post)}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment>
                                                                    <IconButton
                                                                        onClick={() => this.commentEditCancel()}
                                                                    >
                                                                        <Close />
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                    : <ListItemText
                                                        primary={item.author.first_name}
                                                        secondary={item.content}
                                                    />
                                            }
                                        </Box>
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
                                            {item.author._id === this.props.myId
                                                ?
                                                <IconButton
                                                    onClick={(e) => this.menuOpen(e, item._id, item.content, post._id)}
                                                    edge="end">
                                                    <MoreVert/>
                                                </IconButton>
                                                : null}
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            <Menu
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={this.state.menuOpen}
                                onClose={() => this.menuClose()}
                            >
                                <MenuItem onClick={() => this.toggleCommentEdit()}>Edytuj</MenuItem>
                                <MenuItem onClick={() => this.deleteComment()}>Usuń</MenuItem>
                            </Menu>
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
    commentLikeReducers:state.commentLikeReducers,
    commentEditReducers:state.commentEditReducers,
    commentDeleteReducers:state.commentDeleteReducers
});

export default connect(mapStateToProps)(NewsDialog);