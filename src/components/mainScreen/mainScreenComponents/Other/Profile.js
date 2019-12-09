import React, {Component} from 'react';
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import {connect} from "react-redux";
import {fetchUserPostsAction} from "../../../../actions/fetchUserPostsAction";
import Button from "@material-ui/core/Button";

const styles = {
    mainContainer:{
        border:'1px solid red',
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
        marginTop:'-60px',
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
    }
};

class Profile extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.myId !== this.props.myId){
            this.props.dispatch(fetchUserPostsAction(this.props.myId))
        }
    }

    render() {
        const {isUserFetching, userData, userError} = this.props.user;
        const {userPostsFetching, userPosts, userPostsError} = this.props.userPostsData;

        return (
            <div style={styles.mainContainer}>
                <Box style={styles.backgroundTopImage}/>
                <Paper style={styles.contentContainer} elevation={10}>
                    <Box style={styles.userInfo}>
                        <Button>
                            <img
                                alt=" "
                                src="https://cdn.pixabay.com/photo/2018/09/03/10/10/cape-gannet-3650803_960_720.jpg"
                                style={styles.avatar} >
                            </img>
                        </Button>
                        <Typography>{userData.username}</Typography>
                    </Box>

                    <Box style={styles.followersAmount}>
                        <Typography>tutaj można zrobić ilość followersow i followee</Typography>
                    </Box>

                    <Box>
                        {userPosts.map((item, key) => (
                            <Typography>{item.content}</Typography>
                        ))}
                    </Box>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   userPostsData:state.userPostsReducers
});

export default connect(mapStateToProps)(Profile);