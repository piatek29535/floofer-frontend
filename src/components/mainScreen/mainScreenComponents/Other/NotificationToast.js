import React, {Component} from 'react';
import Toast from "react-bootstrap/Toast";
import PersonAdd from "@material-ui/icons/PersonAdd"
import Message from "@material-ui/icons/Message"
import ThumbUp from "@material-ui/icons/ThumbUp"
import ModeComment from "@material-ui/icons/ModeComment"
import Button from "@material-ui/core/Button";
import {newsDialogPostOpen} from "../../../../actions/newsDialogActions";
import {connect} from "react-redux";

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

    renderIcon = () => {
        switch(this.props.content.type){
            case 'Nowy obserwator':
                return <PersonAdd className="rounded mr-2" />;
            case 'Komentarz':
                return <Message className="rounded mr-2" />;
            case 'Polubienie posta':
                return <ThumbUp className="rounded mr-2" />;
            case 'Polubienie komentarza':
                return <ModeComment className="rounded mr-2" />;
            default:
                return;
        }
    };

    render() {
        const {type:header, body} = this.props.content;

        console.log(this.props.relevantPost)

        return (
            <Toast
                style={styles.toast}
                show={this.props.showToast}
                delay={5000}
                onClose={() => this.props.closeToast()}
                autohide
                animation
            >
                <Toast.Header>
                    {this.renderIcon()}
                    <strong className="mr-auto">{header}</strong>
                </Toast.Header>
                <Toast.Body>{body}</Toast.Body>
                {header === "Nowy obserwator"
                    ? null
                    :  <Button
                        color="primary"
                        variant="outlined"
                        size="small"
                        className="m-2"
                        onClick={() => this.props.dispatch(newsDialogPostOpen(this.props.relevantPost))}
                    >Otwórz post</Button>}
            </Toast>
        );
    }
}

export default connect()(NotificationToast);