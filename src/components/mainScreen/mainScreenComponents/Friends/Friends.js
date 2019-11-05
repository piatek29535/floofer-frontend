import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Followers from "./Followers";
import Following from "./Following";
import Search from "./Search";

const styles = {
    friendsContainer:{
        height:'100%',
    },
    friendsContainerTypography:{
        width:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottom:'1px solid grey',
        marginBottom:'10px'
    },
    topBar:{
        display:'flex',
        justifyContent: 'center',
    },
    contentContainer:{
        maxHeight:'80%',
        overflow:'auto'
    }
};

class Friends extends Component {

    state = {
        whichTab:0
    };

    handleChange = (val) => {
        this.setState({
            whichTab:val
        })
    };

    renderComponent = () => {
        switch (this.state.whichTab) {
            case 0:
                return (<Followers/>);
            case 1:
                return (<Following/>);
            case 2:
                return (<Search/>);
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
                <div style={styles.topBar}>
                    <Tabs
                        value={this.state.whichTab}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={(event, value) => this.handleChange(value)}
                    >
                        <Tab label="Obserwujący" />
                        <Tab label="Obserwowani" />
                        <Tab label="Wyszukaj znajomych" />
                    </Tabs>
                </div>
                <Container style={styles.contentContainer}>
                    {this.renderComponent()}
                </Container>
            </div>
        );
    }
}

export default Friends;