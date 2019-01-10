import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {GameContext} from "../Contexts/GameContext";
import ContactUs from "../ContactUs/ContactUs";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  routeContact = () => {
    this.props.value.setScreen('ContactUs');
  }
  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={
            (event) => {
              this.handleClose();
              this.routeContact();
            }}>
            CONTACT THE DEVELOPERS
          </MenuItem>
        </Menu>
      </div>
    );
  }
}



export default SimpleMenu;
