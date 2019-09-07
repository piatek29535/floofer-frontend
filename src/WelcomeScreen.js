import React, {Component} from 'react';
import './WelcomeScreen.css';
import CustomNavbar from "./components/welcomeScreen/CustomNavbar";
import CustomContentBox from "./components/welcomeScreen/CustomContentBox";
import {connect} from "react-redux";
import {fetchOpinionsFromServer} from "./actions";

class WelcomeScreen extends Component {

    componentDidMount() {
        this.props.dispatch(fetchOpinionsFromServer())
    }

    render() {
        const randomNum = Math.floor(Math.random() * (12 - 7 + 1)) + 7;

        return (
            <div className="App">
                <CustomNavbar random={randomNum}/>
                <header className="App-header">
                  <CustomContentBox opinions={this.props.json}/>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    json: state.json,
});

export default connect(mapStateToProps)(WelcomeScreen);

