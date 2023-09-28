import React, { useContext } from 'react'
import './Header.scss'
import { ThemeContext } from '../contexts/theme-context'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark'
        setTheme(isCurrentDark ? 'light' : 'dark')
    }

    return (
        <div className="header">
            <h1 className={`header__logo logo`}>Todo</h1>
            <button
                className="header__switch switch"
                onClick={handleThemeChange}
            >
                {theme === 'dark' ? (
                   <BsSun size={26}/>
                ) : (
                    <BsMoon size={26}/>
                )}
            </button>
        </div>
    )
}
