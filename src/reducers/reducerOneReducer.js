const initialState = {
    value: '',
};

export default function reducerOneReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_RXO':
            return { value: action.value };
        default:
            return state;
    }
}
