import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import {fetchCurrentlyLoggedUser} from "../../../../actions/fetchCurrentlyLoggedUser";
import {connect} from "react-redux";

class Profile extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCurrentlyLoggedUser())
    }

    render() {
        console.log(this.props.user)

        return (
            <Container>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    user:state.mainUser
});

export default connect(mapStateToProps)(Profile);