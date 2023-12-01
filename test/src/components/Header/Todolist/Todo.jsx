import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
export default function Todo() {
    const uuid = () => {
        return Math.floor(Math.random() * 99999999)
    }
    const [nameInput, setNameInput] = useState({
        name: "",
        age: "",
        id: uuid(),
    })
    const data = useSelector(store => store)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setNameInput({ ...nameInput, [name]: value })
    }
    const handleAdd = () => {
        // if (nameInput.id) {
        //     dispatch({
        //         type:"Edit_Student",
        //         payload:nameInput
        //     })
        // }else{
        // }
        dispatch({
            type: "Add_Student",
            payload: nameInput
        })
        setNameInput({
            name: "",
            age: "",
            id: uuid()
        })
    }

    const handleDelete = (id) => {
        dispatch({
            type: "Delete_Student",
            payload: id
        })
    }
    const handleEdit = (item) => {
        setNameInput(item)
    }
    return (
        <>
            <label htmlFor="">Name</label>
            <input
                type="text"
                name='name'
                value={nameInput.name}
                onChange={handleChange} />
            <label htmlFor="">Age</label>
            <input
                type="text"
                name='age'
                value={nameInput.age}
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {data.map((item) =>
                    <li key={item.id}>{item.name} {item.age}
                        <button onClick={() => handleEdit(item)} style={{ marginLeft: "10px" }}>Edit</button>
                        <button onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px" }}>Delete</button>
                    </li>
                )}
            </ul>

        </>
    )
}
