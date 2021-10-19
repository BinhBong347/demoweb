import logo from './logo.svg';
import './App.scss';
import Mytest from './Example/Mycomponet';
import Listtodo from './Todos/ListTodos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chào mừng đến với Trái đất xinh tươi này !!!
        </p>
        {/* <Mytest/> */}
        <Listtodo/>
      </header>
    </div>
  );
}

export default App;
