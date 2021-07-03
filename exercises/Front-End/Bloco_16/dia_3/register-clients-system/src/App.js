import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/loginPage" component={Login}/>
        <Route path="/clients" component={Clients}/>
        <Route path="/registerClients" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
