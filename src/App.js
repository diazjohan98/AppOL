import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/index';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo/index';
import Editar from './components/Editar/index'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact render={ props=> ( <Login {...props} />)}></Route>
          <Route path='/dashboard' exact render={ props=> ( <Dashboard {...props} />)}></Route>
          <Route path='/nuevo' exact render={ props=> ( <Nuevo {...props} />)}></Route>
          <Route path='/editar' exact render={ props=> ( <Editar {...props} />)}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
