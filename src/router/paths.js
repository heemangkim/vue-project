import Layout from '@/layouts/index'

const paths = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('@/views/home/index')
      },
    ]
  },
  {
    path: '/my-page',
    component: Layout,
    children: [
      {
        name: 'MyPageView',
        path: '/',
        component: () => import('@/views/myPage/view')
      },
    ]
  },
]

export default paths;