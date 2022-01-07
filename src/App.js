import './App.css';
import MapWrapper from './Map/MapWrapper';
import { MapContextProvider } from './context/MapContext';

//components


function App() {
  return (
    <div className="App">
      <MapContextProvider>
        <MapWrapper />
      </MapContextProvider>
    </div>
  );
}

export default App;
