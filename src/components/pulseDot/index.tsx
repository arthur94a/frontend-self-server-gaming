import clsx from 'clsx'

import styles from './pulseDot.module.scss'

export function PulseDot({ online = true }: { online?: boolean }) {
    return <span className={clsx(styles.dot, online && styles.online)}></span>
}
