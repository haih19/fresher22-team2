import HomePage from '../pages/homePage'
import Catalog from '../pages/catalog'
import MediaDetail from '../pages/mediaDetail'
import PersonDetail from '../pages/personDetail'

export const routeList = [
   {path: '/', component: HomePage, layout: 'home'},
   {path: '/:category', component: Catalog},
   {path: '/:category/:id', component: MediaDetail},
   {path: '/person/:id', component: PersonDetail, layout: 'home'},
]
