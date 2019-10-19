import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import Image from "react-bootstrap/Image";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link, Route, Switch} from "react-router-dom";
import News from "./mainScreenComponents/News";
import Friends from "./mainScreenComponents/Friends";
import Settings from "./mainScreenComponents/Settings";
import Paper from "@material-ui/core/Paper";
import Messages from "./mainScreenComponents/Messages";

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
        padding:'1% 1% 0 1%',
        flex:9,
        backgroundColor: '#FFFFFF'
    },
    contentPaper:{
        height:'100%',
        padding:'1%',
        boxShadow:'0 0 10px',
        borderBottomLeftRadius:'0',
        borderBottomRightRadius:'0',
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
                            {
                                [{name:"Aktualności", link:'/main/aktualnosci'},
                                    {name:"Znajomi", link:'/main/znajomi'},
                                    {name:"Wiadomości", link:'/main/wiadomosci'},
                                    {name:"Ustawienia", link:'/main/ustawienia'},
                                    {name:"Wyloguj", link:'/'},
                                ].map((item, i) => (
                                    <ListItem button key={i}>
                                        <Link style={{color:'white', width:'100%'}} to={item.link}>{item.name}</Link>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                </div>

                <div style={styles.contentPanel}>
                    <Paper style={styles.contentPaper}>
                        <Switch>
                            <Route
                                exact
                                path="/main/aktualnosci"
                                children={<News/>}
                            />
                            <Route
                                path="/main/znajomi"
                                children={<Friends/>}
                            />
                            <Route
                                path="/main/wiadomosci"
                                children={<Messages/>}
                            />
                            <Route
                                path="/main/ustawienia"
                                children={<Settings/>}
                            />
                        </Switch>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default MainContainer;