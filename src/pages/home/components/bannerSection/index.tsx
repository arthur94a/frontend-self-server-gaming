import { Banner } from '@/components/banner'
import { Section } from '@/components/section'

import styles from './bannerSection.module.scss'

export function BannerSection() {
    return (
        <Section center={true} className={styles.section}>
            <Banner />
        </Section>
    )
}
