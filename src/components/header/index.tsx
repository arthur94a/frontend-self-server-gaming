import { Section } from '@components/section'
import { Button } from '@components/button'
import { NavLink } from 'react-router'
import { GiAngelWings } from 'react-icons/gi'

import styles from './header.module.scss'

export function Header() {
    return (
        <Section>
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
                                Home
                            </NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink
                                to="/services"
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

                <Button>Começar</Button>
            </header>
        </Section>
    )
}
