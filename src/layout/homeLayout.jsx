import Header from '../components/header'
import Footer from '../components/footer'

function HomeLayout({children}) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}

export default HomeLayout
