import { changeBounds, changeOrigin } from '../client/actions/map_action.js'

describe('actions', () => {
  describe('changeBounds', () => {
    it('should pass along the bounds we pass in', () => {
      let bounds = {zoom: 16, center: 'somewhere'}
      expect(changeBounds(bounds).newBounds).toEqual(bounds)
    })
  })
})
