import { ThemeContext } from '../contexts/theme-context'
import { useContext } from 'react'
import './Wrapper.scss'

export function Wrapper({ children }) {
    const { theme } = useContext(ThemeContext)

    return <div className={`wrapper-${theme}`}>{children}</div>
}
