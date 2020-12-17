import "./App.css";
import HomeIntro from "./components/HomeIntro";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PersonPicker from "./components/PersonPicker";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/shop">
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
