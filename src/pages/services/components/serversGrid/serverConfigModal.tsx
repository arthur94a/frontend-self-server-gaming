import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Section } from '@/components/section'
import { Suptitle } from '@/components/Suptitle'
import { FiX } from 'react-icons/fi'
import { Button } from '@/components/button'

import styles from './serverConfigModal.module.scss'
import { Title } from '@/components/Title'
import { Subtitle } from '@/components/Subtitle'

interface ServerConfigModalProps {
    isOpen: boolean
    closeModal: () => void
    data: string
}

type Plan = 'starter' | 'pro' | 'elite'

interface ConfigValues {
    ram: number
    nvme: number
    jogadores: number
    processador: number
}

export function ServerConfigModal({
    isOpen,
    closeModal,
    data,
}: ServerConfigModalProps) {
    const navigate = useNavigate()
    const [config, setConfig] = useState<ConfigValues>({
        ram: 2,
        nvme: 20,
        jogadores: 1,
        processador: 1,
    })

    function calculatePlan(values: ConfigValues): Plan {
        if (!values) return 'starter'

        // ELITE Requests
        const isElite =
            values.ram >= 8 ||
            values.nvme >= 100 ||
            values.jogadores >= 32 ||
            values.processador >= 4

        // PRO Requests
        const isPro =
            values.ram >= 4 ||
            values.nvme >= 60 ||
            values.jogadores >= 16 ||
            values.processador >= 2

        if (isElite) return 'elite'
        if (isPro) return 'pro'
        return 'starter'
    }

    function handleClose(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        closeModal?.()
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        const plan = calculatePlan(config)
        navigate(`/register?plan=${plan}`)
        closeModal()

        const stringConfig = JSON.stringify({ ...config, data })
        localStorage.setItem(`${data}_serverConfig:1.0.0`, stringConfig)
    }

    const selectedPlan = calculatePlan(config)

    return (
        <>
            {isOpen && (
                <Section
                    className={styles.section}
                    innerSectionClassName={styles.inner_section}
                >
                    <header className={styles.header}>
                        <Suptitle text="configurar" />
                        <button
                            onClick={(event) => handleClose(event)}
                            className={styles.close}
                        >
                            <FiX size={30} />
                        </button>
                    </header>

                    <div className={styles.container}>
                        <Title firstPhrase={data} as="h2" align="left" />
                        <Subtitle
                            level={2}
                            align="left"
                            text="Selecione o que precisa e veja seu plano ideal."
                        />

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.form_group}>
                                <label className={styles.label}>
                                    <span className={styles.label_text}>
                                        RAM Dedicada: {config.ram} GB
                                    </span>
                                    <input
                                        type="range"
                                        min="2"
                                        max="16"
                                        step="2"
                                        value={config.ram}
                                        onChange={(e) =>
                                            setConfig({
                                                ...config,
                                                ram: parseInt(e.target.value),
                                            })
                                        }
                                        className={styles.range_input}
                                    />
                                </label>
                            </div>

                            <div className={styles.form_group}>
                                <label className={styles.label}>
                                    <span className={styles.label_text}>
                                        NVMe: {config.nvme} GB
                                    </span>
                                    <input
                                        type="range"
                                        min="20"
                                        max="150"
                                        step="10"
                                        value={config.nvme}
                                        onChange={(e) =>
                                            setConfig({
                                                ...config,
                                                nvme: parseInt(e.target.value),
                                            })
                                        }
                                        className={styles.range_input}
                                    />
                                </label>
                            </div>

                            <div className={styles.form_group}>
                                <label className={styles.label}>
                                    <span className={styles.label_text}>
                                        Jogadores: {config.jogadores}
                                    </span>
                                    <input
                                        type="range"
                                        min="1"
                                        max="64"
                                        step="1"
                                        value={config.jogadores}
                                        onChange={(e) =>
                                            setConfig({
                                                ...config,
                                                jogadores: parseInt(
                                                    e.target.value,
                                                ),
                                            })
                                        }
                                        className={styles.range_input}
                                    />
                                </label>
                            </div>

                            <div className={styles.form_group}>
                                <label className={styles.label}>
                                    <span className={styles.label_text}>
                                        Processador: {config.processador} Cores
                                    </span>
                                    <input
                                        type="range"
                                        min="1"
                                        max="4"
                                        step="1"
                                        value={config.processador}
                                        onChange={(e) =>
                                            setConfig({
                                                ...config,
                                                processador: parseInt(
                                                    e.target.value,
                                                ),
                                            })
                                        }
                                        className={styles.range_input}
                                    />
                                </label>
                            </div>

                            <div className={styles.plan_info}>
                                <p className={styles.plan_text}>
                                    Seu plano recomendado:
                                </p>
                                <p className={styles.plan_badge}>
                                    {selectedPlan.toUpperCase()}
                                </p>
                            </div>

                            <Button
                                type="submit"
                                url={`/register/?plan=${selectedPlan}`}
                                theme="green_light"
                            >
                                Continuar com {selectedPlan}
                            </Button>
                        </form>
                    </div>
                </Section>
            )}
        </>
    )
}
