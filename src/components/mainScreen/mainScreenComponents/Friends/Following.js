import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Badge from "@material-ui/core/Badge/Badge";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Profile from '@material-ui/icons/Person';
import Message from '@material-ui/icons/Comment';
import RemoveFriend from '@material-ui/icons/Clear';
import Tooltip from "@material-ui/core/Tooltip";

class Following extends Component {
    render() {
        return (
            <List >
                {[1,2,3,4,5,6,76,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0].map((item, id) =>
                    ( <ListItem button key={id}>
                        <ListItemAvatar>
                            <Badge overlap="circle" color="primary" variant="dot">
                                <Avatar alt=" " src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" />
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText primary={"Imię nazwisko"} />
                        <ListItemSecondaryAction>
                            <Tooltip title="Wyślij wiadomość" placement="top">
                                <IconButton edge="end">
                                    <Message />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Odwiedź profil" placement="top">
                                <IconButton edge="end">
                                    <Profile />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Przestań obserwować" placement="top">
                                <IconButton edge="end">
                                    <RemoveFriend />
                                </IconButton>
                            </Tooltip>
                        </ListItemSecondaryAction>
                    </ListItem>)
                )}
            </List>
        );
    }
}

export default Following;