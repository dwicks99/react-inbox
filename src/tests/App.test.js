import React from 'react';
import App from '../App';
import { shallow } from 'enzyme'
import MessageList from '../components/MessageList';
import Toolbar from '../components/Toolbar';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />)

    expect(app.find('div.App')).toHaveLength(1)
  });
  it('renders with subcomponents', () => {
    const app = shallow(<App />)

    expect(app.find(MessageList)).toHaveLength(1)
    expect(app.find(Toolbar)).toHaveLength(1)
  });
})

