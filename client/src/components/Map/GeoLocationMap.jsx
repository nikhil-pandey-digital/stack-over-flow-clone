import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./GeoLocationMap.css";

const GeoLocationMap = () => {
  const [position, setPosition] = useState([0, 0]);
  const [hasFetchedPosition, setHasFetchedPosition] = useState(false);

  useEffect(() => {
    // Get the user's location using the Geolocation API
    const fetchUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          setPosition([latitude, longitude]);
          setHasFetchedPosition(true);
        },
        (error) => {
         
            console.log(`Error getting user's location: ${error.message}`);
          
          setHasFetchedPosition(false);
        }
      );
    };
    // Check if user has already denied location access
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "denied") {
          // Display a message or UI element asking the user to enable location access again
          alert("Please allow location access to fetch your location");
          fetchUserLocation();
        } else {
          // Fetch user's location
          
          fetchUserLocation();
        }
      });
    } else {
      // Fetch user's location (for older browsers that don't support Permissions API)
      fetchUserLocation();
    }
  }, []);

  if (!hasFetchedPosition) {
    return <></>;
  }

  return (
    <MapContainer
      className="map-style"
      center={position}
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
