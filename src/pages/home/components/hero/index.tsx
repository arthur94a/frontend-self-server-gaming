import { Section } from '@components/section'
import { Flag } from './flag'

export function Hero() {
    return (
        <Section>
            <Flag serversOnline={123} />
            <h1>Hero</h1>
        </Section>
    )
}
