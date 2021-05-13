import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(
  compose(
    (window.devToolsExtension ? window.devToolsExtension() : (f) => f)(
      createStore
    )
  )
);

import "./style/main.scss";

import history from "./history";

import App from "./components/app";
import Landing from "./components/landing-page/landing";
import PlansPage from "./components/plans-page";
import Contact from "./components/contact";
import ScrollToTop from "./components/scroll-to-top";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <ScrollToTop />
        <App>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/planes" exact component={PlansPage} />
            <Route path="/contacto" exact component={Contact} />
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
