import clsx from 'clsx'

import styles from './section.module.scss'

export function Section({
    children,
    className,
    innerSectionClassName,
    center = false,
}: {
    children: React.ReactNode
    className?: string
    innerSectionClassName?: string
    center?: boolean
}) {
    return (
        <section className={clsx(styles.section, className)}>
            <div
                className={clsx(
                    styles.inner_section,
                    center && styles.center,
                    innerSectionClassName,
                )}
            >
                {children}
            </div>
        </section>
    )
}
