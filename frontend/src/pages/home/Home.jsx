import Notice from "../../components/home_page/notice_board/notice"
import Banner from "../../components/home_page/banner/Banner"
import Section1  from "../../components/home_page/section1/Section1"
import { Outlet, Navigate } from "react-router-dom"

const Home = () => {

  const user = localStorage.getItem('user')

  return (

    <div>   
            <Notice/>
            <Banner/>
            <Section1/>

            { user ? <Navigate to={'/'}/> : <Outlet/>}
    </div>
  )
}

export default Home