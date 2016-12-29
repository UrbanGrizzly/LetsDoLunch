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
    this.onMount = this.onMount.bind(this);
    this.onCenterChanged = this.onCenterChanged.bind(this);
  }

  onMount(map) {
    this._map = map;
  }

  onCenterChanged() {
    const newCenter = this._map.getCenter()
    this.setState({
      center: {lat: newCenter.lat(), lng: newCenter.lng()}
    });
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={<div className="map"/>}
        googleMapElement={
          <GoogleMap
            ref={this.onMount}
            zoom={this.state.zoom}
            center={this.state.center}
            onCenterChanged={this.onCenterChanged}
          >
            {this.state.markers.map((marker, index) =>
              <Marker
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
