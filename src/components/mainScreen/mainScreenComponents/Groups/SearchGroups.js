import React, {Component} from 'react';
import List from "@material-ui/core/List";
import GroupItem from "./GroupItem";

const styles = {
    list:{
        overflow:'auto',
        flex:10,
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

class SearchGroups extends Component {
    render() {
        return (
            <List style={styles.list}>
                {
                    ['group','group','group','group','group','group','group','group','group','group','group','group']
                        .map((item) => {
                            const random = Math.floor(Math.random() * images.length);
                            return (
                                <GroupItem
                                    images={images}
                                    random={random}
                                    styles={styles}
                                    item={item}
                                />
                            )})
                }
            </List>
        );
    }
}

export default SearchGroups;