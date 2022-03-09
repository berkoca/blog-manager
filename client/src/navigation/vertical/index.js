import { Mail, Home, User } from 'react-feather'

export default [
  {
    id: 'posts',
    title: 'Posts',
    icon: <Home size={20} />,
    navLink: '/admin/posts'
  },
  {
    id: 'addPost',
    title: 'Add Post',
    icon: <Mail size={20} />,
    navLink: '/admin/add-post'
  },
  {
    id: 'users',
    title: 'Users',
    icon: <User size={20} />,
    navLink: '/admin/users'
  }
]
