import React from "react";
import TaxInput from "./components/TaxInput";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={TaxInput} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
