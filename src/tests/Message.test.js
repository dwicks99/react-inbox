import React from 'react';
import Message from '../components/Message';
import { shallow } from 'enzyme'

describe('Message', () => {
  it('renders without crashing', () => {
    const expectedSubject = {subject:'Hello World'}
    const m = shallow(<Message message={expectedSubject}/>)

    expect(m.find('div.message')).toHaveLength(1)
    expect(m.find('div.message').text()).toEqual(expectedSubject.subject)
  });

  it('message renders with read style', () => {
    const expected = {subject:'Hello World', read: true}
    const m = shallow(<Message message={expected}/>)

    expect(m.find('div.message.read')).toHaveLength(1)
  });

  it('message renders with unread style', () => {
    const expected = {subject:'Hello World', read: false}
    const m = shallow(<Message message={expected}/>)

    expect(m.find('div.message.unread')).toHaveLength(1)
  });
})
