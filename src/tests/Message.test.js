import React from 'react';
import Message from '../components/Message';
import { shallow } from 'enzyme'

describe('Message', () => {
  it('renders without crashing', () => {
    const m = shallow(<Message />)

    expect(m.find('div')).toHaveLength(1)
  });
})