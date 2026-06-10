import { Section } from '@/components/section'
import { Subtitle } from '@/components/Subtitle'
import { Suptitle } from '@/components/Suptitle'
import { Title } from '@/components/Title'
import { PriceCard } from './priceCard'
import api from '@mocks/plans.json'

import type { Plan } from '@/types/prices'

export function PriceSection() {
    return (
        <Section center={true}>
            <div>
                <Suptitle text="Planos" />

                <Title
                    as={'h1'}
                    firstPhrase="Preços"
                    secondPhrase="transparentes"
                    align="center"
                />

                <Subtitle
                    level={1}
                    text="Sem letras miúdas. Mude ou cancele quando quiser."
                />
            </div>

            <div>
                {api.plans.map((plan) => {
                    return <PriceCard key={plan.name} data={plan as Plan} />
                })}
            </div>
        </Section>
    )
}
