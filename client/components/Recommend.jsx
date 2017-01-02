import React from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-bootstrap-star-rating';
import { Glyphicon, Image } from 'react-bootstrap';
import rejectListing from '../actions/action_single_place';

const Recommend = ({ singleListing, rejectPlace}) => {
  const listing = singleListing;
  //may want to make these into ind. components
  return <div className='col-sm-4 single-rec'>
   <Image src={listing.image_url} responsive />
      <h2>{listing.name}</h2>
      <div>
        <h4 className="col-sm-6">Rating: {listing.rating}/5</h4> 
        <h4 className="col-sm-6">Type: {listing.categories[0][0]}</h4>
      </div>
      <div>
        <Glyphicon className="col-sm-6 btn btn-danger" onClick={() => rejectPlace(listing)} glyph="remove" />
        <Glyphicon className="col-sm-6 btn btn-success" onClick={() => selectPlace(listing)} glyph="ok" />
      </div>
    </div>
}




// class Recommendtion extends React.Component {

//   constructor(props) {
//     super(props);
//   }


//   selectPlace (listing) {
//     //eventually we'll probably turn this into a component
//     alert('enjoy your lunch!')
//   }


//   createListing () {
//     console.log(this.props)
//     const listing = this.props.singleListing;
//     //may want to make these into ind. components
//     return <div>
//      <Image src={listing.image_url} responsive />
//         <h2>{listing.name}</h2>
//         <div>
//           <h4 className="col-sm-6">Rating: {listing.rating}/5</h4> 
//           <h4 className="col-sm-6">Type: {listing.categories[0][0]}</h4>
//         </div>
//         <div>
//           <Glyphicon className="col-sm-6 btn btn-danger" onClick={() => this.props.rejectPlace(listing)} glyph="remove" />
//           <Glyphicon className="col-sm-6 btn btn-success" onClick={() => this.selectPlace(listing)} glyph="ok" />
//         </div>
//       </div>
//   }


//   render () {
//     return (
//       <div className='col-sm-4 single-rec'>
//         {this.createListing()}
//       </div>
//     )
//   }
// }

export default Recommend;
