import styles from './productAdvantages.module.scss'

export type AdvantageCardType = {
    icon: React.ReactNode
    title: string
    description: string
}

interface AdvantageCardProps {
    icon: AdvantageCardType['icon']
    title: AdvantageCardType['title']
    description: AdvantageCardType['description']
}

export function AdvantageCard({
    icon,
    title,
    description,
}: AdvantageCardProps) {
    return (
        <div className={styles.card}>
            <i>{icon}</i>
            <h3 className={styles.card_title}>{title}</h3>
            <p className={styles.card_description}>{description}</p>
        </div>
    )
}
