const initialState = {};

export default function locationReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_LOCATION':
            return state;
        case 'SET_LOCATION':
            state = action.location;
            return state;
        default:
            return state;
    }
}
