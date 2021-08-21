import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Firstpage from "./Components/Firstpage/Firstpage";
import Form1 from "./Components/Form1/Form1";
import Form2 from "./Components/Form2/Form2";
import Listing from "./Components/Listing/Listing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Firstpage />
          </Route>
          <Route path="/form1">
            <Form1 />
          </Route>
          <Route path="/form2">
            <Form2 />
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
