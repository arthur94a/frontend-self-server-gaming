import * as yup from 'yup'

export const registerFormSchema = yup.object({
    name: yup
        .string()
        .required('Nome é obrigatório')
        .min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    plan: yup
        .string()
        .required('Plano é obrigatório')
        .oneOf(['starter', 'pro', 'elite'], 'Plano inválido'),
    password: yup
        .string()
        .required('Senha é obrigatória')
        .min(6, 'Senha deve ter pelo menos 6 caracteres'),
    confirmPassword: yup
        .string()
        .required('Confirmação de senha é obrigatória')
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
})

export type RegisterFormData = yup.InferType<typeof registerFormSchema>
