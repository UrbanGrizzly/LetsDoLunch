import { changeBounds, changeOrigin } from '../client/actions/map_action.js'
import { setQuery, updatePlaces } from '../client/actions/action_get_places.js'

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
