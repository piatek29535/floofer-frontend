import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import {signUpButtonClicked} from "../../actions/signInUpActions";
import {CircularProgress} from "@material-ui/core";

function SignUpContainer(props) {
    return (
        <form style={props.style}>
            <Grid>
                <TextField
                    label="Imię"
                    margin="normal"
                    autoFocus
                    variant="outlined"
                />
                <TextField
                    label="Nazwisko"
                    margin="normal"
                    variant="outlined"
                />
            </Grid>
            <TextField
                label="E-mail"
                type="email"
                margin="normal"
                fullWidth
                variant="outlined"
            />
            <TextField
                label="Hasło"
                type="password"
                margin="normal"
                fullWidth
                variant="outlined"
            />
            <TextField
                id="date"
                label="Data urodzenia"
                type="date"
                defaultValue="2019-10-14"
            />
            <Button href="/news"
                    onClick={() => props.signUpData.dispatch(signUpButtonClicked(100))}
                    style={{marginTop:'20px'}}
                    variant="outline-success"
            >
                {props.signUpData.signUpData.signUpButtonLoading ? <CircularProgress/> : 'Zarejestruj'}
            </Button>
        </form>
    );
}

export default SignUpContainer;