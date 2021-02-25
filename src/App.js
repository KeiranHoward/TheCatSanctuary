import logo from './logo.svg';
import './App.css';
import Home from './home';
import Cats from './cats';
import Login from './login';
import Admin from './admin';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/cats' component={Cats} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/admin' component={Admin} />

    </div>
  );
}

export default App;
