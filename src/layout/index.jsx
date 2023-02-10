import Header from '../components/header'
import Footer from '../components/footer'

function Layout({children}) {
   return (
      <>
         <Header />
         <div>{children}</div>
         <Footer />
      </>
   )
}

export default Layout
