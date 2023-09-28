import React, { useContext } from 'react'
import './TodoItem.scss'
import Checkbox from 'react-custom-checkbox'
import { RxCross2, RxCheck } from 'react-icons/rx'
import { ThemeContext } from '../contexts/theme-context'

export default function TodoItem({ todo, onDeleteTodo, onChangeTodo }) {
    const { theme } = useContext(ThemeContext)

    return (
        <li className={`todo-item todo-item__${theme}`}>
            <Checkbox
                className="todo-checkbox"
                checked={todo.isCompleted}
                icon={
                    <div
                        style={{
                            display: 'flex',
                            flex: 1,
                            background:
                                'linear-gradient(331deg, rgba(137,88,210,1) 0%, rgba(111,222,244,1) 100%)',
                            alignSelf: 'stretch',
                        }}
                    >
                        <RxCheck
                            color="white"
                            size={20}
                        />
                    </div>
                }
                borderColor="#C8CAE3"
                borderRadius={20}
                style={{ overflow: 'hidden' }}
                size={26}
                value={todo.isCompleted}
                onChange={() => onChangeTodo(todo.id)}
            />
            <p className={`todo-item__text text__${theme}`}>{todo.text}</p>
            <button
                className="todo-item__delete"
                onClick={() => onDeleteTodo(todo.id)}
            >
                <RxCross2 size={20} color={theme === 'dark' ? 'white' : 'black'} />
            </button>
        </li>
    )
}
