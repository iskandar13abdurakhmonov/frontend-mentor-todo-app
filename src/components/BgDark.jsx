import { useContext } from 'react'
import './BgDark.scss'
import { ThemeContext } from '../contexts/theme-context'

export function BgDark() {

    const { theme } = useContext(ThemeContext)

    return <div className={`bg-${theme}`}></div>
}
