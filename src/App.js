import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'antd/dist/antd.css';

const App=()=> {
  return (
    <div className="App">

      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App de <b>Javier González Galiana</b>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
