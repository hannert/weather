import logo from './logo.svg';
import potion from './potion.svg'
import './App.css';
import Weather from './Weather.tsx'
import Data from './Data.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={potion} className="App-logo" alt="logo" />
      </header>

      <Data />
    </div>
  );
}

export default App;
