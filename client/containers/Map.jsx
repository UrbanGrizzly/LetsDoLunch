import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function Map (props) {
  return (
      <GoogleMapLoader
        containerElement={
          <div
            className="map"
            {...props.containerElementProps}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={12}
            defaultCenter={{
              lat: 37.7749,
              lng: -122.4194
            }}
            onClick={props.onMapClick}
          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  ref={(marker) => console.log(marker)}
                  key={index}
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)}
                />
              );
            })}
          </GoogleMap>
        }
      />
  );
}
