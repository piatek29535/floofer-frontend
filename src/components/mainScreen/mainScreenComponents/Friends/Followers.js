import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Profile from '@material-ui/icons/Person';
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import profilePic from "../../../../images/mainScreen/profilePic.png";

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
                                <Tooltip title="Odwiedź profil" placement="top">
                                    <Link to={`/main/profil/${item._id}`}>
                                        <IconButton style={{color:'white'}} edge="end">
                                            <Profile />
                                        </IconButton>
                                    </Link>
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