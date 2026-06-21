import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { PulseDot } from '@/components/pulseDot'
import { Button } from '@/components/button'
import { IoPeople } from 'react-icons/io5'
import { FaSignal } from 'react-icons/fa6'
import clsx from 'clsx'

import styles from './serverCard.module.scss'

import type { GameServer } from '@/types/servers'
import { ServerConfigModal } from './serverConfigModal'
import { useState } from 'react'

interface ServerCardProps extends GameServer {
    typeView: 'grid' | 'list'
}

export function ServerCard({
    name,
    gameType,
    isOnline,
    isPopular,
    maxPlayers,
    speed,
    typeView = 'grid',
}: ServerCardProps) {
    const status = isOnline ? 'Online' : 'Offline'
    const normalizeGameType =
        'color_' + gameType.toLowerCase().replace(' ', '_')
    const [isOpen, setIsOpen] = useState(false)

    function handleOpenConfig() {
        console.log('Open config')
        setIsOpen(true)
    }

    return (
        <>
            <article className={clsx(styles.card, styles[typeView])}>
                <span
                    className={clsx(styles.circle, styles[normalizeGameType])}
                ></span>

                <header className={styles.header}>
                    <Title
                        as={'h2'}
                        firstPhrase={name}
                        className={styles.title}
                    />
                    <Subtitle
                        level={2}
                        text={gameType}
                        className={styles.subtitle}
                    />

                    {isPopular && (
                        <span className={styles.flag_pop}>Popular</span>
                    )}
                </header>

                <main className={styles.main}>
                    <div className={styles.info}>
                        <IoPeople fill="#9c9c9c" /> 1-{maxPlayers} players
                    </div>

                    <div className={styles.info}>
                        <FaSignal fill="#02f77b" /> {speed} ms
                    </div>
                </main>

                <footer className={styles.footer}>
                    <div className={styles.status_container}>
                        <PulseDot online={isOnline} />
                        {status}
                    </div>

                    <Button
                        type="button"
                        theme="green_ghost"
                        size="small"
                        onClick={handleOpenConfig}
                    >
                        configurar
                    </Button>
                </footer>
            </article>

            {
                <ServerConfigModal
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    data={name}
                />
            }
        </>
    )
}
