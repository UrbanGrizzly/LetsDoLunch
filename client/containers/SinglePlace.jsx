import React from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-bootstrap-star-rating';
import { Glyphicon, Image } from 'react-bootstrap';
import RejectButton from '../components/rejectPlaceButton.jsx'

class SinglePlace extends React.Component {

//currently not using dollarSigns
  dollarSigns () {
    const price = this.props.singleListing.price_level;
    let dollaz = '';
    for(var i = 0; i < price; i++) {
      dollaz+='$';
    }
    return dollaz;
  }


  selectPlace (listing) {
    //eventually we'll do more with this....
    alert('enjoy your lunch!')
  }

  // rejectPlace (listing) {
  //   console.log('rejected', listing);
  // }

  createListing () {
    const listing = this.props.singleListing;
    //currently with dummy image because have to make call to google for photo
    return <div>
      <Image src={listing.image_url} responsive />
        <h2>{listing.name}</h2>
        <div>
          <h4 className="col-sm-6">Rating: {listing.rating}/5</h4> 
          <h4 className="col-sm-6">Type: {listing.categories[0][0]}</h4>
        </div>
        <div>
          <RejectButton />
          <Glyphicon className="col-sm-6 btn btn-success" onClick={() => this.selectPlace(listing)} glyph="ok" />
        </div>
      </div>
  }

  render () {
    return (
      <div className='col-sm-4 single-rec'>
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

function mapDispatchToProps (dispatch) {
  return ({
    rejectPlace: (listing) => {dispatch(rejectPlace(listing))}
  })
}

export default connect(mapStateToProps)(SinglePlace);
