import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Followers from "./Followers";
import Following from "./Following";
import Search from "./Search";
import {connect} from "react-redux";
import {fetchFollowersAndFollowee} from "../../../../actions/followersAndFolloweFetchAction";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
    friendsContainer:{
        height:'100%',
    },
    friendsContainerTypography:{
        width:'90%',
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    topBar:{
        display:'flex',
        flex:1,
        justifyContent: 'center',
    },
    contentContainer:{
        maxHeight:'80%',
    },
};

class Friends extends Component {

    state = {
        whichTab:0
    };

    componentDidMount() {
        this.props.dispatch(fetchFollowersAndFollowee())
    }

    handleChange = (val) => {
        this.setState({
            whichTab:val
        })
    };

    renderComponent = () => {

        switch (this.state.whichTab) {
            case 0:
                return (<Followers
                    followers={this.props.followers.followers}
                    followersFetching={this.props.followers.followersFetching}
                />);
            case 1:
                return (<Following
                    followee={this.props.followers.followee}
                    followersFetching={this.props.followers.followersFetching}
                />);
            case 2:
                return (<Search
                    myId={this.props.myId}
                />);
            default:
                return (<Followers/>);
        }
    };

    render() {
        return (
            <div style={styles.friendsContainer}>
                <Container style={styles.friendsContainerTypography}>
                    <Typography variant={"h4"}>
                        Znajomi
                    </Typography>
                </Container>
                {this.props.followers.followersFetching || this.props.fetchingUsers
                    ? <LinearProgress color="primary"/>
                    : <LinearProgress color="primary" variant="determinate" value={100}/>}
                <div style={styles.topBar}>
                    <Tabs
                        variant="scrollable"
                        scrollButtons="on"
                        value={this.state.whichTab}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={(event, value) => this.handleChange(value)}
                    >
                        <Tab id="followers" label={`Obserwujący ${this.props.followers.followersAmount}`} />
                        <Tab id="followee" label={`Obserwowani ${this.props.followers.followeeAmount}`} />
                        <Tab id="searchForFriends" label="Wyszukaj znajomych" />
                    </Tabs>
                </div>
                <Container style={styles.contentContainer}>
                    {this.renderComponent()}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    followers:state.followersAndFolloweReducers,
    fetchingUsers:state.searchUsersReducers.fetchingUsers
});

export default connect(mapStateToProps)(Friends);