import { Link } from 'react-router'
import clsx from 'clsx'

import styles from './button.module.scss'

interface ButtonProps {
    children: React.ReactNode
    type: 'button' | 'link' | 'external_link'
    theme?: 'green_light' | 'green_ghost' | 'dark' | 'dark_blue'
    size?: 'big' | 'normal' | 'small'
    disabled?: boolean
    className?: string
    url?: string
    onClick?: () => void
}

export function Button({
    children,
    type = 'button',
    theme = 'green_light',
    size = 'normal',
    disabled,
    className,
    url = '/',
    onClick,
}: ButtonProps) {
    switch (type) {
        case 'link':
            return (
                <Link
                    to={url}
                    className={clsx(
                        styles.button,
                        styles[theme],
                        styles[size],
                        className,
                    )}
                >
                    {children}
                </Link>
            )
        case 'external_link':
            return (
                <a
                    href={url}
                    className={clsx(
                        styles.button,
                        styles[theme],
                        styles[size],
                        className,
                    )}
                >
                    {children}
                </a>
            )
        case 'button':
        default:
            return (
                <button
                    className={clsx(
                        styles.button,
                        styles[theme],
                        styles[size],
                        className,
                    )}
                    onClick={(e) => {
                        e.preventDefault()
                        onClick?.()
                    }}
                    disabled={disabled}
                >
                    {children}
                </button>
            )
    }
}
