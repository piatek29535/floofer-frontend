import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import {signUpButtonClicked} from "../../actions/signInUpActions";
import {CircularProgress} from "@material-ui/core";
import CustomSnackbarRegister from "./CustomSnackbarRegister";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

class SignUpContainer extends Component{

    state = {
        name:"",
        surname:"",
        email: "",
        password: "",
        country:'',
        town:'',
        errorMessage:'',
        emailError:false,
        passwordError:false,
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
                this.setState({...this.state, email:e.target.value, isError:false, emailError:false});
                break;
            case "password":
                this.setState({...this.state, password:e.target.value, isError:false, passwordError:false});
                break;
            case "country":
                this.setState({...this.state, country:e.target.value, isError:false});
                break;
            case "town":
                this.setState({...this.state, town:e.target.value, isError:false});
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

    emailValidation = (email) => {
        // source RFC 5322 - emailregex.com
        // eslint-disable-next-line no-useless-escape
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(emailRegex.test(email) && this.state.password.length >= 8){
            this.props.signUpData.dispatch(signUpButtonClicked(this.state))
        }else{
            if(this.state.password.length === 0 && this.state.email.length === 0){
                this.setState({...this.state, emailError:true, passwordError: true})
            }else if(!emailRegex.test(email)){
                this.setState({...this.state, emailError:true})
            }else{
                this.setState({...this.state, passwordError:true})
            }
        }
    };

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
                return;
        }
    };

    render() {

        return (
            <form style={this.props.style}>
                <Grid>
                    <TextField
                        id="name"
                        required
                        label="Imię"
                        margin="normal"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e,"name")}
                        autoFocus
                        variant="outlined"
                    />
                    <TextField
                        id="surname"
                        required
                        label="Nazwisko"
                        margin="normal"
                        value={this.state.surname}
                        onChange={(e) => this.handleChange(e,"surname")}
                        variant="outlined"
                    />
                </Grid>
                <TextField
                    id="email"
                    required
                    label={this.state.emailError ? "Niepoprawny E-mail" : "E-mail"}
                    type="email"
                    margin="normal"
                    error={this.state.emailError}
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e,"email")}
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="password"
                    required
                    label={this.state.passwordError ? "Błędne hasło" : "Hasło"}
                    type="password"
                    margin="normal"
                    error={this.state.passwordError}
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e,"password")}
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="country"
                    required
                    label="Kraj pochodzenia"
                    margin="normal"
                    value={this.state.country}
                    onChange={(e) => this.handleChange(e,"country")}
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="town"
                    required
                    label="Miasto"
                    margin="normal"
                    value={this.state.town}
                    onChange={(e) => this.handleChange(e,"town")}
                    fullWidth
                    variant="outlined"
                />
                <Button
                    id="submitButton"
                    onClick={() => {
                        this.emailValidation(this.state.email)}
                    }
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