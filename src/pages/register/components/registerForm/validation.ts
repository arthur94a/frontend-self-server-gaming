import * as yup from 'yup'

export const registerFormSchema = yup.object({
    name: yup
        .string()
        .required('** obrigatório')
        .min(3, '* deve ter pelo menos 3 caracteres'),
    email: yup.string().required('** obrigatório').email('Email inválido'),
    plan: yup
        .string()
        .required('** obrigatório')
        .oneOf(['starter', 'pro', 'elite'], '* plano inválido'),
    password: yup
        .string()
        .required('** obrigatório')
        .min(6, '* deve ter pelo menos 6 caracteres'),
    confirmPassword: yup
        .string()
        .required('** obrigatório')
        .oneOf([yup.ref('password')], '* as senhas devem ser iguais'),
})

export type RegisterFormData = yup.InferType<typeof registerFormSchema>
