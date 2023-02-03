import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/index';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/'  element={  <Login  />} />
          <Route path='/dashboard'  element={ <Dashboard />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
