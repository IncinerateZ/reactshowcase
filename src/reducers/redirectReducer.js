const initialState = {};

export default function redirectReducer(state = initialState, action) {
    switch (action.type) {
        case 'DO_REDIRECT':
            return {
                ...state,
                location: action.location,
                doRedirect: action.doRedirect,
            };
        default:
            return state;
    }
}
