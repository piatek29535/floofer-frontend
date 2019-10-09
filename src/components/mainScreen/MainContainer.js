import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Image from "react-bootstrap/Image";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const styles = {
    mainContainer:{
        display:'flex',
        flexDirection:'row',
        height:'100vh',
    },


    //Right menu
    menuPanel:{
        backgroundColor:'#004E92',
        flex:2,
        color:'#FFFFFF'
    },
    avatarAndName:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        borderBottom:'1px solid #6699CC',
        paddingBottom:'20px'
    },
    avatar:{
        margin:'20px 20px 10px 20px',
        width:180,
        height:171,
        objectFit:'cover'
    },
    listContainer:{
        color:'#FFFFFF'
    },
    listRouter:{
        color:'#FFFFFF'
    },

    //Content
    contentPanel:{
        padding:'1%',
        flex:9,
        backgroundColor: '#FFFFFF'
    }
};

class MainContainer extends Component {
    render() {
        return (
            <div style={styles.mainContainer}>
                <div style={styles.menuPanel}>

                    <div style={styles.avatarAndName}>
                        <Image
                            style={styles.avatar}
                            src="https://cdn.pixabay.com/photo/2018/09/03/10/10/cape-gannet-3650803_960_720.jpg"
                            roundedCircle />
                        <Typography variant="h6">Imię Nazwisko</Typography>
                    </div>

                    <div style={styles.listContainer}>
                        <List>
                                {/*<Router>*/}
                                {/*    <Switch>*/}
                                {/*        <Route exact path="/aktualności">*/}
                                {/*        </Route>*/}
                                {/*        <Route path="/znajomi">*/}
                                {/*        </Route>*/}
                                {/*        <Route path="/ustawienia">*/}
                                {/*        </Route>*/}
                                {/*        <Route path="wyloguj">*/}
                                {/*        </Route>*/}
                                {/*    </Switch>*/}
                                {/*</Router>*/}
                            {
                                [{name:"Aktualności", link:'/news'},
                                    {name:"Znajomi", link:'/znajomi'},
                                    {name:"Ustawienia", link:'/ustawienia'},
                                    {name:"Wyloguj", link:'/wyloguj'},
                                    ].map((item, i) => (

                                        <ListItem button key={i}>
                                            <Link to={item.link}>{item.name}</Link>
                                        </ListItem>
                                ))
                            }
                        </List>
                    </div>
                </div>

                <div style={styles.contentPanel}>
                    <Paper>
                        <Typography variant="h5" component="h3">
                            This is a sheet of paper.
                        </Typography>
                        <Typography component="p">
                            Paper can be used to build surface or other elements for your application.
                        </Typography>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default MainContainer;