import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/index';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact render={ props=> ( <Login {...props} />)}></Route>
          <Route path='/dashboard' exact render={ props=> ( <Dashboard {...props} />)}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
