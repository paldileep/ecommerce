import './banner.scss'
import { useEffect , useState } from 'react'

const images = [ 
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif',
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg',

]

const Banner = () => {

  const [number, setNumber] = useState(0)


  return (
    
      <div className='banner'>

        <img src={images[number]} alt="banner" />

      </div>
  )
}

export default Banner