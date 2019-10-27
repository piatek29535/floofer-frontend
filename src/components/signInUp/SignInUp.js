import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import signUpBackground from '../../images/signInUp/signUpBackground.jpg';
import Fade from "@material-ui/core/Fade";
import Button from "react-bootstrap/Button";
import SignInContainer from "./SignInContainer";
import SignUpContainer from "./SignUpContainer";
import {connect} from "react-redux";
import {signInClicked, signUpClicked} from "../../actions/signInUpActions";

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
        padding:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flex:9
    }
};

class SignInUp extends Component {

    componentDidMount() {
        localStorage.setItem("token",null)
    }

    render() {
        return (
            <div style={styles.mainContainer}>
                <Fade in timeout={500}>
                    <Container style={styles.loginContainer}>
                        <Tabs
                            value={this.props.value}
                            onChange={(e,v) => v === 1 ? this.props.dispatch(signUpClicked()) : this.props.dispatch(signInClicked())}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                            style={styles.tabs}
                        >
                            <Tab style={styles.tab} label="Zaloguj się" />
                            <Tab style={styles.tab} label="Zarejestruj się" />
                        </Tabs>
                        {this.props.value === 0 ?
                            <SignInContainer style={styles.contentBox}/>
                            :
                            <SignUpContainer style={styles.contentBox} signUpData={this.props}/>
                        }
                    </Container>
                </Fade>
                <Button href="/" variant="dark" style={{marginTop:10}}>
                    Powrót do strony głownej
                </Button>
                {/*<CustomSnackbar />*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    value:state.signInUpReducers.value,
    signUpData: state.signInUpButtonReducers
});

export default connect(mapStateToProps)(SignInUp);