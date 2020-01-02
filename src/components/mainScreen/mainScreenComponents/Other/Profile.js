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
import People from "@material-ui/icons/People";
import PeopleOutine from "@material-ui/icons/PeopleOutline";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {followUserAction} from "../../../../actions/followUserAction";
import {newsDialogPostOpen} from "../../../../actions/newsDialogActions";
import NewsDialog from "../News/NewsDialog";
import {fetchPosts} from "../../../../actions/mainPosts";

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
        padding:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    followersAmount:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'1%',
        width:'50%',
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
    },
    followersAmountBox:{
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        margin:'2%'
    },
};

class Profile extends Component {

    state = {
        dialogOpened:false,
        bottomNavValue:2,
    };

    componentDidMount() {
        this.props.dispatch(fetchUserAction(this.props.match.params.id));
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
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
        this.props.dispatch(addPostAction(content,photos, this.props.myId))
        this.setState({
            dialogOpened:false
        })
    };

    profilePicChange = (image, userId) => {
        if(image.type.substring(0,5) === "image"){
            this.props.dispatch(changeProfilePicAction(image, userId))
        }else{
            // do sth if not a correct file
        }
    };

    renderButton = (isFollowed, userId) => {
        if(isFollowed === "true"){
            return <Button
                onClick={() => this.props.dispatch(followUserAction(userId, "profile", null))}
                color="primary"
                variant="outlined">
                Obserwujesz
            </Button>
        }else{
            return <Button
                onClick={() => this.props.dispatch(followUserAction(userId, "profile", null))}
                color="primary"
                variant="contained">
                Obserwuj
            </Button>
        }
    };

    render() {

        const {userFetching, userSuccess: userData, userError} = this.props.userDataFetch;
        const {userPostsFetching, userPosts, userPostsError} = this.props.userPostsData;

        const myProfileCondition = this.props.myId === this.props.match.params.id;

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
                                            alt=""
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
                                            onChange={(e) => this.profilePicChange(e.target.files[0], this.props.myId)}
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

                            <Typography style={{margin:10}}>{userData.first_name+" "+userData.last_name}</Typography>
                            {myProfileCondition
                                ? null
                                : this.renderButton(userData.isFollowed, userData._id)
                            }
                        </Box>

                        <Box style={styles.followersAmount}>
                            <Tooltip placement="left" title="0">
                                <Box style={styles.followersAmountBox}>
                                    <People/>
                                    <span>Obserwujący</span>
                                </Box>
                            </Tooltip>
                            <Tooltip placement="right" title="0">
                                <Box style={styles.followersAmountBox}>
                                    <PeopleOutine/>
                                    <span>Obserwowani</span>
                                </Box>
                            </Tooltip>
                        </Box>

                        <Typography variant="h5">Tablica aktualności</Typography>

                        <List style={styles.posts}>
                            {userPosts.length !== 0
                                ? userPosts.sort((a,b) => new Date(b.create_date) - new Date(a.create_date)).map((item, key) => (
                                    <ListItem
                                        onClick={() => this.props.dispatch(newsDialogPostOpen(item._id))}
                                        button
                                        key={key}
                                        style={{width:'100%'}}
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt=""
                                                src={`${process.env.REACT_APP_API_URL+'/'+userData.profilePic}`}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.author.first_name}
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
                    <NewsDialog
                        dispatch={this.props.dispatch}
                        fetchNewsFeed={undefined} //change it to fetch user posts
                        newsDialogData={this.props.newsDialogData}
                        myId={this.props.myId}/>
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => ({
    userDataFetch:state.fetchUserReducers,
    userPostsData:state.userPostsReducers, // replace it with normal user fetch
    addPostReducers:state.addPostReducers,
    changeProfilePic:state.changeProfilePicReducers,
    newsDialogData:state.newsDialogData
});

export default connect(mapStateToProps)(Profile);