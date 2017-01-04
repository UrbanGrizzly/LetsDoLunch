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
              onBoundsChanged={() => {
                this.props.changeBounds({
                  zoom: this.map.props.map.zoom,
                  center: {lat: this.map.props.map.center.lat(), lng: this.map.props.map.center.lng()}
                })
              }}
              onClick={click => this.props.changeOrigin({lat: click.latLng.lat(), lng: click.latLng.lng()})}
            >
              <Marker
                key={this.props.origin.lat + '' + this.props.origin.lng}
                defaultPosition={this.props.origin}
              />
              <Marker
                key={this.props.destination.lat + '' + this.props.destination.lng}
                defaultPosition={this.props.destination}
              />
            </GoogleMap>
          }
        />
      </div>
    );
  }
}
