import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {GameContext} from "../Contexts/GameContext";
import ContactUs from "../ContactUs/ContactUs";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <div>
    <GameContext.Consumer>{
        (game) => (
      <Button color="primary" className={classes.button} onClick={() => {
        game.setView('ContactUs');
      }}>
        CONTACT US
      </Button>
    )
}</GameContext.Consumer>

      <input
        accept="image/*"
        className={classes.input}
        id="flat-button-file"
        multiple
        type="file"
      />

    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
