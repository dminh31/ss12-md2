import { reducer } from './reducer/Reducer.js'
import { reducer1 } from './reducer/Reducer1.js'
import { createStore,combineReducers } from "redux"
const rootReducer=combineReducers({
    reducer,
    reducer1   
}
)
export const store = createStore(rootReducer)
