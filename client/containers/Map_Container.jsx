import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeZoom, changeLocation, changeMarkers } from '../actions/map_action';
import Map_Component from '../components/Map_Component.jsx';

class Map_Container extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='map-container prefTitle'>
        Location
        <Map_Component
          zoom={this.props.mapState.zoom}
          changeZoom={this.props.changeZoom}
          center={this.props.mapState.center}
          changeCenter={this.props.changeCenter}
          markers={this.props.mapState.markers}
          changeMarkers={this.props.changeMarkers}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { mapState: state.map }
}

const mapDispatchToProps = (dispatch) => ({
  changeZoom: (newZoom) => {dispatch(changeZoom(newZoom))},
  changeCenter: (newCenter) => {dispatch(changeCenter(newCenter))},
  changeMarkers: (newMarkers) => {dispatch(changeMarkers(newMarkers))},
})

Map_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map_Container)

export default Map_Container
