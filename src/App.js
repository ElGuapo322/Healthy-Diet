import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import MealsPage from "./Pages/MealsPage";
import CalculatorPage from "./Pages/CalculatorPage";
import DiaryPage from "./Pages/DiaryPage";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="App">
        <CalculatorPage />
      </div> */}
        <Switch>
          <Route exact path="/">
            <CalculatorPage />
          </Route>
          <Route path="/Pages/MealsPage">
            <MealsPage />
          </Route>
          <Route path="/Pages/DiaryPage">
            <DiaryPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
