import { Button } from '@/components/button'

import styles from './hero.module.scss'

export function ContainerButtons() {
    return (
        <div className={styles.container_buttons}>
            <Button type="link" url="/prices" theme="green_light">
                Ver planos
            </Button>
            <Button type="link" url="/servers" theme="dark">
                Explorar jogos
            </Button>
        </div>
    )
}
