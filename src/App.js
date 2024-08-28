import './App.css';
import 'leaflet/dist/leaflet.css'
import cities from './helper/cities';
import { MapContainer, TileLayer} from 'react-leaflet'
import FlyToMarker from './FlyToMarker';
import MarkerClusterGroup from 'react-leaflet-cluster'


function App() {


  return (
    <div className="App">
      <MapContainer center={[20.593, 78.96]} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {cities.map(({ name, coordinates, description }) => <FlyToMarker position={[coordinates.lat, coordinates.lng]}
            flyToPosition={[coordinates.lat, coordinates.lng]}
            popupText={{ name, description }} />)}

        </MarkerClusterGroup>

      </MapContainer>
    </div>
  );
}

export default App;
