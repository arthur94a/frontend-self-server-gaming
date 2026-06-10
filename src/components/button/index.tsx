import clsx from 'clsx'

import styles from './button.module.scss'

interface ButtonProps {
    children: React.ReactNode
    theme?: 'green_light' | 'green_ghost' | 'dark' | 'dark_blue'
    size?: 'big' | 'normal' | 'small'
    className?: string
}

export function Button({
    children,
    theme = 'green_light',
    size = 'normal',
    className,
}: ButtonProps) {
    return (
        <button
            className={clsx(
                styles.button,
                styles[theme],
                styles[size],
                className,
            )}
        >
            {children}
        </button>
    )
}
