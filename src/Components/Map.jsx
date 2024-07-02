import React, { useState, useEffect } from "react";
import Map, { Marker } from 'react-map-gl';
import { FaLocationDot } from "react-icons/fa6";

import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {

  const [viewport, setViewport] = useState({
    longitude: 35.74122082775211,
    latitude: 51.412425376250965,
    zoom: 15,
  });
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setViewport((prevViewport) => ({
            ...prevViewport,
            longitude,
            latitude,
          }));
          setUserLocation({ longitude, latitude });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    }
  }, []);

  

  return (
    <div className=" w-[90%] h-64 border-solid border-4 border-blue rounded-lg p-[0.5] mt-5">

      <Map
        {...viewport}

        style={{ width: '100%', height: '100%' }}
        mapStyle="https://map.ir/vector/styles/main/mapir-xyz-style.json"
        transformRequest={(url) => {
          return {
            url,
            headers: {
              "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImExYzVlY2YwMWI1Mjk4M2NjYjQzOWZiYjE5MWViOTBhYzRjY2Y5ODc1N2YzY2ViOTBmYWFjNmQ3ZWEzNzg1ZDczZTBkZmRjMTZhNWVkOGI1In0.eyJhdWQiOiIyNTYwMSIsImp0aSI6ImExYzVlY2YwMWI1Mjk4M2NjYjQzOWZiYjE5MWViOTBhYzRjY2Y5ODc1N2YzY2ViOTBmYWFjNmQ3ZWEzNzg1ZDczZTBkZmRjMTZhNWVkOGI1IiwiaWF0IjoxNzA3MDUwMjMzLCJuYmYiOjE3MDcwNTAyMzMsImV4cCI6MTcwOTM4MzAzMywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.jrqpAKcZWEqzFDsfggJgQ0ROBkX7jvLvCq78R3uxNThKvMNXL9l2rqHj-MrgftXbQqAXXg4TaWBKkH1g15bnri-ohzlDxhgbmfq79sMHUW4RncMEl6InlVlLZz_mk3dzSnEHTjoSU7Ba5rWVCPNXuVPsiVbOwVpwRWeTyDXxP36b38aOLlBVxvQzs41lsbMoDWhP42nbBt7ipudE1j-d3WAASYCM80118X3zmK6hd005KgRG-v5v5tEbIv7NTMJd-5EIwOyMxQXQm_kc1WhdWcGqh3ddBC1yT9kBSwbPL6ef24VdgAf0dWhcX_LbCLLBcjv1uzdovC218BG5VC7Rzw', //Mapir api key
            },
          };
        }}
      >
        {userLocation && (
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
          >
            <FaLocationDot className="w-7 h-7 text-red" />
          </Marker>
        )}

      </Map>
    </div>
  );
};

export default App;
