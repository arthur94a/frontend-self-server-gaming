import type { Plan } from './prices'

export type PublicUser = {
    name: string
    email: string
    plan: Plan['name']
}

export type User = PublicUser & {
    password: string
    confirmPassword: string
    servers: []
}
