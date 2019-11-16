import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";
import {login} from "../../actions/loginActions";
import {connect} from "react-redux";
import {CircularProgress} from "@material-ui/core";
import CustomSnackbarLogin from "./CustomSnackbarLogin";
import {Redirect} from "react-router-dom";

class SignInContainer extends Component{

    state = {
        credentials:{
            email:'',
            password:''
        },
        errorMessage:null,
        isError:false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.data.loginErrorStatus !== prevProps.data.loginErrorStatus){
            this.renderSwitch(this.props.data.loginErrorStatus,this.props.data.loginErrorData)
        }
    }

    onChange = (e, type) => {
        switch(type) {
            case 'email':{
                this.setState({
                    credentials: {
                        ...this.state.credentials,
                        email: e.target.value
                    },
                    isError:false
                });
                break;
            }
            case 'password':{
                this.setState({
                    credentials: {
                        ...this.state.credentials,
                        password: e.target.value
                    },
                    isError:false
                });
                break;
            }
            default:
                return this.state;
        }
    };

    handleClose = () => {
        this.setState({
            isError:!this.state.isError
        })
    };

    renderSwitch = (code, message) => {
        switch(code){
            case 404:
                this.setState({
                        ...this.state,
                        errorMessage:"Podany użytkownik nie istnieje",
                        isError:true
                    }
                );
                break;
            case 400:
                this.setState({
                        ...this.state,
                        errorMessage:"Podaj wszystkie dane",
                        isError:true
                    }
                );
                break;
            default:
                this.setState({
                        ...this.state,
                        errorMessage:"Whops! Wystąpił błąd. Spróbuj jeszcze raz.",
                        isError:true
                    }
                );
                break;
        }
    };

    render() {
        return (
            <form style={this.props.style}>

                <CustomSnackbarLogin handleClose={this.handleClose} isError={this.state.isError} errorMessage={this.state.errorMessage}/>

                {/*{this.renderSwitch(this.props.data.loginErrorStatus,this.props.data.loginErrorData)}*/}

                <TextField
                    autoFocus
                    label="E-mail"
                    type="email"
                    margin="normal"
                    value={this.state.credentials.email}
                    onChange={(e) => {this.onChange(e,'email')}}
                    variant="outlined"
                />
                <TextField
                    label="Hasło"
                    type="password"
                    margin="normal"
                    value={this.state.credentials.password}
                    onChange={(e) => this.onChange(e, 'password')}
                    variant="outlined"
                />
                <Button
                    onClick={() => {
                        this.props.dispatch(login(this.state.credentials))
                        // console.log(this.props.data)
                    }}
                    variant="outline-success"
                >
                    {this.props.data.isAuthenticating ? <CircularProgress/> : "Zaloguj"}
                </Button>
                {this.props.data.token ? <Redirect to='/main' /> : null}
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    data:state.loginReducer
});

export default connect(mapStateToProps)(SignInContainer);