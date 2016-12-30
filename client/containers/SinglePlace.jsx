import React from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-bootstrap-star-rating';
import { Glyphicon, Image } from 'react-bootstrap'

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
    //eventually use this to render rating as stars
  }


  createListing () {
    const listing = this.props.singleListing;
    //currently with dummy image because have to make call to google for photo
    return <div>
      <Image src="http://akns-images.eonline.com/eol_images/Entire_Site/2016813/rs_300x300-160913131824-600-hey-girl.jpg" responsive />
        <h2>{listing.name}</h2>
        <div>
          <h4 className="col-sm-6">Rating: {listing.rating}/5</h4> 
          <h4 className="col-sm-6">Price Level: {this.dollarSigns()}</h4>
        </div>
        <div>
          <Glyphicon className="col-sm-6 btn btn-danger" glyph="remove" />
          <Glyphicon className="col-sm-6 btn btn-success" glyph="ok" />
        </div>
      </div>
  }

  render () {
    return (
      <div className='col-sm-6 single-rec'>
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
