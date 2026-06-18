import { Section } from '@/components/section'
import { Title } from '@/components/Title'
import { Subtitle } from '@/components/Subtitle'

import Illustration from '@assets/bored.svg?react'

import styles from './notFound.module.scss'

export function NotFound() {
    return (
        <main className={styles.main}>
            <Section innerSectionClassName={styles.inner_section}>
                <div>
                    <Title
                        as={'h1'}
                        align="center"
                        firstPhrase="Página não encontrada"
                    />

                    <Subtitle level={1} text="Erro 404" align="center" />
                </div>

                <Illustration className={styles.illustration} />
            </Section>
        </main>
    )
}
