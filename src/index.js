import React from "react";
import { render } from "react-dom";
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import App from "./Components/App";

// import RouterProvider from "./Components/Contexts/RouterContext";
// import {RouterContext} from "./Components/Contexts/RouterContext";
import GameProvider from "./Components/Contexts/GameContext";
import { GameContext } from "./Components/Contexts/GameContext";
import HttpsRedirect from 'react-https-redirect';
import "./style.css"


const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true, // won't minify CSS classnames when true
  productionPrefix: 'c', // 'jss' by default
});

render(
  <HttpsRedirect>
    <JssProvider generateClassName={generateClassName}>
      <GameProvider>
        <GameContext.Consumer>{
          (router) => (
            <App value={router} />
          )
        }</GameContext.Consumer>
      </GameProvider>
    </JssProvider>
  </HttpsRedirect>
  , document.getElementById("root"));
