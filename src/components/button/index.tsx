import clsx from 'clsx'

import styles from './button.module.scss'

interface ButtonProps {
    children: React.ReactNode
    theme?: 'green_light' | 'green_ghost' | 'dark'
    size?: 'big' | 'normal' | 'small'
}

export function Button({
    children,
    theme = 'green_light',
    size = 'normal',
}: ButtonProps) {
    return (
        <button className={clsx(styles.button, styles[theme], styles[size])}>
            {children}
        </button>
    )
}
