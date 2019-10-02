import React, {Component} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import SignInUp from "./components/signInUp/SignInUp";
import WelcomeScreen from "./WelcomeScreen";

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={WelcomeScreen} />
                    <Route path={process.env.PUBLIC_URL + "/signUp"} component={SignInUp} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;