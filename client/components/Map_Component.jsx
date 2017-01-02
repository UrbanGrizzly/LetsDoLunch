import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default class Map_Component extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GoogleMapLoader
          containerElement={<div className='map' />}
          googleMapElement={
            <GoogleMap
              ref={map => this.map = map}
              zoom={this.props.zoom}
              center={this.props.center}
              onZoomChanged={() => this.props.changeZoom(this.map.props.map.zoom)}
              onDragend={() => this.props.changeCenter({lat: this.map.props.map.center.lat(), lng: this.map.props.map.center.lng()})}
              onClick={click => this.props.changeMarkers([{lat: click.latLng.lat(), lng: click.latLng.lng()}])}
            >
              {this.props.markers.map(marker =>
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
