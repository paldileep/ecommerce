import './App.scss'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import SignupModal from './components/signup_modal/SignupModal'
import LoginModal from './components/login_modal/LoginModal'
import Product from './pages/product/Product'
import CategoryPage from './pages/category/CategoryPage'
import Cart from './pages/cart/Cart'

function App() {


  

   


  return (
    <>
        

        {/* top navbar which will be always there in all pages  */}
        <Navbar/>



        {/* here we are rendering the pages as per url routes  */}
        <div className='hero'>
          <Routes>
              <Route path='/' element={<Home/>}>
                <Route path='/signup' element={<SignupModal/>}/> 
                <Route path='/login' element={<LoginModal/>} />
              </Route>

              <Route path='/category/:cat' element={<CategoryPage/>} />
              <Route path='/product/:productId' element={<Product/>}/>
              <Route path='/cart' element={<Cart/>}/>

          </Routes>
        </div>



        {/* bottom footer which will be always there in all pages */}
        <Footer/>
        
    </>
  )
}

export default App
