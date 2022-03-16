import { Users, Archive, UserPlus, FilePlus } from 'react-feather'

export default [
  {
    id: 'posts',
    title: 'Posts',
    icon: <Archive size={20} />,
    navLink: '/admin/posts'
  },
  {
    id: 'addPost',
    title: 'Add Post',
    icon: <FilePlus size={20} />,
    navLink: '/admin/add-post'
  },
  {
    id: 'users',
    title: 'Users',
    icon: <Users size={20} />,
    navLink: '/admin/users'
  },
  {
    id: 'addUser',
    title: 'Add User',
    icon: <UserPlus size={20} />,
    navLink: '/admin/add-user'
  }
]
