import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Footer() {
    const data = useSelector(state => state)
    const dispatch = useDispatch()
    // console.log("1111", data);
   
    return (
        <div>***************
           count: {data.reducer1}
            <button onClick={()=>dispatch({type:"ADD"})}>decrease</button>
        </div>
    )
}
