import clsx from 'clsx'

import styles from './button.module.scss'

interface ButtonProps {
    children: React.ReactNode
    theme?: 'green_light' | 'dark'
}

export function Button({ children, theme = 'green_light' }: ButtonProps) {
    return (
        <button className={clsx(styles.button, styles[theme])}>
            {children}
        </button>
    )
}
