import { Button } from '@/components/button'

import styles from './hero.module.scss'

export function ContainerButtons() {
    return (
        <div className={styles.container_buttons}>
            <Button theme="green_light">Ver planos</Button>
            <Button theme="dark">Explorar jogos</Button>
        </div>
    )
}
