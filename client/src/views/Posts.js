import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { useEffect, useState } from 'react'
import axios from "axios"

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://blog.berkoca.com/api/posts")
      .then(response => {
        if (response && response.data && response.data.data) {
          console.log(response.data.data)
          setPosts(response.data.data.map(post => {
            return (
              <Card key={post.id} style={{ padding: "15px" }}>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "50%" }}>
                    <img style={{ width: "100%", borderRadius: "7px" }} src={`https://blog.berkoca.com/public/${post.image_path}`}></img>
                  </div>
                  <div style={{ width: "50%" }}>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <CardText>{post.content}</CardText>
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
          }))
        }
      }).catch(error => console.log(error))
  }, [])
  return (
    <div>
      {posts}
    </div>
  )
}

export default Posts
