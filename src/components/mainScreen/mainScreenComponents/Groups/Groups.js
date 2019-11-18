import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchGroups from "./SearchGroups";
import UserGroups from "./UserGroups";
import CreateGroup from "./CreateGroup";

const styles = {
    mainContainer:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around'
    },
    mainContainerTypography:{
        width:'90%',
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderBottom:'1px solid grey',
        marginBottom:'10px',
    },
    mainContainerTabs:{
        //Maybe something will be placed here
    }
};

class Groups extends Component {

    state = {
        currentTab:0,
    };

    handleTabChange = (value) => {
        this.setState({
            currentTab:value
        })
    };

    conditionalRendering = () => {
        switch(this.state.currentTab){
            case 0:
                return <SearchGroups/>;
            case 1:
                return <UserGroups/>;
            case 2:
                return <CreateGroup/>;
            default:
                return <SearchGroups/>;
        }
    };

    render() {
        return (
            <div style={styles.mainContainer}>
                <Container style={styles.mainContainerTypography}>
                    <Typography variant={"h4"}>
                        Grupy
                    </Typography>
                </Container>
                <Container style={styles.mainContainerTabs}>
                    <Tabs
                        centered
                        value={this.state.currentTab}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={(e,v) => this.handleTabChange(v)}
                    >
                        <Tab label="Twoje grupy" />
                        <Tab label="Szukaj grup" />
                        <Tab label="Stwórz grupę" />
                    </Tabs>
                </Container>
                {this.conditionalRendering()}
            </div>
        );
    }
}

export default Groups;