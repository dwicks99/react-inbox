const initialState = {
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}
export default reducer;