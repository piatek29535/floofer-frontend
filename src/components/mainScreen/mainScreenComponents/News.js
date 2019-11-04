import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import {fetchPosts, toggleOnDialog} from "../../../actions/mainPosts";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import DialogComponent from "./DialogComponent";
import ThumbUp from "@material-ui/icons/ThumbUp";
import IconButton from "@material-ui/core/IconButton";
import Comment from "@material-ui/icons/Comment";
import NewsDialog from "./NewsDialog";
import {newsDialogPostOpen} from "../../../actions/newsDialogActions";

const styles={
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
        overflow:'auto'
    },
    listItem:{
        borderRadius:'10px',
        padding:'5px',
        margin:'1%',
        boxShadow:'0 0 10px',
        maxWidth:'97%',
        flexDirection:'column'
    },
    fab:{
        position: 'fixed',
        bottom: 50,
        right: 50,
    }
};

class News extends Component {


    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    render() {

        const posts = this.props.posts;

        return (
            <div style={styles.mainContainer}>
                <Container style={styles.mainContainerTypography}>
                    <Typography variant={"h4"}>
                        Aktualności
                    </Typography>
                </Container>
                <List style={styles.list}>
                    {
                        posts.postsFetched.map((item) => (
                            <ListItem button onClick={() => this.props.dispatch(newsDialogPostOpen(item))} key={item.id} style={styles.listItem} alignItems="flex-start">
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <ListItemAvatar>
                                        <Avatar alt=" " src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title.charAt(0).toLocaleUpperCase()+item.title.substr(1)}
                                        secondary={item.body.charAt(0).toLocaleUpperCase()+item.body.substr(1)}
                                    />
                                </div>

                                <div style={{marginLeft:'45px'}}>
                                    <IconButton style={{display:'inline-block',fontSize:'20px'}} disabled color="primary">
                                        <Typography>
                                            0
                                        </Typography>
                                        <ThumbUp fontSize='small'/>
                                    </IconButton>
                                    <IconButton style={{fontSize:'20px'}} disabled color="primary">
                                        <Comment/>
                                        <Typography>
                                            0
                                        </Typography>
                                    </IconButton>
                                </div>
                            </ListItem>
                        ))
                    }
                    <Fab onClick={() => {this.props.dispatch(toggleOnDialog())}} color="primary" style={styles.fab}>
                        <AddIcon />
                    </Fab>
                </List>
                <NewsDialog dispatch={this.props.dispatch} newsDialogData={this.props.newsDialogData}/>
                <DialogComponent isDialogOpened={this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts:state.fetchPosts,
    dialogToggle:state.toggleDialog,
    newsDialogData:state.newsDialogData
});

export default connect(mapStateToProps)(News);