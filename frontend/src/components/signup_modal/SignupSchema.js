import * as Yup from 'Yup'

export const SignupSchema = Yup.object({ 
   name: Yup.string().min(2).max(25).required('Please enter your name'), 
   age: Yup.number().required('please enter your age'), 
   email: Yup.string().email().required('please enter your email'),
   password: Yup.string().min(6).required('please enter your password'), 
   confirm_password: Yup.string().min(6).required()
            .oneOf([Yup.ref('password'), null], 'password must match')

}) 