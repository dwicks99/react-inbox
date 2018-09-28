import React from 'react';
import Message from '../components/Message';
import { shallow } from 'enzyme'

describe('Message', () => {
  it('renders without crashing', () => {
    const expectedSubject = {
      subject: 'Hello World',
      read: false,
      selected: false,
      labels: [],
      starred: false
    }
    const m = shallow(<Message message={expectedSubject} />)

    expect(m.find('div.message')).toHaveLength(1)
    expect(m.find('div.message').text()).toEqual(expectedSubject.subject)
    expect(m.find('input[type="checkbox"]')).toHaveLength(1)
    expect(m.find('i.star.fa.fa-star-o')).toHaveLength(1)
  });

  it('message renders with read style', () => {
    const expected = {
      subject: 'Hello World',
      read: true,
      selected: false,
      labels: []
    }
    const m = shallow(<Message message={expected} />)

    expect(m.find('div.message.read')).toHaveLength(1)
  });

  it('message renders with unread style', () => {
    const expected = {
      subject: 'Hello World',
      read: false,
      selected: false,
      labels: []
    }
    const m = shallow(<Message message={expected} />)

    expect(m.find('div.message.unread')).toHaveLength(1)
  });

  it('if message is selected should have style and checked box', () => {

    const messageData = {
      subject: 'Hello World',
      read: true,
      selected: true,
      labels: []
    }

    const m = shallow(<Message message={messageData} />)

    expect(m.find('div.message.selected')).toHaveLength(1)
    let checkbox = m.find({ type: 'checkbox' });
    expect(checkbox.props().checked).toBeTruthy();
  });

  it('if message has labels, should render labels', () => {

    const messageData = {
      subject: 'Hello World',
      read: true,
      selected: true,
      labels: ['beginner', 'overdone']
    }

    const m = shallow(<Message message={messageData} />)

    expect(m.find('span.label.label-warning')).toHaveLength(messageData.labels.length)
  });


  it('if message is starred should have filled in star', () => {

    const messageData = {
      subject: 'Hello World',
      read: true,
      selected: true,
      labels: ['beginner', 'overdone'],
      starred: true
    }

    const m = shallow(<Message message={messageData} />)

    expect(m.find('i.star.fa.fa-star')).toHaveLength(1)
  });
})
