import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {action} from '../../action/action'
export default function Header() {
    const data = useSelector(state => state)
    console.log(data);
    const dispatch = useDispatch()
    console.log("1111", data);
    const handleClick = () => {
        dispatch(action("INCREASE",5))
    }
    return (
        <div>
            count: {data.reducer.count}
            <button onClick={handleClick}>click</button>
        </div>
    )
}
