import { Section } from '@components/section'

import styles from './footer.module.scss'

export function Footer() {
    return (
        <Section className={styles.section}>
            <footer className={styles.footer}>
                <span>© 2026 NexusHost · Game Servers</span>
                <span>Latência baixa · Uptime 99.9% · DDoS Protection</span>
            </footer>
        </Section>
    )
}
