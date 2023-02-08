import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routeList} from './routes'
import Layout from './layout'
import {useEffect} from 'react'

function App() {
   const o = {
      get: () => {
         console.log(this)
      },
   }
   useEffect(() => {
      o.get()
   }, [])
   return (
      <BrowserRouter>
         <Routes>
            {routeList.map((route, index) => {
               return (
                  <Route
                     key={index}
                     path={route.path}
                     element={
                        <Layout>
                           <route.component />
                        </Layout>
                     }
                  />
               )
            })}
         </Routes>
      </BrowserRouter>
   )
}

export default App
