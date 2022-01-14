import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Blog from '../views/Blog.vue'
import Account from '../views/Account.vue'
import Contact from '../views/Contact.vue'
import JustProduct from '../views/JustProduct.vue'
import JustBlog from '../views/JustBlog.vue'

import Cart from '../views/Cart.vue'

import CreateAccount from '../views/CreateAccount.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'JustBlog',
    component: JustBlog,
    props: true ,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/create-account',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/products/:id',
    name: 'JustProduct',
    component: JustProduct,
    props: true ,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
