import { useEffect, useState } from 'react'
import './cart.scss'
import axios from 'axios'
import { RxCross2 } from 'react-icons/rx'


const Cart = () => {

  const [ islogged , setIsLogged ] = useState(false)
  const [ itemRemoved, setItemRemoved ] = useState(0)
  
  useEffect(()=>{

    const getTokenFromLocalStorage = localStorage.getItem('token')
    if(getTokenFromLocalStorage) setIsLogged(true)

  },[])

  const [cartItem , setCartItem] = useState()

  const token = localStorage.getItem('token')

  const [totalPrice, setTotalPrice] = useState(true)

//auto setting header of post request 
const config = {
  headers:{
    token: token,
  }
};


  useEffect(()=>{

      const getCartItem = async () => { 

          const response = await axios.get('http://localhost:5000/cart/items', config)
          
          console.log(response.data)

          const newArray = response.data.map(data=> { 
              return ( 
                  data.cart.map(data=> {
                    return (
                       data
                    )
                  })
              )
          })

          const oneItemTotalPrice = newArray[0].map(data=>data.item.price * data.quantity)
          
      
          const  calculateTotalPriceAllItem = oneItemTotalPrice.reduce((sum, data) => {
          return sum + data
          }, 0)

          setTotalPrice(calculateTotalPriceAllItem)
          setCartItem(newArray[0])
        }

      getCartItem()
      
  }, [itemRemoved])


  const removeItemFromCart = async (id) => { 

    //  console.log( `ltem is selected to be removed from the cart ${id}`)

    try {

      const response = await axios.delete(`http://localhost:5000/cart/remove?productId=${id}`, config)
        console.log(response)
        setItemRemoved(!itemRemoved)

    } catch (error) {
       console.log(error)
    }

  } 

  return (
      <>
          <p id='cartheading'>Cart</p>
         
          {cartItem && cartItem.length > 0 ? 

            <div className='cart'>
              <div className='cart_products'>

              {
                cartItem.map(data=>{
                  return ( 
                      <div className='product' key={data._id}>

                       
                        
                        <div className='cart_card'>
                          <img src={data.item.cover} alt="cover" />

                          <div className='item_details'>
                            <p>{data.item.name} </p>
                            <div className='price_quantity'>
                              <p>₹{data.item.price}</p>
                              <p><RxCross2/></p>
                              <p>{data.quantity}</p>
                              <p>₹{data.item.price * data.quantity}</p>
                            </div>

                            <button onClick={()=>removeItemFromCart(data._id)}>Remove item</button>

                          </div>
                        </div>

                        

                        {/*  */}

                      
                      
                      </div>

                      
                  )
                })
              }

              </div>

              <div className='billing'>

                  <div className='breakup'>

                    <div className='label'>
            
                      <p>Total Price</p>
                      <p>Discount</p>
                      <p>Taxes</p>
                      <h3>Payable Amount</h3>
                    </div>

                    <div className='amount'>
               
                      <p>₹ {totalPrice}</p>
                      <div className='tax'> <p id='gst'>Flat : 10%</p> <p>₹ {(totalPrice * 10 /100).toFixed()}</p></div>
                      <div className='tax'> <p id='gst'>GST : 18%</p> <p>₹ {totalPrice * 18/100}</p></div>
                        
                      <h3>₹ {(totalPrice - ((totalPrice * 10 /100).toFixed()) + (totalPrice * 18/100)).toFixed(2)}</h3>
                    </div>

                  </div>

                  <div className='action'>
                      <button>Checkout</button>
                  </div>

              </div>

            </div>
          
           : islogged ? <h2 id='emptyCartMessage'>No item in the cart yet... Shop now</h2>
           : <h2 id='emptyCartMessage'>Please login to see your cart</h2> 
          }

      </>
  )
  
}

export default Cart