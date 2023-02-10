import React from 'react'
import ReactDOM from 'react-dom/client'
import {SkeletonTheme} from 'react-loading-skeleton'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   //  <React.StrictMode>
   //  </React.StrictMode>
   <SkeletonTheme>
      <App />
   </SkeletonTheme>
)
