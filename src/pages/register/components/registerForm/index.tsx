import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { Button } from '@/components/button'
import { simulateUserRegister } from '@helper/simulateUserRegister'

import styles from './registerForm.module.scss'
import type { Plan } from '@/types/prices'

const VALID_PLANS: Plan['name'][] = ['starter', 'pro', 'elite']

function isValidPlan(plan: string): plan is Plan['name'] {
    return VALID_PLANS.includes(plan as Plan['name'])
}

interface FormValues {
    name: string
    email: string
    plan: string
    password: string
    confirmPassword: string
}

export function RegisterForm() {
    const [searchParams] = useSearchParams()
    const planParam = searchParams.get('plan')

    const initialValues: FormValues = {
        name: '',
        email: '',
        plan: (isValidPlan(planParam || '') ? planParam : '') || '',
        password: '',
        confirmPassword: '',
    }

    const [values, setValues] = useState<FormValues>(initialValues)
    const [isLoading, setIsLoading] = useState(false)
    const [buttonLabel, setButtonLabel] = useState('Cadastrar')

    async function handleSubmit() {
        setIsLoading(true)
        setButtonLabel('Carregando...')

        if (!isValidPlan(values.plan)) {
            alert('Por favor, selecione um plano válido')
            return
        }

        try {
            const result = await simulateUserRegister({
                user: {
                    ...values,
                    plan: values.plan,
                },
            })
            console.log(result)
        } catch {
            console.log('Houve um erro, tente novamente em instantes.')
        }

        setIsLoading(false)
        setButtonLabel('Cadastrar')
    }

    return (
        <div className={styles.form_container}>
            <form className={styles.form}>
                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="name">
                        Nome:
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={styles.input}
                        value={values.name}
                        onChange={(e) =>
                            setValues({ ...values, name: e.target.value })
                        }
                    />
                </div>

                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.input}
                        value={values.email}
                        autoComplete="email"
                        onChange={(e) =>
                            setValues({ ...values, email: e.target.value })
                        }
                    />
                </div>

                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="plans">
                        Plano:
                    </label>
                    <select
                        id="plans"
                        name="plans"
                        value={values.plan}
                        className={styles.input}
                        onChange={(e) =>
                            setValues({ ...values, plan: e.target.value })
                        }
                    >
                        <option value="" disabled>
                            Selecione um plano
                        </option>
                        <option value="starter">Starter</option>
                        <option value="pro">Pro</option>
                        <option value="elite">Elite</option>
                    </select>
                </div>

                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="password">
                        Senha:
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className={styles.input}
                        value={values.password}
                        onChange={(e) =>
                            setValues({ ...values, password: e.target.value })
                        }
                    />
                </div>

                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="confirmPassword">
                        Confirmar senha:
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className={styles.input}
                        value={values.confirmPassword}
                        onChange={(e) =>
                            setValues({
                                ...values,
                                confirmPassword: e.target.value,
                            })
                        }
                    />
                </div>

                <Button
                    type="button"
                    theme="green_light"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {buttonLabel}
                </Button>
            </form>
        </div>
    )
}
