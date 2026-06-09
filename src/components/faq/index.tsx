import { Section } from '@components/section'

export type DetailType = {
    summary: string
    text: string
}

export function Faq({ details }: { details: DetailType[] }) {
    return (
        <Section center={true}>
            <h2>Perguntas frequentes</h2>

            <div>
                {details.map((detail) => (
                    <details key={detail.summary}>
                        <summary>{detail.summary}</summary>

                        <div>
                            <p>{detail.text}</p>
                        </div>
                    </details>
                ))}
            </div>
        </Section>
    )
}
