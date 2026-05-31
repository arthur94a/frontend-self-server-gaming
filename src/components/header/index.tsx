import { Button } from '../button'
import { GiAngelWings } from 'react-icons/gi'

import styles from './header.module.scss'

export function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <i className={styles.logo_icon}>
                    <GiAngelWings stroke="black" fill="black" size={'100%'} />
                </i>
                <span className={styles.logo_title}>Ícaro Services</span>
            </div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Preços</li>
                </ul>
            </nav>
            <Button>Começar</Button>
        </header>
    )
}
