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
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";

class Followers extends Component {
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
                        </ListItemSecondaryAction>
                    </ListItem>)
                )}
            </List>
        );
    }
}

export default Followers;