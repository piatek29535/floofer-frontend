import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SignInUp from "./components/signInUp/SignInUp";
import WelcomeScreen from "./WelcomeScreen";
import RegisteredScreen from "./components/signInUp/RegisteredScreen";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={WelcomeScreen} />
                    <Route path="/signUp" component={SignInUp} />
                </div>
            </Router>
        );
    }
}

export default App;