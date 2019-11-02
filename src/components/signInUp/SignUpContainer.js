import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import {signUpButtonClicked} from "../../actions/signInUpActions";
import {CircularProgress} from "@material-ui/core";
import CustomSnackbarRegister from "./CustomSnackbarRegister";

class SignUpContainer extends Component{

    state = {
        name:"",
        surname:"",
        email: "",
        password: "",
        birthDate: "2019-10-10",
        errorMessage:'',
    };

    handleChange = (e, field) => {
        switch(field){
            case "name":
                this.setState({...this.state, name:e.target.value, isError:false});
                break;
            case "surname":
                this.setState({...this.state, surname:e.target.value, isError:false});
                break;
            case "email":
                this.setState({...this.state, email:e.target.value, isError:false});
                break;
            case "password":
                this.setState({...this.state, password:e.target.value, isError:false});
                break;
            case "date":
                this.setState({...this.state, birthDate:e.target.value, isError:false});
                break;
            default:
                return;
        }
    };

    handleClose = () => {
        this.setState({
            isError:!this.state.isError
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.signUpData.signUpData.registerStatus !== prevProps.signUpData.signUpData.registerStatus
            && this.props.signUpData.signUpData.registerStatus !== 201){
            this.renderSwitch(this.props.signUpData.signUpData.registerStatus);
        }
    }

    renderSwitch = (code) => {
        switch(code){
            case 409:
                this.setState({
                    errorMessage:"Użytkownik już istnieje",
                    isError:true
                });
                break;
            case 400:
                this.setState({
                    errorMessage:"Podaj wszystkie dane",
                    isError:true
                });
                break;
            default:
                this.setState({
                    errorMessage:"Whops! Wystąpił błąd. Spróbuj jeszcze raz.",
                    isError:true
                });
                break;
        }
    };

    render() {

        return (
            <form style={this.props.style}>
                <Grid>
                    <TextField
                        required
                        label="Imię"
                        margin="normal"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e,"name")}
                        autoFocus
                        variant="outlined"
                    />
                    <TextField
                        required
                        label="Nazwisko"
                        margin="normal"
                        value={this.state.surname}
                        onChange={(e) => this.handleChange(e,"surname")}
                        variant="outlined"
                    />
                </Grid>
                <TextField
                    required
                    label="E-mail"
                    type="email"
                    margin="normal"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e,"email")}
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    required
                    label="Hasło"
                    type="password"
                    margin="normal"
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e,"password")}
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    required
                    id="date"
                    label="Data urodzenia"
                    type="date"
                    value={this.state.birthDate}
                    onChange={(e) => this.handleChange(e,"date")}
                />
                <Button
                    onClick={() => {this.props.signUpData.dispatch(signUpButtonClicked(this.state))}}
                    style={{marginTop:'20px'}}
                    variant="outline-success"
                >
                    {this.props.signUpData.signUpData.signUpButtonLoading ? <CircularProgress/> : 'Zarejestruj'}
                </Button>
                <CustomSnackbarRegister isError={this.state.isError} errorMessage={this.state.errorMessage} handleClose={this.handleClose}/>
            </form>
        );
    }
}



export default SignUpContainer;