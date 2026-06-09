import { Faq } from '@/components/faq'
import { faqList } from './faqList'

export function Prices() {
    return (
        <main>
            Página de preços <Faq details={faqList} />
        </main>
    )
}
