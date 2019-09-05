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

const CustomContentBox = (props) => {
    const styles = {
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
        },
        contentBox:{
            minHeight:'90vh',
            background:'url(https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_960_720.jpg)',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }

    };

    const cards = [1, 2, 3]; // Tempor

    return (
        <Container maxWidth={"xl"}>
            <Box id="aboutPage" style={styles.headerBox} maxWidth="sm" my={2}>
                <Typography>Witaj w aplikacji Fluffer {"\n"}</Typography>
                <Typography>Container 1</Typography>
                <Typography>Container 1</Typography>
            </Box>
            <Box id="benefits" style={styles.contentBox} my={2}>
                {"Container 2"}
            </Box>
            <Box id="recommendations" style={styles.contentBox} my={2}>
                <Container maxWidth="md">
                    <Grid container spacing={9}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia
                                        image="https://source.unsplash.com/random"
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
        </Container>
    )
};

export default CustomContentBox;