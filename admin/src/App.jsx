import './app.scss'
import { useFormik } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import { formValidation } from './util/formValidation'

function App() {

  const [cloudinaryResponse , setCloudinaryResponse ] = useState('')
  const [image, setImage] = useState()

  const initialValues = { 
     name: '', 
     cover: {}, 
    //  images: {}, 
     price: '', 
     short: '', 
     details: '', 
     category: '', 
     rating: 0,
     color: '',
    //  size: '',
    //  review: 0,
     stock: 1,
  }

  const coverFileImage = (e) => { 
    setFieldValue('cover', e.target.files[0])
    
    // this url.createObjectURL method creates the file to url which can be 
    // directly put in the img tag 
    setImage(URL.createObjectURL(e.target.files[0]))

    console.log(e.target.files[0])
  }

  

  const { values, 
          errors,
          touched, 
          handleBlur, 
          handleSubmit,
          handleChange, 
          setFieldValue } = useFormik({

            initialValues, 
            validationSchema: formValidation,
            onSubmit : (values, {resetForm})=> { 
                console.log(values)
                setCloudinaryResponse('')

                // logic for sending image to cloudinary 
                const formData = new FormData()
                formData.append('file', values.cover)
                formData.append('upload_preset', 'ecommerce')

                // for saving the image to the cloudinary 
                // and getting back the url 
                axios.post('https://api.cloudinary.com/v1_1/dtbvnimau/image/upload', formData)
                .then((res)=>{
                  console.log(res.data)
                  setCloudinaryResponse(res.data)
                  
                 // for sending the data to our api with data 
                  axios.post('http://localhost:5000/admin/product', 
                    { 
                      name: values.name, 
                      cover: res.data.url, 
                      //images: values.data.name, 
                      price: values.price, 
                      short: values.short, 
                      details: values.details, 
                      category: values.category, 
                      color: values.color, 
                      stock: values.stock
                      

                    }
                  )
                  .then((res)=>{

                      setImage(' ')
                      resetForm({values: ''}, {cover: ''})

                      console.log(res)
                  })
                  .catch(err=>console.log(err))

                })
                .catch(err=>console.log(err))

                setImage(' ')
                resetForm({values: ''}, {cover: ''})
                
            }

            
  })

  return (
    <>
        <h1 id='heading'>Kaviras Admin Dashboard </h1>
        <div className='form'>
           


           

            <form className="input_form" onSubmit={handleSubmit}>

              <div className='input_group'>
                <label>Product name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? 
                  <p>{errors.name}</p> : null}
              </div>

              <div className='input_group'>
                <label>Cover image</label>
                <input
                  type="file"
                  name="cover"
                  onBlur={handleBlur}
                  onChange={coverFileImage}
                  
                />
                {errors.cover && touched.cover ? 
                  <p>{errors.cover}</p> : null}
              </div>

              {/* <div className='input_group'>
                <label>Product images</label>
                <input
                  type="file"
                  name="images"
                  onBlur={handleBlur}
                  onChange={(e)=>{
                    setFieldValue('images', e.target.files[0])
                  }}
                  
                />
              </div> */}

              <div className='input_group'>
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.price && touched.price ? 
                  <p>{errors.price}</p> : null}
              </div>

              <div className='input_group'>
                <label>Short description</label>
                <input
                  type="text"
                  name="short"
                  value={values.short}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.short && touched.short ? 
                  <p>{errors.short}</p> : null}
              </div>

              <div className='input_group'>
                <label>Full details</label>
                <input
                  type="text"
                  name="details"
                  value={values.details}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.details && touched.details ? 
                  <p>{errors.details}</p> : null}
              </div>

              <div className='input_group'>
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.category && touched.category ? 
                  <p>{errors.category}</p> : null}
              </div>

              <div className='input_group'>
                <label>Color</label>
                <input
                  type="text"
                  name="color"
                  value={values.color}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.color && touched.color ? 
                  <p>{errors.color}</p> : null}
              </div>

              <div className='input_group'>
                <label>Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={values.stock}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.stock && touched.stock ? 
                  <p>{errors.stock}</p> : null}
              </div>
           
              <button type='submit'>
                  Add Product
              </button>


            </form>

            <div className='image_section'>

                {cloudinaryResponse && 
                  <img src={cloudinaryResponse.url} 
                      alt={cloudinaryResponse.asset_id}
                      id='image'
                  /> 
                }

                {image && 
                  <img src={image} 
                      alt={image.name}
                      id='image'
                  /> 
                } 

            </div>

        </div>
    </>
  )
}

export default App




