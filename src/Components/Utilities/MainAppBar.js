import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuButton from "./MenuButton";
import Grid from "@material-ui/core/Grid";
import Avatar from "./Avatar";
import {GameContext} from "../Contexts/GameContext";



function MainAppBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <GameContext.Consumer>{
              (router) => (
          <MenuButton value={router}/>  )
        }</GameContext.Consumer>
        <Typography variant="h5" color="inherit">
            Circuit Breaker
          </Typography>
          <Avatar />
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default MainAppBar;
