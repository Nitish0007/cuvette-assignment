import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Firstpage from "./Components/Firstpage/Firstpage";
import Main from "./Components/Main/Main";
import Listing from "./Components/Listing/Listing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Firstpage />
          </Route>
          <Route path="/forms">
            <Main />
          </Route>
          <Route path="/mylistings">
            <Listing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
