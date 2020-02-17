import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {fetchCurrentlyLoggedUser} from "../../../../actions/fetchCurrentlyLoggedUser";
import {editCurrentlyLoggedUserAction} from "../../../../actions/editCurrentlyLoggedUserAction";

const styles = {
    settingsContainer:{
        height:'100%',
    },
    settingsContainerTypography:{
        width:'90%',
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    settingsChangeContainer:{
        minHeight:'74vh',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    nameGrid:{
        width:'50%',
    }
};

class Settings extends Component {

    state = {
        first_name:'',
        last_name: '',
        password:'',
        confirmPassword:'',
        country:'',
        city:''
    };

    componentDidMount() {
        this.props.dispatch(fetchCurrentlyLoggedUser())
    }


    handleChange = (e, field) => {
        switch(field){
            case "first_name":
                this.setState({...this.state, first_name:e.target.value});
                break;
            case "last_name":
                this.setState({...this.state, last_name:e.target.value});
                break;
            case "password":
                this.setState({...this.state, password:e.target.value});
                break;
            case "confirmPassword":
                this.setState({...this.state, confirmPassword:e.target.value});
                break;
            case "country":
                this.setState({...this.state, country:e.target.value});
                break;
            case "city":
                this.setState({...this.state, city:e.target.value});
                break;
            default:
                return;
        }
    };

    sendEdit = () => {
        if(this.state.password === this.state.confirmPassword){
            this.props.dispatch(editCurrentlyLoggedUserAction(this.state))
        }else{
            alert("wrong password")
        }
    };

    render() {
        if(this.props.userData.isUserFetching){
            return null;
        }else{
            const {
                first_name,
                last_name,
                country,
                city,
            } = this.props.userData.userData;

            return (
                <div style={styles.settingsContainer}>
                    <Container style={styles.settingsContainerTypography}>
                        <Typography variant={"h4"}>
                            Ustawienia konta
                        </Typography>
                    </Container>
                    {this.props.userData.isUserFetching
                            ? <LinearProgress color="primary"/>
                            : <LinearProgress color="primary" variant="determinate" value={100}/>}
                    <div style={styles.settingsChangeContainer}>
                        <Grid style={styles.nameGrid}>
                            <Grid container alignItems="stretch" justify="center">
                                <TextField
                                    placeholder={first_name}
                                    id="name"
                                    margin="normal"
                                    value={this.state.first_name}
                                    onChange={(e) => this.handleChange(e,"first_name")}
                                    autoFocus
                                    variant="outlined"
                                />
                                <TextField
                                    placeholder={last_name}
                                    id="surname"
                                    margin="normal"
                                    value={this.state.last_name}
                                    onChange={(e) => this.handleChange(e,"last_name")}
                                    variant="outlined"
                                />
                            </Grid>
                            <TextField
                                id="password"
                                label="Nowe hasło"
                                type="password"
                                margin="normal"
                                value={this.state.password}
                                onChange={(e) => this.handleChange(e,"password")}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                label="Potwierdź hasło"
                                type="password"
                                margin="normal"
                                value={this.state.confirmPassword}
                                onChange={(e) => this.handleChange(e,"confirmPassword")}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                placeholder={country}
                                id="country"
                                margin="normal"
                                value={this.state.country}
                                onChange={(e) => this.handleChange(e,"country")}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                placeholder={city}
                                id="town"
                                margin="normal"
                                value={this.state.city}
                                onChange={(e) => this.handleChange(e,"city")}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Button onClick={() => this.sendEdit()} color="primary" variant="outlined">Zatwierdź zmiany</Button>
                    </div>
                </div>
            );
        }


    }
}

const mapStateToProps = (state) => ({
    userData:state.mainUser,
    editUser:state.editCurrentlyLoggedUserReducers
});

export default connect(mapStateToProps)(Settings);