import React from 'react';
import reducer from '../reducers/index';
import { ActionTypes } from '../helpers/types'
import DeepFreeze from 'deep-freeze'


describe('Reducer', () => {

    it('initial state is present', () => {
        const expectedState = {
            Messages: [
                {
                    subject: "Galvanize is very awesome",
                    read: true,
                    selected: true,
                    labels: ['hello'],
                    starred: false,
                    id: 0
                },
                {
                    subject: "Understanding sarcasm in the workplace",
                    read: false,
                    selected: false,
                    labels: ['hello', 'good job'],
                    starred: true,
                    id: 1
                },
                {
                    subject: "Making the most of your compost",
                    read: false,
                    selected: true,
                    labels: [],
                    starred: false,
                    id: 2
                },
                {
                    subject: "Worms: Are they out to get you?",
                    read: true,
                    selected: false,
                    labels: [],
                    starred: true,
                    id: 3
                },
            ]
        }

        expect(reducer(undefined, {})).toEqual(expectedState)
    });

    it('toggles the starred state of an email', () => {
        //setup
        const initialState = reducer(undefined, {});
        const messageId = 2
        const initialStar = initialState.Messages[messageId].starred
        DeepFreeze(initialState)


        //exercise
        const newState = reducer(initialState, { type: ActionTypes.ToggleMsgStar, payload: messageId })

        //assert
        expect(newState.Messages[messageId].starred).not.toEqual(initialStar)
    })
})