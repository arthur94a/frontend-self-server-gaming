import { Subtitle } from '@/components/Subtitle'
import { Suptitle } from '@/components/Suptitle'
import { Title } from '@/components/Title'

import styles from './hero.module.scss'
import { Illustration } from '../illustration'

export function Hero() {
    return (
        <div className={styles.hero_container}>
            <div>
                <Suptitle text="cadastro" />
                <Title
                    as="h1"
                    firstPhrase="Contrate"
                    secondPhrase="seu plano"
                    align="left"
                />
                <Subtitle
                    level={2}
                    text="O primeiro passo para a sua nova aventura começa aqui"
                />
            </div>

            <Illustration />
        </div>
    )
}
