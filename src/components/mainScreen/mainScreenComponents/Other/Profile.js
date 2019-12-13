import React, {Component} from 'react';
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import DialogComponent from "./DialogComponent";
import {addPostAction} from "../../../../actions/addPostAction";

const styles = {
    mainContainer:{
        height:'100%',
        overflow:'auto',
    },
    backgroundTopImage:{
        height:'300px',
        width:'100%',
        background:`url(https://cdn.pixabay.com/photo/2017/03/25/18/06/color-2174065_960_720.png)`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
    },
    avatar:{
        width:180,
        height:171,
        objectFit:'cover',
    },
    contentContainer:{
        marginTop:'-100px',
        width:'90%',
        marginLeft:'5%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column'
    },
    userInfo:{
        padding:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    followersAmount:{
        margin:'1%',
        width:'50%',
        boxShadow:'0 0 10px'
    },
    addPostIcon:{
        position:"fixed",
        bottom: 50,
        right: 50,
    }
};

class Profile extends Component {

    state = {
        dialogOpened:false,
    };

    toggleOnDialog = () => {
        this.setState({
            dialogOpened:true
        })
    };

    toggleOffDialog = () => {
        this.setState({
            dialogOpened:false
        })
    };

    addPost = (content, photos) => {
        this.props.dispatch(addPostAction(content,photos))
    };

    render() {
        const {isUserFetching, userData, userError} = this.props.user;
        const {userPostsFetching, userPosts, userPostsError} = this.props.userPostsData;

        console.log(this.props.addPostReducers)

        return (
            <div style={styles.mainContainer}>
                <Box style={styles.backgroundTopImage}/>
                <Paper style={styles.contentContainer} elevation={10}>
                    <Box style={styles.userInfo}>
                        <Button
                            component="label"
                        >
                            <img
                                alt=" "
                                src="https://cdn.pixabay.com/photo/2018/09/03/10/10/cape-gannet-3650803_960_720.jpg"
                                style={styles.avatar} >
                            </img>
                            <input
                                type="file"
                                style={{ display: "none" }}
                            />
                        </Button>
                        <Typography>{userData.username}</Typography>
                    </Box>

                    <Box style={styles.followersAmount}>
                        <Typography>tutaj można zrobić ilość followersow i followee</Typography>
                    </Box>

                    <Box>
                        {userPosts.map((item, key) => (
                            <Typography key>{item.content}</Typography>
                        ))}
                    </Box>
                </Paper>

                <Tooltip onClick={() => this.toggleOnDialog()} style={styles.addPostIcon} title="Dodaj post" placement="top">
                    <Fab color="primary">
                        <Add/>
                    </Fab>
                </Tooltip>

                <DialogComponent
                    toggleOffDialog={this.toggleOffDialog}
                    dialogOpened={this.state.dialogOpened}
                    addPost={this.addPost}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userPostsData:state.userPostsReducers,
    addPostReducers:state.addPostReducers
});

export default connect(mapStateToProps)(Profile);