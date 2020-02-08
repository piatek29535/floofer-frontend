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
import preview from "../../../../images/mainScreen/podgląd.png"

const styles = {
    addPictureButton:{
        height:100,
        width:100,
        margin:10,
        border:'1px solid black'
    },
    images:{
        display:'flex',
        flexWrap:"wrap",
        justifyContent:'center',
        alignItems:'center',
    },
    imagePreview:{
        height:200,
        width:300,
        objectFit:'cover'
    },
    removeFab:{
        alignSelf:"flex-start",
        marginLeft:-20,
        marginTop:-10,
        height:35,
        width:35
    }
};


class DialogComponent extends Component {

    state = {
        content:'',
        contentError:false,
        file:null,
        imagePreviewUrl: null
    };

    pushImages = (image) => {
        let reader = new FileReader();
        let file = image;

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file)
    };

    removeImage = () => {
        this.setState({
            file: null,
            imagePreviewUrl:null
        });
    };

    contentOnChange = (e) => {
        this.setState({
            content:e.target.value,
        })
    };

    render() {
        return (
            <Dialog id="addPostDialog" open={this.props.dialogOpened}>
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
                        error={this.state.contentError}
                    />
                    <Typography>Dołącz zdjęcie</Typography>
                    <Box style={styles.images}>
                        <img
                            alt=" "
                            style={styles.imagePreview}
                            src={this.state.imagePreviewUrl
                                ? this.state.imagePreviewUrl
                                : preview}>
                        </img>
                        {this.state.imagePreviewUrl
                        ?
                            <Fab
                                onClick={() => this.removeImage()}
                                style={styles.removeFab}
                                color="primary">
                                <Remove/>
                            </Fab>
                        :null}
                        <Button
                            component="label"
                            style={styles.addPictureButton}>
                            <Add/>
                            <input
                                type="file"
                                style={{ display: "none" }}
                                accept="image/*"
                                onChange={(e) => this.pushImages(e.target.files[0])}
                            />
                        </Button>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.toggleOffDialog()}
                            color="primary">
                        Zamknij
                    </Button>
                    <Button onClick={() => {
                        if(this.state.content.length !== 0){
                            this.props.addPost(this.state.content, this.state.file)
                            this.setState({
                                content:'',
                                contentError:false,
                                file:null,
                                imagePreviewUrl: null
                            })
                        }else{
                            this.setState({
                                contentError:true
                            })
                        }
                    }}
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