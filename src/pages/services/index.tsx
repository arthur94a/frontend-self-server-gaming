import { FirstSection } from './components/firstSection'
import { ServersGrid } from './components/serversGrid'

import styles from './services.module.scss'

export function Services() {
    return (
        <main className={styles.main}>
            <FirstSection />
            <ServersGrid />
        </main>
    )
}
