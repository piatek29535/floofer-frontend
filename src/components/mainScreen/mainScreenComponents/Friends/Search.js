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
        width:400,
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
        isObserved:true,
    };

    handleChange = (e) => {
        this.setState({
            inputBaseValue:e.target.value
        })
    };

    handleIsObserved = () => {
        this.setState({
            isObserved:!this.state.isObserved
        })
    };

    render() {

        const users = this.props.users.users;

        return (
            <div style={styles.mainContainer}>
                <Paper elevation={4} style={styles.paper}>
                    <InputBase
                        value={this.state.inputBaseValue}
                        onChange={(event) => this.handleChange(event)}
                        style={styles.inputBase}
                        placeholder="Wyszukaj znajomych"
                    />
                    <IconButton onClick={() => this.props.dispatch(searchUsersAction(this.state.inputBaseValue))} style={styles.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Container style={styles.friendsContainer}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {users.map(item => (
                                <Grid key={item._id} item>
                                    <Paper elevation={10} style={styles.individualFriend}>
                                        <Container style={styles.individualFriendContent}>
                                            <Avatar
                                                style={styles.individualFriendAvatar}
                                                alt=" "
                                                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" />
                                            <Typography style={styles.individualFriendDesc}>{item.username}</Typography>
                                            <Button
                                                style={styles.individualFriendDesc}
                                                disabled
                                                color="default"
                                                startIcon={<Home />}
                                                size="small"
                                            >
                                                <Typography style={styles.individualFriendDesc}>TODO miasto</Typography>
                                            </Button>
                                            <Button
                                                style={styles.individualFriendDesc}
                                                disabled
                                                color="default"
                                                startIcon={<Public />}
                                                size="small"
                                            >
                                                <Typography style={styles.individualFriendDesc}>TODO Kraj</Typography>
                                            </Button>
                                        </Container>
                                        <div style={{flex:1}}>
                                            <Divider/>
                                            <div style={styles.individualFriendButtons}>
                                                <Button
                                                    size="small"
                                                    style={{flex:1}}
                                                    onClick={() => this.handleIsObserved()}
                                                    variant={this.state.isObserved ? "contained" : "outlined"}
                                                    color="primary"
                                                    startIcon={this.state.isObserved ? <Observing/> :<Observe />}
                                                >
                                                    {this.state.isObserved ? "Obserwujesz": "Obserwuj"}
                                                </Button>
                                                <Button
                                                    size="small"
                                                    style={{flex:1}}
                                                    color="primary"
                                                    variant="outlined"
                                                    startIcon={<Person />}
                                                >
                                                    profil
                                                </Button>
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
})

export default connect(mapStateToProps)(Search);