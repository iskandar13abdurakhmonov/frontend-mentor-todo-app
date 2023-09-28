import React, { useContext, useState } from 'react'
import './TodoFilters.scss'
import { ThemeContext } from '../contexts/theme-context'
import Message from './Message'

export default function TodoFIlters({
    todos,
    onClearComplete,
    onSortByCompleted,
    onSortByActive,
}) {
    const { theme } = useContext(ThemeContext)

    const [active, setActive] = useState(0)

    const notCompletedTodos = todos.filter((todo) => !todo.isCompleted)

    const handleCLick = (id) => {
        setActive(id)
    }

    return (
        <>
            {todos.length > 0 ? (
                <div className="todo-filters filters">
                    <span className={`filters-count filters-count__${theme}`}>
                        {notCompletedTodos.length}
                        {notCompletedTodos.length > 1
                            ? 'items left'
                            : 'item left'}
                    </span>
                    <ul className="filters__list">
                        <li className="filters__item">
                            <button
                                className={`filters__button filters__button__${theme} ${active === 1 ? 'filters__button--active' : ''}`}
                                onClick={() => handleCLick(1)}
                            >
                                All
                            </button>
                        </li>
                        <li className="filters__item">
                            <button
                                className={`filters__button filters__button__${theme} ${active === 2 ? 'filters__button--active' : ''}`}
                                onClick={() => {
                                    onSortByActive()
                                    handleCLick(2)
                                }}
                            >
                                Active
                            </button>
                        </li>
                        <li className="filters__item">
                            <button
                                className={`filters__button filters__button__${theme} ${active === 3 ? 'filters__button--active' : ''}`}
                                onClick={() => {
                                    onSortByCompleted()
                                    handleCLick(3)
                                }}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <button
                        className={`clear clear__${theme}`}
                        onClick={() => onClearComplete()}
                    >
                        Clear Completed
                    </button>
                </div>
            ) : (
                <Message>Add item to your todo list!</Message>
            )}
        </>
    )
}
