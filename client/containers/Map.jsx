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
    this.onClick = this.onClick.bind(this);
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

  onClick(click) {
    console.log(click);
    this.setState({
      markers: [
        {lat: click.latLng.lat(), lng: click.latLng.lng()}
      ]
    });
    console.log(this.state.markers);
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
            onClick={this.onClick}
          >
            {this.state.markers.map(marker =>
              <Marker
                key={marker.lat + '' + marker.lng}
                defaultPosition={marker}
              />
            )}
          </GoogleMap>
        }
      />
    );
  }
}
