import { Faq } from '@/components/faq'
import { faqList } from './components/faqList'
import { PriceSection } from './components/priceSection'

import styles from './prices.module.scss'

export function Prices() {
    return (
        <main className={styles.main}>
            <PriceSection />
            <Faq details={faqList} />
        </main>
    )
}
