import Header from '../components/header'
import Footer from '../components/footer'
//import SliderHeader from '../components/sliderHeader'


function Layout({children}) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}

export default Layout
