import './section1.scss'

import Card1 from '../../../small_components/card1/Card1'

import axios from 'axios'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Section1 = () => {

  const [ data, setData ] = useState()
  const navigate = useNavigate()

  

  useEffect(()=>{

    const getallproduct = async () => { 
      const response = await axios.get('http://localhost:5000/products/all')
      console.log(response)
      if(response){
        setData(response.data)
      }
      else{ 
        console.log('something went wrong while fetching all the products')
      }
    }

    getallproduct()

  }, [] )


  const goToProduct = (productId) => { 

      if(productId){
        navigate(`/product/${productId}`)
       
      }
  }

  return (

      <div className='section1'>

            <div className='heading'>
              <h2> Best of Kaviras Collection</h2>
            </div>


            <div className='card_section'>
                { data ? data.map(value=>{ 
                  
                   return <div onClick={()=>goToProduct(value._id)}
                                className='productCard'
                                key={value._id}
                          >

                                <Card1 
                                  value={value}
                                />

                          </div>
                         
                }): <h2>No Product Found</h2>
                }
						</div>

      </div>
  )
}

export default Section1
