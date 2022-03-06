import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/blog'

// ** Merge Routes
const Routes = [
  {
    path: '/posts',
    component: lazy(() => import('../../views/Posts'))
  },
  {
    path: '/add-post',
    component: lazy(() => import('../../views/AddPost'))
  },
  {
    path: '/blog',
    component: lazy(() => import('../../views/Blog')),
    layout: 'BlankLayout'
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
