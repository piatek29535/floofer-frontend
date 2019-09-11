import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import BackgroundImage1 from '../../images/welcomeScreen/welcomePic1.jpg';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Rating from '@material-ui/lab/Rating';


const CustomContentBox = (props) => {


    const styles = { // Consider moving styles to another file
        container:{

        },
        headerBox:{
            marginTop:'0',
            minHeight:'90vh',
            background :`url(${BackgroundImage1})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            opacity:'0.9',
        },
        headerTypographyTitle:{
          paddingBottom:'50px',
          textShadow:'0 0 0.5em #000000, 0 0 0.5em #000000, 0 0 0.5em #000000'
        },
        contentBox:{
            border:'1px solid red',
            minHeight:'90vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
        },
        cardContent:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            boxShadow:'10px 10px 10px 10px rgba(0, 0, 0, 0.5)'
        },
        cardContainers:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        footerBox:{
            minHeight:'90vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            alignContent:'stretch',
            flexDirection:'column',
        }

    };

    const opinions = props.opinions !== undefined ? props.opinions.filter((user) => user.id % 2 === 0) : [];

    return (
        <Container style={styles.container} maxWidth='xl'>
            <Box style={styles.headerBox} maxWidth="sm" my={2} ref={props.refs[0]}>
                <Typography style={styles.headerTypographyTitle} variant={"h1"}>Witaj w aplikacji Fluffer</Typography>
                <Typography variant={"h5"}>Twój wygodny i przejżysty komunikator na wyciągnięcie ręki</Typography>
            </Box>
            <Box style={styles.contentBox} my={2} ref={props.refs[1]}>
                <Container>
                    <Typography>Cos tu się wymyśli</Typography>
                </Container>
            </Box>
            <Box style={styles.contentBox} ref={props.refs[2]}>
                <Typography style={{paddingBottom:'100px', textShadow:'2px 2px 4px #000000'}} variant="h1">A oto co mówią o nas użytkownicy!</Typography>
                <Container maxWidth="lg">
                    <Grid container spacing={10}>
                        {opinions !== undefined ? opinions.map((user, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card style={styles.cardContent}>
                                    <Container style={styles.cardContainers}>
                                        <Avatar
                                            src={user.avatarUrl}
                                            title="Image title"
                                        />
                                        <Typography variant="h5" component="h2">
                                            {user.name}
                                        </Typography>
                                    </Container>
                                    <Container style={styles.cardContainers}>
                                        <CardContent>
                                            <Typography>
                                                {"``"+user.comment+"``"}
                                            </Typography>
                                            <Rating value={Number(user.rating)} readOnly />
                                        </CardContent>
                                    </Container>
                                </Card>
                            </Grid>
                        ))
                        : null}
                    </Grid>
                </Container>
            </Box>
            <Box id="benefits" style={styles.footerBox} my={2} ref={props.refs[3]}>
                <Container style={{flex:20}}>
                    <Typography>Footer</Typography>
                </Container>
                <Container style={{flex:1,backgroundColor:'#28313B'}} maxWidth='xl'>xD</Container>
            </Box>
        </Container>
    )
};

export default CustomContentBox;