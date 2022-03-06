import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'posts',
    title: 'Posts',
    icon: <Home size={20} />,
    navLink: '/posts'
  },
  {
    id: 'addPost',
    title: 'Add Post',
    icon: <Mail size={20} />,
    navLink: '/add-post'
  }
]
