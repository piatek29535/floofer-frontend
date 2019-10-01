import React, {Component} from 'react';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

const styles = {
    mainContainer:{
        height:'100vh',
        backgroundColor:'white',
        display:'flex',
    },
    drawer:{
        backgroundColor:'#189ad3', // sth wrong with bg color
        color:'white',
        height:'100vh'
    },
    drawerPanel:{
        flex:1
    },
    drawerAvatarContainer:{
        display:"flex",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'20px',
    },
    drawerAvatar:{
        width: 60,
        height: 60,
        alignSelf:'center',
        backgroundColor:'#8A2BE2'
    },
    contentPanel:{
        flex:5,
        border:'1px solid red'
    }
};

class MainContainer extends Component {
    render() {
        return (
            <div style={styles.mainContainer}>
                <Drawer
                    style={styles.drawerPanel}
                    variant="permanent"
                    open={false}
                >
                    <List style={styles.drawer}>
                        <div style={styles.drawerAvatarContainer}>
                            <IconButton>
                                <Avatar button style={styles.drawerAvatar}>AP</Avatar>
                            </IconButton>
                            <Typography>Imię Nazwisko</Typography>
                        </div>
                        <Divider/>

                        {['Aktualności', 'Znajomi', 'Wyloguj'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon style={{color:'white'}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Container style={styles.contentPanel}>
                    <h1>Tutaj content</h1>
                </Container>
            </div>
        );
    }
}

export default MainContainer;