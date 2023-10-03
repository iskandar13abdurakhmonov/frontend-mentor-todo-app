import React, { useContext } from 'react'
import './TodoContent.scss'
import { ThemeContext } from '../contexts/theme-context'

export default function TodoContent({ children }) {

    const { theme } = useContext(ThemeContext)

  return (
    <div className={`todo-content todo-content__${theme}`}>{children}</div>
  )
}
