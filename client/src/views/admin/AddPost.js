import axios from 'axios'
import { useState, useRef } from 'react'
import { InputGroup, Input, Card, CardBody, Button, CardHeader, Label } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'

const AddPost = () => {
  const [title, setTitle] = useState()
  const [categoryTags, setCategoryTags] = useState()
  const [file, setFile] = useState()

  const history = useHistory()
  const editorRef = useRef(null)

  const createPost = (e) => {
    e.preventDefault()

    const jwt = localStorage.getItem("jwt")
    const formData = new FormData()

    formData.append("file", file)
    formData.append("title", title)
    formData.append("content", editorRef.current.getContent())
    formData.append("category_tags", categoryTags)

    axios.post("https://blog.berkoca.com/api/posts", formData, { headers: { authorization: `Bearer ${jwt}` } })
      .then(response => {
        history.replace("/posts")
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
            <Editor
              apiKey='5bsb4bel5tb3k2krtkkerhir0xqe36csr7ndx3pkuygfpi81'
              onInit={(evt, editor) => { editorRef.current = editor }}
              initialValue="<p>Content.</p>"
              init={{
                height: 300,
                width: "100%",
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; }'
              }}
            />
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
