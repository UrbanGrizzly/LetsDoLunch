import React from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-bootstrap-star-rating';

class SinglePlace extends React.Component {

  dollarSigns () {
    const price = this.props.singleListing.price_level;
    let dollaz = '';
    for(var i = 0; i < price; i++) {
      dollaz+='$';
    }
    return dollaz;
  }

  creatRating () {
    //figure out how to get partial stars
  }

  createListing () {
    const listing = this.props.singleListing;
    return <div>
        <img src="http://akns-images.eonline.com/eol_images/Entire_Site/2016813/rs_300x300-160913131824-600-hey-girl.jpg"/>
        <h2>{listing.name}</h2>
        <div>
          <h4 style={{float: 'left'}}>{listing.rating}/5</h4> 
          <h4 style={{float: 'right'}}>{this.dollarSigns()}</h4>
        </div>
      </div>;
  }

  render () {
    return (
      <div className='col-sm-4'>
        {this.createListing()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    singleListing: state.singleListing
  }
}

export default connect(mapStateToProps)(SinglePlace);
