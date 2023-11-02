import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function WeatherMap({ lat, long }) {
  const [mapPosition, setMaposition] = useState([lat, long]);

  return (
    <div className="mb-6">
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="h-[280px] w-[50%] ml-auto mr-auto"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
