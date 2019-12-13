import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import {fetchPosts} from "../../../../actions/mainPosts";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Comment from "@material-ui/icons/Comment";
import NewsDialog from "./NewsDialog";
import {newsDialogPostOpen} from "../../../../actions/newsDialogActions";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles={
    mainContainer:{
        height:'100%',
    },
    mainContainerTypography:{
        width:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
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
    avatar:{
        backgroundColor:'#004E92'
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
                {this.props.newsDialogData.actionPerformed
                    ? <LinearProgress color="primary"/>
                    : <LinearProgress color="primary" variant="determinate" value={100}/>}
                <List style={styles.list}>
                    {
                        posts.postsFetched.map((item) => (
                            <ListItem button onClick={() => this.props.dispatch(newsDialogPostOpen(item._id))} key={item._id} style={styles.listItem} alignItems="flex-start">
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt=" "
                                            style={styles.avatar}
                                            // src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png"
                                        >
                                            {item.author.username.charAt(0).toLocaleUpperCase()}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.author.username}
                                        secondary={item.content}
                                    />
                                </div>

                                <div style={{marginLeft:'45px'}}>
                                    <Button
                                        disabled
                                        startIcon={<ThumbUp/>}>
                                        {item.likesAmount}
                                    </Button>
                                    <Button
                                        disabled
                                        startIcon={<Comment/>}>
                                        {item.commentsAmount}
                                    </Button>
                                </div>
                            </ListItem>
                        ))
                    }
                </List>
                <NewsDialog
                    dispatch={this.props.dispatch}
                    fetchNewsFeed={fetchPosts}
                    newsDialogData={this.props.newsDialogData}
                    myId={this.props.myId}/>
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