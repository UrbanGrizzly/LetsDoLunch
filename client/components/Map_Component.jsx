import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

// instantiate google maps objects to display directions
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
var placesService, previousLocation;

export default class Map_Component extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // tell map ref function to recenter map on origin or home on map load
    this.loading = true
  }

  componentDidUpdate() {
    let { query, origin, changeBounds, singleListing, isFetching, stopFetch, updatePlaces, saveNextPage, updateListing, updateRoute } = this.props;

    // convert max price selector from object to integer
    let maxPrice = query.price.$$$$ ? 4 : query.price.$$$ ? 3 : query.price.$$ ? 2 : query.price.$ ? 1 : 4;

    // if query has been submitted, make request to google places library
    if (isFetching) {
      stopFetch();
      let request = {
        location: new google.maps.LatLng(origin.lat, origin.lng),
        keyword: Object.keys(query.detail).join(' OR ') || query.selected.options,
        type: query.selected.options, //string that searches for places of the given type
        rankBy: google.maps.places.RankBy.DISTANCE,
        maxPriceLevel: maxPrice, //number between 0 and 4
        openNow: query.time.Now ? true : false
      }
      placesService.nearbySearch(request, (places, status, pagination) => {
        if (status !== 'OK') return;

        // save places to state and redirect to recommendation page
        updatePlaces(places);
        browserHistory.push('/recommend');

        // save closure to state for loading further results if needed
        saveNextPage(() => {
          if (pagination.hasNextPage) {
            pagination.nextPage();
          } else {
            alert('We give up.\nThere really is no pleasing you...');
          }
        })
      })
    }

    // if recommendation has been updated, request and display directions to recommended location
    if (singleListing.geometry !== previousLocation) {
      let { location } = previousLocation = singleListing.geometry || {};
      if (singleListing.geometry) {
        directionsDisplay.setMap(this.map)
        let request = {
          origin: new google.maps.LatLng(origin.lat, origin.lng),
          destination: new google.maps.LatLng(location.lat(), location.lng()),
          travelMode: 'WALKING'
        };
        directionsService.route(request, (response, status) => {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            let { distance, duration } = response.routes[0].legs[0]
            let { price_level, opening_hours } = singleListing
            //price level
            let dollar = '';
            for (var i = 0; i < price_level; i++) {
              dollar = dollar + '$'
            }
            //opening hours
            let open = opening_hours.open_now;
            if (open) {
              open = 'Yes'
            } else {
              open = 'No'
            }
            updateRoute(distance.text, duration.text);
            // updateListing({
            //   ...singleListing,
            //   distance: distance.text,
            //   duration: duration.text,
            //   dollar: dollar,
            //   open: open
            // });
          }
        });
      } else {
        // clear directions when not making a recommendation
        directionsDisplay.setMap(null)
        changeBounds({
          zoom: 16,
          center: origin
        })
      }
    }
  }

  render() {
    let { zoom, center, changeBounds, origin, changeOrigin, home,
      useHome, changeHome, singleListing, mapClass } = this.props;
    return (
      <GoogleMapLoader
        containerElement={<div className={mapClass} />}
        googleMapElement={
          <GoogleMap
            ref={
              // runs on component render
              googleMap => {
              if (googleMap) {
                // on load, identify map element for directions renderer to target
                this.map = googleMap.props.map

                // loading set to true on component mount
                if (this.loading) {
                  this.loading = false
                  this.map.setCenter(useHome ? home : origin)
                }

                // display directions only if making a recommendation
                if (singleListing.geometry) {
                  directionsDisplay.setMap(this.map)
                }

                // initialize places library for fetching results
                placesService = new google.maps.places.PlacesService(this.map)
              }
            }}
            zoom={zoom}
            center={center}
            onBoundsChanged={() => {
              // update map state whenever a zoom or drag event occurs
              changeBounds({
                zoom: this.map.zoom,
                center: {lat: this.map.center.lat(), lng: this.map.center.lng()}
              })
            }}
            onClick={
              // disable origin/home selecting when directions are already being displayed
              click => singleListing.geometry ? null : useHome ?
                changeHome({lat: click.latLng.lat(), lng: click.latLng.lng()})
                : changeOrigin({lat: click.latLng.lat(), lng: click.latLng.lng()})
            }
          >
            {
              // disable map markers when directions are being displayed
              singleListing.geometry ?
                null : useHome ?
                  <Marker  defaultPosition={home} key={home.lat + '' + home.lng} />
                  : <Marker  defaultPosition={origin} key={origin.lat + '' + origin.lng} />
            }
          </GoogleMap>
        }
      />
    );
  }
}
