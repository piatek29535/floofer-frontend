import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Button from "@material-ui/core/Button";

const styles = {
    mainContainer:{
        height:'100%',
    },
    mainContainerTypography:{
        width:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottom:'1px solid grey',
        marginBottom:'10px'
    },
    list:{
        maxHeight:'90%',
        overflow:'auto',
    },
    listItems:{
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },
    listItemImage:{
        width:'150px'
    },
    listItemExpansionPanelSummary:{
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        filter:'grayscale(60%)',
        height:'100px',
        color:'white',
        textShadow:"-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
},
    listItemExpansionPanelDetails:{
        flexDirection: 'column'
    },
    actionButtons:{
        display:'flex',
        marginTop:'10px',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
};

const images = [
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/10/30/16/19/fox-4589927_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/11/28/10/03/autumn-219972_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/12/08/02/59/bench-560435_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/04/03/12/05/tree-99852_960_720.jpg'

];

class Groups extends Component {

    render() {
        return (
            <div style={styles.mainContainer}>
                <Container style={styles.mainContainerTypography}>
                    <Typography variant={"h4"}>
                        Grupy
                    </Typography>
                </Container>
                <List style={styles.list}>
                    {
                        ['group','group','group','group','group','group','group','group','group','group','group','group']
                            .map((item,) => {

                                const random = Math.floor(Math.random() * images.length);
                                return (
                                <ListItem key={item} alignItems="flex-start">
                                    <div style={styles.listItems}>
                                        <ExpansionPanel elevation="20" style={{width:'100%'}}>
                                            <ExpansionPanelSummary
                                                style={{...styles.listItemExpansionPanelSummary, backgroundImage:`url(${images[random]})`,}}
                                                expandIcon={<ExpandMoreIcon />}
                                            >
                                                <Typography variant="h6">{item}</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails style={styles.listItemExpansionPanelDetails}>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet,
                                                </Typography>
                                                <Container style={styles.actionButtons}>
                                                    <Button style={{width:'40%'}} variant="contained" color='primary'>Dołącz</Button>
                                                    <Button style={{width:'40%'}} variant="outlined" color='primary'>Odwiedź</Button>
                                                </Container>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>
                                </ListItem>
                            )})
                    }
                </List>
            </div>
        );
    }
}

export default Groups;