import { Section } from '@/components/section'
import { ServerCard } from './serverCard'
import { SwitchViewButtons } from './switchViewButtons'

import type { GameServer } from '@/types/servers'

import * as api from '@mocks/servers.json'

import styles from './serversGrid.module.scss'
import { useState } from 'react'

export function ServersGrid() {
    const [typeView, setTypeView] = useState<'grid' | 'list'>('grid')

    return (
        <Section center={true} className={styles.section}>
            <SwitchViewButtons setTypeView={setTypeView} />

            <div className={styles[typeView]}>
                {api.servers.map((server) => {
                    return (
                        <ServerCard
                            key={server.id}
                            typeView={typeView}
                            {...(server as GameServer)}
                        />
                    )
                })}
            </div>
        </Section>
    )
}
