import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";

class SignInContainer extends Component{

    render() {
        return (
            <form style={this.props.style}>
                <TextField
                    autoFocus
                    label="E-mail"
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Hasło"
                    type="password"
                    margin="normal"
                    variant="outlined"
                />
                <Button onClick={() => alert("Zaloguj")} variant="outline-success">Zaloguj</Button>
            </form>
        );
    }


}

export default SignInContainer;