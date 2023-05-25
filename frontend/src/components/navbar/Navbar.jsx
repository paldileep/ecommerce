import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'

import profilePlaceholder from '../../assets/profilePlaceholder.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { signupState, logout } from '../../redux/reducers/signupReducer'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const token = localStorage.getItem('token') 
    

    const state = useSelector(signupState)

    const logoutHandler = () => { 

        dispatch(logout())
        navigate('/')
    }


    return ( 
        
        <div className='navbar'>

            {/* part 1 // logo section  */}
            <div>
                <NavLink id='logo' to='/'><h3>Kaviras</h3></NavLink>
            </div>

            {/* part 2 // menu section  */}
            <div className="menu">
                <NavLink to='/category/men'>Men</NavLink>
                <NavLink to='/category/women'>Women</NavLink>
                <NavLink to='/category/kids'>Kids</NavLink>
            </div>

            {/* part 3 // search box section  */}
            <div className="search">
                <div className='inputbox'>
                  <AiOutlineSearch/>
                  <input 
                      type='text'
                      placeholder='Search for clothing...'
                  />
                </div>
            </div> 

            {/* part 4 // top right corner three buttons  */}
            <div className="cartbar">
              
                {/* login button and profile image as per login status  */}
              <div className="login">
                { token && token ?  
                  <div className='profile'>
                      <p>{state.name}</p>
                      <img src={profilePlaceholder} alt="profileImg" />
                      <button 
                        onClick={logoutHandler}>
                        Logout
                      </button>
                  </div> :
                  <div>

                      <NavLink 
                          id='btnlogin'
                          to='/login'
                      > Login 
                      </NavLink>

                      <NavLink 
                          id='btnsignup' 
                          to='/signup' 
                      > Sign up 
                      </NavLink>

                  </div>
                }
              </div>

               {/* // wishlist button  */}
               <button className="wishlist" >
                 <AiOutlineHeart/>
               </button>
              
               {/* // cart or bag button */}
               <button className="bag" onClick={()=>navigate('/cart')}> 
                  <BsBag/>
               </button>


            </div>

        </div>
    )

}

export default Navbar 