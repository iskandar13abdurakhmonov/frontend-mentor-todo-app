import React, { useContext } from 'react'
import './Message.scss'
import { ThemeContext } from '../contexts/theme-context'

export default function Message({ children }) {

    const { theme } = useContext(ThemeContext)

  return (
    <p className={`message message__${theme}`}>{children}</p>
  )
}
