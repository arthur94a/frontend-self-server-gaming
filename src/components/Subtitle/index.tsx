import clsx from 'clsx'

import styles from './subtitle.module.scss'

export function Subtitle({
    text,
    level = 1,
    className,
    align = 'center',
}: {
    text: string
    level: 1 | 2 | 3
    className?: string
    align?: 'center' | 'left' | 'right'
}) {
    return (
        <p
            className={clsx(
                styles.subtitle,
                styles[`level_${level}`],
                styles[align],
                className,
            )}
        >
            {text}
        </p>
    )
}
