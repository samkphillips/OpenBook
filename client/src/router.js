import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/posts', component: Posts, name: 'Posts' },
  { path: '/about', component: About, name: 'About' }
]

export default new VueRouter({ routes, mode: 'history' })
