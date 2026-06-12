import { Section } from '@components/section'
import { FaPlus } from 'react-icons/fa'
import clsx from 'clsx'

import styles from './faq.module.scss'
import { useState } from 'react'

export type DetailType = {
    summary: string
    text: string
}

export function Faq({ details }: { details: DetailType[] }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleToggleFaq = (index: number) => {
        setActiveIndex((current) => (current === index ? null : index))
    }

    return (
        <Section center={true} className={styles.section}>
            <h2 className={styles.title}>Perguntas frequentes</h2>

            <div className={styles.faq_container}>
                {details.map((detail, index) => {
                    const isOpen = activeIndex === index

                    return (
                        <details
                            key={detail.summary}
                            className={styles.faq_box}
                            open={isOpen}
                            onClick={() => {
                                handleToggleFaq(index)
                            }}
                        >
                            <summary
                                className={styles.faq_summary}
                                onClick={(event) => {
                                    event.preventDefault()
                                }}
                                aria-expanded={isOpen}
                            >
                                {detail.summary}

                                <FaPlus
                                    fill="#02f77b"
                                    className={clsx(
                                        styles.icon_plus,
                                        isOpen && styles.rotate,
                                    )}
                                />
                            </summary>

                            <div className={styles.faq_description}>
                                <p>{detail.text}</p>
                            </div>
                        </details>
                    )
                })}
            </div>
        </Section>
    )
}
