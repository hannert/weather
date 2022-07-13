import logo from './logo.svg';
import './App.css';
import Weather from './Weather.tsx'
import Data from './Data.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Weather text="This is new text"/>
      <Data />
    </div>
  );
}

export default App;
