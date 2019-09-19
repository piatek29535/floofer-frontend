import React, {Component} from 'react';
import './WelcomeScreen.css';
import CustomNavbar from "./components/welcomeScreen/CustomNavbar";
import CustomContentBox from "./components/welcomeScreen/CustomContentBox";
import {connect} from "react-redux";
import {fetchOpinionsFromServer} from "./actions/fetchOpinions";
import {initializeRefs} from "./actions/welcomeScreenRefs";

class WelcomeScreen extends Component {

    componentDidMount() {
        this.props.dispatch(fetchOpinionsFromServer());
        this.props.dispatch(initializeRefs())
    }

    render() {
        const randomNum = Math.floor(Math.random() * (12 - 7 + 1)) + 7;

        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

        return (
            <div className="App">
                <CustomNavbar
                    refs={this.props.navigationRefs}
                    random={randomNum}
                    scrollToRef={scrollToRef}/>
                <header className="App-header">
                  <CustomContentBox
                      opinions={this.props.json}
                      opinionsError={this.props.opinionsError}
                      opinionsFetching={this.props.opinionsFetching}
                      refs={this.props.navigationRefs}
                  />
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    json: state.fetchData.json,
    opinionsError: state.fetchData.opinionsError,
    opinionsFetching: state.fetchData.opinionsFetching,
    navigationRefs:state.initializeRefs.navigationRefs
});

export default connect(mapStateToProps)(WelcomeScreen);

