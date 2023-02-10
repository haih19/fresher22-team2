import Header from '../components/header'
import Footer from '../components/footer'
//import SliderHeader from '../components/sliderHeader'

function Layout({children}) {
   return (
      <div>
         <Header />
         <div>{children}</div>
         <Footer />
      </div>
   )
}

export default Layout
