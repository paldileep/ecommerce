import React from 'react'

const Product_images = (props) => {


  return (

      <img src={props.single.cover} alt={props.single.name}/>
  )
}

export default Product_images