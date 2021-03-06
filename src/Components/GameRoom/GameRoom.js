import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grow from '@material-ui/core/Grow';
import Typography from "@material-ui/core/Typography";
import GameRoomCard from "./GameRoomCard";
// import {UserContext} from "../Contexts/UserContext";
import {GameContext} from "../Contexts/GameContext";
// var dotenv = require('dotenv').config();


class GameRoom extends Component {
  constructor(props) {
    super();
    this.state = {
      willGrow: true
    };
  }
  render() {

    return (
      <Grow in={this.state.willGrow} timeout={1000}>
      <div className="screen">

          <br />
          <Typography variant="h2" component="h3" align="center">
            GAME ROOM
          </Typography>
          <GameContext.Consumer>{
              (game) => (
                <div>
                   <GameRoomCard value={game}/>
                 </div>
                )
            }</GameContext.Consumer>

      </div>
      </Grow>
    );
  }
}

GameRoom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default GameRoom;
