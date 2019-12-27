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
import {changeProfilePicAction} from "../../../../actions/changeProfilePicAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import profilePic from '../../../../images/mainScreen/profilePic.png'
import {fetchUserAction} from "../../../../actions/fetchUserAction";
import Photo from "@material-ui/icons/Photo";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";

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
        border:'1px solid lightgrey'
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
        boxShadow:'0 0 10px',
        marginBottom:'3%'
    },
    addPostIcon:{
        position:"fixed",
        bottom: 50,
        right: 50,
    },
    posts:{
        borderTop:'1px solid black',
        display:'flex',
        flexDirection:'column',
        width:'80%'
    }
};

class Profile extends Component {

    state = {
        dialogOpened:false,
    };

    componentDidMount() {
        this.props.dispatch(fetchUserAction(this.props.match.params.id));
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.match.params.id !== this.props.match.params.id){
            this.props.dispatch(fetchUserAction(nextProps.match.params.id));
        }
    }

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
        this.setState({
            dialogOpened:false
        })
    };

    profilePicChange = (image) => {
        if(image.type.substring(0,5) === "image"){
            this.props.dispatch(changeProfilePicAction(image))
        }else{
            // do sth if not a correct file
        }
    };

    render() {

        const {userFetching, userSuccess: userData, userError} = this.props.userDataFetch;
        const {userPostsFetching, userPosts, userPostsError} = this.props.userPostsData;

        const myProfileCondition = this.props.myId === this.props.match.params.id;

        console.log(userPosts)

        if(userFetching){
            return null
        }else{
            return (
                <div style={styles.mainContainer}>
                    <Box style={styles.backgroundTopImage}/>
                    <Paper style={styles.contentContainer} elevation={10}>
                        <Box style={styles.userInfo}>
                            {
                                myProfileCondition
                                    ?
                                    <Button
                                        component="label"
                                    >
                                        <img
                                            alt=" "
                                            src={
                                                userData.profilePic === undefined
                                                    ? profilePic
                                                    : `${process.env.REACT_APP_API_URL+'/'+userData.profilePic}`
                                            }
                                            style={styles.avatar} >
                                        </img>
                                        <input
                                            type="file"
                                            style={{ display: "none" }}
                                            accept="image/*"
                                            onChange={(e) => this.profilePicChange(e.target.files[0])}
                                        />
                                    </Button>
                                    :
                                    <img
                                        alt=" "
                                        src={
                                            userData.profilePic === undefined
                                                ? profilePic
                                                : `${process.env.REACT_APP_API_URL+'/'+userData.profilePic}`
                                        }
                                        style={styles.avatar} >
                                    </img>
                            }

                            <Typography>{userData.username}</Typography>
                        </Box>

                        <Box style={styles.followersAmount}>
                            <Typography>tutaj można zrobić ilość followersow i followee</Typography>
                        </Box>

                        <Typography variant="h5">Tablica aktualności</Typography>

                        <List style={styles.posts}>
                            {userPosts.length !== 0
                                ? userPosts.sort((a,b) => new Date(b.create_date) - new Date(a.create_date)).map((item, key) => (
                                    <ListItem
                                        button
                                        key={key}
                                        style={{width:'100%'}}
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt=" "
                                                src={`${process.env.REACT_APP_API_URL+'/'+userData.profilePic}`}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={"autor imie"}
                                            secondary={item.content}/>

                                        {
                                            item.photo !== null
                                                ?
                                                <ListItemSecondaryAction>
                                                    <IconButton edge="end" disabled>
                                                        <Photo/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                                :
                                                null
                                        }


                                    </ListItem>

                                    //-------

                                    // <Paper key={key}>
                                    //     <Typography>{item.content}</Typography>
                                    //     {item.photo
                                    //     ? <img
                                    //             alt={''}
                                    //             style={{width:200, height:200, objectFit:'cover'}}
                                    //             src={process.env.REACT_APP_API_URL+'/'+item.photo.url}
                                    //         />
                                    //     : null}
                                    //
                                    // </Paper>
                                ))
                                :
                                <Typography style={{margin:'5%', alignSelf:'center'}}>Ten użytkownik nie opublikował jeszcze nic na swojej tablicy</Typography>
                            }
                        </List>
                    </Paper>

                    {
                        myProfileCondition
                            ?
                            <Tooltip onClick={() => this.toggleOnDialog()} style={styles.addPostIcon} title="Dodaj post" placement="top">
                                <Fab color="primary">
                                    <Add/>
                                </Fab>
                            </Tooltip>
                            :
                            null
                    }


                    <DialogComponent
                        toggleOffDialog={this.toggleOffDialog}
                        dialogOpened={this.state.dialogOpened}
                        addPost={this.addPost}
                    />
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => ({
    userDataFetch:state.fetchUserReducers,
    userPostsData:state.userPostsReducers, // replace it with normal user fetch
    addPostReducers:state.addPostReducers,
    changeProfilePic:state.changeProfilePicReducers
});

export default connect(mapStateToProps)(Profile);