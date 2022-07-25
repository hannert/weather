import './App.css';
import Data from './Data.tsx'
import Back from './Back.tsx'
import Toggle from './Toggle.tsx'
import Search from './Search.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <script async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7h8WMCR9SLHTcwOAmFW-cJjV67PXVCSw&libraries=places&callback=initMap">
      </script>
      </header>
      <Back />
      <Toggle />
      <Data />
      <Footer />
    </div>
  );
}

export default App;
