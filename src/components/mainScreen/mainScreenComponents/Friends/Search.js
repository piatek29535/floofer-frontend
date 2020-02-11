import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Person from '@material-ui/icons/Person';
import Button from "@material-ui/core/Button";
import Observe from '@material-ui/icons/RemoveRedEye';
import Observing from '@material-ui/icons/CheckCircle'
import Typography from "@material-ui/core/Typography";
import Home from '@material-ui/icons/Home';
import Public from '@material-ui/icons/Public';
import {connect} from "react-redux";
import {searchUsersAction} from "../../../../actions/searchUsersAction";
import {Link} from "react-router-dom";
import profilePic from "../../../../images/mainScreen/profilePic.png";
import {followUserAction} from "../../../../actions/followUserAction";

const styles = {
    mainContainer:{
        marginTop:'2%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        height:'100%',
    },
    paper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    inputBase:{
        flex:9
    },
    iconButton: {
        flex:1,
        padding: 10,
    },
    friendsContainer: {
        padding:'2%'
    },
    individualFriend:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        width: 270,
        height:300
    },
    individualFriendAvatar:{
        width:50,
        height:50
    },
    individualFriendButtons:{
        height:'100%',
        padding:'5px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    individualFriendContent:{
        flex:3,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    individualFriendDesc:{
        textAlign:'center',
        width:'200px',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis'
    },
};

class Search extends Component {

    state = {
        inputBaseValue:'',
        searchButtonClicked:false
    };

    handleChange = (e) => {
        this.setState({
            inputBaseValue:e.target.value
        })
    };

    handleIsObserved = (id) => {
        this.props.dispatch(followUserAction(id, "search", this.state.inputBaseValue))
    };

    render() {

        const users = this.props.users.users;

        return (
            <div style={styles.mainContainer}>
                <Paper elevation={4} style={styles.paper}>
                    <InputBase
                        id="searchInputBase"
                        value={this.state.inputBaseValue}
                        onChange={(event) => this.handleChange(event)}
                        style={styles.inputBase}
                        placeholder="Wyszukaj znajomych"
                    />
                    <IconButton id="searchFriendsButton" onClick={() => {
                        this.props.dispatch(searchUsersAction(this.state.inputBaseValue)).then(() =>
                            this.setState({
                                searchButtonClicked:true
                            })
                        );
                    }} style={styles.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Container style={styles.friendsContainer}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {users.length === 0 && this.state.searchButtonClicked
                                ? <Typography id="noUsersTypography">
                                    Aby wyszukać znajomych, wpisz Imię lub Nazwisko osoby w pole powyżej.
                                </Typography>
                                : users.map(item => (
                                    <Grid key={item._id} item>
                                        <Paper id="singleUser" elevation={10} style={styles.individualFriend}>
                                            <Container style={styles.individualFriendContent}>
                                                <Avatar
                                                    style={styles.individualFriendAvatar}
                                                    alt=" "
                                                    src={
                                                        item.profilePic === undefined
                                                            ? profilePic
                                                            : `${process.env.REACT_APP_API_URL+'/'+item.profilePic}`
                                                    }/>
                                                <Typography style={styles.individualFriendDesc}>{item.first_name+" "+item.last_name}</Typography>
                                                <Button
                                                    style={styles.individualFriendDesc}
                                                    disabled
                                                    color="default"
                                                    startIcon={<Home />}
                                                    size="small"
                                                >
                                                    <Typography style={styles.individualFriendDesc}>{item.city}</Typography>
                                                </Button>
                                                <Button
                                                    style={styles.individualFriendDesc}
                                                    disabled
                                                    color="default"
                                                    startIcon={<Public />}
                                                    size="small"
                                                >
                                                    <Typography style={styles.individualFriendDesc}>{item.country}</Typography>
                                                </Button>
                                            </Container>
                                            <div style={{flex:1}}>
                                                <Divider/>
                                                <div style={styles.individualFriendButtons}>
                                                    <Button
                                                        id="followButton"
                                                        size="small"
                                                        style={{flex:1}}
                                                        onClick={() => this.handleIsObserved(item._id)}
                                                        variant={item.isFollowed === "true" ? "contained" : "outlined"}
                                                        color="primary"
                                                        startIcon={item.isFollowed === "true" ? <Observing/> :<Observe />}
                                                    >
                                                        {item.isFollowed === "true" ? "Obserwujesz": "Obserwuj"}
                                                    </Button>
                                                    <Link to={`/main/profil/${item._id}`}>
                                                        <Button
                                                            size="small"
                                                            color="primary"
                                                            variant="outlined"
                                                            startIcon={<Person />}
                                                        >
                                                            profil
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Paper>
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users:state.searchUsersReducers
});

export default connect(mapStateToProps)(Search);