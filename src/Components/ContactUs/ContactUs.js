import React from 'react';
import Grow from '@material-ui/core/Grow';
import ExpansionPanels from "../Challenges/ExpansionPanels";
import Typography from "@material-ui/core/Typography";
import MainAppBar from "../Utilities/MainAppBar";
import GoHomeButton from "./GoHomeButton";
import {GameContext} from "../Contexts/GameContext";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
  },
});

class ContactUs extends React.Component {
  constructor () {
    super()
    this.state = {
      willGrow: true
    };
  }
  componentWillUnmount() {

  }

  render(){

    return (
      <Grow in={this.state.willGrow} timeout={1000}>
      <div class="screen white">
        <Typography variant="h5" align="center">CONTACT US</Typography>
        <List>
          <ListItem>
              <ListItemText
                  primary={'Jeremy Cornell'}
                  secondary={'jeremy.cornell77@gmail.com'}/>
          </ListItem>
          <ListItem>
              <ListItemText
                  primary={'Jamie Iguchi'}
                  secondary={'jamie.iguchi@gmail.com'}/>
          </ListItem>
          <ListItem>
              <ListItemText
                  primary={'Kristin Peterson'}
                  secondary={'kristinjoypeterson@gmail.com'}/>
          </ListItem>
          <ListItem>
              <ListItemText
                  primary={'Joel Wilson'}
                  secondary={'joel.wilson.mt@gmail.com'}/>
          </ListItem>
        </List>
        <GameContext.Consumer>{
            (game) => (
              <GoHomeButton value={game}/>
        )}</GameContext.Consumer>
      </div>
      </Grow>
    );
  }
}

export default ContactUs;
