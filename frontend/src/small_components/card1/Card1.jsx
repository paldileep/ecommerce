import './card1.scss'
import productPlaceholder from '../../assets/productPlaceholder.jpg'

const Card1 = (value) => {
  if(value){
    return (

      <div className='card'>
  
        <div className="image">
            <img src={value.value.cover} alt="productImage" />
        </div>
        <div className="product_details">
            <span>{value.value.name}</span>
            <br/>
            <span>{value.value.price}</span>
        </div>
        
  
      </div>
    )
  }
  else{ 
    return (
      <h1>No Data Found</h1>
    )
  }
  
}

export default Card1