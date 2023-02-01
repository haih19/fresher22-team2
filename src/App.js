import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routeList} from './routes'
import HomeLayout from './layout/homeLayout'
import CategoryLayout from './layout/categoryLayout'
import {useEffect} from 'react'
import guestService from './services/user.service'
import PercentCircle from './components/percentCirlce'

import './App.scss'
function App() {
   useEffect(() => {
      const getMovieList = async () => {
         try {
            const res = await guestService.getMovieList('popular', {})
            console.log(res)
         } catch (e) {
            console.log(e)
         }
      }
      getMovieList()
   }, [])
   return (
      // <BrowserRouter>
      //    <Routes>
      //       {routeList.map((route, index) => {
      //          let Layout = route.layout === 'home' ? HomeLayout : CategoryLayout

      //          return (
      //             <Route
      //                key={index}
      //                path={route.path}
      //                element={
      //                   <Layout>
      //                      <route.component />
      //                   </Layout>
      //                }
      //             />
      //          )
      //       })}
      //    </Routes>
      // </BrowserRouter>
      <PercentCircle />
   )
}

export default App
