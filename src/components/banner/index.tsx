import { Title } from '@components/Title'
import { Subtitle } from '@components/Subtitle'
import { Button } from '../button'

import styles from './banner.module.scss'

export function Banner() {
    return (
        <div className={styles.banner}>
            <Title as={'h2'} firstPhrase="Pronto para lançar?" />
            <Subtitle
                level={2}
                text="Crie seu servidor agora e ganhe 7 dias de garantia para testar tudo."
            />
            <Button theme="green_light">Escolher plano</Button>
        </div>
    )
}
