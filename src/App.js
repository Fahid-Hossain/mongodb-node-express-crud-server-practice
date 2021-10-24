import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Headers from './components/Headers/Headers';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import AddUser from './components/AddUser/AddUser';
import Updateuser from './components/Updateuser/Updateuser';

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
            <Route path="/user/update/:id">
                <Updateuser></Updateuser>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
