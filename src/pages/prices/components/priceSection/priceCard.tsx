import { Button } from '@/components/button'
import { FaCheck } from 'react-icons/fa6'
import clsx from 'clsx'

import styles from './priceCard.module.scss'

import type { Plan } from '@/types/prices'

interface PriceCardProps {
    data: Plan
}

export function PriceCard({ data }: PriceCardProps) {
    const favoritePlan = data.name === 'pro'

    function ctaLabel() {
        switch (data.name) {
            case 'starter':
                return 'Começar'
            case 'pro':
                return 'Escolher Pro'
            case 'elite':
                return 'Escolher Elite'
        }
    }

    return (
        <article
            className={clsx(styles.card, favoritePlan && styles.highlight)}
        >
            <header className={styles.card_header}>
                <h2 className={styles.plan_name}>{data.name}</h2>
                <p className={styles.plan_description}>{data.description}</p>
            </header>

            <main className={styles.card_main}>
                <div>
                    <span className={styles.plan_price}>R$ {data.price}</span>
                    <span className={styles.monthly}>/mês</span>
                </div>

                <Button
                    type="link"
                    theme={favoritePlan ? 'green_light' : 'dark_blue'}
                    className={styles.button}
                    url={`/register?plan=${data.name}`}
                >
                    {ctaLabel()}
                </Button>
            </main>

            <footer>
                <ul className={styles.feature_list}>
                    {data.features.map((feature) => {
                        return (
                            <li key={`feat_${data.price}_${feature}`}>
                                <FaCheck fill="#02f77b" /> {feature}
                            </li>
                        )
                    })}
                </ul>
            </footer>
        </article>
    )
}
