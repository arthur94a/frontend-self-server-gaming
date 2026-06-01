import { Section } from '../section'
import { Button } from '../button'
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
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Serviços</NavLink>
                        </li>
                        <li>
                            <NavLink to="/prices">Preços</NavLink>
                        </li>
                    </ul>
                </nav>

                <Button>Começar</Button>
            </header>
        </Section>
    )
}
