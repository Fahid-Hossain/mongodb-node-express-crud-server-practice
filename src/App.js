import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Headers from './components/Headers/Headers';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import AddUser from './components/Adduser/Adduser';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Headers></Headers>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/users">
                <Users></Users>
            </Route>
            <Route path="/user/add">
                <AddUser></AddUser>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
