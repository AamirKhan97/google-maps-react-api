import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import purple from "../assets/purple.png";
import yellow from "../assets/yellow.png";
import red from "../assets/red.png";
import green from "../assets/green.png";

const containerStyle = {
  width: "90vw",
  height: "90vh",
};
const center = {
  lat: 19.8762,
  lng: 75.3433,
};
const Map = (props) => {
  const { isLoaded } = props;
  const [isClciked, setIsClciked] = useState(null);
  console.log(isClciked);

  const locations = [
    {
      name: "Mumbai",
      status: "parked",
      location: {
        lat: 19.076,
        lng: 72.8777,
      },
    },
    {
      name: "Aurangabad",
      status: "stop",
      location: {
        lat: 19.8762,
        lng: 75.3433,
      },
    },
    {
      name: "Pune",
      status: "go",
      location: {
        lat: 18.5204,
        lng: 73.8567,
      },
    },
    {
      name: "Nasik",
      status: "whatever",
      location: {
        lat: 19.9975,
        lng: 73.7898,
      },
    },
  ];

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapTypeId="roadmap"
        //   onLoad={onLoad}
        //   onUnmount={onUnmount}
      >
        {locations.map((marker) => {
          return (
            <Marker
              key={marker.name}
              position={marker.location}
              options={{
                icon:
                  marker.status == "parked"
                    ? red
                    : marker.status == "stop"
                    ? yellow
                    : marker.status == "go"
                    ? green
                    : marker.status == "whatever"
                    ? purple
                    : null,
              }}
              onClick={() => setIsClciked(marker)}
            />
          );
        })}
        {isClciked && (
          <InfoWindow
            position={isClciked.location}
            onCloseClick={() => setIsClciked(null)}
            options={{
              pixelOffset: new window.google.maps.Size(0, -40),
            }}
          >
            <div>
              <h1>{isClciked.name}</h1>
              <h1>{isClciked.status}</h1>
              <button onClick={() => setIsClciked(null)}>Cancel</button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Map;
