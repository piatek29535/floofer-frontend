import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link, Route, Switch} from "react-router-dom";
import News from "./mainScreenComponents/News/News";
import Friends from "./mainScreenComponents/Friends/Friends";
import Settings from "./mainScreenComponents/Settings/Settings";
import Paper from "@material-ui/core/Paper";
import Messages from "./mainScreenComponents/Messages/Messages";
import Groups from "./mainScreenComponents/Groups/Groups";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const styles = {
    mainContainer:{
        display:'flex',
        flexDirection:'row',
        height:'100vh',
    },


    //Right menu
    menuPanel:{
        display:'flex',
        flexDirection:'column',
        overflow:'auto',
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
        paddingBottom:'20px',
        wordBreak:'break-all'
    },
    avatar:{
        width:180,
        height:171,
        objectFit:'cover'
    },
    listContainer:{
        color:'#FFFFFF',
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
                        <IconButton>
                            <Avatar
                                alt=" "
                                src="https://cdn.pixabay.com/photo/2018/09/03/10/10/cape-gannet-3650803_960_720.jpg"
                                style={styles.avatar} />

                        </IconButton>
                        <Typography variant="h6">Imię</Typography>
                        <Typography variant="h6">Nazwisko</Typography>
                    </div>

                    <div style={styles.listContainer}>
                        <List>
                            {
                                [{name:"Aktualności", link:'/main'},
                                    {name:"Znajomi", link:'/main/znajomi'},
                                    {name:"Wiadomości", link:'/main/wiadomosci'},
                                    {name:"Grupy", link:'/main/grupy'},
                                    {name:"Ustawienia", link:'/main/ustawienia'},
                                    {name:"Wyloguj", link:'/signUp'},
                                ].map((item, i) => (
                                    <ListItem button key={i}>
                                        <Link style={{color:'white', width:'100%', textDecoration:'none'}} to={item.link}>{item.name}</Link>
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
                                path="/main"
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
                            <Route
                                path="/main/grupy"
                                children={<Groups/>}
                            />
                        </Switch>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default MainContainer;