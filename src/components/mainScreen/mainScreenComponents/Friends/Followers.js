import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Message from '@material-ui/icons/Comment';
import Profile from '@material-ui/icons/Person';
import Tooltip from "@material-ui/core/Tooltip";

const styles = {
    listItem:{
        color:'white',
        backgroundColor:'#004E92',
        margin:10
    }
};

class Followers extends Component {

    render() {
        const followers = this.props.followers;
        const followersFetching = this.props.followersFetching;

        return (
            <List>
                {!followersFetching
                    ? followers.map((item) =>
                        ( <ListItem style={styles.listItem} button key={item._id}>
                            <ListItemAvatar>
                                <Avatar alt=" " src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" />
                            </ListItemAvatar>
                            <ListItemText primary={item.username} />
                            <ListItemSecondaryAction>
                                <Tooltip title="Wyślij wiadomość" placement="top">
                                    <IconButton style={{color:'white'}} edge="end">
                                        <Message />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Odwiedź profil" placement="top">
                                    <IconButton style={{color:'white'}} edge="end">
                                        <Profile />
                                    </IconButton>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </ListItem>)
                    )
                    :null
                }
            </List>
        );
    }
}

export default Followers;