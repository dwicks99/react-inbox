import React from 'react';
import {MessageList} from '../components/MessageList';
import {shallow} from 'enzyme'

describe('Message List', () => {
    describe('Rendering', () => {
        it('renders without crashing', () => {
            const ml = shallow(<MessageList />)
        
            expect(ml.find('div')).toHaveLength(1)
        });

        it('has expected data', () => {
            const ml = shallow(<MessageList />)

            expect(ml.props().list).not.toEqual(undefined)
        })
    })
})