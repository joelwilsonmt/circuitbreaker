import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
// import RouterProvider from "./Components/Contexts/RouterContext";
// import {RouterContext} from "./Components/Contexts/RouterContext";
import GameProvider from "./Components/Contexts/GameContext";
import {GameContext} from "./Components/Contexts/GameContext";
import HttpsRedirect from 'react-https-redirect';



render(
  <HttpsRedirect>
    <GameProvider>
        <GameContext.Consumer>{
            (router) => (
              <App value={router}/>
            )
        }</GameContext.Consumer>
    </GameProvider>
  </HttpsRedirect>
  , document.getElementById("root"));
