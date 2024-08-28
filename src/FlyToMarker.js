import {  Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet';

const customIcon = new Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

const FlyToMarker = ({ position, flyToPosition, popupText }) => {
    const map = useMap();
  
    const handleMarkerClick = () => {
      map.flyTo(flyToPosition, 8); // Adjust zoom level as needed
    };
  
    return (
      <Marker position={position} icon={customIcon} eventHandlers={{ click: handleMarkerClick }}>
        <Popup>
          <h4 className='popup-city'>{popupText.name.toUpperCase()}</h4>
          <p className='popup-city-description'>{popupText.description}</p>
        </Popup>
      </Marker>
    );
  };

export default FlyToMarker