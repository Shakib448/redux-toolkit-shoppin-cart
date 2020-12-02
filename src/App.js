import Shopping from "./Components/Shopping/Shopping";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Shopping} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
