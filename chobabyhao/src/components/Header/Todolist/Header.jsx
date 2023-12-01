import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Header() {
    const data = useSelector(state => state)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({
            type: "INCREASE",
            payload: 5
        })
    }
    return (
        <>
            count: {JSON.stringify(data)}
            <button onClick={handleClick}>click</button>
            <button onClick={() => dispatch({ type: "DECREASE" })}>decrease</button>
        </>
    )
}
