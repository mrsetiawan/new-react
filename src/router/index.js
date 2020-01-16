import Home from '../pages/home/index'
import Catalog from '../pages/catalog/index'
import Talent from '../pages/talent/index'

const MainRouter = [
  { title:'Home Page', path:'/', component:Home },
  { title:'Catalog Page', path:'/catalog', component:Catalog },
  { title:'Talent Page', path:'/talent', component:Talent }
]

export default MainRouter
