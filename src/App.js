import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import SignInUp from "./components/signInUp/SignInUp";
import WelcomeScreen from "./WelcomeScreen";
import MainContainer from "./components/mainScreen/MainContainer";
import {ProtectedRoute} from "./components/router/ProtectedRoute";

class App extends Component {
    render() {
        return (
            <BrowserRouter >
                <div>
                    <Route exact path="/" component={WelcomeScreen} />
                    <Route path="/signUp" component={SignInUp} />
                    <ProtectedRoute path="/main" component={MainContainer}/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;