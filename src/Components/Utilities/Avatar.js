import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import {GameContext} from "../Contexts/GameContext";

const styles = {
  avatar: {
    color: '#ffffff',
    backgroundColor: '#000000'
  }
};

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="flex-end" alignItems="flex-end">
      
      <GameContext.Consumer>{ (session) => (
        <Avatar className={classes.avatar}>
          {session.user.username[0]}
        </Avatar>
      ) }</GameContext.Consumer>
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LetterAvatars);
