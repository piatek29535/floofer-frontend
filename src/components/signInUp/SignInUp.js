import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import signUpBackground from '../../images/signInUp/signUpBackground.jpg';
import Fade from "@material-ui/core/Fade";
import Button from "react-bootstrap/Button";

const styles = {
    mainContainer:{
        backgroundImage:`url(${signUpBackground})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column'
    },
    loginContainer:{
        height:'auto',
        width:'auto',
        display:'flex',
        justifyContent:'center',
        padding:0,
        borderRadius:'0 0 10px 10px',
        backgroundColor:'white',
        border:'1px solid grey',
        boxShadow: '0 0 10px',
        flexDirection:'column'
    },
    tabs:{
        flex:1,
    },
    tab:{
        borderBottom:'1px solid black'
    },
    contentBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:9
    }
};

class SignInUp extends Component {
    render() {
        return (
            <div style={styles.mainContainer}>
                <Fade in timeout={500}>
                    <Container style={styles.loginContainer}>
                        <Tabs
                            value={0}
                            // onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                            style={styles.tabs}
                        >
                            <Tab style={styles.tab} label="Sign In" />
                            <Tab style={styles.tab} label="Sign Up" />
                        </Tabs>
                        {/*<ContentBox>*/}
                        {/*    */}
                        {/*</ContentBox>*/}
                        <Container style={styles.contentBox}>
                            <span>Tutaj content</span>
                        </Container>
                    </Container>
                </Fade>
                <Button href="/" variant="dark" style={{marginTop:10}}>
                    Powrót do strony głownej
                </Button>
            </div>
        );
    }
}

export default SignInUp;