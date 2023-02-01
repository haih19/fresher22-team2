import Header from '../components/header'
import Footer from '../components/footer'
function CategoryLayout({children}) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}

export default CategoryLayout
