import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Registration from './components/UserRegistration.js';
import Login from './components/Login';
import SendMessage from './components/SendMessage';

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
            <Route path="/send-message">
              <SendMessage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
