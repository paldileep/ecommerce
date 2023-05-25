import { useEffect, useState } from "react"
import { useParams , Outlet} from "react-router-dom"
import axios from 'axios'

import './product.scss'
import Product_images from "../../components/product_page/image_section/Product_images"
import Details from "../../components/product_page/details_section/details"
const Product = () => { 

    const { productId } = useParams()

    const [ single, setSingleProduct ] = useState()


    const getSingleProduct = async () => { 

        //const url = `http://localhost:5000/products/product/?productId=${productId}`

        try {
            const response = await axios.get(`http://localhost:5000/products/product/?productId=${productId}`)
            console.log(response)
            setSingleProduct(response.data)
        } catch (error) {
            console.log(error)
        }

        
    }

    useEffect(()=>{

        getSingleProduct()

        

    },[])


    return (
            <>
            
            {single && 
              <div className="singleProductPage">

                <div className="image_section">
                  <Product_images single={single}/>
                </div>

                <div className="details_section">
                  <Details single={single}/>
                </div>
                
              </div>
            }
            <Outlet/>
            
            </>
    )
}

export default Product