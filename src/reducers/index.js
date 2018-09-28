import { ActionTypes } from "../helpers/types";

const initialState = {
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ToggleMsgStar: return doToggleMsgStar(state, action.payload)
        case ActionTypes.ToggleMsgSelected: return doToggleMsgSelected(state, action.payload)
        case ActionTypes.SelectAll: return doSelectAll(state)
        case ActionTypes.SelectSome: return doSelectSome(state)
        default: return state;
    }
}

const doToggleMsgStar = (state, id) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.Messages[id].starred = !state.Messages[id].starred
    return newState
}

const doToggleMsgSelected = (state, id) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.Messages[id].selected = !state.Messages[id].selected
    return newState
}

const doSelectAll = (state) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.Messages = newState.Messages.map(m => ({ ...m, selected: true }))
    return newState
}

const doSelectSome = (state) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.Messages = newState.Messages.map(m => ({ ...m, selected: true }))
    return newState
}

export default reducer;