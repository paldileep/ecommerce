import React from 'react'
import './categoryPage.scss'
import Card1 from '../../small_components/card1/Card1'

import axios from 'axios'
import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'



const categorypage = () => {

  const [ data, setData ] = useState()
  const navigate = useNavigate()

  const { cat } = useParams()

  useEffect(()=>{

    const getallproduct = async () => { 
      const response = await axios.get(`http://localhost:5000/products/category?cat=${cat}`)
      console.log(response)
      if(response){
        setData(response.data)
      }
      else{ 
        console.log('something went wrong while fetching all the products')
      }
    }

    getallproduct()

  }, [cat] )


  const goToProduct = (productId) => { 

    if(productId){
      navigate(`/product/${productId}`)
     
    }
}


  return (
    <div className='category'>

            <h1>{cat}</h1>

            <div className='cat_section1'>

                <div className='heading'>
                  <h2> Best outfit available in {cat} category</h2>
                </div>

                <div className='cat_container'>

                  <div className='filter_section'>

                    <p>Filter</p>

                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>

                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>

                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>

                  </div>

                  <div className='cat_card_section'>
                    { data ? data.map(value=>{ 
                      
                      return <div onClick={()=>goToProduct(value._id)}
                                    className='cat_productCard'
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
                 

            </div>

            
    </div>
  )
}

export default categorypage