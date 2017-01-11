import { changeBounds, changeOrigin } from '../client/actions/map_action.js'

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
