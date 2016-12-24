import React from 'react'
import { connect } from 'react-redux'

class SinglePlace extends React.Component {
  createListing () {
    console.log(this.props.singleListing)
    return this.props.singleListing.photos
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
  return {
    singleListing: state.singleListing
  }
}

export default connect(mapStateToProps)(SinglePlace);
