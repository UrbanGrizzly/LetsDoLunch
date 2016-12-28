import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const markers = [
  {
    defaultPosition: {
      lat: 37.7749,
      lng: -122.4194
    }
  }
];

export default class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
      zoom: 12,
      center: {
        lat: 37.7749,
        lng: -122.4194
      }
    }
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={<div className="map"/>}
        googleMapElement={
          <GoogleMap
            ref={map => console.log(map)}
            zoom={this.state.zoom}
            center={this.state.center}
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
}
