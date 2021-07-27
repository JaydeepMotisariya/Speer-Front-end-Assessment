import './App.css';
import Slider from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Sidebar from './components/HamBurgerMenu';
import Perks from './components/Perks';

function App() {
  return (
    <div className="App">
      <Sidebar />
    
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Slider} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/perks" component={Perks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
