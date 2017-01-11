import { changeBounds, changeOrigin } from '../client/actions/map_action.js'
import { setQuery, updatePlaces } from '../client/actions/action_get_places.js'
import { rejectListing, updateListing } from '../client/actions/action_single_place.js'

describe('Map Actions', () => {
  describe('changeBounds', () => {
    it('should pass along the bounds we pass in', () => {
      let bounds = {zoom: 16, center: 'somewhere'}
      expect(changeBounds(bounds).newBounds).toEqual(bounds)
    })
  })
  describe('changeOrigin', () => {
    it('should pass along the origin we pass in', () => {
      let origin = {lat: 'northish', lng: 'westy'}
      expect(changeOrigin(origin).newOrigin).toEqual(origin)
    })
  })
})

describe('Get Places Actions', () => {
  describe('setQuery', () => {
    it('should pass along the query we pass in', () => {
      let query = {stuff: 'things'}
      expect(setQuery(query).query).toEqual(query)
    })
  })
  describe('updatePlaces', () => {
    it('should pass along the places we pass in', () => {
      let places = [{name: 'makersquare'}, {name: 'hack reactor'}]
      expect(updatePlaces(places).places).toEqual(places)
    })
  })
})

describe('Single Place Actions', () => {
  describe('rejectListing', () => {
    it('should increment the listing index with each call', () => {
      let idx = rejectListing().idx
      expect(rejectListing().idx).toEqual(idx+1)
    })
    it('should pass along the listing we pass in', () => {
      let listing = {name: 'Listy McListerson\'s'}
      expect(rejectListing(listing).listing).toEqual(listing)
    })
  })
  describe('updateListing', () => {
    it('should pass along the places we pass in', () => {
      let listing = {name: 'Listy McListerson\'s'}
      expect(updateListing(listing).listing).toEqual(listing)
    })
  })
})
