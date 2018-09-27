import React from 'react';
import reducer from '../reducers/index';
import {shallow} from 'enzyme'

describe('Reducer', () => {

    it('initial state is present', () => {
        const expectedState = {Messages:[{subject: "Galvanize is very awesome"}, {subject: "Understanding sarcasm in the workplace"}]}

        expect(reducer(undefined, {})).toEqual(expectedState)
    });
})