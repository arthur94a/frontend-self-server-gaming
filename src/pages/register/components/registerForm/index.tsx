import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { Button } from '@/components/button'

import styles from './registerForm.module.scss'

export function RegisterForm() {
    const [searchParams] = useSearchParams()
    const planParam = searchParams.get('plan')

    const initialValues = {
        name: '',
        email: '',
        plans: planParam || '',
        password: '',
        confirmPassword: '',
    }

    const [values, setValues] = useState(initialValues)

    function handleSubmit() {
        console.log(values)
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
                        value={values.plans}
                        className={styles.input}
                        onChange={(e) =>
                            setValues({ ...values, plans: e.target.value })
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
                >
                    Cadastrar
                </Button>
            </form>
        </div>
    )
}
