import clsx from 'clsx'

import styles from './subtitle.module.scss'

export function Subtitle({
    text,
    level = 1,
    className,
}: {
    text: string
    level: 1 | 2 | 3
    className?: string
}) {
    return (
        <p
            className={clsx(
                styles.subtitle,
                styles[`level_${level}`],
                className,
            )}
        >
            {text}
        </p>
    )
}
