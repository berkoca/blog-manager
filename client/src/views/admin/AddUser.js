import axios from '../../utility/axios'
import { useState, useRef } from 'react'
import { InputGroup, Input, Card, CardBody, Button, CardHeader, Label } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'

const AddUser = () => {
  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  // const [title, setTitle] = useState()
  // const [categoryTags, setCategoryTags] = useState()
  // const [file, setFile] = useState()
  // const [summary, setSummary] = useState()

  const history = useHistory()
  // const editorRef = useRef(null)

  // const createPost = (e) => {
  //   e.preventDefault()

  //   const jwt = localStorage.getItem("jwt")
  //   const formData = new FormData()

  //   formData.append("file", file)
  //   formData.append("title", title)
  //   formData.append("summary", summary)
  //   formData.append("content", editorRef.current.getContent())
  //   formData.append("category_tags", categoryTags)

  //   axios.post("/api/posts", formData, { headers: { authorization: `Bearer ${jwt}` } })
  //     .then(response => {
  //       history.replace("/admin/posts")
  //     }).catch(error => {
  //       console.log(error.response)
  //     })
  // }
  // const selectFileEvent = (e) => {
  //   setFile(e.target.files[0])
  // }

  const createUser = (e) => {
    e.preventDefault()

    const jwt = localStorage.getItem("jwt")
    const body = { fullname, email, password }

    axios.post("/api/users", body, { headers: { authorization: `Bearer ${jwt}` } })
      .then(response => {
        history.replace("/admin/users")
      }).catch(error => {
        console.log(error.response)
      })

  }

  return (
    <div>
      <Card>
        <CardHeader>
          <h2>Add User</h2>
        </CardHeader>
        <CardBody>
          <InputGroup className='mb-2'>
            <Input onChange={e => setFullname(e.target.value)} placeholder='Full Name' />
          </InputGroup>
          <InputGroup className='mb-2'>
            <Input onChange={e => setEmail(e.target.value)} placeholder="E-Mail" />
          </InputGroup>
          <InputGroup className='mb-2'>
            <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
          </InputGroup>
          <Button.Ripple onClick={createUser} tag={Link} color='primary' block>
            Add a New User
          </Button.Ripple>
        </CardBody>
      </Card>
    </div>
  )
}

export default AddUser
