import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DialogBox from "./DialogBox"
import {GameContext} from "../Contexts/GameContext";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grow from '@material-ui/core/Grow';
import WorldGif from './world-trans.png'



class OpeningScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      willGrow: true,
      introWindowOpen: true,
      slide: 0,
      messages: [
        {message: 'CircuitBreaker is an interactive game where you take selfies with objects in certain places',
        buttonText: 'Next'},
        {message: 'You must go to each location and take a selfie with whatever object it says',
        buttonText: 'Next'},
        {message: 'Complete all the challenges to break the circuit!',
        buttonText: 'Next'},
        {message: 'Make sure the location services for your browser are tured on. Your phone cannot be in low power mode.',
        buttonText: 'Close'}
      ]
    };
  }
  componentWillMount() {
    console.log(this.state);
  }
  componentWillUnmount() {
    this.setState({
      willGrow: false
    });
  }
  nextMessage = (slideNum) => {
    console.log("slide number: ", slideNum);
    slideNum += 1;
    if(slideNum > 3) {
      this.setState({
        introWindowOpen: false
      });
    }
    else {
      this.setState({
        slide: slideNum
      });
    }
  }
  handleClose = () => {
    this.setState({
      introWindowOpen: false
    });
  }
  render(){
    return (
       <Grow in={this.state.willGrow} timeout={1000}>

        <div className="screen">
          <Typography className="white" variant="h2">
            CIRCUIT BREAKER
          </Typography>
          <img className="padder logo" src='https://www.quantil.com/resources/hp-globe.gif'/>
          <GameContext.Consumer>{
            (game) => ( 
              <div className="animated pulse infinite">
                <DialogBox value={game} />
              </div>
            )
          }</GameContext.Consumer>
          <Dialog
            className="trans"
            open={this.state.introWindowOpen}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle className="center" id="form-dialog-title">RULES</DialogTitle>
            <DialogContent>
              <Typography className="center">
                {this.state.messages[this.state.slide].message}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                type="submit"
                variant="contained"
                className="animated pulse infinite center"
                color="primary"
                size="small"
                justify="center"
                onClick={() => {
                  this.nextMessage(this.state.slide)
                  }}>
                {this.state.messages[this.state.slide].buttonText}
              </Button>
            </DialogActions>
          </Dialog>
      </div>
      </Grow>

    );
  }
}

export default OpeningScreen;
