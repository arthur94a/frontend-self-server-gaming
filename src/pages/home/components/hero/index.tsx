import { Section } from '@components/section'
import { Flag } from './flag'

import styles from './hero.module.scss'
import { Title } from '@/components/Title'
import { Subtitle } from '@/components/Subtitle'
import { ContainerButtons } from './containerButtons'
import { ContainerMetrics } from './containerMetrics'

export function Hero() {
    return (
        <Section className={styles.section} center={true}>
            <Flag serversOnline={123} />

            <Title
                as="h1"
                firstPhrase="Servidores de jogos"
                secondPhrase="construídos para vencer"
                lineBreak={true}
                align="center"
                className={styles.title}
            />

            <Subtitle
                text="Hardware de ponta, latência ultra-baixa e proteção DDoS inclusa. Lance seu mundo em menos de 60 segundos."
                level={1}
                className={styles.subtitle}
            />

            <ContainerButtons />

            <ContainerMetrics
                metricArr={[
                    { value: '99.9%', label: 'uptime' },
                    { value: '<8ms', label: 'latência média' },
                    { value: '42', label: 'datacenters' },
                    { value: '60s', label: 'deploy' },
                ]}
            />
        </Section>
    )
}
