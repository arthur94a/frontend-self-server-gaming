import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { Button } from '@/components/button'
import { simulateUserRegister } from '@helper/simulateUserRegister'
import { registerFormSchema } from './validation'
import { ValidationError } from 'yup'

import styles from './registerForm.module.scss'
import type { Plan } from '@/types/prices'
import { ErrorLabel } from './errorLabel'

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

export interface FormErrors {
    name?: string
    email?: string
    plan?: string
    password?: string
    confirmPassword?: string
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
    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)
    const [buttonLabel, setButtonLabel] = useState('Cadastrar')

    function resetForm() {
        setIsLoading(false)
        setButtonLabel('Cadastrar')
    }

    async function handleSubmit() {
        setIsLoading(true)
        setButtonLabel('Carregando...')
        setErrors({})

        try {
            await registerFormSchema.validate(values, { abortEarly: false })

            if (!isValidPlan(values.plan)) {
                alert('Por favor, selecione um plano válido')
                resetForm()
                return
            }

            const result = await simulateUserRegister({
                user: {
                    ...values,
                    plan: values.plan,
                },
            })
            console.log(result)
            alert('Cadastro realizado com sucesso!')
            setValues(initialValues)
        } catch (error: unknown) {
            if (error instanceof ValidationError) {
                const newErrors: FormErrors = {}

                error.inner.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path as keyof FormErrors] = err.message
                    }
                })

                setErrors(newErrors)
            } else {
                console.log('Houve um erro, tente novamente em instantes.')
            }
        }

        resetForm()
    }

    return (
        <div className={styles.form_container}>
            <form className={styles.form}>
                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="name">
                        Nome: <ErrorLabel errors={errors} input="name" />
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={`${styles.input} ${
                            errors.name ? styles.input_error : ''
                        }`}
                        value={values.name}
                        onChange={(e) => {
                            setValues({ ...values, name: e.target.value })
                            if (errors.name)
                                setErrors({ ...errors, name: undefined })
                        }}
                    />
                </div>

                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="email">
                        Email: <ErrorLabel errors={errors} input="email" />
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={`${styles.input} ${
                            errors.email ? styles.input_error : ''
                        }`}
                        value={values.email}
                        autoComplete="email"
                        onChange={(e) => {
                            setValues({ ...values, email: e.target.value })
                            if (errors.email)
                                setErrors({ ...errors, email: undefined })
                        }}
                    />
                </div>

                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="plans">
                        Plano: <ErrorLabel errors={errors} input="plan" />
                    </label>
                    <select
                        id="plans"
                        name="plans"
                        className={`${styles.input} ${
                            errors.plan ? styles.input_error : ''
                        }`}
                        value={values.plan}
                        onChange={(e) => {
                            setValues({ ...values, plan: e.target.value })
                            if (errors.plan)
                                setErrors({ ...errors, plan: undefined })
                        }}
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
                        Senha: <ErrorLabel errors={errors} input="password" />
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className={`${styles.input} ${
                            errors.password ? styles.input_error : ''
                        }`}
                        value={values.password}
                        onChange={(e) => {
                            setValues({ ...values, password: e.target.value })
                            if (errors.password)
                                setErrors({ ...errors, password: undefined })
                        }}
                    />
                </div>

                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="confirmPassword">
                        Confirmar senha:{' '}
                        <ErrorLabel errors={errors} input="confirmPassword" />
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className={`${styles.input} ${
                            errors.confirmPassword ? styles.input_error : ''
                        }`}
                        value={values.confirmPassword}
                        onChange={(e) => {
                            setValues({
                                ...values,
                                confirmPassword: e.target.value,
                            })
                            if (errors.confirmPassword)
                                setErrors({
                                    ...errors,
                                    confirmPassword: undefined,
                                })
                        }}
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
