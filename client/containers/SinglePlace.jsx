import React from 'react'
import { connect } from 'react-redux'

class SinglePlace extends React.Component {
  createListing () {
    return this.props.singleListing
  }

  render () {
    return (
      <ul>
        <li>{this.createListing()}</li>
      </ul>
    )
  }
}

function mapStateToProps (state) {
  singleListing: state.singleListing;
  return {}
}

export default connect(mapStateToProps)(SinglePlace);
