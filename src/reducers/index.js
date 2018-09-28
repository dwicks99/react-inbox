import { ActionTypes } from "../helpers/types";

const initialState = {
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ToggleMsgStar: return doToggleMsgStar(state, action.payload)
        default: return state;
    }
}

const doToggleMsgStar = (state, id) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.Messages[id].starred = !state.Messages[id].starred
    return newState
}

export default reducer;