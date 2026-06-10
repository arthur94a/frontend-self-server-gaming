import { Button } from '@/components/button'
import type { Plan } from '@/types/prices'

interface PriceCardProps {
    data: Plan
}

export function PriceCard({ data }: PriceCardProps) {
    function ctaLabel() {
        switch (data.name) {
            case 'starter':
                return 'Começar'
            case 'pro':
                return 'Escolher Pro'
            case 'elite':
                return 'Escolher Elite'
        }
    }

    return (
        <article>
            <header>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </header>

            <main>
                <div>
                    <span>R$ {data.price}</span>
                    <span>/mês</span>
                </div>

                <Button>{ctaLabel()}</Button>
            </main>

            <footer>
                <ul>
                    {data.features.map((feature) => {
                        return (
                            <li key={`feat_${data.price}_${feature}`}>
                                {feature}
                            </li>
                        )
                    })}
                </ul>
            </footer>
        </article>
    )
}
