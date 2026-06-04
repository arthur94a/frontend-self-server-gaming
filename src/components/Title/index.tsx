import clsx from 'clsx'

import styles from './title.module.scss'

export function Title({
    as: Component = 'h1',
    firstPhrase,
    secondPhrase,
    lineBreak = false,
    className,
}: {
    as?: React.ElementType
    firstPhrase: string
    secondPhrase: string
    lineBreak?: boolean
    className?: string
}) {
    return (
        <Component className={clsx(styles.title, className)}>
            <span className={styles.white}>{firstPhrase}</span>
            {lineBreak ? <br /> : ''}
            <span className={styles.colored}>{secondPhrase}</span>
        </Component>
    )
}
