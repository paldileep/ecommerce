import './signupModal.scss'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import { useFormik } from 'formik'
import { SignupSchema } from './SignupSchema'

import { useDispatch } from 'react-redux'
import { signup } from '../../redux/reducers/signupReducer'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const SignupModal = () => { 

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //logic for formik form
  const initialValues = { 
     name: '', 
     age: '',
     email: '',
     password: '',
     confirm_password: ''
  }

  const { values , errors, touched,  handleBlur, handleChange, handleSubmit} = useFormik({ 
      initialValues: initialValues, 
      validationSchema: SignupSchema,
      onSubmit : async (values, action)=> { 
        
        // submiting the form data to the api 
        const res = await axios.post('http://localhost:5000/signup', values)
        
        if(res.status === 201){
          dispatch(signup(res.data))
          console.log(res.data.token)
          navigate('/')
          
        }else{ 
          console.log(res)
        }
        

        action.resetForm()
      }
  })


  // logic for showing the model when signup button clicked 
  const modalRef = useRef()
  useEffect(()=>{ 

    modalRef.current.style.display = 'block'

  }, [])
  
  return( 

      <div className="modal" ref={modalRef}>
          <div className="modal_content">

            <div className="modal_header">
                <h2>Create a new account</h2>
                <NavLink id="close" to='/'>&times;</NavLink>
            </div>

            <form className="modal_body" onSubmit={handleSubmit}>

                <div className='fieldgroup'>
                  <label>Name </label>
                  <input
                      type='text'
                      name='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                  />
                  {errors.name && touched.name ? 
                  <p>{errors.name}</p> : null}
                </div>

                <div className='fieldgroup'>
                  <label>Age </label>
                  <input
                      type='text'
                      name='age'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.age}
                  />
                  {errors.age && touched.age ? 
                  <p>{errors.age}</p> : null}
                </div>

                <div className='fieldgroup'>
                  <label>Email </label>
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
                  <label>Password </label>
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

                <div className='fieldgroup'>
                  <label>Confirm Password </label>
                  <input
                      type='text'
                      name='confirm_password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirm_password}
                  />
                  {errors.confirm_password && touched.confirm_password ? 
                  <p>{errors.confirm_password}</p> : null}
                </div>

                <button type='submit'>Sign Up</button>

            </form>

            
          </div>
      </div>
  )

}

export default SignupModal