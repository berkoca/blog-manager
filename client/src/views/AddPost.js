import axios from 'axios'
import { useState } from 'react'
import { InputGroup, InputGroupText, Input, Card, CardBody, Button, CardHeader, Label } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'

const AddPost = () => {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [categoryTags, setCategoryTags] = useState()
  const [file, setFile] = useState()

  const createPost = (e) => {
    e.preventDefault()
    
    const jwt = localStorage.getItem("jwt")
    const formData = new FormData()
    
    formData.append("file", file)
    formData.append("title", title)
    formData.append("content", content)
    formData.append("category_tags", categoryTags)

    axios.post("https://blog.berkoca.com/api/posts", formData, { headers: { authorization: `Bearer ${jwt}` } })
      .then(response => {
        useHistory().go("/posts")
      }).catch(error => {
        console.log(error.response)
      })
  }
  const selectFileEvent = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <h2>Add Post</h2>
        </CardHeader>
        <CardBody>
          <InputGroup className='mb-2'>
            <Input onChange={e => setTitle(e.target.value)} placeholder='Title' />
          </InputGroup>
          <InputGroup className='mb-2'>
            <InputGroupText>Content</InputGroupText>
            <Input onChange={e => setContent(e.target.value)} type='textarea' />
          </InputGroup>
          <InputGroup className='mb-2'>
            <Input onChange={e => setCategoryTags(e.target.value)} placeholder='Category Tags (use spaces to seperate tags)' />
          </InputGroup>
          <InputGroup className='mb-2'>
            <Label>Image</Label>
            <Input onChange={selectFileEvent} name="file" type='file' />
          </InputGroup>
          <Button.Ripple onClick={createPost} tag={Link} color='primary' block>
            Add a New Post
          </Button.Ripple>
        </CardBody>
      </Card>
    </div>
  )
}

export default AddPost
