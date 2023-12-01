const initial =
{
    count: 0
}
export const reducer = (state = initial, action) => {
    switch (action.type) {
        case "INCREASE":
            const newObj = { ...state }
            newObj.count = newObj.count + action.payload
            return newObj;
        case "DECREASE":
            const newObj1 = { ...state }
            newObj1.count = newObj1.count - 1
            return newObj1;
        default:
            return state
    }
}