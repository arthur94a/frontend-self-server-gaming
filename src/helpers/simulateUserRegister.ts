import type { PublicUser } from '@/types/users'

function randomSimulateStatus({ percent = 90 }: { percent?: number }) {
    return Math.random() * 100 <= percent
}

interface SimulateUserRegisterProps {
    user: PublicUser
    simulateStatus?: boolean
    probabilitySuccess?: number
    timeout?: number
}

export async function simulateUserRegister({
    user,
    simulateStatus,
    probabilitySuccess = 90,
    timeout = 2000,
}: SimulateUserRegisterProps) {
    await new Promise((resolve) => setTimeout(resolve, timeout))
    const { email, name, plan } = user

    const success =
        simulateStatus ?? randomSimulateStatus({ percent: probabilitySuccess })

    if (!success) {
        throw new Error('Erro ao carregar os dados no servidor.')
    }

    return {
        name,
        email,
        plan,
        status: 'Dados carregados com sucesso!',
    }
}
