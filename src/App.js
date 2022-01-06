import logo from './logo.svg';
import './App.css';
import Mapping from './components/Map/Mapping';
import Layers from './components/Layers/Layers';
import TileLayers from './components/Layers/TileLayers';
import Map from './components/Map/index';

//components


function App() {
  return (
    <div className="App">
      {/* <Mapping>
        <Layers>
          <TileLayers source={}></TileLayers>
        </Layers>
      </Mapping> */}
      <Map />
    </div>
  );
}

export default App;
