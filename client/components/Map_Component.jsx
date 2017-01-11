import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

// instantiate google maps objects to display directions
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
var map, placesService, previousLocation;

export default class Map_Component extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    let { query, origin, singleListing, isFetching, stopFetch, updatePlaces, updateListing } = this.props;

    let maxPrice = query.price.$$$$ ? 4 : query.price.$$$ ? 3 : query.price.$$ ? 2 : query.price.$ ? 1 : 4;

    if (isFetching) {
      console.log(query)
      stopFetch();
      let request = {
        location: new google.maps.LatLng(origin.lat, origin.lng),
        keyword: Object.keys(query.detail).join(' ') || query.selected.options,
        type: query.selected.options, //string that searches for places of the given type
        rankBy: google.maps.places.RankBy.DISTANCE,
        maxPriceLevel: maxPrice, //number between 0 and 4
        openNow: query.time.Now ? true : false
      }
      console.log('requerst!',request)
      placesService.nearbySearch(request, (places, status) => {
        if (status !== 'OK') return;
        updatePlaces(places);
        browserHistory.push('/recommend');

      })
    }

    if (singleListing.geometry !== previousLocation) {
      previousLocation = singleListing.geometry;
      // display directions from origin to destination on map
      let request = {
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(singleListing.geometry.location.lat(), singleListing.geometry.location.lng()),
        travelMode: 'WALKING'
      };
      directionsService.route(request, (response, status) => {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
          let {distance, duration} = response.routes[0].legs[0];

          //update route info in listing details
          updateListing({...singleListing, distance: distance.text, duration: duration.text});
        }
      });
    }
  }

  render() {
    let { zoom, center, changeBounds, origin, changeOrigin, singleListing } = this.props;
    return (
      <GoogleMapLoader
        containerElement={<div className='bigMap' />}
        googleMapElement={
          <GoogleMap
            ref={googleMap => {
              if (googleMap) {
                // on load, identify map element for directions renderer to target
                directionsDisplay.setMap(map = googleMap.props.map)
                placesService = new google.maps.places.PlacesService(map)
              }
            }}
            zoom={zoom}
            center={center}
            onBoundsChanged={() => {
              // update map state whenever a zoom or drag event occurs
              changeBounds({
                zoom: map.zoom,
                center: {lat: map.center.lat(), lng: map.center.lng()}
              })
            }}
            onClick={ // disable origin selecting when directions are already being displayed
              click => singleListing.geometry ? null : changeOrigin({lat: click.latLng.lat(), lng: click.latLng.lng()})}
          >
            { // disable map markers when directions are being displayed
              singleListing.geometry ?
                null :
                <Marker
                key={origin.lat + '' + origin.lng}
                defaultPosition={origin}
                />
            }
          </GoogleMap>
        }
      />
    );
  }
}
