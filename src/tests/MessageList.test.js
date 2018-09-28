import React from 'react'
import {MessageList} from '../components/MessageList'
import {shallow} from 'enzyme'
import Message from '../components/Message'

describe('Message List', () => {
    describe('Rendering', () => {
        it('renders without crashing', () => {
            const initialMessages = [{subject: "Hello"}]
            const ml = shallow(<MessageList list={initialMessages}/>)
        
            expect(ml.find('li')).toHaveLength(initialMessages.length)
        });

        it('contains Message', () => {
            const initialMessages = [{subject: "Hello"}]
            const ml = shallow(<MessageList list={initialMessages}/>)
            expect(ml.find(Message)).toHaveLength(initialMessages.length)
            
        });

        // it('has expected initial data', () => {
        //     const ml = shallow(<MessageList list={[]}/>)

        //     console.log(ml.props())
        //     expect(ml.props()).not.toEqual(undefined)
        // })
    })
})