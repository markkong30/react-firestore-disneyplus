import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import Detail from './components/details/detail';
import Navbar from './layout/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route path="/detail/:id"><Detail /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
