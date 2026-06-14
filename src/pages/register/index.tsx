import { Section } from '@/components/section'
import { Hero } from './components/hero'
import { RegisterForm } from './components/registerForm'

import styles from './register.module.scss'

export function Register() {
    return (
        <main className={styles.main}>
            <Section innerSectionClassName={styles.inner_section}>
                <Hero />
                <RegisterForm />
            </Section>
        </main>
    )
}
