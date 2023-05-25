import React, { useState, useRef } from 'react'
import { AiOutlineHeart , AiFillStar} from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { GrAdd } from 'react-icons/gr'
import { AiOutlineMinus } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { addToCart } from '../../../redux/reducers/cartReducer'
import { useDispatch } from 'react-redux'

const Details = (props) => {

  const [quantity, setQuantity ] = useState(1)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const reduceQuantityRef = useRef()

  const addtoCart = async (productId) => { 

    const token = localStorage.getItem('token')

    if(token){
   
      const cartPayload = { productId , quantity }

      //auto setting header of post request 
      const config = {
        headers:{
          token: token,
        }
      };

      //updating the user cart in the datbase 
        const response = await axios.post('http://localhost:5000/cart/add', cartPayload, config)
        navigate('/cart')

    }
    else{ 
      navigate('/login')
    }

   
  }

  const reduceQuantity = () => { 
      setQuantity(prev => { 

          if(prev === 1){
            reduceQuantityRef.current.style.opacity = '0.5'
            return prev
          }
          else{ 
            reduceQuantityRef.current.style.opacity = '1'
            return prev-1
          }
      })
  }

  const increaseQuantity = () => { 
      setQuantity(prev => { 
        reduceQuantityRef.current.style.opacity = '1'
        return prev + 1 
      })
  }

  return (
    
    <div className="box">
        <h1>{props.single.name}</h1>
        <p>{props.single.short}</p>
        <div className='rating'>
          <div className='star'>
            <small>{props.single.rating} </small>
            <AiFillStar/>
          </div>
        </div>
        <h2>₹{props.single.price} </h2>
        <p>{props.single.details}</p>

        <div className='quantity'>
            <button onClick={reduceQuantity} ref={reduceQuantityRef}><AiOutlineMinus/></button>
              <p>{quantity}</p>
            <button onClick={increaseQuantity}><GrAdd/></button>
        </div>
        
        <div className='actionbtn'>
            <button
              onClick={()=>addtoCart(props.single._id)}
            >
              <BsBag/> Add To Cart
            
            </button>

            <button><AiOutlineHeart/> Add to Wishlist</button>
        </div>

        <div className='delivery'>
          <MdOutlineLocalShipping/>
          <p> Cash on delivery available</p>
        </div>
      


    </div>
  )
}

export default Details