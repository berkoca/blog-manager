import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/posts'

// ** Merge Routes
const Routes = [
  {
    path: '/admin/posts',
    component: lazy(() => import('../../views/admin/Posts'))
  },
  {
    path: '/admin/add-post',
    component: lazy(() => import('../../views/admin/AddPost'))
  },
  {
    path: '/admin/users',
    component: lazy(() => import('../../views/admin/Users'))
  },
  {
    path: '/admin/add-user',
    component: lazy(() => import('../../views/admin/AddUser'))
  },
  {
    path: '/posts/:id',
    component: lazy(() => import('../../views/Post')),
    layout: 'BlankLayout'
  },
  {
    path: '/posts',
    component: lazy(() => import('../../views/Posts')),
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
