import { Faq } from '@/components/faq'
import { faqList } from './components/faqList'
import { PriceSection } from './components/priceSection'

export function Prices() {
    return (
        <main>
            <PriceSection />
            <Faq details={faqList} />
        </main>
    )
}
