import { PulseDot } from '@/components/pulseDot'

import styles from './hero.module.scss'

export function Flag({ serversOnline }: { serversOnline: number }) {
    return (
        <span className={styles.flag}>
            <PulseDot />
            {serversOnline} servidores online agora
        </span>
    )
}
