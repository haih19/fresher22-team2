import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routeList} from './routes'
import Layout from './layout'
import HomePage from './pages/homePage'

function App() {
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
                           {/* <route.component /> */}
                           <HomePage/>
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
