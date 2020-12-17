import "./App.css";
import HomeIntro from "./components/HomeIntro";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Shop from "./components/Shop";
import PersonPicker from "./components/PersonPicker";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/picker"><PersonPicker/></Route>

          <Route path="/">
            <HomeIntro />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
