import React, {Component} from 'react';
import Toast from "react-bootstrap/Toast";
import PersonAdd from "@material-ui/icons/PersonAdd"
import Message from "@material-ui/icons/Message"
import ThumbUp from "@material-ui/icons/ThumbUp"
import ModeComment from "@material-ui/icons/ModeComment"
import Slide from "@material-ui/core/Slide";

const styles = {
    toast:{
        position:'fixed',
        bottom:20,
        left:20,
        width:'300px',
        borderColor:'blue'
    },
    toastHeader:{

    },
    toastBody:{

    }
};

class NotificationToast extends Component {
    render() {
        return (
            <Slide in direction="right">
                <Toast style={styles.toast}>
                    <Toast.Header closeButton={false}>
                        <ModeComment className="rounded mr-2" />
                        <strong className="mr-auto">Typ powiadomienia</strong>
                        <small>data</small>
                    </Toast.Header>
                    <Toast.Body>Co sie zrobiło</Toast.Body>
                </Toast>
            </Slide>
        );
    }
}

export default NotificationToast;