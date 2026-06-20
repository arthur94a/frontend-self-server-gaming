import type { FormErrors } from '.'

import styles from './registerForm.module.scss'

export function ErrorLabel({
    errors,
    input,
}: {
    errors: FormErrors
    input: keyof FormErrors
}) {
    return (
        <>
            {errors[input] && (
                <span className={styles.error}>{errors[input]}</span>
            )}
        </>
    )
}
