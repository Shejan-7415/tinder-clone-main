import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/account">
            <h1>This Is Account Page...</h1>
          </Route>

          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
