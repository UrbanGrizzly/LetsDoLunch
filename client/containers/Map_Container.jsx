import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeZoom, changeCenter, changeMarkers } from '../actions/map_action';
import Map_Component from '../components/Map_Component.jsx';

class Map_Container extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <Map_Component
          zoom={this.props.mapState.zoom}
          changeZoom={this.props.changeZoom}
          center={this.props.mapState.center}
          changeCenter={this.props.changeCenter}
          markers={this.props.mapState.markers || this.props.markers || [this.props.mapState.center]}
          changeMarkers={this.props.changeMarkers}
          staticMarkers={this.props.staticMarkers}
        />
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
