import styles from './suptitle.module.scss'

export function Suptitle({text}: {text: string}) {
    return (
        <span className={styles.suptitle}>// {text}</span>
    )
}