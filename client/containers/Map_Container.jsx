import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeZoom, changeCenter, changeOrigin } from '../actions/map_action';
import Map_Component from '../components/Map_Component.jsx';

class Map_Container extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <Map_Component
          zoom={this.props.zoom}
          changeZoom={this.props.changeZoom}
          center={this.props.center || this.props.center}
          changeCenter={this.props.changeCenter}
          origin={this.props.origin || [this.props.center || this.props.center] }
          changeOrigin={this.props.changeOrigin}
          staticMarkers={this.props.staticMarkers}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return state.map
}

const mapDispatchToProps = (dispatch) => ({
  changeZoom: (newZoom) => {dispatch(changeZoom(newZoom))},
  changeCenter: (newCenter) => {dispatch(changeCenter(newCenter))},
  changeOrigin: (newOrigin) => {dispatch(changeOrigin(newOrigin))},
})

Map_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map_Container)

export default Map_Container
