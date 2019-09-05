import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import BackgroundImage1 from '../../images/welcomeScreen/welcomePic1.jpg';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import CustomCarousel from "./CustomCarousel";

const CustomContentBox = (props) => {
    const styles = { // Consider moving styles to another file
        container:{
            margin:0,
            padding:0
        },
        headerBox:{
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
          paddingBottom:'50px'
        },
        contentBox:{
            backgroundColor:'red',
            minHeight:'90vh',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
        }

    };

    const cards = [1, 2, 3]; // Tempor

    return (
        <Container maxWidth={"xl"}>
            <Box id="aboutPage" style={styles.headerBox} maxWidth="sm" my={2}>
                <Typography style={styles.headerTypographyTitle} variant={"h1"}>Witaj w aplikacji Fluffer</Typography>
                <Typography variant={"h5"}>Twój wygodny i przejżysty komunikator na wyciągnięcie ręki</Typography>
            </Box>
            <Box id="benefits" style={styles.contentBox} my={2}>
                <CustomCarousel/>
            </Box>
            <Box id="recommendations" style={styles.contentBox}>
                <Typography style={{paddingBottom:'100px', textShadow:'2px 2px 4px #000000'}} variant="h1">A oto co mówią o nas użytkownicy!</Typography>
                <Container maxWidth="lg">
                    <Grid container spacing={10}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia
                                        image="url(https://source.unsplash.com/random)"
                                        title="Image title"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box id="benefits" style={styles.contentBox} my={2}>
                <Typography>Footer</Typography>
            </Box>
        </Container>
    )
};

export default CustomContentBox;