import HomePage from '../pages/homePage'
import MovieDetail from '../pages/movieDetail'
import PersonDetail from '../pages/personDetail'
import Search from '../pages/search'

export const routeList = [
   {path: '/', component: HomePage},
   {path: '/search/:type/:keyword', component: Search},
   {path: '/:category/:id', component: MovieDetail},
   {path: '/person/:id', component: PersonDetail},
]
