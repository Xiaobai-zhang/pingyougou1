// 引入一级路由
const Home = () => import('@/pages/Home')
const Search = () => import('@/pages/Search')
const Detail = () => import('@/pages/Detail')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const ShopCart = () => import('@/pages/ShopCart')
const AddCartSuccess = () => import('@/pages/AddCartSuccess')
const Trade = () => ('@/pages/Trade');
const Pay = () => ('@/pages/Pay');
const PaySuccess = () => import('@/pages/PaySuccess')
const Center = () => import('@/pages/Center')

// 引入二级路由
import groupOrder from '@/pages/Center/groupOrder'
import myOrder from '@/pages/Center/myOrder'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    name: 'search'
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  {
    path: '/detail/:skuid?',
    component: Detail,
    meta: { show: true },
    name: 'detail'
  },
  {
    path: '/addCartSuccess',
    component: AddCartSuccess,
    meta: { show: true },
    name: 'addCartSuccess'
  },
  {
    path: '/cart',
    component: ShopCart,
    meta: { show: true },
    name: 'cart'
  },
  {
    path: '/trade',
    component: Trade,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/cart') {
        console.log(2);
        next()
      } else {
        console.log(123);
        next(false)
      }
    }
  }, {
    path: '/pay',
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next()
      } else {
        next(from.path)
      }
    }
  }, {
    path: '/paysuccess',
    component: PaySuccess,
    meta: { show: true }
  }, {
    path: '/center',
    component: Center,
    meta: { show: true },
    children: [
      {
        path: '/center',
        redirect: '/center/myOrder'
      },
      {
        path: 'myOrder',
        component: myOrder
      }, {
        path: 'groupOrder',
        component: groupOrder
      }
    ]
  }
]