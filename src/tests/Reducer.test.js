import React from 'react';
import reducer from '../reducers/index';
import { shallow } from 'enzyme'

describe('Reducer', () => {

    it('initial state is present', () => {
        const expectedState = {
            Messages: [
                {
                    subject: "Galvanize is very awesome",
                    read: true,
                    selected: true,
                    labels: ['hello'],
                    starred: false
                },
                {
                    subject: "Understanding sarcasm in the workplace",
                    read: false,
                    selected: false,
                    labels: ['hello', 'good job'],
                    starred: true
                },
                {
                    subject: "Making the most of your compost",
                    read: false,
                    selected: true,
                    labels: [],
                    starred: false
                },
                {
                    subject: "Worms: Are they out to get you?",
                    read: true,
                    selected: false,
                    labels: [],
                    starred: true
                },
            ]
        }

        expect(reducer(undefined, {})).toEqual(expectedState)
    });
})