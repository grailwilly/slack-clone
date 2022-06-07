import './App.css';
import Registration from './components/UserRegistration.js';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Slack Clone Project</h1>
      <Registration />
      <Login />
    </div>
  );
}

export default App;
