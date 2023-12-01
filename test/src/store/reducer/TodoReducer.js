const initialState = [
    {
        name: "dminh",
        age: 18,
        id: 1
    }
]
export const reducerTodo = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Student":
            console.log("aaaa", action.payload);
            const newState = [...state, action.payload]
            return newState;
        case "Delete_Student":
            console.log("1111", action.payload);
            const newState1 = [...state].filter((item) => {
                return item.id != action.payload
            })
            return newState1;
        case "Edit_Student":
            let index = state.findIndex((item) => {
                return item.id == action.payload.id
            })
            state[index] = action.payload
            return state;
        default:
            return state;
    }
}