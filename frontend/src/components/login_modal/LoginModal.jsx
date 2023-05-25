import { NavLink, useNavigate } from 'react-router-dom'
import './loginmodal.scss'
import { useEffect, useRef, useState } from 'react'

import { useFormik } from 'formik'
import axios from 'axios'
import { LoginSchema } from './LoginSchema'
import { signup } from '../../redux/reducers/signupReducer'
import { useDispatch } from 'react-redux'

const LoginModal = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userFound, setUserFound] = useState('')

  const initialValues = { 
      email: '', 
      password: '',
  }

  //formik logic 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({ 
      initialValues: initialValues, 
      validationSchema: LoginSchema,
      onSubmit: (values, action)=> { 

        axios.post('http://localhost:5000/login', values)
        .then((response)=>{
          if(response.status == 200){
            dispatch(signup(response.data))
            navigate('/')
          }
        })
        .catch(()=>{
          setUserFound('Invalid Email & Password')
          action.resetForm()
        })
        
      }
  })

  const modalRef = useRef()

  useEffect(()=>{

    modalRef.current.style.display = 'block'

  },[])

  return (

    <div className='modal' ref={modalRef}>

      <div className='modal_content'>

        <div className='modal_header'>
            <h2>Login</h2>
            <h3>{userFound}</h3>
            <NavLink id='close' to='/'>&times;</NavLink>
        </div>

        <form className='modal_body' onSubmit={handleSubmit}>

          <div className='fieldgroup'>
              <label>Email</label>
              <input 
                type='text'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? 
                  <p>{errors.email}</p> : null}
          </div>

          <div className='fieldgroup'>
              <label>Password</label>
              <input 
                type='text'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? 
                  <p>{errors.password}</p> : null}
          </div>

          <button type='submit'>
              Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default LoginModal