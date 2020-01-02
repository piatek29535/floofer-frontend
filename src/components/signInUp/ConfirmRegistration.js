import React, {Component} from 'react';
import signUpBackground from "../../images/signUp/signUpBackground.png";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {activateAccountAction} from "../../actions/activateAccountAction";
import {Redirect} from "react-router-dom";

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
    confirmContainer:{
        width:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px',
        padding:30,
        backgroundColor:'white',
        border:'1px solid grey',
        boxShadow: '0 0 10px',
        flexDirection:'column',
        overflow:'auto',
    }
};

class ConfirmRegistration extends Component {

    activateAccount = (id) => {
        this.props.dispatch(activateAccountAction(id))
    };

    render() {
        const {id} = this.props.match.params;
        const {activationSuccess} = this.props.activate;


        if(Object.keys(activationSuccess).length === 0){
            return (
                <div style={styles.mainContainer}>
                    <Container style={styles.confirmContainer}>
                        <Typography><b>Gratulacje!</b></Typography>
                        <Typography>Aby aktywować konto kliknij przycisk poniżej</Typography>
                        <Button
                            onClick={() => this.activateAccount(id)}
                            style={{margin:'20px 20px 0 20px'}}
                            variant="outlined"
                            color="primary">
                            Aktywuj
                        </Button>
                    </Container>
                </div>
            );
        }else{
            return (
                <Redirect to="/signUp"/>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    activate: state.activateAccountReducers
});

export default connect(mapStateToProps)(ConfirmRegistration);