import logo from './logo.svg';
import './App.scss';
import Mytest from './Example/Mycomponet';
import Listtodo from './Todos/ListTodos';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
        
          <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/todo">
            <Listtodo/>
          </Route>
          <Route path="/about">
            <Mytest/>
          </Route>
          <Route exact path="/user">
            <ListUser/>
          </Route>
          <Route path="/user/:id" exact>
            <DetailUser/>
          </Route>
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
