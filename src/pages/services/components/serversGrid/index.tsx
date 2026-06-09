import { Section } from '@/components/section'
import { ServerCard } from './serverCard'
import type { GameServer } from '@/types/servers'

import * as api from '@mocks/servers.json'

import styles from './serversGrid.module.scss'

export function ServersGrid() {
    return (
        <Section center={true} className={styles.section}>
            <div className={styles.grid}>
                {api.servers.map((server) => {
                    return (
                        <ServerCard
                            key={server.id}
                            {...(server as GameServer)}
                        />
                    )
                })}
            </div>
        </Section>
    )
}
