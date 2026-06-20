import { useEffect, useState } from 'react'
import { FiCheckCircle, FiX } from 'react-icons/fi'
import styles from './successMessage.module.scss'

interface SuccessMessageProps {
    title?: string
    message?: string
    duration?: number
    onClose?: () => void
}

export function SuccessMessage({
    title = 'Sucesso!',
    message = 'Operação realizada com sucesso.',
    duration = 5000,
    onClose,
}: SuccessMessageProps) {
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsClosing(true)
            setTimeout(() => {
                onClose?.()
            }, 300)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            onClose?.()
        }, 300)
    }

    return (
        <div className={`${styles.success_message_container}`}>
            <div
                className={`${styles.success_message} ${
                    isClosing ? styles.closing : ''
                }`}
            >
                <div className={styles.success_icon}>
                    <FiCheckCircle />
                </div>
                <div className={styles.success_content}>
                    <div className={styles.success_title}>{title}</div>
                    <div className={styles.success_message_text}>{message}</div>
                </div>
                <button
                    className={styles.close_button}
                    onClick={handleClose}
                    aria-label="Fechar mensagem"
                >
                    <FiX />
                </button>
            </div>
        </div>
    )
}
