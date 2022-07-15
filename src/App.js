import potion from './potion.svg'
import './App.css';
import Data from './Data.tsx'
import Back from './Back.tsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Back />
        <img src={potion} className="App-logo" alt="logo" />
        <div className="App-logo">Wait I love monster hunter</div>
      </header>

      <Data />
    </div>
  );
}

export default App;
