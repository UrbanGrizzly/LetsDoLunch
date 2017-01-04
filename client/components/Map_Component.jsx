import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();

export default class Map_Component extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.destination) {
      let request = {
        origin: new google.maps.LatLng(this.props.origin.lat, this.props.origin.lng),
        destination: new google.maps.LatLng(this.props.destination.lat, this.props.destination.lng),
        travelMode: 'WALKING'
      };
    directionsService.route(request, (response, status) => {
      if (status == 'OK') directionsDisplay.setDirections(response);
    });
    }
    return (
      <div>
        <GoogleMapLoader
          containerElement={<div className='map' />}
          googleMapElement={
            <GoogleMap
              ref={googleMap => {
                if (googleMap) directionsDisplay.setMap(this.map = googleMap.props.map)
              }}
              zoom={this.props.zoom}
              center={this.props.center}
              onBoundsChanged={() => {
                this.props.changeBounds({
                  zoom: this.map.zoom,
                  center: {lat: this.map.center.lat(), lng: this.map.center.lng()}
                })
              }}
              onClick={click => this.props.destination ? null : this.props.changeOrigin({lat: click.latLng.lat(), lng: click.latLng.lng()})}
            >
              {this.props.destination ?
                null :
                <Marker
                key={this.props.origin.lat + '' + this.props.origin.lng}
                defaultPosition={this.props.origin}
                />
              }
            </GoogleMap>
          }
        />
      </div>
    );
  }
}
