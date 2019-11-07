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
import {Typography} from "@material-ui/core";

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
        width: 250,
        height:200
    },
    individualFriendAvatar:{
        width:50,
        height:50
    },
    individualFriendButtons:{
        padding:'2px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },
    individualFriendContent:{
        flex:3,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    individualFriendNameAndSurname:{
        width:'200px',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis'
    }
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
    }

    render() {
        return (
            <div style={styles.mainContainer}>
                <Paper elevation={4} style={styles.paper}>
                    <InputBase
                        value={this.state.inputBaseValue}
                        onChange={(event) => this.handleChange(event)}
                        style={styles.inputBase}
                        placeholder="Wyszukaj znajomych"
                    />
                    <IconButton onClick={() => console.log(this.state.inputBaseValue)} style={styles.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Container style={styles.friendsContainer}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                                <Grid key={value} item>
                                    <Paper elevation={8} style={styles.individualFriend}>
                                        <Container style={styles.individualFriendContent}>
                                            <Avatar
                                                style={styles.individualFriendAvatar}
                                                alt=" "
                                                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" />
                                                <Typography style={styles.individualFriendNameAndSurname}>Grzegorz Brzęczyszczykiewicz</Typography>
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
                                                    startIcon={<Person />}
                                                >
                                                    Zobacz profil
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

export default Search;