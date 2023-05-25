import * as Yup from 'yup'

export const LoginSchema = Yup.object({ 
    email: Yup.string().email().required('please enter the registered email'), 
    password: Yup.string().required('please enter your password')
})