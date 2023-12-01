import { createStore } from 'redux'
import { reducerTodo } from './reducer/TodoReducer'
export const store = createStore(reducerTodo)