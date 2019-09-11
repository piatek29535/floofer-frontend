import React, {Component} from 'react';
import './WelcomeScreen.css';
import CustomNavbar from "./components/welcomeScreen/CustomNavbar";
import CustomContentBox from "./components/welcomeScreen/CustomContentBox";
import {connect} from "react-redux";
import {fetchOpinionsFromServer} from "./actions/fetchOpinions";

class WelcomeScreen extends Component {

    componentDidMount() {
        this.props.dispatch(fetchOpinionsFromServer())
    }

    render() {
        const randomNum = Math.floor(Math.random() * (12 - 7 + 1)) + 7;

        const scrollToRef = () => window.scrollTo(0, about.current.offsetTop-70);

        const about = React.createRef();
        const benefits = React.createRef();
        const opinions = React.createRef();
        const footer = React.createRef();

        return (
            <div className="App">
                <CustomNavbar random={randomNum} scrollToRef={scrollToRef}/>
                <header className="App-header">
                  <CustomContentBox opinions={this.props.json} refs={[about, benefits, opinions, footer]}/>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    json: state.fetchData.json,
});

export default connect(mapStateToProps)(WelcomeScreen);

