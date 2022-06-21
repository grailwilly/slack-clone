import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState } from "react";

import Registration from './components/UserRegistration.js';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [loggedIn, setLogin] = useState(true);

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/create-account">
              <Registration />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
