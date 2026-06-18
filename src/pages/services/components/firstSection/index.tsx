import { Section } from '@/components/section'
import { Suptitle } from '@/components/Suptitle'
import { Title } from '@/components/Title'

import styles from './firstSection.module.scss'
import { Subtitle } from '@/components/Subtitle'

export function FirstSection() {
    return (
        <Section className={styles.section}>
            <Suptitle text="Catálogo" />
            <Title
                as={'h1'}
                firstPhrase="Servidores"
                secondPhrase="disponíveis"
                lineBreak={false}
                align="left"
            />
            <Subtitle
                level={1}
                align="left"
                text="Mais de 40 jogos pré-configurados, com deploy em menos de um minuto."
            />
        </Section>
    )
}
