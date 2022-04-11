import React from "react"
import * as ReactDOMClient from "react-dom/client"
import {createStore,compose} from "redux";
import {reducer} from "./store/reducer"
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "./index.css"
import App from "./App"



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers())

const rootElement = document.querySelector("#root");

const container = ReactDOMClient.createRoot(rootElement)

container.render(
    <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
        </Provider>
    </React.StrictMode>
)