import React from 'react'
import { shallow } from 'enzyme'
import Loading from './index'

describe('<Loading>', () => {
  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Loading />)
      expect(wrapper).toBeDefined()
    })
  })
})
