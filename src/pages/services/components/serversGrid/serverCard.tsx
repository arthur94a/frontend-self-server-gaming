import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import clsx from 'clsx'

import styles from './serverCard.module.scss'

import type { GameServer } from '@/types/servers'
import { PulseDot } from '@/components/pulseDot'

export function ServerCard({
    name,
    gameType,
    isOnline,
    isPopular,
    maxPlayers,
    speed,
}: GameServer) {
    const status = isOnline ? 'Online' : 'Offline'
    const normalizeGameType =
        'color_' + gameType.toLowerCase().replace(' ', '_')

    return (
        <article className={styles.card}>
            <span
                className={clsx(styles.circle, styles[normalizeGameType])}
            ></span>

            <header>
                <Title as={'h2'} firstPhrase={name} />
                <Subtitle level={2} text={gameType} />

                {isPopular && <span>Popular</span>}
            </header>

            <body>
                <div>1-{maxPlayers} players</div>
                <div>{speed} ms</div>
            </body>

            <footer>
                <div className={styles.status_container}>
                    <PulseDot online={isOnline} />
                    {status}
                </div>

                <button>configurar</button>
            </footer>
        </article>
    )
}
