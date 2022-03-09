import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { useEffect, useState } from 'react'
import axios from "axios"
import { Trash2 } from "react-feather"
import Swal from "sweetalert2"

const Posts = () => {
  const [posts, setPosts] = useState([])

  const jwt = localStorage.getItem("jwt")

  const deletePost = (post) => {
    const swal = Swal.mixin({
      customClass: {
        cancelButton: 'mr-1'
      }
    })

    swal.fire({
      title: "Are You Sure?",
      html: `Post with title <b>"${post.title}"</b> is gonna be deleted.`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://blog.berkoca.com/api/posts/${post.id}`, { headers: { authorization: `Bearer ${jwt}` } })
          .then(response => {
            swal.fire(
              'Deleted!',
              `Post with title <b>"${post.title}"</b> has been deleted.`,
              'success'
            )
            setPosts(posts.filter(x => x.id !== post.id))
          }).catch(error => {
            console.log(error.response)
          })
      }
    })
  }

  useEffect(() => {
    axios.get("https://blog.berkoca.com/api/posts")
      .then(response => {
        if (response && response.data && response.data.data) {
          setPosts(response.data.data)
        }
      }).catch(error => console.log(error))
  }, [])
  return (
    <div>
      {posts.map(post => {
        return (
          <Card key={post.id} style={{ padding: "15px" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "20%" }}>
                <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                  <img style={{ width: "100%", borderRadius: "7px" }} src={`https://blog.berkoca.com/public/${post.image_path}`}></img>
                </div>
              </div>
              <div style={{ width: "80%" }}>
                <span onClick={() => deletePost(post)} className='float-md-right d-none d-md-block' style={{ cursor: "pointer" }}>
                  <Trash2 color='#ff6666' size={20} />
                </span>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardBody>
                  <CardText dangerouslySetInnerHTML={{ __html: post.content }}></CardText>
                  <CardText>
                    {post.category_tags.length ? post.category_tags.map(category_tag => {
                      return (
                        <CardLink key={category_tag} href='' target='_blank'>
                          {category_tag}
                        </CardLink>
                      )
                    }) : ""}
                  </CardText>
                </CardBody>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default Posts
