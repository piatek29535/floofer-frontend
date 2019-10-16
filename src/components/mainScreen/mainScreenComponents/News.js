import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import {fetchPosts} from "../../../actions/mainPosts";

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
        maxWidth:'97%'
    },
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
                            <ListItem key={item.id} style={styles.listItem} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt=" " src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                    secondary={item.body}
                                    //this should contain the real fetched data from server
                                />
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts:state.fetchPosts
});

export default connect(mapStateToProps)(News);