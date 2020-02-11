import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";
import profilePic from "../../../images/mainScreen/profilePic.png";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
    notificationBox:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
    },
    notificationBoxAvatar:{
        marginRight:10
    },
    isReadCircleCheck:{
        color:'green'
    }
};

class NavbarNotificationBox extends Component {
    render() {

        const {message, userProfilePic, isRead} = this.props;

        return (
            <Box style={styles.notificationBox}>
                <Avatar
                    alt=""
                    style={styles.notificationBoxAvatar}
                    src={
                        userProfilePic === undefined
                            ? profilePic
                            : `${process.env.REACT_APP_API_URL+'/'+userProfilePic}`
                    }/>
                <span>
                        {message}
                    </span>
                <Checkbox id="isReadCheckbox" checked={isRead} disabled style={isRead ? styles.isReadCircleCheck : null}/>
            </Box>
        );
    }
}

export default NavbarNotificationBox;