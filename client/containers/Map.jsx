import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function Map () {
  const markers = [
    {
      defaultPosition: {
        lat: 37.7749,
        lng: -122.4194
      }
    }
  ];

  return (
      <GoogleMapLoader
        containerElement={<div className="map"/>}
        googleMapElement={
          <GoogleMap
            ref={map => console.log(map)}
            defaultZoom={12}
            defaultCenter={{
              lat: 37.7749,
              lng: -122.4194
            }}
          >
            {markers.map((marker, index) =>
              <Marker
                ref={marker => console.log(marker)}
                key={index}
                {...marker}
              />
            )}
          </GoogleMap>
        }
      />
  );
}
