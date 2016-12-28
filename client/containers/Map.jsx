import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

export default class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
      zoom: 16,
      center: {lat: 37.787596, lng: -122.4001153},
      markers: [
        {lat: 37.787596, lng: -122.4001153}
      ]
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
            {this.state.markers.map((marker, index) =>
              <Marker
                ref={marker => console.log(marker)}
                key={index}
                defaultPosition={marker}
              />
            )}
          </GoogleMap>
        }
      />
    );
  }
}
