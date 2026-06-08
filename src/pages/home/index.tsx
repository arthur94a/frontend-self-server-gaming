import { BannerSection } from './components/bannerSection'
import { Hero } from './components/hero'
import { ProductAdvantages } from './components/productAdvantages'

export function Home() {
    return (
        <main>
            <Hero />
            <ProductAdvantages />
            <BannerSection />
        </main>
    )
}
