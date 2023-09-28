import React, { useContext, useState } from 'react'
import './TodoForm.scss'
import { ThemeContext } from '../contexts/theme-context'
import uuid from 'react-uuid'

export default function TodoForm({ onAddNewTodo }) {
    const { theme } = useContext(ThemeContext)

    const [query, setQuery] = useState('')

    const handeSumbit = (e) => {
        e.preventDefault()


        if(!query) return

        const newTodo = {
            id: uuid(),
            text: query,
            isCompleted: false,
        }

        

        onAddNewTodo(newTodo)
        setQuery('')
    }

    return (
        <form className={`todo__form form-${theme}`} onSubmit={handeSumbit}>
            <input
                type="text"
                value={query}
                placeholder="Currenly typing"
                className={`form-input form-input__${theme}`}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}
