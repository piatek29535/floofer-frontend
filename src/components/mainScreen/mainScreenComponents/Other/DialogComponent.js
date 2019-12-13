import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove"
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

const url = "https://cdn.pixabay.com/photo/2017/03/25/18/06/color-2174065_960_720.png"

const styles = {
    addPictureButton:{
        height:100,
        width:100,
        margin:10,
        border:'1px solid black'
    },
    picturesDiv:{
        margin:10,
        height:100,
        width:100,
        display:'flex',
        flexDirection:'column',
        backgroundSize:'cover'
    },
    images:{
        display:'flex',
        flexWrap:"wrap",
        justifyContent:'center'
    },
    removeFab:{
        alignSelf:"flex-end",
        height:35,
        width:35
    }
};


class DialogComponent extends Component {

    state = {
        content:'',
        pictures:[{item:"1",url:url},{item:"1",url:url},{item:"1",url:url},{item:"1",url:url},{item:"1",url:url},{item:"1",url:url},{item:"1",url:url},]
    };

    pushImages = (image) => {
        this.setState(state => {
            const pictures = state.pictures.concat(image);

            return {
                ...state,
                pictures
            };
        });
    };

    removeImage = (image) => {
        this.setState(state => {
            const pictures = state.pictures.filter(element => element !== image);

            return {
                ...state,
                pictures
            };
        });
    };

    contentOnChange = (e) => {
        this.setState({
            content:e.target.value,
        })
    };

    render() {
        return (
            <Dialog open={this.props.dialogOpened}>
                <DialogTitle >Dodaj post</DialogTitle>
                <DialogContent>
                    <TextField
                        value={this.state.content}
                        onChange={(e) => this.contentOnChange(e)}
                        style={{width:'500px'}}
                        label="Treść posta"
                        multiline
                        rows="4"
                        placeholder="Napisz coś..."
                        margin="normal"
                        variant="outlined"
                        autoFocus
                    />
                    <Typography>Dołącz zdjęcie(a)</Typography>
                    <Box style={styles.images}>
                        {this.state.pictures.map(item => (
                            <Box style={{...styles.picturesDiv,backgroundImage:`url(${item.url})`}}>
                                <Fab
                                    onClick={() => this.removeImage(item)}
                                    style={styles.removeFab}
                                    color="primary">
                                    <Remove/>
                                </Fab>
                            </Box>
                        ))}
                        <Button
                            onClick={() => this.pushImages({item:"xd", url:url})}
                            style={styles.addPictureButton}>
                            <Add/>
                        </Button>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.toggleOffDialog()}
                            color="primary">
                        Zamknij
                    </Button>
                    <Button onClick={() => this.props.addPost(this.state.content, this.state.pictures)}
                            variant="contained"
                            color="primary">
                        Opublikuj
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default DialogComponent;