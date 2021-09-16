import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './main';
import Present from './present';
import Bit from "./bit"
import Eth from "./eth"
import Ssx from "./ssx"
import Klay from "./klay"




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/present" component={Present} />
        <Route path="/Eth" component={Eth} />
        <Route path="/Bit" component={Bit} />
        <Route path="/Ssx" component={Ssx} />
        <Route path="/Klay" component={Klay} />
      </Switch>
    </Router>
  );
}

export default App;
