import Home from "./components/Pages/Home/Home";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import DogDetails from "./components/Pages/DogDetails/DogDetails";
import CreateDog from "./components/Pages/CreateDog/CreateDog"
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/details/:id" component={DogDetails} />
        <Route exact path="/create" component={CreateDog} />
      </Switch>
    </div>
  );
}

export default App;
