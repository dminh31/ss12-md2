const initialState = 0
export const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return state = state + 1
        default:
            return state;
    }
}