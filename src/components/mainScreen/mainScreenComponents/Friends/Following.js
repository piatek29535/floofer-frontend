import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Profile from '@material-ui/icons/Person';
import Message from '@material-ui/icons/Comment';
import RemoveFriend from '@material-ui/icons/Clear';
import Tooltip from "@material-ui/core/Tooltip";
import StopFollowingDialog from "./StopFollowingDialog";
import {connect} from "react-redux";
import {followUserAction} from "../../../../actions/followUserAction";
import {Link} from "react-router-dom";
import profilePic from "../../../../images/mainScreen/profilePic.png";

const styles = {
    listItem:{
        color:'white',
        backgroundColor:'#004E92',
        margin:10
    }
};

class Following extends Component {

    state = {
        dialogOpen:false,
        followeeUsername:null,
        followeeId:null
    };

    handleDialogClose = (id, action) => {
        if(action === 'unfollow'){
            this.props.dispatch(followUserAction(id, "followers", null));
        }
        this.setState({
            dialogOpen:false,
            followeeUsername:null,
            followeeId:null
        })
    };

    handleDialogOpen = (username, id) => {
        this.setState({
            dialogOpen:true,
            followeeUsername:username,
            followeeId:id
        })
    };

    render() {

        const followee = this.props.followee;
        const followersFetching = this.props.followersFetching;
        // const followUnfollowUser = this.props.followUnfollowUser

        return (
            <List>
                {!followersFetching
                    ? followee.map((item) =>
                        ( <ListItem style={styles.listItem} button key={item._id}>
                            <ListItemAvatar>
                                <Avatar
                                    alt=" "
                                    src={
                                        item.profilePic === undefined
                                            ? profilePic
                                            : `${process.env.REACT_APP_API_URL+'/'+item.profilePic}`
                                    }/>
                            </ListItemAvatar>
                            <ListItemText primary={item.first_name+" "+item.last_name} />
                            <ListItemSecondaryAction>
                                <Tooltip title="Wyślij wiadomość" placement="top">
                                    <IconButton style={{color:'white'}} edge="end">
                                        <Message />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Odwiedź profil" placement="top">
                                    <Link to={`/main/profil/${item._id}`}>
                                        <IconButton style={{color:'white'}} edge="end">
                                            <Profile />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Przestań obserwować" placement="top">
                                    <IconButton onClick={() => this.handleDialogOpen(item.username, item._id)} style={{color:'white'}} edge="end">
                                        <RemoveFriend />
                                    </IconButton>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </ListItem>)
                    )
                    : null}
                <StopFollowingDialog
                    handleClose={this.handleDialogClose}
                    isOpened={this.state.dialogOpen}
                    followeeUsername={this.state.followeeUsername}
                    followeeId={this.state.followeeId}
                />
            </List>
        );
    }
}

const mapStateToProps = (state) => ({
    followUnfollowUser:state.followUserReducers
});

export default connect(mapStateToProps)(Following);