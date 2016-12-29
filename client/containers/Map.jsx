import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import { SplitButton, MenuItem, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


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
    this.setState({
      markers: [
        {lat: click.latLng.lat(), lng: click.latLng.lng()}
      ]
    });
  }

  render() {
    return (
      <div className='map-container'>
      <ControlLabel>Select location to search near:</ControlLabel>
      <GoogleMapLoader
        containerElement={<div className='map'/>}
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
      </div>
    );
  }
}
