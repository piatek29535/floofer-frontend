import React, {Component} from 'react';
import Container from "@material-ui/core/Container";

const styles = {
    mainContainer:{
        overflow:'auto',
        flex:10,
    }
};

class CreateGroup extends Component {
    render() {
        return (
            <Container style={styles.mainContainer}>
                Create group here
            </Container>
        );
    }
}

export default CreateGroup;