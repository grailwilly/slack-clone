import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Registration from './components/UserRegistration.js';
import Login from './components/Login';

function App() {
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
