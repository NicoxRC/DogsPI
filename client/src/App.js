import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import DogDetails from "./components/DogDetails/DogDetails";
import CreateDog from "./components/CreateDog/CreateDog"
import { Route, Switch } from "react-router-dom";
import './App.css';

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
