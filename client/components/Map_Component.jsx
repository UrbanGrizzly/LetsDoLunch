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
