import React, {Component} from 'react';
import './WelcomeScreen.css';
import CustomNavbar from "./components/welcomeScreen/CustomNavbar";
import CustomContentBox from "./components/welcomeScreen/CustomContentBox";

class WelcomeScreen extends Component {

    render() {
        const randomNum = Math.floor(Math.random() * (12 - 7 + 1)) + 7;

        return (
            <div className="App">
                <CustomNavbar random={randomNum}/>
                <header className="App-header">
                  <CustomContentBox/>
                </header>
            </div>
        );
    }
}

export default WelcomeScreen;