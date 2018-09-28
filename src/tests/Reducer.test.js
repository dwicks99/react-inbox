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
                    selected: false,
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
                    selected: false,
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
    });

    it('When a user checks the checkbox on a message Then the message should be highlighted', () => {

        //setup
        const initialState = reducer(undefined, {});
        const messageId = 2
        const initialSelected = initialState.Messages[messageId].selected
        DeepFreeze(initialState)


        //exercise
        const newState = reducer(initialState, { type: ActionTypes.ToggleMsgSelected, payload: messageId })

        //assert
        expect(newState.Messages[messageId].selected).not.toEqual(initialSelected)
    })

    it('if no checkboxes are selected then select all', () => {

        //setup
        const initialState = reducer(undefined, {});
        const initialSelected = 0
        const expectedSelected = 4
        DeepFreeze(initialState)


        //exercise
        const newState = reducer(initialState, { type: ActionTypes.SelectAll })

        //assert
        expect(newState.Messages.filter(e => e.selected === true)).toHaveLength(expectedSelected)
    })

    it('if some checkboxes are selected then select some', () => {

        //setup
        const initialState = reducer(reducer(undefined, {}), { type: ActionTypes.ToggleMsgSelected, payload: 0 });
        const initialSelected = 1
        const expectedSelected = 4
        DeepFreeze(initialState)


        //exercise
        const newState = reducer(initialState, { type: ActionTypes.SelectSome })

        //assert
        expect(newState.Messages.filter(e => e.selected === true)).toHaveLength(expectedSelected)
    })
})

