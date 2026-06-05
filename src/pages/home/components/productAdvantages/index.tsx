import { Section } from '@/components/section'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { advantageList } from './advantageList'
import { AdvantageCard } from './advantageCard'

import styles from './productAdvantages.module.scss'

export function ProductAdvantages() {
    return (
        <Section center={true}>
            <Title as={'h2'} firstPhrase="O que faz a diferença" />

            <Subtitle
                level={2}
                text="Infraestrutura pensada para gamers exigentes."
            />

            <div className={styles.advantages_container}>
                {advantageList.map((advantage) => {
                    return (
                        <AdvantageCard
                            key={advantage.title}
                            icon={advantage.icon}
                            title={advantage.title}
                            description={advantage.description}
                        />
                    )
                })}
            </div>
        </Section>
    )
}
