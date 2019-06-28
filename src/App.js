import React from "react";
import TaxInput from "./components/TaxInput";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import IncomeTaxSaving from "./components/IncomeTaxSaving";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={IncomeTaxSaving} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
