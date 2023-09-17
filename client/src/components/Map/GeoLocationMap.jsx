import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './GeoLocationMap.css'

const GeoLocationMap = () => {
  const [position, setPosition] = useState([0, 0]);
  const [hasFetchedPostion,setHasFetchedPostion]=useState(false);

  useEffect(() => {
    // Get the user's location using the Geolocation API
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { latitude, longitude } = location.coords;
        setPosition([latitude, longitude]);
        setHasFetchedPostion(true);
      },
      (error) => {
        console.error(`Error getting user's location: ${error.message}`);
        setHasFetchedPostion(true);
      }
    );
  }, []);
   
   if(!hasFetchedPostion){
    return null;
   }

  return (
    <MapContainer
      className="map-style"
      center= {position}
      zoom={10}
      minZoom={3}
      maxZoom={19}
    >
      
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      /> 
      
      
      <Marker position={position}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GeoLocationMap;
