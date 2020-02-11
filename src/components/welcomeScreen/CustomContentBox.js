import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import BackgroundImage1 from '../../images/welcomeScreen/welcomePic1.jpg';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";

const CustomContentBox = (props) => {


    const styles = { // Consider moving styles to another file
        container:{
            minWidth:'100%',
            padding:0,
            margin:0
        },
        headerBox:{
            marginTop:'0',
            minHeight:'100vh',
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
            minHeight:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
        },
        cardContent:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            boxShadow: '0 0 10px'
        },
        cardContainers:{
            padding:'15px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        },
        errorCardContainer:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100px',
            margin:20
        },
        footerBox:{
            margin:0,
            minHeight:'100vh',
            display:'flex',
            flexDirection:'column',
        },
        footerContent:{
            flex:20,
            opacity:0.5,
            backgroundColor:'#28313B',
            maxWidth:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        },
        footerBottomBar:{
            flex:1,
            backgroundColor:'#28313B',
            maxWidth:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }

    };

    const opinions = props.opinions !== undefined ? props.opinions.filter((user) => user.id % 2 === 0) : [];

    return (
        <Container style={styles.container}>
            <Box style={styles.headerBox} maxWidth="sm" my={2} ref={props.refs[0]}>
                <Typography style={styles.headerTypographyTitle} variant={"h1"}>Witaj w aplikacji Floofer</Typography>
                <Typography variant={"h5"}>Twój wygodny i przejżysty komunikator na wyciągnięcie ręki</Typography>
            </Box>
            <Box style={styles.contentBox} my={2} ref={props.refs[1]}>
                <Typography>
                    Add something here: Carousel or sth else
                </Typography>
            </Box>
            <Box style={styles.contentBox} ref={props.refs[2]}>
                <Typography style={{paddingBottom:'100px', textShadow:'2px 2px 4px #000000'}} variant="h2">A oto co mówią o nas użytkownicy!</Typography>
                {props.opinionsFetching ?
                    <CircularProgress color="secondary"/>
                    : (props.opinionsError ?
                        <Card style={styles.cardContent}>
                            <Container style={styles.errorCardContainer}>
                                <Typography variant="h5" component="h2">
                                    Whopsie! Coś poszło nie tak. Spróbuj odświeżyć stronę klikając w przycisk "Odśwież"
                                </Typography>
                            </Container>
                            <CardActions>
                                <Button style={{display:'flex', alignSelf:'center'}} variant="contained" size="medium" color="primary" onClick={() => window.location.reload()}>Odśwież</Button>
                            </CardActions>
                        </Card>
                        :<Container maxWidth="lg">
                            <Grid container spacing={10} style={{alignItems:'center'}}>
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
                        </Container>)
                }
            </Box>
            <Box id="benefits" style={styles.footerBox} my={2} ref={props.refs[3]}>
                <Container style={styles.footerContent}>
                    <div style={{marginBottom:'100px'}}>
                        <Typography variant={"h1"}>...a to tylko początek!</Typography>
                        <Typography variant={"h2"}>Zarejestruj konto i przekonaj się sam</Typography>
                    </div>
                    <Fab
                        style={{backgroundColor:'blue', border:'2px solid white', minWidth:'20%', color:'white', justifyContent:'space-around'}}
                        variant="extended"
                        size="medium"
                    >
                        <ThumbUpAlt />
                        Zacznij już dziś
                    </Fab>
                </Container>
                <Container style={styles.footerBottomBar} maxWidth='xl'>
                    <div style={{width:'40%'}}>
                        <Typography style={{color:'grey', borderBottom:'1px white solid'}}>Autorzy</Typography>
                        <div style={{padding:'5px 0 0 0',display:'flex',justifyContent:'space-around'}}>
                            <Chip
                                id="nz"
                                label="Nikodem Zawirski"
                                onClick={()=>window.open('https://github.com/nzawirski')}
                                avatar={<Avatar alt="Natacha" src="https://avatars2.githubusercontent.com/u/43851876?s=460&v=4" />}
                            />
                            <Chip
                                id="ap"
                                label="Adam Piątek"
                                onClick={()=>window.open('https://github.com/piatek29535')}
                                avatar={<Avatar alt="Natacha" src="https://avatars3.githubusercontent.com/u/43843885?s=460&v=4" />}
                            />
                        </div>
                    </div>
                </Container>
            </Box>
        </Container>
    )
};

export default CustomContentBox;