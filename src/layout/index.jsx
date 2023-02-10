import Header from '../components/header'
import Footer from '../components/footer'
import './layout.scss'

function Layout({children}) {
   return (
      <div className='layout'>
         <Header className='header' />
            <div className='content'>
               {children}
            </div>
         <Footer className='footer' />
      </div>
   )
}

export default Layout
