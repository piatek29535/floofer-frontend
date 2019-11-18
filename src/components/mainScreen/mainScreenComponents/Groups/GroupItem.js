import React, {Component} from 'react';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";

class GroupItem extends Component {

    render() {
        return (
            <ListItem key={this.props.item} alignItems="flex-start">
                <div style={this.props.styles.listItems}>
                    <ExpansionPanel elevation="20" style={{width:'100%'}}>
                        <ExpansionPanelSummary
                            style={{...this.props.styles.listItemExpansionPanelSummary, backgroundImage:`url(${this.props.images[this.props.random]})`,}}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography variant="h6">{this.props.item}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={this.props.styles.listItemExpansionPanelDetails}>
                            <Typography>
                                Lorem ipsum dolor sit amet,
                            </Typography>
                            <Container style={this.props.styles.actionButtons}>
                                <Button style={{width:'40%'}} variant="contained" color='primary'>Dołącz</Button>
                                <Button style={{width:'40%'}} variant="outlined" color='primary'>Odwiedź</Button>
                            </Container>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </ListItem>
        );
    }
}

export default GroupItem;