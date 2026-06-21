import { useState } from 'react'
import { Section } from '@components/section'
import { Button } from '@components/button'
import { NavLink, useLocation } from 'react-router'
import { GiAngelWings } from 'react-icons/gi'
import { FiMenu, FiX } from 'react-icons/fi'

import styles from './header.module.scss'

export function Header() {
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)
    const isPricePage = location?.pathname == '/prices'
    const isRegisterPage = location?.pathname == '/register'

    const handleNavClick = () => {
        setMenuOpen(false)
    }

    return (
        <Section className={styles.section}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <i className={styles.logo_icon}>
                        <GiAngelWings
                            stroke="black"
                            fill="black"
                            size={'100%'}
                        />
                    </i>
                    <span className={styles.logo_title}>Ícaro Services</span>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.nav_item}>
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return isActive
                                        ? styles.active
                                        : styles.disabled
                                }}
                            >
                                Início
                            </NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink
                                to="/servers"
                                className={({ isActive }) => {
                                    return isActive
                                        ? styles.active
                                        : styles.disabled
                                }}
                            >
                                Serviços
                            </NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink
                                to="/prices"
                                className={({ isActive }) => {
                                    return isActive
                                        ? styles.active
                                        : styles.disabled
                                }}
                            >
                                Preços
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Button
                    type="link"
                    url={isPricePage ? '/register' : '/prices'}
                    theme="green_light"
                    className={styles.button}
                >
                    {isRegisterPage ? 'Planos' : 'Começar'}
                </Button>

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {menuOpen && (
                    <nav className={styles.mobile_menu}>
                        <ul>
                            <li className={styles.mobile_nav_item}>
                                <NavLink
                                    to="/"
                                    onClick={handleNavClick}
                                    className={({ isActive }) => {
                                        return isActive
                                            ? styles.active
                                            : styles.disabled
                                    }}
                                >
                                    Início
                                </NavLink>
                            </li>
                            <li className={styles.mobile_nav_item}>
                                <NavLink
                                    to="/servers"
                                    onClick={handleNavClick}
                                    className={({ isActive }) => {
                                        return isActive
                                            ? styles.active
                                            : styles.disabled
                                    }}
                                >
                                    Serviços
                                </NavLink>
                            </li>
                            <li className={styles.mobile_nav_item}>
                                <NavLink
                                    to="/prices"
                                    onClick={handleNavClick}
                                    className={({ isActive }) => {
                                        return isActive
                                            ? styles.active
                                            : styles.disabled
                                    }}
                                >
                                    Preços
                                </NavLink>
                            </li>
                        </ul>
                        <Button
                            type="link"
                            url={isPricePage ? '/register' : '/prices'}
                            theme="green_light"
                            className={styles.mobile_button}
                            onClick={handleNavClick}
                        >
                            {isRegisterPage ? 'Planos' : 'Começar'}
                        </Button>
                    </nav>
                )}
            </header>
        </Section>
    )
}
