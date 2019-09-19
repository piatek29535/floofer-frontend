import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import RegisteredScreen from "./RegisteredScreen";

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
            <Button onClick={() => alert("Here open the modal with acknowledgements")}
                    style={{marginTop:'20px'}}
                    variant="outline-success"
            >
                Zarejestruj
            </Button>
        </form>
    );
}

export default SignUpContainer;