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
    this.onCenterChanged = this.onCenterChanged.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onCenterChanged() {
    const zoom = this.map.getZoom();
    const newCenter = this.map.getCenter();
    this.setState({
      zoom,
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
      <div className='map-container prefTitle'>
      Location
      <GoogleMapLoader
        containerElement={<div className='map'/>}
        googleMapElement={
          <GoogleMap
            ref={map => this.map = map}
            zoom={this.state.zoom}
            center={this.state.center}
            onCenterChanged={() => setTimeout(this.onCenterChanged, 100)}
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
