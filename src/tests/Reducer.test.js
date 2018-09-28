import React from 'react';
import reducer from '../reducers/index';
import {shallow} from 'enzyme'

describe('Reducer', () => {

    it('initial state is present', () => {
        const expectedState = {Messages:[{subject: "Galvanize is very awesome", read: true}, {subject: "Understanding sarcasm in the workplace", read: false}]}

        expect(reducer(undefined, {})).toEqual(expectedState)
    });
})