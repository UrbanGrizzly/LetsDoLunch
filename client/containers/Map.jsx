import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function SimpleMap (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
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
                  key={index}
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
}
