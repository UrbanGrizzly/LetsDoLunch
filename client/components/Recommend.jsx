import React, { Component }  from 'react'
import { connect }           from 'react-redux'
import { browserHistory }    from 'react-router';
import { Glyphicon, Image }  from 'react-bootstrap';
import StarRating            from 'react-bootstrap-star-rating';
import fetch                 from 'isomorphic-fetch';
import { Throttle }          from 'react-throttle';
import RejectButton          from './Recommend_subcomponents/rejectPlaceButton.jsx';
import AcceptButton          from './Recommend_subcomponents/acceptPlaceButton.jsx';
import Later                 from './Recommend_subcomponents/laterLink.jsx';
import Never                 from './Recommend_subcomponents/neverLink.jsx';
import CurrentListing        from './Recommend_subcomponents/listingInfo.jsx';
import ListingDetail         from './Recommend_subcomponents/listingDetail.jsx';
import Map                   from '../containers/Map_Container.jsx';
import SubmitModal           from '../containers/Selected_Modal.jsx';


export default class Recommend extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.setMap('bigMap', true)
  }

  componentDidMount() {
    this.fetchListingDetails();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.singleListing.geometry) {browserHistory.push('/search')};
    if (this.props.singleListing.id !== prevProps.singleListing.id && !this.props.isFetchingDetails) {this.fetchListingDetails()}
  }

  fetchListingDetails() {
    let { singleListing, updateListing, listingIndex, fetchVenueDetails,
      finishVenueDetails, blacklist, isFetchingDetails, routeInfo} = this.props
    let { name, vicinity, price_level, opening_hours } = singleListing;
    fetchVenueDetails();
    fetch('api/yelp?term='+name+'&location='+vicinity)
      .then(res =>res.json())
      .then(json => {
        let { distance, duration } = this.props.routeInfo;
        let { rating, phone, location } = json;
        //price level
        let dollar = '';
        for (var i = 0; i<price_level; i++) {
          dollar=dollar+'$'
        }
        //opening hours
        let open = opening_hours.open_now;
        open = open ? 'Yes' : 'No'
        //category
        let category='';
        for (var i = 0; i < json.categories.length; i++) {
          category += json.categories[i][0]+', ';
        }
        category = category.slice(0, -2)
        //phone Number
        let phoneNum = 'N/A';
        if (phone) {
          phoneNum = phone.substr(0,3)+'-'+phone.substr(3,3)+'-'+phone.substr(6,5)
        }
        //address
        let address = location.display_address.join(', ')

console.log('yelp', rating)

        updateListing({
          ...singleListing,
          hasDetails: true,
          distance: distance,
          duration: duration,
          yelpRating: rating,
          yelpCategory: category || '',
          dollar: dollar,
          open: open,
          phone: phoneNum,
          address: address
        })
      })
      .catch(err => {
        updateListing({
          ...singleListing,
          hasDetails: false
        })
      })
  }

  render() {
    let { places, singleListing, listingIndex, updatePlaces, nextPage, rejectListing, toggleDetails, blacklist,
      showDetails, addToBlacklist, addToWishlist, addToVisited, openModal, hideModal, map, user, isFetchingDetails, isLoggedIn } = this.props;

    return (
      <div className='col-md-12 box-rec'>
        <div>
          <div className='col-md-6 map-rec'>
            <Map />
          </div>

          <div className='col-md-5 single-rec'>

            <CurrentListing {...singleListing} />
            { showDetails ? null : <h5 onClick={toggleDetails}>more info</h5> }
            { showDetails  ? <ListingDetail {...singleListing} /> : null } <br/>
          <div className='optionButtons'>
            <RejectButton
            clickHandler={() => {
              if (!isFetchingDetails) {
                if (!places[listingIndex+1]) {
                  nextPage()
                  setTimeout(updatePlaces, 2000)
                } else rejectListing(singleListing, blacklist)
              }
            }}
            />
            <AcceptButton clickHandler={() => { addToVisited(singleListing, blacklist); openModal('afterSelectModal') }} />


            { isLoggedIn ?
              <div className='optionLinks'>
                <Never clickHandler={() => isFetchingDetails ? null : addToBlacklist(singleListing, blacklist)} />
                <Later clickHandler={() => isFetchingDetails ? null : addToWishlist(singleListing, blacklist)} />
              </div>
              : null
            }

          </div>

          <SubmitModal isLoggedIn={user.isLoggedIn} origin={map.origin} place={singleListing} onClick={() => hideModal('afterSelectModal')} />
          </div>
        </div>
      </div>
    )
  }
}
