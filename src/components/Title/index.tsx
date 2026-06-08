import clsx from 'clsx'

import styles from './title.module.scss'

export function Title({
    as: Component = 'h1',
    firstPhrase,
    secondPhrase,
    lineBreak = false,
    className,
    align = 'center'
}: {
    as?: React.ElementType
    firstPhrase: string
    secondPhrase?: string
    lineBreak?: boolean
    className?: string
    align?: 'left' | 'center' | 'right'
}) {
    return (
        <Component className={clsx(styles.title, styles[align], className)}>
            <span className={styles.white}>{firstPhrase}</span>
            {lineBreak && secondPhrase ? <br /> : ' '}
            {secondPhrase && (
                <span className={styles.colored}>{secondPhrase}</span>
            )}
        </Component>
    )
}
