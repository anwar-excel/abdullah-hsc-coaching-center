import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/faq">
            <h2>raja</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
